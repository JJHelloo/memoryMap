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
      'images/chico/chico1.jpeg',
      'images/chico/chico2.jpeg',
      'images/chico/chico3.jpeg',
      'images/chico/chico4.jpeg',
      'images/chico/chico5.jpeg',
      'images/chico/chico6.jpeg',
      'images/chico/chico7.jpeg',
      'images/chico/chico8.jpeg',
      'images/chico/chico9.jpeg',
      'images/chico/chico10.jpeg',
      'images/chico/chico11.jpeg',
      'images/chico/chico12.jpeg',
      'images/chico/chico13.jpeg',
      'images/chico/chico14.jpeg',
      'images/chico/chico15.jpeg'
    ] // Chico images 1-15 
  },
  {
    lat: 34.0522, // Los Angeles
    lng: -118.2437,
    text: 'Los Angeles! Where we spent those amazing beach days, The Getty, and tried the best tacos ever!',
    images: [
      'images/LA/la1.jpeg',
      'images/LA/la2.jpeg',
      'images/LA/la3.jpeg',
      'images/LA/la4.jpeg',
      'images/LA/la5.jpeg',
      'images/LA/la6.jpeg',
      'images/LA/la7.jpeg',
      'images/LA/la8.jpeg',
      'images/LA/la9.jpeg',
      'images/LA/la10.jpeg',
      'images/LA/la11.jpeg',
      'images/LA/la12.jpeg',
      'images/LA/la13.jpeg',
      'images/LA/la14.jpeg',
      'images/LA/la15.jpeg',
      'images/LA/la16.jpeg',
      'images/LA/la17.jpeg',
      'images/LA/la18.jpeg',
      'images/LA/la19.jpeg',
      'images/LA/la20.jpeg',
      'images/LA/la21.jpeg',
      'images/LA/la22.jpeg'
    ] // Los Angeles images 1-22
  },
  {
    lat: 33.9533, // Riverside
    lng: -117.3962,
    text: 'Riverside: Our first aparment with so many memories here i love you <3',
    images: [
      'images/riverside/riverside1.jpeg',
      'images/riverside/riverside2.jpeg',
      'images/riverside/riverside3.jpeg',
      'images/riverside/riverside4.jpeg',
      'images/riverside/riverside5.jpeg',
      'images/riverside/riverside6.jpeg',
      'images/riverside/riverside7.jpeg',
      'images/riverside/riverside8.jpeg',
      'images/riverside/riverside9.jpeg',
      'images/riverside/riverside10.jpeg',
      'images/riverside/riverside11.jpeg',
      'images/riverside/riverside12.jpeg',
      'images/riverside/riverside13.jpeg',
      'images/riverside/riverside14.jpeg',
      'images/riverside/riverside15.jpeg',
      'images/riverside/riverside16.jpeg',
      'images/riverside/riverside17.jpeg',
      'images/riverside/riverside18.jpeg',
      'images/riverside/riverside19.jpeg',
      'images/riverside/riverside20.jpeg',
      'images/riverside/riverside21.jpeg',
      'images/riverside/riverside22.jpeg',
      'images/riverside/riverside23.jpeg',
      'images/riverside/riverside24.jpeg',
      'images/riverside/riverside25.jpeg',
      'images/riverside/riverside26.jpeg',
      'images/riverside/riverside27.jpeg',
      'images/riverside/riverside28.jpeg',
      'images/riverside/riverside29.jpeg',
      'images/riverside/riverside30.jpeg',
      'images/riverside/riverside31.jpeg',
      'images/riverside/riverside32.jpeg',
      'images/riverside/riverside33.jpeg',
      'images/riverside/riverside34.jpeg',
      'images/riverside/riverside35.jpeg',
      'images/riverside/riverside36.jpeg',
      'images/riverside/riverside37.jpeg',
      'images/riverside/riverside38.jpeg',
      'images/riverside/riverside39.jpeg',
      'images/riverside/riverside40.jpeg',
      'images/riverside/riverside41.jpeg',
      'images/riverside/riverside42.jpeg',
      'images/riverside/riverside43.jpeg'
    ] // Riverside images 1-43
  },
  {
    lat: 36.9741, // Santa Cruz
    lng: -122.0308,
    text: 'Santa Cruz :), from my graduation to the time spent with you and family here',
    images: [
      'images/santa_cruz/santa_cruz1.jpeg',
      'images/santa_cruz/santa_cruz2.jpeg',
      'images/santa_cruz/santa_cruz3.jpeg',
      'images/santa_cruz/santa_cruz4.jpeg',
      'images/santa_cruz/santa_cruz5.jpeg',
      'images/santa_cruz/santa_cruz6.jpeg',
      'images/santa_cruz/santa_cruz7.jpeg',
      'images/santa_cruz/santa_cruz8.jpeg',
      'images/santa_cruz/santa_cruz9.jpeg',
      'images/santa_cruz/santa_cruz10.jpeg',
      'images/santa_cruz/santa_cruz11.jpeg',
      'images/santa_cruz/santa_cruz12.jpeg',
      'images/santa_cruz/santa_cruz13.jpeg',
      'images/santa_cruz/santa_cruz14.jpeg',
      'images/santa_cruz/santa_cruz15.jpeg',
      'images/santa_cruz/santa_cruz16.jpeg',
      'images/santa_cruz/santa_cruz17.jpeg',
      'images/santa_cruz/santa_cruz18.jpeg',
      'images/santa_cruz/santa_cruz19.jpeg',
      'images/santa_cruz/santa_cruz20.jpeg'
    ] // Santa Cruz images 1-20
  },
  {
    lat: 37.7749, // San Francisco
    lng: -122.4194,
    text: 'San Francisco: What a fun trip! I hope we go back soon',
    images: [
      'images/san_fran/SanFran1.jpeg',
      'images/san_fran/SanFran2.jpeg',
      'images/san_fran/SanFran3.jpeg',
      'images/san_fran/SanFran4.jpeg',
      'images/san_fran/SanFran5.jpeg',
      'images/san_fran/SanFran6.jpeg',
      'images/san_fran/SanFran7.jpeg',
      'images/san_fran/SanFran8.jpeg',
      'images/san_fran/SanFran9.jpeg',
      'images/san_fran/SanFran10.jpeg'
    ] // San Francisco images 1-10
  }, 
  {
    lat: 44.9778, // Minneapolis
    lng: -93.2650,
    text: 'Minneapolis! Luke Combs! Something and BAR!',
    images: ['images/Minneapolis/minneapolis1.jpeg', 'images/Minneapolis/minneapolis2.jpeg','images/Minneapolis/minneapolis3.jpeg']
  },
  {
    lat: 33.7806, // Wittmann, Arizona
    lng: -112.5277,
    text: 'Trip to see my family :)',
    images: [
      'images/arizona/arizona1.jpeg',
      'images/arizona/arizona2.jpeg',
      'images/arizona/arizona3.jpeg',
      'images/arizona/arizona4.jpeg',
      'images/arizona/arizona5.jpeg',
      'images/arizona/arizona6.jpeg',
      'images/arizona/arizona7.jpeg',
      'images/arizona/arizona8.jpeg'
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

