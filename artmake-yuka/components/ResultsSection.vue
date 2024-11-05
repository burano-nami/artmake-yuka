<!-- <script setup lang='ts'>


</script> -->

<template>
  <div :class="$style.results_container">
    <SectionTitle
      title="Results"
      jaTitle="症例写真"
    />
    <CasePhotos />
    <p :class="$style.button_text">その他症例写真、多数載せています</p>
    <BaseButton
      buttonText="公式Instagramはこちら"
      backgroundColor="var(--button-instagram-color)"
    />

  </div>
</template>


<style lang="scss" module>
.results_container {
  inline-size: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
}

.button_text {
  font-size: var(--fs-small);
  margin-block-start: calc(var(--sp-larger) * 2);
  margin-block-end: var(--sp-small);
}
</style>