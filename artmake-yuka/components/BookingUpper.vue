<script setup lang="ts">
const clinicInfo = [
  {
    name: '洗足整形・形成外科',
    schedule: [
      { day: '水曜日', time: '午前9:00〜 午後14:00〜' }
    ]
  },
  {
    name: 'go-en.デンタルクリニック自由が丘',
    schedule: [
      { day: '月曜日〜金曜日', time: '午前9:00〜 午後19:00' },
      { day: '土曜日', time: '午前9:00〜 午後19:00' }
    ]
  }
]
</script>


<template>
  <div :class="$style.booking_upper_container">
    <div :class="$style.contents">
      <div 
        :class="$style.table_wrapper"
        v-for="clinicInfo in clinicInfo"
        :key="clinicInfo.name"
      >
        <div :class="$style.table_title">{{ clinicInfo.name }}</div>
        <table :class="$style.table">
          <tbody>
            <tr>
              <th>曜日</th>
              <th>施術時間</th>
            </tr>
            <tr
              v-for="(entry, idx) in clinicInfo.schedule"
              :key="idx"
            >
              <td>{{ entry.day }}</td>
              <td>{{ entry.time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <BaseButton
      buttonType="button"
      buttonText="公式LINEはこちら"
      backgroundColor="var(--button-line-color)"
    />
  </div>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.booking_upper_container {
  inline-size     : 100%;
  display         : flex;
  align-items     : center;
  justify-content : space-around;
  max-inline-size : var(--contents-max-width);
  margin-block-end: calc(var(--sp-larger) * 2);

  @include mediaScreen('mobile') {
    flex-direction: column;
    gap           : var(--sp-large);
  }
}

.table_wrapper {
  inline-size       : min(500px,100%);
  margin-block-start: var(--sp-large);
}

.table_title {
  color      : var(--black);
  font-size  : var(--fs-semi-max);
  font-weight: 500;
  text-align : left;
}

.table  {
  inline-size: 100%;

  th, td {
    border        : solid 1px var(--light-green);
    width         : 60px;
    padding-inline: var(--sp-medium);
  }

  th {
    background-color: var(--pale-green);
    font-size       : var(--fs-button);
    font-weight     : 300;
  }

  td {
    font-size: var(--fs-large);
  }
}



</style>