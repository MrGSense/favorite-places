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
