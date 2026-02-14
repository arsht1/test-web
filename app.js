const startPoint = { lat: -7.7956, lng: 110.3695, name: 'Titik Start: Malioboro' };

const heritagePlaces = [
  {
    id: 'keraton',
    name: 'Keraton Yogyakarta',
    category: 'Keraton',
    lat: -7.8053,
    lng: 110.3642,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Keraton_Yogyakarta%2C_Indonesia.jpg/640px-Keraton_Yogyakarta%2C_Indonesia.jpg',
    rating: 4.7,
    htm: { weekday: 15000, weekend: 20000 },
    hours: '08.30 - 14.00',
    facilities: 'Pemandu lokal, area parkir, museum internal, toilet',
    duration: '1.5 - 2 jam',
    story: {
      narrative:
        'Saat melangkah ke pelataran Keraton, Anda seakan masuk ke ruang waktu tempat denyut budaya Jawa masih bernapas. Setiap pendopo, gamelan, hingga langkah abdi dalem adalah fragmen hidup dari cerita panjang Kesultanan Yogyakarta.',
      philosophy:
        'Keraton merepresentasikan poros kosmologis Jawa: keseimbangan antara manusia, alam, dan Sang Pencipta.',
      uniqueFact:
        'Keraton masih aktif sebagai istana resmi Sultan sekaligus pusat kebudayaan yang hidup.'
    }
  },
  {
    id: 'tamansari',
    name: 'Taman Sari',
    category: 'Keraton',
    lat: -7.8099,
    lng: 110.3592,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Taman_Sari_Yogyakarta.JPG/640px-Taman_Sari_Yogyakarta.JPG',
    rating: 4.6,
    htm: { weekday: 10000, weekend: 15000 },
    hours: '09.00 - 15.00',
    facilities: 'Area foto, pemandu, toilet, kios suvenir',
    duration: '1 - 1.5 jam',
    story: {
      narrative:
        'Lorong-lorong Taman Sari membawa imajinasi pada masa ketika taman air ini menjadi tempat rehat keluarga kerajaan. Permainan cahaya di dinding bata tua membuat setiap sudut terasa puitis.',
      philosophy:
        'Arsitektur Taman Sari melambangkan ruang kontemplasi: harmoni tubuh, rasa, dan batin.',
      uniqueFact:
        'Konon terdapat jalur bawah tanah yang dulu terhubung ke kawasan keraton inti.'
    }
  },
  {
    id: 'prambanan',
    name: 'Candi Prambanan',
    category: 'Candi',
    lat: -7.752,
    lng: 110.4915,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Prambanan_Temple_Yogyakarta.jpg/640px-Prambanan_Temple_Yogyakarta.jpg',
    rating: 4.8,
    htm: { weekday: 50000, weekend: 50000 },
    hours: '06.30 - 17.00',
    facilities: 'Shuttle, pusat informasi, restoran, parkir luas',
    duration: '2 - 3 jam',
    story: {
      narrative:
        'Menjulang anggun di ufuk timur Jogja, Prambanan berdiri seperti puisi batu tentang cinta dan pengabdian. Relief Ramayana di dinding candi mengajak Anda berjalan sambil membaca kisah epik yang tak lekang.',
      philosophy:
        'Tri mandala dan struktur vertikal candi mencerminkan perjalanan spiritual menuju kesempurnaan.',
      uniqueFact:
        'Prambanan adalah kompleks candi Hindu terbesar di Indonesia dan warisan dunia UNESCO.'
    }
  },
  {
    id: 'ratuboko',
    name: 'Candi Ratu Boko',
    category: 'Candi',
    lat: -7.7706,
    lng: 110.4894,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Ratu_Boko_gate.jpg/640px-Ratu_Boko_gate.jpg',
    rating: 4.6,
    htm: { weekday: 40000, weekend: 50000 },
    hours: '06.00 - 17.00',
    facilities: 'Spot sunset, shuttle, toilet, warung',
    duration: '1.5 - 2.5 jam',
    story: {
      narrative:
        'Ratu Boko bukan sekadar situs, melainkan panggung matahari tenggelam terbaik di Jogja. Dari gerbang megahnya, Anda akan melihat lanskap kota yang perlahan berubah warna keemasan.',
      philosophy:
        'Kompleks ini menunjukkan pertemuan budaya Hindu-Buddha dan dinamika politik masa lalu.',
      uniqueFact:
        'Banyak arkeolog menilai situs ini adalah kompleks keraton kuno, bukan candi ritual murni.'
    }
  },
  {
    id: 'vredeburg',
    name: 'Benteng Vredeburg',
    category: 'Benteng',
    lat: -7.8002,
    lng: 110.3668,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Benteng_Vredeburg.jpg/640px-Benteng_Vredeburg.jpg',
    rating: 4.6,
    htm: { weekday: 3000, weekend: 3000 },
    hours: '08.00 - 16.00',
    facilities: 'Museum diorama, taman, toilet, pusat informasi',
    duration: '1 - 2 jam',
    story: {
      narrative:
        'Di balik dinding tebal Benteng Vredeburg, jejak kolonial dan narasi perjuangan Indonesia bersua. Diorama di dalamnya membawa pengunjung menelusuri fase-fase penting lahirnya republik.',
      philosophy:
        'Benteng ini menjadi pengingat bahwa ruang pernah diciptakan untuk mengawasi, lalu direbut untuk mengedukasi.',
      uniqueFact:
        'Lokasinya tepat di titik strategis Malioboro, sehingga mudah digabungkan dengan wisata kota lama.'
    }
  },
  {
    id: 'sonobudoyo',
    name: 'Museum Sonobudoyo',
    category: 'Museum',
    lat: -7.8014,
    lng: 110.3647,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Museum_Sonobudoyo.jpg/640px-Museum_Sonobudoyo.jpg',
    rating: 4.5,
    htm: { weekday: 10000, weekend: 10000 },
    hours: '08.00 - 21.00',
    facilities: 'Koleksi artefak, pertunjukan wayang, perpustakaan, toilet',
    duration: '1.5 - 2 jam',
    story: {
      narrative:
        'Museum Sonobudoyo adalah ruang temu benda-benda yang pernah menghidupi peradaban Jawa: keris, topeng, naskah, dan wayang. Setiap etalase terasa seperti percakapan dengan masa lalu.',
      philosophy:
        'Museum mengajarkan bahwa identitas budaya dibangun dari ingatan kolektif yang dirawat bersama.',
      uniqueFact:
        'Museum ini sering menghadirkan pertunjukan wayang kulit malam hari yang intim dan edukatif.'
    }
  }
];

