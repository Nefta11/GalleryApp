<template>
  <div class="carousel-container">
    <slot :currentSlide="currentSlide" />
    <!-- Navegación -->
    <div class="navigate">
      <div class="toggle-page left">
        <i @click="prevSlide" class="fas fa-chevron-left"></i>
      </div>
      <div @click="nextSlide" class="toggle-page right">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const currentSlide = ref(1);
    const getSlideCount = ref(0);

    // Siguiente Slide
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    // Slide Anterior
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = getSlideCount.value;
        return;
      }
      currentSlide.value -= 1;
    };

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
      console.log("Slide count:", getSlideCount.value);
      // Simulación de cambio de diapositiva
      setInterval(() => {
        currentSlide.value = (currentSlide.value % getSlideCount.value) + 1;
      }, 10000);
    });

    return { currentSlide, getSlideCount, nextSlide, prevSlide };
  },
};
</script>

<style lang="scss">
.carousel-container {
  display: flex;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
}

.navigate {
  padding: 0 16px;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;

  .toggle-page {
    display: flex;
    flex: 1;
  }

  .right {
    justify-content: flex-end;
  }

  i {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 60px; 
    height: 60px;
    background-color: #ce12df;
    color: #fff;
    transition: transform 0.2s; 
  }

  i:active {
    transform: scale(1.1);
  }
}
</style>
