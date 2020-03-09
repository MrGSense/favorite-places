const mymap = L.map("map").setView([39.9612, -82.9988], 10);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoibXJnc2Vuc2UiLCJhIjoiY2s3a3ViaTY0MDB1ZDNscWc3M3R4eXp5OSJ9.XLC5x6YzYek-R9Yo4Y4OsA"
  }
).addTo(mymap);

const favoritePlaces = [
  {
    name: "Jeni's Splendid Ice Creams",
    description: "One of my favorite ice cream places in existance",
    lat: 40.099371,
    long: -83.113963
  },
  {
    name: "Akai Hana",
    description: "Hands down my favorite sushi place",
    lat: 40.050628,
    long: -83.051885
  },
  {
    name: "Woodys Wing House",
    description: "A really good wing place with some excellent sauces",
    lat: 40.11769,
    long: -83.011744
  }
];

for (let i = 0; i < favoritePlaces.length; i++) {
  let marker = L.marker([favoritePlaces[i].lat, favoritePlaces[i].long]).addTo(
    mymap
  );

  marker.bindPopup(
    `<b>${favoritePlaces[i].name}</b><br>${favoritePlaces[i].description}`
  );
}
