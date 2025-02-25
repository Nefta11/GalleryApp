<template>
  <div class="carousel-container">
    <slot :currentSlide="currentSlide" />
    <!--Navegacrión-->
    <div class="navigate">
      <div class="togglet-page left">
        <i class="fast fa-chevron-left"/>
      </div>
      <div class="togglet-page rigth">
        <i class="fast fa-chevron-rigth"/>
      </div>
    </div>
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
