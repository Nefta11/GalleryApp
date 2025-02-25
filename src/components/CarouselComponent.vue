<template>
  <div class="carousel-container">
    <slot :currentSlide="currentSlide"></slot>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const currentSlide = ref(1);

    onMounted(() => {
      // Simulación de cambio de diapositiva
      setInterval(() => {
        currentSlide.value = (currentSlide.value % 3) + 1;
      }, 3000);
    });

    return { currentSlide };
  },
};
</script>

<style scoped>
.carousel-container {
  display: flex;
  overflow: hidden;
  position: relative;
}
</style>
