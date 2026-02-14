const heritageLocations = [
  {
    id: 'keraton',
    name: 'Keraton Yogyakarta',
    x: 110,
    y: 155,
    htm: 'Rp15.000',
    hours: '08.00-14.00',
    story: 'Istana Kesultanan Ngayogyakarta Hadiningrat, pusat budaya Jawa yang hidup hingga kini.',
    philosophy: 'Hamemayu Hayuning Bawana: pemimpin menjaga harmoni dunia.',
    quiz: {
      q: 'Bangunan utama Keraton disebut?',
      options: ['Sitihinggil', 'Bangsal Kencono', 'Bale Kambang', 'Pendopo Agung'],
      answer: 'Bangsal Kencono'
    }
  },
  {
    id: 'tamansari',
    name: 'Taman Sari',
    x: 80,
    y: 225,
    htm: 'Rp10.000',
    hours: '09.00-15.00',
    story: 'Bekas taman kerajaan dengan kolam pemandian dan lorong bawah tanah yang ikonik.',
    philosophy: 'Ruang kontemplasi, keseimbangan jasmani dan rohani.',
    quiz: {
      q: 'Taman Sari dulu digunakan sebagai?',
      options: ['Pasar rakyat', 'Benteng perang', 'Taman & pemandian kerajaan', 'Pelabuhan'],
      answer: 'Taman & pemandian kerajaan'
    }
  },
  {
    id: 'prambanan',
    name: 'Candi Prambanan',
    x: 405,
    y: 130,
    htm: 'Rp50.000',
    hours: '06.30-17.00',
    story: 'Kompleks candi Hindu terbesar di Indonesia, mahakarya abad ke-9.',
    philosophy: 'Keteguhan spiritual dan toleransi antar peradaban.',
    quiz: {
      q: 'Prambanan dipersembahkan untuk Trimurti. Siapa yang termasuk?',
      options: ['Brahma, Wisnu, Siwa', 'Zeus, Hera, Apollo', 'Ra, Osiris, Horus', 'Anu, Enlil, Ea'],
      answer: 'Brahma, Wisnu, Siwa'
    }
  },
  {
    id: 'ratuboko',
    name: 'Candi Ratu Boko',
    x: 470,
    y: 200,
    htm: 'Rp40.000',
    hours: '06.00-17.00',
    story: 'Situs arkeologi berupa kompleks keraton kuno di atas bukit dengan panorama senja.',
    philosophy: 'Warisan arsitektur dan strategi ruang masa lampau.',
    quiz: {
      q: 'Ciri unik Ratu Boko adalah?',
      options: ['Kompleks istana di perbukitan', 'Candi bawah laut', 'Museum batik', 'Pasar tradisional'],
      answer: 'Kompleks istana di perbukitan'
    }
  },
  {
    id: 'vredeburg',
    name: 'Benteng Vredeburg',
    x: 220,
    y: 165,
    htm: 'Rp5.000',
    hours: '08.00-16.00',
    story: 'Benteng kolonial yang kini menjadi museum perjuangan nasional.',
    philosophy: 'Semangat persatuan dan cinta tanah air.',
    quiz: {
      q: 'Benteng Vredeburg saat ini berfungsi sebagai?',
      options: ['Pusat perbelanjaan', 'Museum perjuangan', 'Bandara', 'Terminal'],
      answer: 'Museum perjuangan'
    }
  },
  {
    id: 'sonobudoyo',
    name: 'Museum Sonobudoyo',
    x: 165,
    y: 230,
    htm: 'Rp10.000',
    hours: '08.00-21.00',
    story: 'Museum budaya Jawa dengan koleksi wayang, keris, batik, dan artefak Nusantara.',
    philosophy: 'Pelestarian pengetahuan lintas generasi.',
    quiz: {
      q: 'Museum Sonobudoyo dikenal kuat pada koleksi?',
      options: ['Mesin industri', 'Wayang dan keris', 'Satwa liar', 'Astronomi'],
      answer: 'Wayang dan keris'
    }
  }
];

const state = {
  playerName: 'Player DIY',
  mode: 'single',
  xp: 0,
  completed: new Set(),
  badges: new Set(),
  trip: new Set(),
  encountered: null,
  teachersQuiz: JSON.parse(localStorage.getItem('teacherQuizDIY') || '[]')
};

