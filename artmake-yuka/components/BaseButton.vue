<script setup lang='ts'>
const props = defineProps<{
  buttonText: string;
  backgroundColor: string;
}>()

// リンクさきを、インスタ、ラインもつけないといけない
</script>

<template>
  <NuxtLink to="/reservation">
    <button
      :class="$style.button"
      :style="{ background: props.backgroundColor }"
    >
      {{ buttonText }}
    </button>
  </NuxtLink>
</template>


<style lang="scss" module>
.button {
  inline-size: 300px;
  display        : flex;
  height         : 50px;
  padding-block        : var(--sp-medium);
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
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}

</style>