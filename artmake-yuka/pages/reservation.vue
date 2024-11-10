<!-- <script setup lang='ts'>


</script> -->

<template>
  <div :class="$style.main_container"> 
    ご予約に際して、必ず下記の内容をご確認ください。
    <SectionRisks />
  </div>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.main_container {
  display        : flex;
  flex-direction : column;
  align-items    : center;
  gap           : calc(var(--sp-larger) * 5);

  @include mediaScreen('mobile') {
    gap: calc(var(--sp-larger) * 3);
  }
}
</style>