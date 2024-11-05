<!-- <script setup lang='ts'>


</script> -->

<template>
  <div :class="$style.main_container"> 
    <HeroSection />
    <ArtmakeSection />
    <ResultsSection />
  </div>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.main_container {
  display        : flex;
  flex-direction : column;
  align-items    : center;
  gap           : calc(var(--sp-larger) * 6);

  @include mediaScreen('mobile') {
    gap: calc(var(--sp-larger) * 4);
  }
}

</style>