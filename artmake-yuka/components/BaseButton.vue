<script setup lang='ts'>
const props = defineProps<{
  buttonText: string;
  backgroundColor: string;
}>()


</script>

<template>
  <div>
    <button
      :class="$style.button"
      :style="{ background: props.backgroundColor }"
    >
      {{ buttonText }}
    </button>
  </div>
</template>


<style lang="scss" module>
.button {
  display        : flex;
  height         : 50px;
  padding        : var(--sp-medium, 16px) 80px;
  justify-content: center;
  align-items    : center;
  border-radius  : 50px;
  opacity        : 0.8;
  color          : var(--white);
  font-family    : "Noto Sans JP";
  font-size      : 16px;
  font-style     : normal;
  font-weight    : 700;
  letter-spacing : var(--line-height-normal);

  &:hover {
    opacity: 1;
  }
}

</style>