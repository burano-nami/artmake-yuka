<script setup lang='ts'>
const beforeTreatment = [
  'アートメイク後の1週間のダウンタイム中は、大切なイベントを避けて日程を調整してください。皮むけが落ち着くまで、ワセリンを塗ってケアしていただきます。塗った箇所は少しテカテカと光ることがあります。',
  'お食事などの制限はありませんが、日焼けをしたり寝不足などのないように体調を整えてお越しください。',
  '施術の1週間前より眉の脱色、シェービング、ピーリングなどの肌に刺激となる行為はお控えください。',
  '当日は、フルメイクでお越しください。特に眉は、いつもの方法で描いていただければ大丈夫です。特別に整えたり、頑張って描く必要はありません。普段の眉を参考にデザインを進めていきます。',
  'リップ施術を予定している方は、唇の乾燥を防ぐことが色の定着に影響します。数日前からリップクリームなどでしっかりと保湿を行ってください。',
]

const afterTreatment = [
  '施術後は、施術部位にこまめに薄くワセリンを塗布してください。傷ついた皮膚が治癒する過程で乾燥は大敵です。起床時、毎食後、入浴後、寝る前、乾燥が気になった時など、こまめにケアをお願いします。',
  '施術後の2〜3日目から、少し痒みを感じて触りたくなることがあるかもしれませんが、指で掻いたり、皮を剥いたりせずに、触らないように気をつけて経過を見守ってください。',
  '施術後1週間は、施術部位へのメイク、クレンジング、洗顔は避けてください。施術部位を避けてのクレンジングや洗顔は可能です。施術部位は水のみでワセリンを優しく落とすように洗ってください。あまり神経質にならず、洗う際に少し泡がつく程度であれば問題ありません。',
  '︎ダウンタイムが落ち着けばメイクやクレンジング、洗顔が可能になります。ただし、オイル系のクレンジング剤はアートメイクの色素が落ちやすくなる原因となるため、できるだけクリームまたはジェル状のクレンジング剤を使用してください。水クレンジングでも大丈夫です。',
  'アートメイク部位は日焼けは大敵です。色持ちのためにも日頃から日焼け止めのご使用をお願い致します。',
  '眉施術当日は、お酒、激しい運動、入浴はお控えください。シャワーのみでお願いします。',
  'リップ施術後は、特にダウンタイムが気になるかもしれません。眉よりも、日焼け後のように痂皮が色素とともに剥がれ、色がかなり薄くなることがあります。約1ヶ月後に発色が安定しますので、完成を楽しみにお待ちください。',
  'リップ施術後は、当日から施術部位に食べ物や飲み物の色素が付かないように注意が必要です。お水はそのまま飲んでいただいて問題ありませんが、お茶やコーヒーなど色の付いた飲み物はストローを使ってください。食事も一口で食べられるものに工夫し、ダウンタイムが終わるまでは特に気をつけてください。',
]

const isActiveBefore = ref(false)
const isActiveAfter = ref(false)

const beforeOpen = () => {
  isActiveBefore.value = !isActiveBefore.value
}

const afterOpen = () => {
  isActiveAfter.value = !isActiveAfter.value
}
</script>

<template>
  <div :class="$style.precautions_container">
    <SectionTitle
      title="Precautions"
      jaTitle="注意点"
    /> 
    <div :class="$style.wrapper">
      <div :class="$style.image">
        <img src="assets/images/lip-image.webp" alt="施術イメージ">
      </div>
      <div :class="[$style.accordion, { [$style.active]: isActiveBefore }]">
        <button @click="beforeOpen" :class="$style.accordion_header">
          施術前
        </button>
        <div v-if="isActiveBefore" :class="$style.accordion_content">
          <p v-for="item in beforeTreatment" :key="item">{{ item }}</p>
        </div>
      </div>
    </div>

    <div :class="[$style.wrapper, $style.left_align]">
      <div :class="$style.image">
        <img src="assets/images/treatment-image.webp" alt="施術イメージ">
      </div>
      <div :class="[$style.accordion, { [$style.active]: isActiveAfter }]">
        <button @click="afterOpen" :class="$style.accordion_header">
          施術後
        </button>
        <div v-if="isActiveAfter" :class="$style.accordion_content">
          <p v-for="item in afterTreatment" :key="item">{{ item }}</p>
        </div>
      </div>
    </div>

  </div>
</template> 

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.precautions_container {
  max-inline-size : var(--desktop-max-width);
  inline-size     : 100%;
  display         : flex;
  flex-direction  : column;
  gap: calc(var(--sp-larger) * 2);
}

.wrapper {
  inline-size   : 100%;
  display       : flex;
  flex-direction: column;
  align-items   : flex-end;

}

.image {
  inline-size: min(100%, 630px);
  block-size : min(auto, 480px);

  img {
    inline-size: 100%;
  }
}

.accordion {
  inline-size       : min(100%, var(--contents-max-width));
  margin-block-start: calc(var(--sp-larger) * -2.5);
  margin-inline-end : calc(var(--sp-larger) * 4);

  @include mediaScreen('desktop') {
    margin-inline-end: 0px;
  }

  @include mediaScreen('tablet') {
    margin-inline-end : 0px;
    margin-block-start: calc(var(--sp-larger) * -1);
    padding-inline    : var(--sp-medium);
  }
}

.left_align {
  align-items: flex-start;

  .accordion {
    margin-inline-end  : 0;
    margin-inline-start: calc(var(--sp-larger) * 4);

    @include mediaScreen('desktop') {
      margin-inline-start: 0px;
    }

    @include mediaScreen('tablet') {
      margin-inline-start: 0px;
      margin-block-start : calc(var(--sp-larger) * -1);
      padding-inline     : var(--sp-medium);
    }
  }
}

.accordion_header {
  inline-size     : 100%;
  color           : var(--white);
  font-size       : var(--fs-catchphrase);
  font-weight     : 500;
  display         : flex;
  justify-content : space-between;
  align-items     : center;
  padding-block   : var(--sp-large);
  padding-inline  : var(--sp-larger);
  background-color: var(--dark-green);
  cursor          : pointer;

  &::after {
    transform    : translateY(-25%) rotate(45deg);
    inline-size  : 10px;
    block-size   : 10px;
    border-bottom: 3px solid #fff;
    border-right : 3px solid #fff;
    content      : '';
    transition   : transform .3s;
  }

  @include mediaScreen('mobile') {
    padding-block   : calc(var(--sp-small) * 7);
    font-size: 28px;
  }
}

.active{
  .accordion_header{
    &::after {
      transform: rotate(225deg);
      }
    }

  .accordion_content {
    max-block-size  : 100%;
    opacity         : 1;
    background-color: var(--white);
    animation: slideDown 0.3s forwards;
  }
}

.accordion_content {
  overflow  : hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  max-height: 0;
  opacity   : 0;
  transition: max-height 0.3s ease, opacity 0.3s ease;

  > p {
    border-right : 5px solid var(--pale-green);
    border-bottom: 5px solid var(--pale-green);
    border-left  : 5px solid var(--pale-green);
    padding      : var(--sp-medium);
    transition   : transform 0.5s, opacity 0.5s;
  }
}

@keyframes slideDown {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 100%; /* 適切な最大値を指定 */
    opacity: 1;
  }
}
</style>