const timelineData = [
  { year: '1755', event: 'Perjanjian Giyanti melahirkan Kesultanan Yogyakarta.' },
  { year: '1765', event: 'Kompleks Taman Sari mulai dikembangkan sebagai taman kerajaan.' },
  { year: '1810-1945', event: 'Benteng Vredeburg menjadi saksi dinamika kolonial.' },
  { year: '1945', event: 'Yogyakarta berperan vital dalam awal kemerdekaan Indonesia.' },
  { year: '1991', event: 'Prambanan ditetapkan sebagai Warisan Dunia UNESCO.' }
];

const quizData = [
  {
    question: 'Apa filosofi yang menekankan menjaga keharmonisan dunia?',
    options: ['Hamemayu Hayuning Bawana', 'Sangkan Paraning Dumadi', 'Memayu Marga'],
    answer: 'Hamemayu Hayuning Bawana'
  }
];

let map;
let infoWindow;
let directionsService;
let directionsRenderer;
let markers = [];
const selectedIds = new Set();

const formatRupiah = (num) => new Intl.NumberFormat('id-ID').format(num);

function getAvgTicket(place) {
  return Math.round((place.htm.weekday + place.htm.weekend) / 2);
}

function haversineDistance(a, b) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLon = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;

  const sinDLat = Math.sin(dLat / 2);
  const sinDLon = Math.sin(dLon / 2);

  const c = 2 * Math.atan2(
    Math.sqrt(sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon),
    Math.sqrt(1 - (sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon))
  );
  return R * c;
}

