
<!-- <script setup lang='ts'>


</script> -->

<template>
  <div :class="$style.artmake_container">
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
      <img src="assets/images/no_image_desktop.png" alt="noImage">
    </div>

    <!-- 真ん中の層 -->
    <div :class="$style.motif_contents">
      <div :class="[$style.motif, $style.motif1]">
        <div :class="$style.motif_background" />
        <span>お客様の希望</span>
      </div>
      <div :class="[$style.motif, $style.motif2]">
        <div :class="[$style.motif_background, $style.gray]" />
        <span>施術者の提案</span>
      </div>
      <p :class="$style.motif_text">
        お客様のご希望を伺いながら、骨格や筋肉の状態を確認し、最適なデザインをご提案します。
        お顔は必ずしも左右対称ではなく、左右を揃えすぎるとかえって不自然になることや年齢の
        変化による眉が下がりなども考慮する必要があります。お客様が一番美しく見えるデザイン
        を一緒に決めていきます。
      </p>
    </div>

    <!-- 下の層 -->
    <div :class="$style.card_contents">
      <div :class="$style.card">
        <h3>アートメイクの安全性</h3>
        <p>
          施術は医師の診察のもと、医療機関で行います。使用する針は滅菌済みの使い捨て品を使用し、
          色素はEU REACHおよび米国FDAの基準を満たした安全性の高い色素を使用します。
        </p>
      </div>
      <div :class="$style.card">
        <h3>施術時の痛みについて</h3>
        <p>
          施術では、クリームタイプの表面麻酔を使用します。施術開始時に軽いチクッとした痛みを感じ
          ることがありますが、徐々に麻酔が効いていきます。痛みの感じ方には個人差があり、強く感じ
          る方もいらっしゃいますが、ほとんどの方は施術中にリラックスして眠っていることが多いです。
          もし施術中に痛みが気になる場合は、その都度麻酔を追加することも可能です。また、リップ施
          術に限り、痛みが強い方にはブロック麻酔注射も対応しています。
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" module>

.artmake_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-inline-size: var(--contents-max-width);;
}

.description {
  inline-size: var(--contents-lower-width);
}

.image {

  img {
    inline-size: 100%;
  }
}



/* 真ん中の層 */
.motif_contents {
  display              : grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows   : 200px 200px 200px;
  grid-template-areas  : 
    "motif1  blank blank"
    "blank motif2 blank"
    "blank blank text";
}

.motif {
  position       : relative;
  /* inline-size    : 325px; */
  /* block-size     : 325px; */
  border-radius  : 50%;
  display        : flex;
  align-items    : center;
  justify-content: center;

  span {
    position   : relative;
    color      : #606263;
    text-align : center;
    font-family: "Zen Kaku Gothic New";
    font-size  : 34px;
    font-weight: 500;
  }
}

  .motif1 {
  grid-area: motif1;
}

.motif2 {
  grid-area: motif2;
}

.motif_background {
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  background-color: var(--logo-green);
  opacity: 0.3;
  filter: blur(25px);
}

.gray {
  background-color: var(--light-gray);
  opacity: 0.9;
}

.motif_text {
  grid-area : text;
}


/* 下の層 */
.card_contents {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-large,);
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-small);
  /* width: 484px; */
  /* height: 333px; */
  padding: var(--sp-large);
  border-radius: 15px;
  background: var(--pale-green);

  h3 {
    font-size: var(--fs-larger);
    font-weight: 400;
  }
}

</style>