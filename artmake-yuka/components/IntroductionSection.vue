<!-- <script setup lang='ts'>


</script> -->

<template>
  <div :class="$style.introduction_container"> 
    <p :class="$style.text">多くの女性が抱えるお悩み、<br>ぜひご相談下さい。</p>
    <ul :class="$style.list">
      <li>すっぴんだと眉がなくなる</li>
      <li>スポートジムやプールで自信がもてない</li>
      <li>汗をかいて眉が消える</li>
      <li>細かいところが見えにくく眉を描きにくい</li>
      <li>手が振るえて描きにくい</li>
      <li>眉メイクが苦手</li>
      <li>もともと左右差があり気になる</li>
      <li>唇の血色が悪い、くすみが気になる、顔色が悪く見える</li>
    </ul>
  </div>
</template>

<!-- ここに、サブヒーロの上部分と、プロフィール。
で、ヒーローセクションで背景設置する。 -->


<style lang="scss" module>
.introduction_container {
  display         : flex;
  justify-content : center;
  align-items     : center;
  gap             : var(--sp-larger);
  margin-inline   : calc(var(--sp-medium) * 2);
  background-color: beige;
}

.text {
  color      : var(--black);
  text-align : center;
  font-size  : var(--fs-catchphrase);
  font-weight: 400;
}

.list {
font-weight   : 400;
display       : flex;
width         : 376px;
flex-direction: column;
align-items   : flex-start;
gap           : var(--sp-medium, 16px);
}

</style>