'use strict';

// Initialize the map without a set view
var map = L.map('map-container');

// Array of marker positions
var markerPositions = [
  [33.7806, -112.5277], // Wittmann, Arizona
  [39.7285, -121.8375], // Chico
  [34.0522, -118.2437], // Los Angeles
  [33.9533, -117.3962], // Riverside
  [36.9741, -122.0308], // Santa Cruz
  [37.7749, -122.4194], // San Francisco
  [44.9778, -93.2650]  // Minneapolis
];

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Use LatLngBounds to fit the map to all marker locations
var bounds = L.latLngBounds(markerPositions);
map.fitBounds(bounds);

// Disable scroll zoom on mobile devices
if (window.innerWidth < 600) {
  map.scrollWheelZoom.disable();
}

// Array of manually added memory locations and data
var markers = [
    {
    lat: 39.7285, // Chico
    lng: -121.8375,
    text: 'Chico, where it all began! So many great memories in this small but beautiful city.',
    images: [
      'chico/chico1.jpeg',
      'chico/chico2.jpeg',
      'chico/chico3.jpeg',
      'chico/chico4.jpeg',
      'chico/chico5.jpeg',
      'chico/chico6.jpeg',
      'chico/chico7.jpeg',
      'chico/chico8.jpeg',
      'chico/chico9.jpeg',
      'chico/chico10.jpeg',
      'chico/chico11.jpeg',
      'chico/chico12.jpeg',
      'chico/chico13.jpeg',
      'chico/chico14.jpeg',
      'chico/chico15.jpeg'
    ] // Chico images 1-15 
  },
  {
    lat: 34.0522, // Los Angeles
    lng: -118.2437,
    text: 'Los Angeles! Where we spent those amazing beach days, The Getty, and tried the best tacos ever!',
    images: [
      'LA/la1.jpeg',
      'LA/la2.jpeg',
      'LA/la3.jpeg',
      'LA/la4.jpeg',
      'LA/la5.jpeg',
      'LA/la6.jpeg',
      'LA/la7.jpeg',
      'LA/la8.jpeg',
      'LA/la9.jpeg',
      'LA/la10.jpeg',
      'LA/la11.jpeg',
      'LA/la12.jpeg',
      'LA/la13.jpeg',
      'LA/la14.jpeg',
      'LA/la15.jpeg',
      'LA/la16.jpeg',
      'LA/la17.jpeg',
      'LA/la18.jpeg',
      'LA/la19.jpeg',
      'LA/la20.jpeg',
      'LA/la21.jpeg',
      'LA/la22.jpeg'
    ] // Los Angeles images 1-22
  },
  {
    lat: 33.9533, // Riverside
    lng: -117.3962,
    text: 'Riverside: Our first aparment with so many memories here i love you <3',
    images: [
      'riverside/riverside1.jpeg',
      'riverside/riverside2.jpeg',
      'riverside/riverside3.jpeg',
      'riverside/riverside4.jpeg',
      'riverside/riverside5.jpeg',
      'riverside/riverside6.jpeg',
      'riverside/riverside7.jpeg',
      'riverside/riverside8.jpeg',
      'riverside/riverside9.jpeg',
      'riverside/riverside10.jpeg',
      'riverside/riverside11.jpeg',
      'riverside/riverside12.jpeg',
      'riverside/riverside13.jpeg',
      'riverside/riverside14.jpeg',
      'riverside/riverside15.jpeg',
      'riverside/riverside16.jpeg',
      'riverside/riverside17.jpeg',
      'riverside/riverside18.jpeg',
      'riverside/riverside19.jpeg',
      'riverside2/riverside20.jpeg',
      'riverside2/riverside21.jpeg',
      'riverside2/riverside22.jpeg',
      'riverside2/riverside23.jpeg',
      'riverside2/riverside24.jpeg',
      'riverside2/riverside25.jpeg',
      'riverside2/riverside26.jpeg',
      'riverside2/riverside27.jpeg',
      'riverside2/riverside28.jpeg',
      'riverside2/riverside29.jpeg',
      'riverside2/riverside30.jpeg',
      'riverside2/riverside31.jpeg',
      'riverside2/riverside32.jpeg',
      'riverside2/riverside33.jpeg',
      'riverside3/riverside34.jpeg',
      'riverside3/riverside35.jpeg',
      'riverside3/riverside36.jpeg',
      'riverside3/riverside37.jpeg',
      'riverside3/riverside38.jpeg',
      'riverside3/riverside39.jpeg',
      'riverside3/riverside40.jpeg',
      'riverside3/riverside41.jpeg',
      'riverside3/riverside42.jpeg',
      'riverside3/riverside43.jpeg'
    ] // Riverside images 1-43
  },
  {
    lat: 36.9741, // Santa Cruz
    lng: -122.0308,
    text: 'Santa Cruz :), from my graduation to the time spent with you and family here',
    images: [
      'santa_cruz/santa_cruz1.jpeg',
      'santa_cruz/santa_cruz2.jpeg',
      'santa_cruz/santa_cruz3.jpeg',
      'santa_cruz/santa_cruz4.jpeg',
      'santa_cruz/santa_cruz5.jpeg',
      'santa_cruz/santa_cruz6.jpeg',
      'santa_cruz/santa_cruz7.jpeg',
      'santa_cruz/santa_cruz8.jpeg',
      'santa_cruz/santa_cruz9.jpeg',
      'santa_cruz2/santa_cruz10.jpeg',
      'santa_cruz2/santa_cruz11.jpeg',
      'santa_cruz2/santa_cruz12.jpeg',
      'santa_cruz2/santa_cruz13.jpeg',
      'santa_cruz2/santa_cruz14.jpeg',
      'santa_cruz2/santa_cruz15.jpeg',
      'santa_cruz2/santa_cruz16.jpeg',
      'santa_cruz2/santa_cruz17.jpeg',
      'santa_cruz2/santa_cruz18.jpeg',
      'santa_cruz2/santa_cruz19.jpeg',
      'santa_cruz2/santa_cruz20.jpeg'
    ] // Santa Cruz images 1-20
  },
  {
    lat: 37.7749, // San Francisco
    lng: -122.4194,
    text: 'San Francisco: What a fun trip! I hope we go back soon',
    images: [
      'san_fran/SanFran1.jpeg',
      'san_fran/SanFran3.jpeg',
      'san_fran/SanFran4.jpeg',
      'san_fran/SanFran5.jpeg',
      'san_fran/SanFran6.jpeg',
      'san_fran/SanFran7.jpeg',
      'san_fran/SanFran8.jpeg',
      'san_fran/SanFran9.jpeg',
      'san_fran/SanFran10.jpeg'
    ] // San Francisco images 1-10
  }, 
  {
    lat: 44.9778, // Minneapolis
    lng: -93.2650,
    text: 'Minneapolis! Luke Combs! Something and BAR!',
    images: ['Minneapolis/minneapolis1.jpeg', 'Minneapolis/minneapolis2.jpeg','Minneapolis/minneapolis3.jpeg']
  },
  {
    lat: 33.7806, // Wittmann, Arizona
    lng: -112.5277,
    text: 'Trip to see my family :)',
    images: [
      'arizona/arizona1.jpeg',
      'arizona/arizona2.jpeg',
      'arizona/arizona3.jpeg',
      'arizona/arizona4.jpeg',
      'arizona/arizona5.jpeg',
      'arizona/arizona6.jpeg',
      'arizona/arizona7.jpeg',
      'arizona/arizona8.jpeg'
    ] // Arizona images 1-8
  }
];

