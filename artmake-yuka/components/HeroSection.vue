<script setup lang="ts">

</script>

<!-- <script setup lang='ts'>


</script> -->

<template>
  <div :class="$style.hero_container">
    <div :class="$style.image_contents">
      <div :class="$style.image">
        <img
          src="assets/images/desktop-image.webp"
          alt="イメージ画像"
        >
      </div>
    </div>
    <div :class="$style.title_contents">
      <small :class="$style.catchphrase">「すっぴんでも美しく」</small>
      <h1>医療アートメイク</h1>
    </div>
    <SubHeroSection />
  </div>
</template>


<style lang="scss" module>
.image_contents {
  display        : flex;
  justify-content: center;
  align-items    : center;
  padding: calc(var(--sp-medium) * 5);
  /* padding-inline: calc(var(--sp-medium) * 2); */
}

.image {
  inline-size: 1200px;
  block-size : 700px;

  img {
    inline-size: 100%;
    object-fit : cover;
  }
}

.title_contents {
  color: var(--black, #333);
  font-family: "Noto Serif JP";
  line-height: normal;

  .catchphrase {
    font-size: var(--fs-catchphrase);
    font-weight: 400;
  }

  h1 {
    font-size: var(--fs-title);
    font-weight: 400;
  }
}


</style>