<!-- <script setup lang='ts'>

</script> -->


<template>
  <div :class="$style.main_container"> 
    <SectionHero />
    <SectionArtmake id="artmake" :class="$style.artmake"/>
    <SectionResults id="results"/>
    <SectionProcess id="process"/>
    <SectionMenu id="menu"/>
    <SectionAccess id="access"/>
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

<style>
#artmake, #results, #process, #menu, #access {
  padding-top: 100px; /* 固定ヘッダーの高さ分 */
}
</style>