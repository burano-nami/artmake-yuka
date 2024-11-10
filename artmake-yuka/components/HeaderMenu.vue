<script lang="ts" setup>
const navItems = [
  { name: 'アートメイクについて', path: '#artmake' },
  { name: '症例写真', path: '#results' },
  { name: '施術の流れ', path: '#process' },
  { name: 'メニュー/料金', path: '#menu' },
  { name: 'アクセス', path: '#access' },
]
</script>

<template>
  <div
    :class="$style.header_container"
  >
    <NuxtLink
      to="/"
      :class="$style.logo"
      >
      <div :class="$style.logo">
        <img
          src="assets/images/logo.webp"
          alt="YUKA NOMURA"
      </div>
    </NuxtLink>
    <div :class="$style.menu_wrapper">
      <ul :class="$style.list">
        <li
          v-for="item in navItems"
          :key="item.name"
        >
          <NuxtLink
            :to="item.path"
            :class="$style.menu"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
      <BaseButton
        buttonText="ご予約はこちらから"
        backgroundColor="var(--button-primary-color)"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.header_container {
  inline-size     : 100%;
  display         : flex;
  justify-content : space-between;
  align-items     : center;
  padding         : var(--sp-small) var(--sp-large);
  background-color: var(--white);
  z-index         : var(--z-index-header);
}

.logo {
  inline-size: 80px;

  > img {
    inline-size: 100%;
  }

  @include mediaScreen('mobile') {
    opacity: 0;
    pointer-events: none;
  }
}

.menu_wrapper {
  display    : flex;
  gap        : var(--sp-large);
  align-items: center;
}

.list {
  display: flex;
  gap    : calc(var(--sp-medium) * 1.5);

  @include mediaScreen('tablet') {
    display: none;
  }

  li {
    color      : var(--black);
    font-size  : var(--fs-button);
    font-weight: 400;
    display    : flex;
    gap        : var(--sp-large);
  }
}

.menu {
  position   : relative;
  inline-size: 100%;

  &:hover::before {
    content                  : '';
    inline-size              : 100%;
    height                   : 1px;
    background-color         : var(--gold);
    position                 : absolute;
    bottom                   : -5px;
    animation-name           : hoverAnime;
    animation-duration       : 0.2s;
    animation-timing-function: ease;
    animation-fill-mode      : forwards;
  }
}

@keyframes hoverAnime {
  0% {
    inline-size: 0;
  }
  100% {
    inline-size: 100%;
  }
}
</style>