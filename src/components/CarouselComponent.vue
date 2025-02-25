<template>
  <div class="carousel-container">
    <slot :currentSlide="currentSlide" />
    <!-- Navegación -->
    <div class="navigate">
      <div class="toggle-page left">
        <i class="fas fa-chevron-left" />
      </div>
      <div class="toggle-page right">
        <i class="fas fa-chevron-right" />
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
    width: 40px;
    height: 40px;
    background-color: #6347c7;
    color: #fff;
  }
}
</style>
