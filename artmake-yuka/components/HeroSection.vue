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
      <div :class="$style.title_contents">
        <small :class="$style.catchphrase">「すっぴんでも美しく」</small>
        <h1>医療アートメイク</h1>
      </div>
    </div>
    <IntroductionSection />
    <ProfileSection />
  </div>
</template>


<style lang="scss" module>
.image_contents {
  display        : flex;
  justify-content: center;
  align-items    : center;
  margin: calc(var(--sp-medium) * 2);
  position: relative;
}

.image {
  inline-size: 1200px;

  img {
    inline-size: 100%;
    object-fit : cover;
  }
}

.title_contents {
  color: var(--black, #333);
  font-family: "Noto Serif JP";
  line-height: normal;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  padding: var(--sp-medium);


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