function renderTimeline() {
  const container = document.getElementById('timeline');
  container.innerHTML = timelineData
    .map((item) => `<div class="timeline-item"><strong>${item.year}</strong><p>${item.event}</p></div>`)
    .join('');
}

function renderQuiz() {
  const quizEl = document.getElementById('quiz');
  const quiz = quizData[0];
  quizEl.innerHTML = `
    <p class="font-semibold">${quiz.question}</p>
    <div class="mt-3 space-y-2">
      ${quiz.options
        .map(
          (opt) =>
            `<button class="quiz-option w-full text-left px-3 py-2 rounded-lg border border-batik-200 dark:border-zinc-600 hover:bg-batik-50 dark:hover:bg-zinc-700" data-answer="${opt}">${opt}</button>`
        )
        .join('')}
    </div>
    <p id="quizResult" class="mt-3 font-semibold"></p>
  `;

  quizEl.querySelectorAll('.quiz-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      const result = document.getElementById('quizResult');
      if (btn.dataset.answer === quiz.answer) {
        result.textContent = 'Benar! Kamu memahami nilai inti budaya Jogja ✨';
        result.className = 'mt-3 font-semibold text-green-600';
      } else {
        result.textContent = 'Belum tepat. Coba lagi, ya!';
        result.className = 'mt-3 font-semibold text-amber-600';
      }
    });
  });
}

function showStory(id) {
  const place = heritagePlaces.find((item) => item.id === id);
  const story = document.getElementById('storyContainer');
  story.innerHTML = `
    <article class="space-y-3">
      <h4 class="text-xl font-bold text-batik-700 dark:text-amber-100">${place.name}</h4>
      <img src="${place.image}" alt="${place.name}" class="rounded-xl w-full max-h-64 object-cover" />
      <p><strong>Sejarah Singkat:</strong> ${place.story.narrative}</p>
      <p><strong>Nilai Budaya & Filosofi:</strong> ${place.story.philosophy}</p>
      <p><strong>Fakta Unik:</strong> ${place.story.uniqueFact}</p>
      <p><strong>Informasi Praktis:</strong> HTM Weekday Rp${formatRupiah(place.htm.weekday)} / Weekend Rp${formatRupiah(place.htm.weekend)}, Jam ${place.hours}, Fasilitas: ${place.facilities}, Durasi kunjungan ${place.duration}.</p>
    </article>
  `;
  document.getElementById('story').scrollIntoView({ behavior: 'smooth' });
}

function toggleTrip(id) {
  if (selectedIds.has(id)) selectedIds.delete(id);
  else selectedIds.add(id);

  renderList();
  renderTripList();
}

function renderList() {
  const list = document.getElementById('heritageList');
  const category = document.getElementById('categoryFilter').value;
  const maxPrice = Number(document.getElementById('priceFilter').value || 0);
  const minRating = Number(document.getElementById('ratingFilter').value || 0);
  const maxDistance = Number(document.getElementById('distanceFilter').value || 0);

  const filtered = heritagePlaces.filter((item) => {
    const avg = getAvgTicket(item);
    const dist = haversineDistance(startPoint, item);
    const categoryOk = category === 'all' || item.category === category;
    const priceOk = maxPrice ? avg <= maxPrice : true;
    const ratingOk = minRating ? item.rating >= minRating : true;
    const distanceOk = maxDistance ? dist <= maxDistance : true;
    return categoryOk && priceOk && ratingOk && distanceOk;
  });

  list.innerHTML = filtered
    .map((item) => {
      const selected = selectedIds.has(item.id);
      return `
      <div class="p-3 rounded-xl border border-batik-200 dark:border-zinc-600 jawa-ornament">
        <div class="flex justify-between gap-2">
          <div>
            <h4 class="font-bold">${item.name}</h4>
            <p class="text-xs">${item.category} • ⭐ ${item.rating}</p>
            <p class="text-xs">HTM: Rp${formatRupiah(item.htm.weekday)} - Rp${formatRupiah(item.htm.weekend)} | ${item.hours}</p>
          </div>
          <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg" />
        </div>
        <div class="mt-2 flex flex-wrap gap-2">
          <button data-story="${item.id}" class="story-btn px-3 py-1 text-xs rounded-lg bg-amber-100 text-batik-700">Lihat Cerita</button>
          <button data-trip="${item.id}" class="trip-btn px-3 py-1 text-xs rounded-lg ${selected ? 'bg-green-600 text-white' : 'bg-batik-700 text-krem'}">${selected ? 'Hapus dari Road Trip' : 'Tambahkan ke Road Trip'}</button>
        </div>
      </div>`;
    })
    .join('');

  list.querySelectorAll('.story-btn').forEach((btn) => btn.addEventListener('click', () => showStory(btn.dataset.story)));
  list.querySelectorAll('.trip-btn').forEach((btn) => btn.addEventListener('click', () => toggleTrip(btn.dataset.trip)));

  applyMarkerVisibility(filtered.map((item) => item.id));
}

