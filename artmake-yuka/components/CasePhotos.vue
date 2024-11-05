<!-- <script setup lang='ts'>


</script> -->

<template>
  <div :class="$style.results_container">

    <div :class="$style.results_contents">
      <div :class="$style.title">
        <p :class="$style.service">手彫り眉<br>アイブロー</p>
        <p :class="$style.age_gender">20代/女性</p>
      </div>
      <div :class="$style.image">
        <img src="assets/images/case-photos-1.webp" alt="症例写真">
      </div>
    </div>

    <div :class="[$style.results_contents, $style.contents_right]">
      <div :class="$style.title_right">
        <p :class="$style.service_right">手彫り眉<br>アイブロー</p>
        <p :class="$style.age_gender">30代/女性</p>
      </div>
      <div :class="$style.image">
        <img src="assets/images/case-photos-2.webp" alt="症例写真">
      </div>
    </div>

    <div :class="$style.results_contents">
      <div :class="$style.title">
        <p :class="[$style.service]">アイブロー<br>アイライン</p>
        <p :class="$style.age_gender">40代/女性</p>
      </div>
      <div :class="$style.image">
        <img src="assets/images/case-photos-3.webp" alt="症例写真">
      </div>
    </div>

    <div :class="[$style.results_contents, $style.contents_right]">
      <div :class="$style.title_right">
        <p :class="$style.service_right">リップ</p>
        <p :class="$style.age_gender">30代/女性</p>
      </div>
      <div :class="$style.image">
        <img src="assets/images/case-photos-4.webp" alt="症例写真">
      </div>
    </div>

  </div>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.results_container {
  inline-size: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-large);

  /* タブレットサイズで1列レイアウトに切り替え */
  @include mediaScreen('tablet') {
    grid-template-columns: 1fr;
  }
}

.title {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--sp-small);
  
  .service {
    font-size: var(--fs-large);
    font-weight: 500;
    text-align: right;
  }

  .age_gender {
    font-size: var(--fs-small);
    font-weight: 300;
  }
}

.title_right {
  align-items: flex-start;

  .service_right {
    font-size: var(--fs-large);
    font-weight: 500;
    text-align: left;
  }
}

.image {
  inline-size: 380px;
  aspect-ratio: 1 / 1;

  img {
    inline-size: 100%;
  }
}

.results_contents {
  display: grid;
  grid-template-columns: 21% auto;
  gap: calc(var(--sp-medium) * 1.5);
  @include mediaScreen('desktop') {

    /* 偶数番目の要素に対して順番を入れ替える */
    &:nth-child(even) {
      grid-template-columns: auto 21%; /* 偶数番目は写真を左、タイトルを右に配置 */
      grid-auto-flow: column;  /* 偶数番目は写真を左、タイトルを右に配置 */

      .title {
        grid-column: 2; /* タイトルを右側に配置 */
      }

      .image {
        grid-column: 1; /* 画像を左側に配置 */
      }
    }
  }
}



</style>