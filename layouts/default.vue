<script lang="ts" setup>
const isHidden = ref(true);

</script>

<template>
  <main>
    <HeaderMenu :class="$style.header"/>
    <HamburgerMenu :class="$style.hamburger_menu"/>
    <div :class="$style.content">
      <slot />
    </div>
    <div :class="$style.footer" />
  </main>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
main {
  min-block-size : 100vh;
  display: flex; /* コンテナ全体をフレックスに */
  flex-direction: column;
}

.header {
  position   : fixed;
  top        : 0;
  inline-size: 100%;
  z-index    : var(--z-index-header);
}

.content {
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer {
  inline-size: 100%;
  block-size : 200px;
  background : var(--logo-green);

  @include mediaScreen('mobile') {
    block-size: 100px;
  }

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