function renderTripList() {
  const tripList = document.getElementById('tripList');
  const selected = heritagePlaces.filter((item) => selectedIds.has(item.id));
  if (!selected.length) {
    tripList.innerHTML = '<p class="text-batik-500 dark:text-zinc-300">Belum ada lokasi dipilih.</p>';
    return;
  }

  tripList.innerHTML = selected
    .map((item, i) => `<div class="flex justify-between"><span>${i + 1}. ${item.name}</span><span>⭐ ${item.rating}</span></div>`)
    .join('');
}

function nearestNeighborRoute(places) {
  const remaining = [...places];
  let current = startPoint;
  const route = [];
  while (remaining.length) {
    remaining.sort((a, b) => haversineDistance(current, a) - haversineDistance(current, b));
    const next = remaining.shift();
    route.push(next);
    current = next;
  }
  return route;
}

function generateItinerary() {
  const selected = heritagePlaces.filter((item) => selectedIds.has(item.id));
  const result = document.getElementById('routeResult');

  if (selected.length < 2) {
    result.innerHTML = '<p class="text-amber-600">Pilih minimal 2 lokasi untuk membuat itinerary.</p>';
    return;
  }

  const ordered = nearestNeighborRoute(selected);
  let totalDistance = 0;
  let prev = startPoint;
  ordered.forEach((place) => {
    totalDistance += haversineDistance(prev, place);
    prev = place;
  });

  const estTime = (totalDistance / 30) * 60;
  result.innerHTML = `
    <p><strong>Rute otomatis:</strong> ${[startPoint.name, ...ordered.map((p) => p.name)].join(' → ')}</p>
    <p><strong>Estimasi jarak:</strong> ${totalDistance.toFixed(1)} km</p>
    <p><strong>Estimasi waktu tempuh:</strong> ${Math.round(estTime)} menit (asumsi 30 km/jam)</p>
  `;

  if (directionsService && directionsRenderer) {
    drawRouteOnMap(ordered);
  }
}

function drawRouteOnMap(ordered) {
  const waypoints = ordered.slice(0, -1).map((p) => ({ location: { lat: p.lat, lng: p.lng }, stopover: true }));
  const destination = ordered[ordered.length - 1];
  directionsService.route(
    {
      origin: { lat: startPoint.lat, lng: startPoint.lng },
      destination: { lat: destination.lat, lng: destination.lng },
      waypoints,
      travelMode: google.maps.TravelMode.DRIVING,
      optimizeWaypoints: false
    },
    (res, status) => {
      if (status === 'OK') directionsRenderer.setDirections(res);
    }
  );
}

function applyMarkerVisibility(visibleIds) {
  const set = new Set(visibleIds);
  markers.forEach((m) => {
    m.setVisible(set.has(m.placeId));
  });
}

function initMapFallback(message) {
  const mapEl = document.getElementById('map');
  const warn = document.getElementById('mapWarning');
  mapEl.innerHTML = '<div class="h-full w-full rounded-2xl flex items-center justify-center text-center p-4 bg-batik-50 dark:bg-zinc-700">Peta interaktif memerlukan Google Maps API Key aktif.</div>';
  warn.textContent = message;
  warn.classList.remove('hidden');
}

