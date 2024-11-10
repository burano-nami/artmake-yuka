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
    <div :class="$style.section_container">
      <slot />
    </div>
    <!-- <SectionFooter /> -->
  </main>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.section_container {
  padding-inline: var(--sp-larger);
  padding-block: var(--sp-larger);

  @include mediaScreen('tablet') {
    padding-inline: var(--sp-medium);
    padding-block: calc(var(--sp-larger) * 2.5);
  }
}

.header {
  position   : fixed;
  top        : 0;
  inline-size: 100%;
  z-index    : var(--z-index-header);
}
</style>