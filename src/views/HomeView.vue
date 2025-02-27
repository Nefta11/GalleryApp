<template>
  <div class="home">
    <CarouselComponent class="carousel" v-slot="{ currentSlide }">
      <SlideWrapper v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info slide">
          <img
            :src="slide.url"
            alt="slide"
            class="img"
          />
        </div>
      </SlideWrapper>
    </CarouselComponent>
  </div>
</template>

<script>
import CarouselComponent from "@/components/CarouselComponent.vue";
import SlideWrapper from "@/components/SlideWrapper.vue";
import { ref, onMounted } from "vue";
import { fetchImages } from "@/services/imageService";

export default {
  name: "HomeView",
  components: { CarouselComponent, SlideWrapper },
  setup() {
    const carouselSlides = ref([]);

    onMounted(async () => {
      try {
        carouselSlides.value = await fetchImages();
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    });

    return { carouselSlides };
  },
};
</script>

<style lang="css" scoped>
.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;
}
.slide-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  min-width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
