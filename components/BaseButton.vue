<script setup lang='ts'>
const props = defineProps<{
    buttonText: string;
    variant: 'default' | 'disabled' | 'line' | 'instagram' | 'contact' ;
  }>()

  // 各リンクを設定
const urls = {
  instagram: 'https://www.instagram.com/nomura_artmake/', 
  line: 'https://lin.ee/QxVySL9' // LINEのリンク
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <template v-if="variant === 'instagram' || variant === 'line'">
    <a
      :href="urls[variant]"
      target="_blank"
      rel="noopener noreferrer"
      :class="[$style.button, $style[variant]]"
    >
      {{ buttonText }}
    </a>
  </template>
  <template  v-else-if="variant === 'contact'">
    <button
      type="submit"
      :class="[$style.button, $style[variant]]"
    >
      {{ buttonText }}
    </button>
  </template>
  <template v-else>
    <NuxtLink
      to="/reservation"
      :class="[$style.button, $style[variant]]"
      @click.native="scrollToTop"
    >
      {{ buttonText }}
    </NuxtLink>
  </template>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.button {
  inline-size    : 300px;
  block-size     : 50px;
  display        : flex;
  padding-block  : var(--sp-medium);
  justify-content: center;
  align-items    : center;
  border-radius  : 50px;
  opacity        : 0.8;
  color          : var(--white);
  font-family    : "Noto Sans JP";
  font-size      : var(--fs-button);
  font-style     : normal;
  font-weight    : 500;
  letter-spacing : var(--line-height-normal);
  cursor         : pointer;

  &.default, &.contact {
    background-image: var(--button-primary-color);
  }

  &.disabled {
    background-color: var(--light-gray);
    pointer-events  : none;
  }

  &.line {
    background-image: var(--button-line-color);
  }

  &.instagram {
    background-image: var(--button-instagram-color);
  }

  &:hover {
    opacity: 1;
  }

  @include mediaScreen('mobile') {
    inline-size: 220px;
    block-size : 40px;
  }
}

</style>