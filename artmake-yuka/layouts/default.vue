<script lang="ts" setup>
const isHidden = ref(true);

// スクロールイベントをハンドリングする関数
function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  isHidden.value = scrollTop === 0;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // コンポーネントマウント時に一度チェック
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <main>
    <HeaderMenu
      :class="$style.header"
      :isTransparent="isHidden"
    />
    <!-- <HamburgerMenu :class="$style.hamburger_menu"/> -->
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

  @include mediaScreen('tablet') {
    padding-inline: var(--sp-medium);
  }
}
</style>