<!-- <script setup lang='ts'>


</script> -->

<template>
  <div :class="$style.results_container">

    <div :class="$style.results_contents">
      <div :class="$style.title">
        <p :class="$style.service">手彫り眉<br>アイブロー</p>
        <p :class="$style.age_gender">20代/女性</p>
      </div>
      <div :class="$style.image">
        <img src="assets/images/case-photos-1.webp" alt="症例写真">
      </div>
    </div>

    <div :class="[$style.results_contents, $style.contents_right]">
      <div :class="$style.title">
        <p :class="$style.service">手彫り眉<br>アイブロー</p>
        <p :class="$style.age_gender">30代/女性</p>
      </div>
      <div :class="$style.image">
        <img src="assets/images/case-photos-2.webp" alt="症例写真">
      </div>
    </div>

    <div :class="$style.results_contents">
      <div :class="$style.title">
        <p :class="[$style.service]">アイブロー<br>アイライン</p>
        <p :class="$style.age_gender">40代/女性</p>
      </div>
      <div :class="$style.image">
        <img src="assets/images/case-photos-3.webp" alt="症例写真">
      </div>
    </div>

    <div :class="[$style.results_contents, $style.contents_right]">
      <div :class="$style.title">
        <p :class="$style.service">リップ</p>
        <p :class="$style.age_gender">30代/女性</p>
      </div>
      <div :class="$style.image">
        <img src="assets/images/case-photos-4.webp" alt="症例写真">
      </div>
    </div>

  </div>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.results_container {
  inline-size          : fit-content;
  display              : grid;
  grid-template-columns: 1fr 1fr;
  gap                  : var(--sp-large);

  @include mediaScreen('tablet') {
    gap                  : var(--sp-medium);
  }

  @include mediaScreen('mobile') {
    grid-template-columns: 1fr;
  }
}

.results_contents {
  inline-size          : fit-content;
  display              : grid;
  gap                  : var(--sp-small);
  grid-template-columns: 1fr 380px; 
  grid-template-areas  : "title image";

  &:nth-child(even) {
    grid-template-columns: 380px 1fr; 
    grid-template-areas: "image title";
  }

  @include mediaScreen('tablet') {
    inline-size          : 100%;
    grid-template-columns: 1fr 250px;

    &:nth-child(even) {
      grid-template-columns: 250px 1fr; 
    }
  }

  @include mediaScreen('mobile') {
    inline-size          : 100%;
    grid-template-columns: 1fr 200px;

    &:nth-child(even) {
      grid-template-areas: "title image";
      grid-template-columns: 1fr 200px;
    }
  }
}

.title {
  inline-size   : 100%;
  display       : flex;
  flex-direction: column;
  gap           : var(--sp-small);
  grid-area     : title;

  .service {
    font-size  : var(--fs-medium);
    font-weight: 500;
  }

  .age_gender {
    font-size  : var(--fs-small);
    font-weight: 300;
  }
}

.image {
  max-inline-size: 380px;
  inline-size    : 100%;
  aspect-ratio   : 1 / 1;
  grid-area      : image;

  img {
    inline-size: 100%;
  }
}
</style>