// Create a DivIcon for a simple circular marker
var customIcon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-pin'></div>",
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});
// hear icon 
var heartIcon = L.divIcon({
  className: 'custom-div-icon', 
  html: "<div class='heart-marker'></div>",
  iconSize: [30, 30], // Adjust the size of the icon
  iconAnchor: [15, 15] // Adjust the anchor point for better positioning
});


markers.forEach(function(location, index) {
  var marker = L.marker([location.lat, location.lng], { icon: customIcon }).addTo(map);

  // Generate image carousel HTML
  var imageHtml = `<div class="carousel">`;
  location.images.forEach((img, imgIndex) => {
    imageHtml += `<img src="${img}" class="carousel-image" style="display: ${imgIndex === 0 ? 'block' : 'none'};" data-index="${imgIndex}">`;
  });

  // Add buttons only if there are more than 1 image
  if (location.images.length > 1) {
    imageHtml += `
      <button class="prev-btn">❮</button>
      <button class="next-btn">❯</button>
    </div>`;
  } else {
    imageHtml += `</div>`; // Close the div without buttons if only 1 image
  }

  // Combine the carousel and the note
  marker.bindPopup(`
    <div class="polaroid">
      ${imageHtml}
      <div class="note">${location.text}</div>
    </div>
  `);

  // Attach event listeners for the carousel when the popup opens
  marker.on('popupopen', function(e) {
    var popupElement = e.popup.getElement();
    var currentIndex = 0;

    if (location.images.length > 1) {
      popupElement.querySelector('.next-btn').addEventListener('click', function() {
        changeImage(popupElement, 1);
      });

      popupElement.querySelector('.prev-btn').addEventListener('click', function() {
        changeImage(popupElement, -1);
      });
    }

    function changeImage(popupElement, direction) {
      var images = popupElement.querySelectorAll('.carousel-image');
      images[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + direction + images.length) % images.length;
      images[currentIndex].style.display = 'block';
    }
  });
});

