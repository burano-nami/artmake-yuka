<!-- <script setup lang='ts'>


</script> -->

<template>
  <div :class="$style.main_container"> 
    <p>
      ご予約に際して、
      <br :class="$style.mobile_only" />
      必ず下記の内容をご確認ください。
    </p>
    <SectionRisks />
    <SectionPrecautions />
    <SectionPolicy />
    <SectionBooking />
  </div>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.main_container {
  display        : flex;
  flex-direction : column;
  align-items    : center;
  gap           : calc(var(--sp-larger) * 5);

  > p {
    margin-block-start: 200px;
    text-align: center;
  }

  @include mediaScreen('mobile') {
    gap: calc(var(--sp-larger) * 3);
  }
}

.mobile_only {
    display: none;

    @include mediaScreen('mobile') {
      display: inline; 
    }
  }
</style>