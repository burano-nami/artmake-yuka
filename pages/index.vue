<!-- <script setup lang='ts'>

</script> -->


<template>
  <FadeInContainer :class="$style.main_container">
    <div :class="$style.hero_bg"> 
      <SectionHero />
    </div>
    <SectionArtmake id="artmake" :class="$style.artmake"/>
    <SectionResults id="results"/>
    <SectionProcess id="process"/>
    <SectionMenu id="menu"/>
    <SectionAccess id="access"/>
  </FadeInContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.main_container {
  display        : flex;
  flex-direction : column;
  align-items    : center;
  gap           : calc(var(--sp-larger) * 5);

  @include mediaScreen('mobile') {
    gap: calc(var(--sp-larger) * 3);
  }
}

.hero_bg {
  inline-size        : 100vw;
  position           : relative;

  &::before {
    content          : '';
  position         : absolute;
  top              : 0;
  left             : 0;
  inline-size      : 100%;
  block-size       : 100%;
  background-image : url('/assets/images/desktop-bg.webp');
  background-size  : cover; 
  background-position: center;
  background-repeat: no-repeat; 
  z-index          : -1;
  opacity: 0.7;

    @include mediaScreen('mobile') {
      background-image : url('/assets/images/mobile-bg.png');
      
    }
  }

  &::after {
    content          : '';
    position         : absolute;
    top:0;
    inline-size      : 100%;
    block-size       : 100%;
    background       : linear-gradient(180deg,rgba(255, 255, 255, 1) 15%, rgba(255, 255, 255, 0) 40%);
    z-index          : -1;
  }

  @include mediaScreen('mobile') {
    background       : linear-gradient(180deg,rgba(255, 255, 255, 1) 8%, rgba(255, 255, 255, 0) 40%);
  }
}
</style>