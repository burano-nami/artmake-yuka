<script setup lang='ts'>
const listItems = [
  'すっぴんだと眉がなくなる',
  'スポーツジムやプールで自信がもてない',
  '汗をかいて眉が消える',
  '細かいところが見えにくく眉を描きにくい',
  '手が振るえて描きにくい',
  '眉メイクが苦手',
  'もともと左右差があり気になる',
  '唇の血色が悪い、くすみが気になる、顔色が悪く見える'
]


</script>

<template>
  <div :class="$style.introduction_container"> 
    <p :class="$style.text">多くの女性が抱えるお悩み、<br>ぜひご相談下さい。</p>
    <ul :class="$style.list">
      <li
        v-for="item in listItems"
        :key="item"
      >
        <!-- <span class="material-symbols-outlined">check</span> -->
        {{ item }}
      </li>
    </ul>
  </div>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.introduction_container {
  max-inline-size : 1200px;
  display         : flex;
  justify-content : center;
  align-items     : center;
  gap             : var(--sp-larger);
  margin-inline   : calc(var(--sp-medium) * 2);

  @include mediaScreen('mobile') {
    flex-direction: column-reverse;
  }
}

.text {
  color      : var(--black);
  text-align : center;
  font-size  : var(--fs-max );
  font-weight: 400;

  @include mediaScreen('tablet') {
    font-size: var(--fs-large);
  }
}

.list {
  font-weight   : 400;
  display       : flex;
  flex-direction: column;
  align-items   : flex-start;
  gap           : var(--sp-medium, 16px);

  li {
    position: relative;
    padding-inline-start : var(--sp-large); 

    &::before {
      content: 'check';
      font-family: 'Material Symbols Outlined';
      position: absolute;
      left: 0;
      font-size: var(--fs-medium); 
      color: var(--dark-green);
    }
  }
}

</style>