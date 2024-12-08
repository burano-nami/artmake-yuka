<script setup lang="ts">
const policies = [
  {
    title: '延期料',
    items: [
      { text: '3日前までにご変更完了', value: '無料' },
      { text: '3日前〜前日までの変更完了', value: '施術料金の30%' },
      { text: '当日の変更', value: '100%' },
    ],
  },
  {
    title: 'キャンセル料',
    items: [
      { text: '7日前まで', value: '無料' },
      { text: '前日〜6日前', value: '施術料金の30%' },
      { text: '当日のキャンセルまたは無断キャンセル', value: '施術料金の100%' },
      { text: '来院後に相談の上施術前にキャンセル', value: '対面カウンセリング代 ¥3,000' },
    ],
  },
]


</script>

<template>
  <SectionContainer :class="$style.policy_container">
    <SectionTitle
      title="Policy"
      jaTitle="キャンセルポリシー"
    />
    <p :class="$style.description">
      理由に関わらず、キャンセルや延期等にはキャンセル料が発生いたします。
    </p>
    <div :class="$style.pricing_container">
      <div
        v-for="(section, index) in policies"
        :key="index"
        :class="$style.section"
      >
        <div :class="$style.section_title">{{ section.title }}</div>
        <template v-if="section.items">
          <div
            v-for="(item, i) in section.items"
            :key="i"
            :class="$style.table"
          >
            <div :class="$style.text">{{ item.text }}</div>
            <div :class="$style.text2">{{ item.value }}</div>
          </div>
        </template>
      </div>
      <div :class="$style.section">
        <div :class="$style.section_title">遅刻された場合</div>
        <div :class="$style.notice">
          施術時間が短くなりしっかりと施術できない場合があります。30分以上遅刻された場合は、当日キャンセル扱いとなります。
        </div>
      </div>
    </div>
  </SectionContainer>
</template> 


<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;

.policy_container {
  max-inline-size: var(--contents-lower-width);
  inline-size    : 100%;
}

.description {
  inline-size: 100%;
  margin-block-start: var(--sp-large);
  text-align        : center;

  @include mediaScreen('mobile') {
    inline-size: 100%;
  }
}

.pricing_container {
  inline-size : 100%;
  margin-block: var(--sp-larger);
  position    : relative;
}

  /* 各セクション */
.section {
  margin-bottom: 20px;
}

  /* セクションタイトル */
.section_title {
  background-color    : #A0C9A7;
  font-size           : var(--fs-large);
  color               : #fff;
  font-weight         : bold;
  padding             : calc(var(--sp-small) *1.5);
  padding-inline-start: calc(var(--sp-large) * 1.8) ;
}

/* テーブルスタイル */
.table {
  display: grid;
  grid-template-columns: auto 30%;

  @include mediaScreen('mobile') {
    grid-template-columns: 1fr;
    margin-block : var(--sp-medium);
    /* border-bottom: 1px solid var(--light-gray); */
  }
}

.text, .text2, .notice { 
  padding: calc(var(--sp-small) * 1.5);

  @include mediaScreen('mobile') {
    padding-block : 0;
  }
}

.notice {

  @include mediaScreen('mobile') {
    padding-block : calc(var(--sp-small) * 1.5);
  }
}
</style>
