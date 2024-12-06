<script setup lang='ts'>
const props = defineProps<{
  title: string
  jaTitle: string
}>()


</script>

<template>
  <div :class="$style.section_title_container">
    <h2 :class="$style.section_title">{{ title }}</h2>
    <p :class="$style.section_title_jp">{{ jaTitle }}</p>
  </div>
</template>


<style lang="scss" module>

.section_title_container {
  display       : flex;
  flex-direction: column;
  align-items   : center;
  gap           : var(--sp-large,);
}

.section_title {
  font-family: 'Cormorant Garamond';
  font-size  : var(--fs-section-title);
  color      : var(--gray);
  font-weight: 400;
  line-height: 0.6;
}

.section_title_jp {
  color      : var(--gray, #7F8284);
  text-align : center;
  font-size  : var(--fs-larger);
  font-weight: 500;
  line-height: normal;
}
</style>