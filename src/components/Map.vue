<template>
  <div ref="map" class="map" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const map = ref<HTMLElement | null>(null);

onMounted(() => {
  const googleMapsScript = document.createElement("script");
  googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCKBokoicE7UQ4CrgOt-MyTqL5dKUDK-V8`; // 실제 API 키로 대체
  googleMapsScript.async = true;
  googleMapsScript.onload = () => {
    const mapOptions = {
      center: { lat: 37.59811, lng: 126.995061 },
      zoom: 19,
    };
    const googleMap = new google.maps.Map(map.value, mapOptions);

    // 길상사 마커 추가
    const marker = new google.maps.Marker({
      position: { lat: 37.59811, lng: 126.995061 },
      map: googleMap,
      title: "파슬미디어",
    });
  };

  document.head.appendChild(googleMapsScript);
});
</script>

<style scoped>
.map {
  width: 100%;
  height: 40dvh;
}
</style>
