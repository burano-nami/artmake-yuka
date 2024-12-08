<script setup lang="ts">
const steps = [
  '1. 診察・カウンセリング',
  '2. デザイン・マーキング',
  '3. クリーム麻酔・施術開始',
  '4. デザイン確認（必要時、施術にて調整）',
  '5. 施術終了'
]
</script>

<template>
  <SectionContainer :class="$style.process_container">
    <SectionTitle
      title="process"
      jaTitle="施術の流れ"
    />
    <div :class="$style.flow_wrapper">
      <div :class="$style.process_flow">
        <div
          v-for="(step, index) in steps"
          :key="index"
        >
          <p :class="$style.step">{{ step }}</p>
          <IconTriangle v-if="index < steps.length - 1" />
        </div>
        <p :class="$style.note">ご来院からご帰宅まで約3〜3.5時間です。</p>
      </div>
      <div :class="$style.movie">
        <img src="assets/images/comming-soon.png" alt="">
      </div>
    </div>
    <div :class="$style.progress_info">
      <p :class="$style.progress_title">アートメイクの経過</p>
      <p :class="$style.progress_description">
        個人差はありますが、施術後のダウンタイムは約1週間です。3〜5日でかさぶたができ、1週間ほどで
        自然に脱落します。施術直後は色が濃く発色しますが、かさぶたが取れると色味が薄くなり、1〜1.5ヶ
        月ほどで再び発色が戻り色が定着します。施術直後には多少の違和感がありますが、通常の生活には支
        障なくお仕事や家事も普段通り行えます。リップやアイラインの施術後は2〜3日腫れることがあります
        が改善します。また、生活習慣や代謝によって色の定着には個人差があります。
      </p>
    </div>
  </SectionContainer>
</template>




<style lang="scss" module>
 @use '~/assets/scss/mixin' as *;

.process_container {
  max-inline-size: var(--contents-max-width);
  display        : flex;
  flex-direction : column;
  align-items    : center;
  gap            : var(--sp-larger);
}

.flow_wrapper {
  display        : flex;
  justify-content: space-between;
  gap            : var(--sp-medium);

  @include mediaScreen('mobile') {
    flex-direction: column;
  }
}

.process_flow {
  max-inline-size: 400px;
  inline-size    : 100%;
  display        : flex;
  flex-direction : column;
  align-items    : center;

  > div {
    inline-size: 100%;
    text-align : center;
  }

  @include mediaScreen('mobile') {
    max-inline-size: none;
    inline-size    : 100%;
  }
}

.step {
  background-color: var(--pale-green);
  padding-block   : calc(var(--sp) * 1.5);
  border-radius   : 5px;
  text-align      : center;
}

.movie {
  inline-size: 100%;

  > img {
    inline-size: 100%;
  } 
}

.progress_info {
  display       : flex;
  flex-direction: column;
  align-items   : center;
  gap           : var(--sp-small);
}

.progress_title {
  color          : var(--black);
  font-size      : var(--fs-larger);
  font-weight    : 400;
  display        : flex;
  align-items    : center;
  justify-content: center;

  &::before, &::after {
    content   : "";
    border-top: 1px solid;
    width     : 3rem;
  }

  &::before {
    margin-right: 1rem;
  }

  &::after {
    margin-left: 1rem;
  }
}
</style>