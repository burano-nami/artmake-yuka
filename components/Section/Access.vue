<script setup lang="ts">
const clinics = [
  {
    name: '洗足整形・形成外科',
    address: '〒152-0012 東京都目黒区洗足2-7-15キューブ洗足2F',
    access: [
      '東急目黒線洗足駅より 徒歩1分',
      '東急大井町線北千束駅より 徒歩10分'
    ],
    hours: [
      '水曜日 午前9:00~ 午後14:00~',
      '金曜日 午前9:00~ 午後14:00~',
      '初回は水曜日、2回目以降は水曜日または金曜日が施術可能日になります。'
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.660764087316!2d139.6911549766224!3d35.611433772609956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ad27d8be13d%3A0x175be4d3c8ab31aa!2z5rSX6Laz5pW05b2i5b2i5oiQ5aSW56eRIOebrum7kuWMug!5e0!3m2!1sja!2sjp!4v1731217557719!5m2!1sja!2sjp'
  },
  {
    name: 'go-en.デンタルクリニック自由が丘',
    address: '〒158-0083東京都世田谷区奥沢5-31-17 ARBOS 1-B',
    access: [
      '東急東横線自由が丘駅 徒歩5分',
      '東急目黒線奥沢駅 徒歩6分',
      '東急大井町線九品仏駅 徒歩10分'
    ],
    hours: [
      '月曜日〜金曜日、土曜日 午前9:00~午後19:00'
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.9281344275178!2d139.66514177662236!3d35.60483927261208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f59b4405681f%3A0x7789beda860f2f2d!2zZ28tZW4u44OH44Oz44K_44Or44Kv44Oq44OL44OD44Kv6Ieq55Sx44GM5LiY!5e0!3m2!1sja!2sjp!4v1731219006971!5m2!1sja!2sjp'
  }
]
</script>

<template>
  <SectionContainer :class="$style.access_container">
    <SectionTitle
      title="Access"
      jaTitle="アクセス"
    />
    <p :class="$style.description">
      施術場所はご予約の日時によって異なりますので、ご注意ください。
    </p>
    <div :class="$style.contents_wrapper">
      <div
        v-for="(clinic, index) in clinics"
        :key="index"
        :class="$style.clinic_wrapper"
      >
        <div :class="$style.clinic_info">
          <p :class="$style.clinic_name">{{ clinic.name }}</p>
          <p :class="$style.clinic_address">
            {{ clinic.address }}<br>
            <span v-for="(line, lineIndex) in clinic.access" :key="lineIndex">
              {{ line }}<br>
            </span>
          </p>
          <p :class="$style.clinic_hours">
            <span v-for="(hour, hourIndex) in clinic.hours" :key="hourIndex">
              {{ hour }}<br>
            </span>
          </p>
        </div>
        <div :class="$style.clinic_map">
          <iframe
            :src="clinic.mapUrl"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.access_container {
  max-inline-size: var(--contents-max-width);
  display        : flex;
  flex-direction : column;
  align-items    : center;
}

.description {
  inline-size: var(--contents-lower-width);
  margin-block-start: var(--sp-large);
  text-align: center;
  margin-block-end: var(--sp-larger);

  @include mediaScreen('mobile') {
    inline-size: 100%;
  }
}

.contents_wrapper {
  display: flex;
  flex-direction: column;
  gap: calc(var(--sp-larger) * 1.5);
}

.clinic_wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-medium);

  @include mediaScreen('mobile') {
    grid-template-columns: 1fr;
  }
}

.clinic_info {
  display: grid;
  grid-template-rows: auto 1.5fr 1fr; 

  @include mediaScreen('mobile') {
    display: flex;
    flex-direction: column;
    gap: var(--sp-medium);
  }
}

.clinic_name {
  color: var(--black);
  font-size: var(--fs-max);
  font-weight: 400;
}

.clinic_addres {
  font-style: normal;
  font-weight: 300;
}

.clinic_hours {
  /* font-size: var(--fs-small); */
  font-style: normal;
  font-weight: 300;
}

.clinic_map {
  position: relative;
  width: 100%;
  padding-top: 75%;
  /* 16:9のアスペクト比 */
  height: 0;
    
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
