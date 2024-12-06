<!-- <script setup lang='ts'>


</script> -->

<template>
  <SectionContainer :class="$style.results_container">
    <SectionTitle
      title="Results"
      jaTitle="症例写真"
    />
    <CasePhotos />
    <div :class="$style.button_area">
      <p :class="$style.button_text">その他症例写真、多数載せています</p>
      <BaseButton
        type="button"
        buttonText="公式Instagramはこちら"
        variant="instagram"
      />
    </div>
  </SectionContainer>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.results_container {
  inline-size   : 100%;
  display       : flex;
  flex-direction: column;
  align-items   : center;
  gap           : var(--sp-larger);
  position: relative;


  &::before {
    content            : '';
    background-image   : url('assets/images/flower-2.webp');
    background-repeat  : no-repeat;
    background-position: center;
    background-size    : contain;
    inline-size        : 700px;
    block-size         : 740px;
    position           : absolute;
    top                : -30px;
    left               : -130px;
    z-index            : -1;
    opacity            : .2;

    @include mediaScreen('mobile') {
      inline-size: 450px;
      block-size : 500px;
    }
  }

  &::after {
    content            : '';
    background-image   : url('assets/images/flower-1.webp');
    background-repeat  : no-repeat;
    background-position: center;
    background-size    : contain;
    inline-size        : 600px;
    block-size         : 670px;
    position           : absolute;
    bottom             : -100px;
    right              : -180px;
    z-index            : -1;
    opacity            : .2;

    @include mediaScreen('mobile') {
      inline-size: 550px;
      block-size : 540px;
      bottom     : -200px;
    }
  }
}

.button_area {
  display       : flex;
  flex-direction: column;
  align-items   : center;
}

.button_text {
  font-size         : var(--fs-small);
  margin-block-start: var(--sp-larger);
  margin-block-end  : var(--sp-small);
}
</style>