const timeChallengeBank = [
  { q: 'DIY resmi menjadi daerah istimewa pada?', a: '1945' },
  { q: 'Semboyan pelestarian Jogja?', a: 'Hamemayu Hayuning Bawana' },
  { q: 'Prambanan bercorak?', a: 'Hindu' },
  { q: 'Keraton berada di kota?', a: 'Yogyakarta' },
  { q: 'Nilai Pancasila yang tampak dalam gotong royong?', a: 'Persatuan Indonesia' }
];

function updateUI() {
  document.getElementById('xp').textContent = state.xp;
  document.getElementById('completedCount').textContent = state.completed.size;
  document.getElementById('roadtripStatus').textContent = state.completed.size >= 3
    ? 'Road Trip Challenge terbuka! Susun rute paling efisien untuk bonus XP.'
    : 'Road Trip Challenge terkunci (selesaikan 3 lokasi).';

  document.getElementById('badges').innerHTML = [...state.badges].map((b) => `<span class="badge">${b}</span>`).join('') || '<span class="text-xs opacity-70">Belum ada badge.</span>';

  document.getElementById('missions').innerHTML = heritageLocations.map((l) => `<div>• ${l.name}: ${state.completed.has(l.id) ? '✅ Selesai' : '⬜ Belum'}</div>`).join('');
  renderTrip();
  renderLeaderboard();
  renderStudentScores();
}

function addXP(value) {
  state.xp += value;
  evaluateBadges();
  saveScore();
  updateUI();
}

function evaluateBadges() {
  if (state.completed.has('keraton')) state.badges.add('Ahli Keraton');
  if (state.completed.has('prambanan') && state.completed.has('ratuboko')) state.badges.add('Penjelajah Candi');
  if (state.completed.size === heritageLocations.length) state.badges.add('Master Heritage DIY');
}

function saveScore() {
  const board = JSON.parse(localStorage.getItem('heritageLeaderboardDIY') || '[]');
  const idx = board.findIndex((p) => p.name === state.playerName);
  const payload = { name: state.playerName, xp: state.xp, completed: state.completed.size, updatedAt: Date.now() };
  if (idx >= 0) board[idx] = payload;
  else board.push(payload);
  localStorage.setItem('heritageLeaderboardDIY', JSON.stringify(board));
}

function renderLeaderboard() {
  const board = JSON.parse(localStorage.getItem('heritageLeaderboardDIY') || '[]').sort((a, b) => b.xp - a.xp);
  document.getElementById('leaderboardList').innerHTML = board.length
    ? board.slice(0, 10).map((p, i) => `<div>${i + 1}. <strong>${p.name}</strong> — XP ${p.xp} (${p.completed}/6 lokasi)</div>`).join('')
    : 'Belum ada skor.';
}

function renderTrip() {
  const list = heritageLocations.filter((l) => state.trip.has(l.id));
  document.getElementById('tripList').innerHTML = list.length
    ? list.map((l, i) => `<div>${i + 1}. ${l.name}</div>`).join('')
    : '<p>Belum ada lokasi di road trip.</p>';
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y) * 0.15;
}

