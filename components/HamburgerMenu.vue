<script lang="ts" setup>
const navItems = [
{ name: 'アートメイクについて', path: '/#artmake' },
  { name: '症例写真', path: '/#results' },
  { name: '施術の流れ', path: '/#process' },
  { name: 'メニュー/料金', path: '/#menu' },
  { name: 'アクセス', path: '/#access' },
]

const isActive = ref(false)
</script>

<template>
  <div :class="[$style.menu_list, isActive ? $style.active : '']">
    <div :class="$style.contents_inner">
      <div :class="$style.logo">
        <img
          src="assets/images/logo_notext.png"
          alt="YUKA NOMURA"
      </div>
      <ul>
        <li
          v-for="item in navItems.filter(item => item.name !== 'HOME')"
          :key="item.name"
          @click="isActive = false"
        >
          <NuxtLink :to="item.path">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
      <BaseButton
        type="button"
        buttonText="ご予約はこちらから"
        variant="primary"
      />
    </div>
  </div>
    <div
      :class="$style.btn"
      @click="isActive = !isActive"
    >
      <span :class="[$style.btn_bar, isActive ? $style.active : '']"></span>
      <span :class="[$style.btn_bar, isActive ? $style.active : '']"></span>
      <span :class="[$style.btn_bar, isActive ? $style.active : '']"></span>
    </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;


.menu_list {
  display         : flex;
  inline-size     : 100%;
  block-size      : 100svh;
  color           : var(--black);
  background-color: var(--white);
  font-weight     : 400;
  justify-content : center;
  align-items     : center;
  text-align      : center;
  opacity         : 0;
  transition      : opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  position        : fixed;
  top             : 0;
  z-index         : var(--z-index-overlay);
  pointer-events  : none;

  &.active {
    opacity       : 1;
    pointer-events: all;
  }
}

.contents_inner {
  display       : flex;
  flex-direction: column;
  align-items   : center;
  gap           : var(--sp-larger);

  li {
    margin-block: var(--sp-medium);
  }
}

.logo {
  inline-size: 80px;

  > img {
    inline-size: 100%;
  }
}

.btn {
  position       : fixed;
  top            : calc(var(--sp-medium)* 1.8);
  left          : var(--sp-large);
  inline-size    : 30px;
  block-size     : 20px;
  display        : none;
  flex-direction : column;
  justify-content: space-between;
  cursor         : pointer;
  z-index        : var(--z-index-overlay);
  display        : none;

  @include mediaScreen('tablet') {
    display: flex;
    z-index: var(--z-index-max);
  }
}

.btn_bar {
  inline-size     : 100%;
  block-size      : 1px;
  background-color: var(--gray);
  border-radius   : 2px;

  &.active {
    transition: all 0.4s ease-in-out;

    &:nth-of-type(1) {
      transform: translateY(9px) rotate(45deg);
    }
    &:nth-of-type(2) {
      opacity: 0;
    }
    &:nth-of-type(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  }
}
</style>