<script lang="ts" setup>
const isHidden = ref(true);

// スクロールイベントをハンドリングする関数
// function handleScroll() {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   isHidden.value = scrollTop === 0;
// }

// onMounted(() => {
//   window.addEventListener('scroll', handleScroll);
//   handleScroll(); 

// onUnmounted(() => {
//   window.removeEventListener('scroll', handleScroll);
// });
</script>

<template>
  <main>
    <HeaderMenu :class="$style.header"/>
    <HamburgerMenu :class="$style.hamburger_menu"/>
      <slot />
    <div :class="$style.footer" />
  </main>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.header {
  position   : fixed;
  top        : 0;
  inline-size: 100%;
  z-index    : var(--z-index-header);
}

.footer {
  inline-size: 100%;
  block-size : 200px;
  background : var(--logo-green);
  margin-block-start: calc(var(--sp-larger) * 5);

  &::before {
    content         : '';
    position        : absolute;
    inline-size     : 100%;
    block-size      : 20px;
    background      : linear-gradient(274deg, #FBEDD7 6.24%, #CEA77E 48.5%, #A16231 89.93%);
    background-color: pink;
  }
}
</style>