window.initHeritageMap = function initHeritageMap() {
  if (!(window.google && window.google.maps)) {
    initMapFallback('Google Maps gagal dimuat. Isi API key pada script Google Maps di index.html.');
    return;
  }

  map = new google.maps.Map(document.getElementById('map'), {
    center: startPoint,
    zoom: 12,
    mapId: 'DEMO_MAP_ID'
  });

  infoWindow = new google.maps.InfoWindow();
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({ map, suppressMarkers: false });

  new google.maps.Marker({
    position: startPoint,
    map,
    title: startPoint.name,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 8,
      fillColor: '#d4af37',
      fillOpacity: 1,
      strokeColor: '#6d472a',
      strokeWeight: 2
    }
  });

  markers = heritagePlaces.map((place) => {
    const marker = new google.maps.Marker({
      position: { lat: place.lat, lng: place.lng },
      map,
      title: place.name,
      icon: {
        path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z',
        fillColor: '#6d472a',
        fillOpacity: 1,
        strokeColor: '#d4af37',
        strokeWeight: 1.5,
        scale: 1.5,
        anchor: new google.maps.Point(12, 22)
      }
    });

    marker.placeId = place.id;

    marker.addListener('click', () => {
      infoWindow.setContent(`
        <div style="max-width:240px;font-family:Arial,sans-serif;">
          <h4 style="font-weight:bold;margin-bottom:6px;">${place.name}</h4>
          <img src="${place.image}" alt="${place.name}" style="width:100%;height:120px;object-fit:cover;border-radius:8px;" />
          <p style="margin:6px 0 0;"><strong>HTM:</strong> Rp${formatRupiah(place.htm.weekday)} / Rp${formatRupiah(place.htm.weekend)}</p>
          <p style="margin:4px 0;"><strong>Jam:</strong> ${place.hours}</p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;">
            <button onclick="showStory('${place.id}')" style="background:#d4af37;border:none;border-radius:6px;padding:6px 8px;cursor:pointer;">Lihat Cerita</button>
            <button onclick="toggleTrip('${place.id}')" style="background:#6d472a;color:#fff;border:none;border-radius:6px;padding:6px 8px;cursor:pointer;">Tambahkan ke Road Trip</button>
          </div>
        </div>
      `);
      infoWindow.open(map, marker);
    });

    return marker;
  });
};

window.showStory = showStory;
window.toggleTrip = toggleTrip;


function loadGoogleMapsScript() {
  const key = window.GMAPS_API_KEY || '';
  if (!key) {
    initMapFallback('Google Maps API key belum disetel. Tambahkan `window.GMAPS_API_KEY = "YOUR_KEY"` sebelum app.js.');
    return;
  }

  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initHeritageMap`;
  script.async = true;
  script.defer = true;
  script.onerror = () => initMapFallback('Gagal memuat Google Maps script. Periksa API key dan koneksi internet.');
  document.body.appendChild(script);
}

function setupTheme() {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    root.classList.add('dark');
    btn.textContent = '☀️ Light Mode';
  }

  btn.addEventListener('click', () => {
    root.classList.toggle('dark');
    const dark = root.classList.contains('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    btn.textContent = dark ? '☀️ Light Mode' : '🌙 Dark Mode';
  });
}

function setupFilters() {
  ['categoryFilter', 'priceFilter', 'ratingFilter', 'distanceFilter'].forEach((id) => {
    document.getElementById(id).addEventListener('input', renderList);
  });
}

function setupActions() {
  document.getElementById('generateBtn').addEventListener('click', generateItinerary);
  document.getElementById('downloadBtn').addEventListener('click', () => window.print());
  document.getElementById('shareBtn').addEventListener('click', async () => {
    const summary = document.getElementById('routeResult').innerText || 'Belum ada itinerary.';
    if (navigator.share) {
      await navigator.share({ title: 'Heritage Planner DIY', text: summary });
    } else {
      await navigator.clipboard.writeText(summary);
      alert('Ringkasan rute disalin ke clipboard.');
    }
  });
}

function initApp() {
  setupTheme();
  setupFilters();
  setupActions();
  renderTimeline();
  renderQuiz();
  renderList();
  renderTripList();

  loadGoogleMapsScript();
}

document.addEventListener('DOMContentLoaded', initApp);
