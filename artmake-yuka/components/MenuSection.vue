<script setup lang='ts'>
const eyeBrowMenu = {
  menuTitle: '眉（手彫り）',
  gridArea: 'eyebrow',
  items: [
    { service: '2回セット', price: '¥90.000' },
    { service: '1回', price: '¥50.000' },
  ]
}

const lipMenu = {
  menuTitle: 'リップ',
  gridArea: 'lip',
  items: [
    { service: '2回セット', price: '¥100.000' },
    { service: '1回', price: '¥60.000' },
    { service: '2回目', price: '¥50.000' },
    { service: '3回目', price: '¥40.000' },
    { service: 'ブロック麻酔(1回)', price: '¥5.000' },
  ]
}

const eyeLineMenu = {
  menuTitle: 'アイライン（上）',
  gridArea: 'eyeline',
  items: [
    { service: '2回セット', price: '¥60.000' },
    { service: '1回', price: '¥35.000' },
  ]
}

const RemovalMenu = {
  menuTitle: 'アートメイク/くすみ 薬剤除去',
  gridArea: 'removal',
  items: [
    { service: '1回(ブロック麻酔込み)', price: '¥35.000' },
  ]
}

const otherMenu = {
  menuTitle: 'その他',
  gridArea: 'other',
  items: [
    { service: '対面カウンセリング', price: '¥3.000/30分' },
    { service: 'メールカウンセリング', price: '無料' },
  ]
}

const noteLists = [
  'メニューには診察代・麻酔代がすべて含まれており、表示価格は税抜きです。',
  '眉、アイライン、リップは、通常2回の施術で完成となります。',
  'リップ施術は、くすみが一定の水準を超えている場合、3回の施術や薬剤除去が必要になることがあります。また、状況によっては施術をお断りさせていただくこともございます。',
  '他院での修正は基本的にお断りしていますが、カウンセリングの結果、施術が可能と判断した場合には対応させていただくこともあります。',
  '来院後に施術前キャンセルとなった場合には、対面カウンセリング料として3,000円を頂戴いたします。',
]


</script>

<template>
  <div :class="$style.menu_container">
    <SectionTitle
      title="Menu"
      jaTitle="メニュー・料金"
    />
    <div :class="$style.menu_list">
      <div
        v-for="menu in [eyeBrowMenu, lipMenu, eyeLineMenu, RemovalMenu, otherMenu]"
        :key="menu.menuTitle"
        :class="[$style.menu_wrapper, $style[menu.gridArea]]"
      >
        <div :class="$style.title">{{ menu.menuTitle }}</div>
        <div
          v-for="item in menu.items"
          :key="item.service"
          :class="$style.menu_items"
        >
          <p :class="$style.service">{{ item.service }}</p>
          <p :class="$style.price">{{ item.price }}</p>
        </div>
      </div>
    </div>
    <ul :class="$style.list">
      <li
        v-for="note in noteLists"
        :key="note"
      >
        {{ note }}
      </li>
    </ul>
  </div>
</template>



<style lang="scss" module>
 @use '~/assets/scss/mixin' as *;

.menu_container {
  max-inline-size: var(--contents-lower-width );
  display: grid;
  gap: var(--sp-larger);
  position: relative;

  &::before,&::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px; /* ボーダーの高さ */
    background: linear-gradient(267deg, #FBEDD7 0%, #CEA77E 50%, #A16231 100%);
    display: block;
  }

  &::before {
    top: calc(var(--sp-medium) * -5);
  }

  &::after {
    bottom: calc(var(--sp-medium) * -5);
  }

  @include mediaScreen('tablet') {
    margin-inline:var(--sp-large);
  }
}

.menu_list {
  display              : grid;
  grid-template-columns: 1fr 1fr;
  gap                  : var(--sp-larger) calc(var(--sp-larger) * 2);
  grid-template-areas  : 
    "eyebrow eyeline"
    "lip removal"
    "lip other";

  @include mediaScreen('mobile') {
    grid-template-columns: 1fr;
    grid-template-areas  : 
      "eyebrow"
      "eyeline"
      "lip"
      "removal"
      "other";
  }
}

.eyebrow {
  grid-area: eyebrow;
}
.lip {
  grid-area: lip;
}
.eyeline {
  grid-area: eyeline;
}
.removal {
  grid-area: removal;
}
.other {
  grid-area: other;
}

.title {
  color        : var(--black);
  font-size    : var(--fs-larger);
  font-weight  : 500;
  border-bottom: 1px solid var(--black);
}

.menu_items {
  color          : var(--black);
  font-size      : var(--fs-large);
  display        : flex;
  justify-content: space-between;
  margin-top     : var(--sp-medium);
}

.list {
  li {
    list-style-type: none;
    position       : relative;
    padding-left   : 1.5em;
  }

  li::before {
    content : '＊';
    position: absolute;
    left    : 0;
  }
}

</style>