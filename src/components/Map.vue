<template>
  <div class="container mt-6">
    <div id="mapid"></div>
  </div>  
</template>

<script>
export default {
  name: 'Map',
  mounted() {
    var mymap = L.map('mapid').setView([36.72, -4.42], 15);
  	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    minZoom: 14,
		maxZoom: 16,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
  }).addTo(mymap);
  var marker = L.marker([36.72, -4.42]).addTo(mymap)
  }
}
</script>

<style>
  #mapid { height: 80vh; border: 4px black solid;}
</style>