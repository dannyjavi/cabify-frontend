<template>
  <div id="mapid" class="container"></div>
</template>

<script>
export default {
  name: "Map",
  props: ['position'],
  mounted() {
    let mymap = L.map("mapid").setView([36.72, -4.42], 13);
    
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
    // mymap.on("locationfound", (e) => {
    //   const coords = [e.latlng.lat, e.latlng.lng];
    //   let marker = L.marker(coords).bindPopup("You are here!").addTo(mymap);
    //   console.log(e);
    // });
  },
};
</script>

<style>
#mapid {
  height: 50vh;
  width: 100vw;
}
</style>