function calcRoute() {
  if (state.completed.size < 3) {
    document.getElementById('routeResult').innerHTML = '<p class="text-amber-600">Selesaikan minimal 3 lokasi dulu.</p>';
    return;
  }
  const selected = heritageLocations.filter((l) => state.trip.has(l.id));
  if (selected.length < 2) {
    document.getElementById('routeResult').innerHTML = '<p>Pilih minimal 2 lokasi.</p>';
    return;
  }

  let cur = { x: 20, y: 20, name: 'Start (Tugu Jogja)' };
  const rem = [...selected];
  const ordered = [];
  let total = 0;
  while (rem.length) {
    rem.sort((a, b) => distance(cur, a) - distance(cur, b));
    const nxt = rem.shift();
    total += distance(cur, nxt);
    ordered.push(nxt);
    cur = nxt;
  }

  const estMin = Math.round((total / 28) * 60);
  const bonus = total < 40 ? 80 : 30;
  addXP(bonus);

  const names = ordered.map((o) => o.name).join(' → ');
  const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ordered.at(-1).name + ', Yogyakarta')}`;
  document.getElementById('routeResult').innerHTML = `
    <p><strong>Rute:</strong> ${names}</p>
    <p><strong>Estimasi jarak:</strong> ${total.toFixed(1)} km</p>
    <p><strong>Estimasi waktu:</strong> ${estMin} menit</p>
    <p><strong>Bonus efisiensi:</strong> +${bonus} XP</p>
    <a class="underline" target="_blank" href="${mapsLink}">Buka peta rute (Google Maps)</a>
  `;
}

function openEncounter(loc) {
  state.encountered = loc;
  document.getElementById('modalTitle').textContent = loc.name;
  document.getElementById('modalNarrative').textContent = `${loc.story} Nilai: ${loc.philosophy}`;
  document.getElementById('modalInfo').textContent = `HTM ${loc.htm} • Jam Operasional ${loc.hours}`;
  renderChallenge(loc);
  document.getElementById('encounterModal').showModal();
}

function quickQuiz(loc) {
  return `
    <p class="font-semibold">Quick Quiz: ${loc.quiz.q}</p>
    <div class="mt-2 space-y-2">
      ${loc.quiz.options.map((o) => `<button class="quizBtn w-full text-left border rounded p-2" data-a="${o}">${o}</button>`).join('')}
    </div>
    <p id="quizFeedback" class="mt-2 text-sm"></p>
  `;
}

function renderChallenge(loc) {
  const teacherExtra = state.teachersQuiz.filter((q) => q.locationId === loc.id);
  const challenge = document.getElementById('challengeArea');
  challenge.innerHTML = `
    ${quickQuiz(loc)}
    <hr class="my-3"/>
    <p class="font-semibold">Time Challenge (5 soal / 60 detik)</p>
    <button id="startTimeChallenge" class="btn-main mt-2">Mulai Time Challenge</button>
    <p id="timeResult" class="text-sm mt-2"></p>
    <hr class="my-3"/>
    <p class="font-semibold">Puzzle Heritage: Cocokkan filosofi dengan tempat</p>
    <label class="text-sm">"${loc.philosophy}" cocok untuk:</label>
    <select id="puzzleSelect" class="block border rounded p-2 mt-1">
      ${heritageLocations.map((l) => `<option value="${l.id}">${l.name}</option>`).join('')}
    </select>
    <button id="checkPuzzle" class="btn-alt mt-2">Cek Puzzle</button>
    <p id="puzzleResult" class="text-sm mt-2"></p>
    ${teacherExtra.length ? `<hr class="my-3"/><p class="font-semibold">Soal Guru</p>${teacherExtra.map((q, i) => `<div class="text-sm mt-2"><p>${i + 1}. ${q.question}</p><input data-teacher="${i}" class="teacherInput border rounded p-1 w-full" placeholder="Jawabanmu"/></div>`).join('')}<button id="checkTeacher" class="btn-alt mt-2">Periksa Soal Guru</button><p id="teacherResult" class="text-sm mt-2"></p>` : ''}
  `;

  challenge.querySelectorAll('.quizBtn').forEach((b) => {
    b.onclick = () => {
      const ok = b.dataset.a === loc.quiz.answer;
      document.getElementById('quizFeedback').textContent = ok
        ? '✅ Benar! +60 XP dan badge progres.'
        : '❌ Belum tepat. Pelajari lagi cerita heritage di atas.';
      if (ok) {
        state.completed.add(loc.id);
        addXP(60);
      }
    };
  });

  document.getElementById('startTimeChallenge').onclick = () => runTimeChallenge();
  document.getElementById('checkPuzzle').onclick = () => {
    const ok = document.getElementById('puzzleSelect').value === loc.id;
    document.getElementById('puzzleResult').textContent = ok ? '✅ Puzzle tepat! +40 XP' : 'Belum cocok, coba lagi.';
    if (ok) addXP(40);
  };

  const checkTeacher = document.getElementById('checkTeacher');
  if (checkTeacher) {
    checkTeacher.onclick = () => {
      let score = 0;
      challenge.querySelectorAll('.teacherInput').forEach((input, i) => {
        if (input.value.trim().toLowerCase() === teacherExtra[i].answer.toLowerCase()) score++;
      });
      document.getElementById('teacherResult').textContent = `Skor soal guru: ${score}/${teacherExtra.length}.`;
      if (score) addXP(score * 20);
    };
  }
}

function runTimeChallenge() {
  const chosen = [...timeChallengeBank].sort(() => Math.random() - 0.5).slice(0, 5);
  const start = Date.now();
  let correct = 0;
  for (const q of chosen) {
    const input = prompt(`${q.q}\n(Waktu total 60 detik)`);
    if (Date.now() - start > 60000) break;
    if ((input || '').trim().toLowerCase() === q.a.toLowerCase()) correct++;
  }
  const timeout = Date.now() - start > 60000;
  const score = timeout ? correct : correct + 1;
  document.getElementById('timeResult').textContent = timeout
    ? `Waktu habis. Benar ${correct}/5.`
    : `Selesai! Benar ${correct}/5, bonus penyelesaian aktif.`;
  addXP(score * 15);
}

function setupTeacherMode() {
  const select = document.getElementById('teacherLocation');
  select.innerHTML = heritageLocations.map((l) => `<option value="${l.id}">${l.name}</option>`).join('');

  document.getElementById('teacherForm').onsubmit = (e) => {
    e.preventDefault();
    const payload = {
      locationId: document.getElementById('teacherLocation').value,
      question: document.getElementById('teacherQuestion').value.trim(),
      answer: document.getElementById('teacherAnswer').value.trim()
    };
    if (!payload.question || !payload.answer) return;
    state.teachersQuiz.push(payload);
    localStorage.setItem('teacherQuizDIY', JSON.stringify(state.teachersQuiz));
    e.target.reset();
    alert('Soal guru tersimpan.');
  };
}

function renderStudentScores() {
  const board = JSON.parse(localStorage.getItem('heritageLeaderboardDIY') || '[]').sort((a, b) => b.xp - a.xp);
  document.getElementById('studentScores').innerHTML = board.length
    ? board.map((b) => `<div>${b.name}: XP ${b.xp}, lokasi ${b.completed}/6</div>`).join('')
    : 'Belum ada data siswa.';
}

function downloadCertificate() {
  const text = `SERTIFIKAT DIGITAL\n\nDiberikan kepada ${state.playerName}\natas partisipasi dalam Heritage Quest: Jelajah Istimewa DIY\nXP: ${state.xp}`;
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sertifikat-heritage-diy.txt';
  a.click();
  URL.revokeObjectURL(url);
}

function initPhaser() {
  const scene = {
    preload() {},
    create() {
      this.add.rectangle(260, 180, 520, 360, 0xfef3c7).setStrokeStyle(2, 0x8a5a2f);
      this.add.text(12, 10, 'Map DIY - Heritage Quest', { color: '#4a2a1a', fontSize: '16px' });
      this.player = this.add.circle(40, 40, 10, 0x1d4ed8);
      this.cursors = this.input.keyboard.createCursorKeys();
      this.keys = this.input.keyboard.addKeys('W,A,S,D');
      this.markers = heritageLocations.map((loc) => {
        this.add.circle(loc.x, loc.y, 12, 0xb45309);
        this.add.text(loc.x + 12, loc.y - 8, loc.name.split(' ')[0], { color: '#78350f', fontSize: '10px' });
        return loc;
      });
    },
    update() {
      const speed = 2.2;
      if (this.cursors.left.isDown || this.keys.A.isDown) this.player.x -= speed;
      if (this.cursors.right.isDown || this.keys.D.isDown) this.player.x += speed;
      if (this.cursors.up.isDown || this.keys.W.isDown) this.player.y -= speed;
      if (this.cursors.down.isDown || this.keys.S.isDown) this.player.y += speed;

      this.player.x = Phaser.Math.Clamp(this.player.x, 12, 508);
      this.player.y = Phaser.Math.Clamp(this.player.y, 12, 348);

      const near = this.markers.find((m) => Math.hypot(this.player.x - m.x, this.player.y - m.y) < 18);
      if (near && state.encountered?.id !== near.id && !document.getElementById('encounterModal').open) {
        openEncounter(near);
      }
    }
  };

  new Phaser.Game({
    type: Phaser.AUTO,
    width: 520,
    height: 360,
    parent: 'game-container',
    backgroundColor: '#fff7ed',
    scene
  });
}

document.getElementById('themeToggle').onclick = () => {
  document.documentElement.classList.toggle('dark');
  const dark = document.documentElement.classList.contains('dark');
  document.getElementById('themeToggle').textContent = dark ? '☀️ Light Mode' : '🌙 Dark Mode';
};

document.getElementById('startGame').onclick = () => {
  state.playerName = document.getElementById('playerName').value.trim() || 'Player DIY';
  state.mode = document.getElementById('gameMode').value;
  saveScore();
  updateUI();
};

document.getElementById('closeModal').onclick = () => document.getElementById('encounterModal').close();
document.getElementById('addTripBtn').onclick = () => {
  if (state.encountered) state.trip.add(state.encountered.id);
  updateUI();
};
document.getElementById('calcRoute').onclick = calcRoute;
document.getElementById('downloadCert').onclick = downloadCertificate;

window.addEventListener('storage', () => {
  if (state.mode === 'multi') renderLeaderboard();
});

setupTeacherMode();
updateUI();
initPhaser();
