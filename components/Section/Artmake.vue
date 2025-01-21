<template>
  <SectionContainer :class="$style.artmake_container">
    <SectionTitle
      title="Artmake"
      jaTitle="アートメイクについて"
    />
    <p :class="$style.description">
      医療アートメイクは、皮膚の浅い層に専用の針で色素を入れる施術です。従来の入れ墨とは異なり、
      浅い層に色素を入れるため、1〜3年ほどで色調が薄くなります。流行や好みの変化に合わせてデザ
      インを変えて楽しむことができます。
    </p>
    <div :class="$style.image">
      <img src="assets/images/comming-soon2.png" alt="commingsoon">
    </div>

    <!-- 真ん中の層 -->
    <div :class="$style.middle_container">
      <div :class="$style.motif_contents">
        <img src="assets/images/motif.png" alt="お客様の希望・施術者の提案">
      </div>
      <p :class="$style.motif_text">
        お客様のご希望を伺いながら、骨格や筋肉の状態を確認し、最適なデザインをご提案します。お顔は必ずしも左右対称ではなく、左右を揃えすぎるとかえって不自然になることや年齢の変化による眉が下がりなども考慮する必要があります。お客様が一番美しく見えるデザインを一緒に決めていきます。
      </p>
    </div>

    <!-- 下の層 -->
    <div :class="$style.card_contents">
      <div :class="$style.card">
        <h3>アートメイクの安全性</h3>
        <p>
          施術は医師の診察のもと、医療機関で行います。使用する針は滅菌済みの使い捨て品を使用し、色素はEU REACHおよび米国FDAの基準を満たした安全性の高い色素を使用します。
        </p>
      </div>
      <div :class="$style.card">
        <h3>施術時の痛みについて</h3>
        <p>
          施術では、クリームタイプの表面麻酔を使用します。施術開始時に軽いチクッとした痛みを感じることがありますが、徐々に麻酔が効いていきます。痛みの感じ方には個人差があり、強く感じる方もいらっしゃいますが、ほとんどの方は施術中にリラックスして眠っていることが多いです。もし施術中に痛みが気になる場合は、その都度麻酔を追加することも可能です。また、リップ施術に限り、痛みが強い方にはブロック麻酔注射も対応しています。
        </p>
      </div>
    </div>
  </SectionContainer>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.artmake_container {
  max-inline-size: var(--contents-max-width);
  display        : flex;
  flex-direction : column;
  align-items    : center;
  gap            : var(--sp-large);
  inline-size    : 100%;
}

.description {
  inline-size       : var(--contents-lower-width);
  inline-size       : 100%;
  margin-block-start: var(--sp-large);

  @include mediaScreen('mobile') {
    inline-size: 100%;
  }
}

.image {

  img {
    inline-size: 100%;
  }
}

/* 真ん中の層 */
.middle_container {
  inline-size: 100%;
  block-size : fit-content;
  position   : relative;
}

.motif_contents {
  inline-size: 590px;

  @include mediaScreen('mobile') {
    inline-size  : 360px;
    margin-inline: auto;
  }
}

.motif_text {
  inline-size        : min(470px, 100%);
  margin-inline-start: auto;
  margin-block-start : calc(var(--sp-large) * -2);

  @include mediaScreen('mobile') {
    margin-block-start: calc(var(--sp-large) * -1);
  }
}

/* 下の層 */
.card_contents {
  display              : grid;
  grid-template-columns: 1fr 1fr;
  gap                  : var(--sp-large,);

  @include mediaScreen('mobile') {
    grid-template-columns: 1fr;
  }
}

.card {
  display       : flex;
  flex-direction: column;
  align-items   : center;
  gap           : var(--sp-small);
  padding       : var(--sp-large);
  border-radius : 15px;
  background    : var(--pale-green);

  h3 {
    font-size  : var(--fs-larger);
    font-weight: 400;
  }
}
</style>