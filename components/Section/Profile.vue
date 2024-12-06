<!-- <script setup lang='ts'>


</script> -->

<template>
  <div :class=$style.profile_container>
    <div :class="$style.upper_section">
      <div :class=$style.profile_image>
        <img src="assets/images/profile.png" alt="プロフィール画像">
      </div>
      <div :class="$style.profile_details">
        <small>アートメイクアーティスト</small>
        <p :class="$style.name">野村 由香  NOMURA YUKA  (看護師)</p>
        <small>取得資格</small>
        <ul>
          <li>PGC schools卒業</li>
          <li>・アートメイク総合コース</li>
          <li>・ミスティブロウ</li>
          <li>・アイブローデザイナー</li>
          <li>文部科学省後援 色彩検定3級取得</li>
        </ul>
      </div>
    </div>


    <p :class="$style.profile_description">
      23年間の総合病院での看護師経験を活かし、美しさだけでなく安全性や衛生面にも配慮した、
      痛みの少ない施術を提供します。特に自然でふんわりとした眉デザインが得意で、ご年齢に合
      わせた仕上がりを提案いたします。退色はしても消えないアートメイクです。お客様が安心し
      て施術を受けられることを大切にしています。
    </p>
  </div>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.profile_container {
  max-inline-size: var(--contents-lower-width);
  padding-inline: var(--sp-medium);
}

.profile_image {
  inline-size: 250px;

  @include mediaScreen('mobile') {
    inline-size: 170px;
  }

  img {
    inline-size  : 100%;
    object-fit   : cover;
    border-radius: 50%;
  }
}

.upper_section {
  display         : flex;
  justify-content : center;
  align-items     : center;
  gap             : var(--sp-large);
  margin-block-end: var(--sp-large);

  @include mediaScreen('mobile') {
    flex-direction: column;
  }
}

.profile_details {

  small {
    font-weight: 400;
  }
}

.name {
  font-size       : var(--fs-larger);
  font-weight     : 300;
  margin-block-end: var(--sp-large);

  @include mediaScreen('mobile') {
    font-size: var(--fs-large);
  }
}
</style>