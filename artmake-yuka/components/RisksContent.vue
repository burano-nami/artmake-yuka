<script setup lang="ts">

const restrictionsLists = [
  '・感染症をお持ちの方',
  '・ケロイド体質の方',
  '・アレルギーをお持ちの方、または体質の方',
  '・アトピー肌の方',
  '・ステロイド内服中の方',
  '・抗血小板薬を内服されている方',
  '・妊娠中または妊娠の可能性のある方',
  '・授乳中の方（施術当日は授乳をお控え頂いております）',
  '・唇にヒアルロン酸が多量に入っている方',
  '・くすみが一定水準より濃い方',
  '・ご不安が強く、施術や定着に何らかの影響を及ぼす恐れがある方',
  '・基礎疾患をお持ちの方',
  '・飲酒をされている方、または当日飲酒予定の方',
  '・その他、医師または看護師が施術困難と判断しㅤた場合',
  '・過去に他院にてアートメイクをされている方はㅤ必ずご相談ください。',
]

const risks = [
  '一時的なものとして、腫れ、出血、内出血、発赤、熱感、しびれ、痂皮化、痂皮脱落、脱毛等があります。',
  'アレルギーは、薬剤、金属、色素、ゴム、局所麻酔(リドカイン、キシロカイン)などその他にも様々です。既往にアレルギーがある方は事前にご相談下さい。施術前に医師へ相談しお断りすることがあります。また、施術中にそれらの症状が現れた場合は施術を中断することもあります。',
  '︎合併症として、感染症、肥厚性瘢痕、ケロイド、肉芽、肉芽種、皮膚障害、角膜損傷、ドライアイ、血管閉塞、陥没、感覚機能の低下、化学物質過敏症等があげられます。',
  'リップ施術は、既往に口唇ヘルペスがある方は多くの方が再発します。抗ウイルス薬を内服することで予防できます。必ず事前にお申し出下さい。',
  '左右差や不均衡、色ムラ、退色、変色、形状の変化について。私たちの顔は骨格や筋肉が異なり、完全に左右対称ではありません。完璧に左右対称にデッサンしても、お顔全体を見たときに不均衡に感じることがあります。また、肌質や肌色も個々に違うため、同じ色素を使っても発色や退色のスピードは異なります。完璧な仕上がりは難しいことをご理解いただいた上で、施術を行います。',
]

const mriInfo = [
  '近日中にMRI撮影を受ける予定がある方は、必ず事前にお知らせください。医療アートメイクには色素中に微量の「酸化鉄」が含まれており、MRI撮影時に磁気に反応して熱感や熱傷を引き起こす可能性がごく稀にあります。念のため、主治医や放射線技師にアートメイクを施した箇所があることをお伝えください。',
]

const props = defineProps<{
  selectedTab: string
}>()

</script>

<template>
  <div :class="$style.wrapper">
    <div 
      :class="$style.text_contents"
      v-show="selectedTab === 'restrictions'"
    >
      <div :class="$style.list">
        <ul>
          <li 
            v-for="restrictionsList in restrictionsLists"
            :key="restrictionsList"
          >
            {{ restrictionsList }}
          </li>
        </ul>
        <p>
          以上の内容をご確認の上ご相談ください。申告がない場合や虚偽の申告があった場合は施術いたしかねますの
          でご了承ください。また、かかりつけ医師がいらっしゃる場合は主治医の許可が必要です。
        </p>
      </div>
    </div>
  </div>
  <div :class="$style.wrapper">
    <div 
      v-for="risk in risks"
      :key="risk"
      :class="$style.text_contents"
      v-show="selectedTab === 'risks'"
    >
      <p>{{ risk }}</p>
    </div>
  </div>
  <div :class="$style.wrapper">
    <div 
      v-for="mriInfo in mriInfo"
      :key="mriInfo"
      :class="$style.text_contents"
      v-show="selectedTab === 'mriInfo'"
    >
      <p>{{ mriInfo }}</p>
    </div>
  </div>
</template> 


<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;

.wrapper {
  display              : grid;
  grid-template-columns: 1fr;


  @include mediaScreen('mobile') {
    grid-template-columns: 1fr;
  }
}

.text_contents {
  background-color: var(--white);
  border-right    : 5px solid var(--pale-green);
  border-bottom   : 5px solid var(--pale-green);
  border-left     : 5px solid var(--pale-green);

  > p {
    padding  : var(--sp-medium);
    animation: tabAnime 0.3s ease-in-out;
  }
}

.list {
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  padding-block  : var(--sp-large);
  padding-inline : var(--sp-medium);
  gap            : var(--sp-large);
  animation      : tabAnime 0.3s ease-in-out;
}

@keyframes tabAnime{
  0%{opacity:0;}
  100%{opacity:1;}
}
</style>