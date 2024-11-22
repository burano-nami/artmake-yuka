<script setup lang="ts">
const mobileImage = new URL('@/assets/images/mobile-image.webp', import.meta.url).href
const desktopImage = new URL('@/assets/images/desktop-image.webp', import.meta.url).href
const isMobile = ref(false)

const checkDeviceWidth = () => {
  isMobile.value = window.innerWidth <= 739
}

onMounted(() => {
  checkDeviceWidth()
  window.addEventListener('resize', checkDeviceWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkDeviceWidth)
})
</script>

<template>
  <div :class="$style.hero_container">
    <div :class="$style.image_contents">
      <div :class="$style.image">
        <img
          :src="isMobile ? mobileImage : desktopImage"
          alt="イメージ画像"
        >
      </div>
      <div :class="$style.title_contents">
        <small :class="$style.catchphrase">「すっぴんでも美しく」</small>
        <h1>医療アートメイク</h1>
      </div>
    </div>
    <div :class="$style.sub_hero">
      <SectionIntroduction />
      <SectionProfile />
    </div>
  </div>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.hero_container {
  max-inline-size: 1200px;
  margin-inline  : auto;
  display        : flex;
  flex-direction : column;
  align-items    : center;
  gap            : calc(var(--sp-larger) * 1.5);

  @include mediaScreen('mobile') {
    /* align-items    : flex-start; */
  }
}

.image_contents {
  display        : flex;
  justify-content: center;
  align-items    : center;
  position       : relative;

  @include mediaScreen('mobile') {
    inline-size: 100%;
    justify-content: flex-start;
  }
}

.image {
  inline-size: 100%;

  @include mediaScreen('mobile') {
    inline-size: 340px;
  }

  img {
    inline-size: 100%;
    object-fit : cover;
  }
}

.title_contents {
  color      : var(--black, #333);
  font-family: "Noto Serif JP";
  line-height: normal;
  position   : absolute;
  top        : 50%;
  left       : 50%;
  transform  : translateY(-50%);

  @include mediaScreen('mobile') {
    top       : auto;
    bottom    : 15%;
    right     : 0;
    left      : auto;
    transform : translateY(0);
    padding   : 0;
    text-align: end;
  }


  .catchphrase {
    font-size  : var(--fs-catchphrase);
    font-weight: 400;

    @include mediaScreen('mobile') {
      background-color: var(--white);
    }
  }

  h1 {
    font-size  : var(--fs-title);
    font-weight: 400;

    @include mediaScreen('mobile') {
      background-color: var(--white);
    }
  }
}

.sub_hero {
  inline-size     : 100%;
  background-color: blanchedalmond;
  display         : flex;
  flex-direction  : column;
  align-items     : center;
  gap             : calc(var(--sp-larger) * 1.5);
  margin-inline   : var(--sp-medium);
  margin-block    : calc(var(--sp-larger) * 1.2);
}


</style>