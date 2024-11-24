<!-- <script setup lang='ts'>


</script> -->

<template>
  <div :class="$style.results_container">
    <SectionTitle
      title="Results"
      jaTitle="症例写真"
    />
    <CasePhotos />
    <div :class="$style.button_area">
      <p :class="$style.button_text">その他症例写真、多数載せています</p>
      <BaseButton
        buttonType="button"
        buttonText="公式Instagramはこちら"
        backgroundColor="var(--button-instagram-color)"
      />
    </div>
  </div>
</template>


<style lang="scss" module>
.results_container {
  inline-size   : 100%;
  display       : flex;
  flex-direction: column;
  align-items   : center;
  gap           : var(--sp-larger);
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