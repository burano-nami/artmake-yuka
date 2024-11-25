<script setup lang='ts'>
const props = defineProps<{
  buttonText: string;
  backgroundColor: string;
}>()

// リンクさきを、インスタ、ラインもつけないといけない
</script>

<template>
  <button
    :class="$style.button"
    :style="{ background: props.backgroundColor }"
  >
    {{ buttonText }}
  </button>
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

  &:hover {
    opacity: 1;
  }

  @include mediaScreen('mobile') {
    inline-size: 220px;
    block-size : 40px;
  }
}

</style>