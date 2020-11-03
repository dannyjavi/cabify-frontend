<template>
  <div id="mapid"></div>
</template>

<script>
export default {
  name: "Map",
  props: ['userPosition', 'driverPosition'],
  mounted() {
    let mymap = L.map("mapid").fitBounds(this.userPosition, this.driverPosition);
    
    // mymap.locate({ enableHighAccuracy: true });
    // mymap.locate({ setView: true });
    let tileURL = "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";
    L.tileLayer(tileURL, {
      minZoom: 10,
      maxZoom: 20,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
    }).addTo(mymap);
    this.vehicles.forEach(item => {
      let marker = L.marker(item.position.coordinates).bindPopup("You are here!").addTo(mymap)
    })

    // función para ubicar en el mapa según coodernadas.
    /* function createMarkers()
    mymap.on("locationfound", (e) => {
      const coords = [e.latlng.lat, e.latlng.lng];
      let marker = L.marker(coords).bindPopup("You are here!").addTo(mymap);
      console.log(e);
    }); */
  },
};
</script>

<style>
#mapid {
  height: 80vh;
  width: 100vh;
}
</style>