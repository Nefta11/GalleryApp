<template>
  <div class="slide-wrapper">
    <transition name="slide">
      <slot />
    </transition>
  </div>
</template>

<script>
export default {
  name: "SlideWrapper",
};
</script>

<style scoped>
.slide-wrapper {
  flex: 0 0 auto;
}
</style>
