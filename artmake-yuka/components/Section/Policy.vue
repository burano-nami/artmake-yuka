<script setup lang="ts">


</script>

<template>
  <div :class="$style.policy_container">
    <SectionTitle
      title="Policy"
      jaTitle="キャンセルポリシー"
    />
    <p :class="$style.description">
      理由に関わらず、キャンセルや延期等にはキャンセル料が発生いたします。
    </p>
    <div :class="$style.pricing_container">
      <div :class="$style.section">
        <div :class="$style.section_title">延期料</div>
        <div :class="$style.table">
          <div :class="$style.title">
            <div :class="$style.text">3日前までにご変更完了</div>
            <div :class="$style.text">3日前〜前日までの変更完了</div>
            <div :class="$style.text">当日の変更</div>

          </div>
          <div :class="$style.answer">
            <div :class="$style.text2">無料</div>
            <div :class="$style.text2">施術料金の30%</div>
            <div :class="$style.text2">100%</div>
          </div>
        </div>
      </div>

      <div :class="$style.section">
        <div :class="$style.section_title">キャンセル料</div>
        <div :class="$style.table">
          <div :class="$style.title">
            <div :class="$style.text">7日前まで</div>
            <div :class="$style.text">前日〜6日前</div>
            <div :class="$style.text">当日のキャンセルまたは無断キャンセル</div>
            <div :class="$style.text">来院後に相談の上施術前にキャンセル</div>
          </div>

          <div :class="$style.answer">
            <div :class="$style.text2">無料</div>
            <div :class="$style.text2">施術料金の30%</div>
            <div :class="$style.text2">施術料金の100%</div>
            <div :class="$style.text2">対面カウンセリング代 ¥3,000</div>
          </div>
        </div>

      </div>
      <div :class="$style.section">
        <div :class="$style.section_title">遅刻された場合</div>
        <div :class="$style.notice">
          施術時間が短くなりしっかりと施術できない場合があります。30分以上遅刻された場合は、当日キャンセル扱いとなります。
        </div>
      </div>
    </div>
  </div>
</template> 


<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;

.policy_container {
  max-inline-size: var(--contents-lower-width);
  inline-size    : 100%;
}

.description {
  inline-size: var(--contents-lower-width);
  margin-block-start: var(--sp-large);
  text-align: center;

  @include mediaScreen('mobile') {
    inline-size: 100%;
  }
}

.pricing_container {
  width: 100%;
  margin-block: var(--sp-larger);
  position: relative;

}

/* 各セクション */
.section {
  margin-bottom: 20px;
}

/* セクションタイトル */
.section_title {
  background-color: #A0C9A7;
  font-size: var(--fs-large);
  color: #fff;
  font-weight: bold;
  padding: calc(var(--sp-small) *1.5);
  padding-inline-start: calc(var(--sp-large) * 1.8) ;
}

/* テーブルスタイル */
.table {
  /* display: table; */
  display: grid;
  grid-template-columns: auto 30%;
}

.title {
  /* display: table-row; */
  display: flex;
  flex-direction: column;
}

.text, .text2, .notice { 
  padding: calc(var(--sp-small) *1.5);
}

</style>
