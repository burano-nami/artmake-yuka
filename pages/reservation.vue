<template>
  <FadeInContainer :class="$style.reservation_container">
    <div :class="$style.link">
      <strong>ご予約前に必ず以下をご確認ください。</strong>
      <ul>
        <li><NuxtLink :class="$style.menu" to="#risks">1. リスクと副作用</NuxtLink></li>
        <li><NuxtLink :class="$style.menu" to="#precautions">2. 注意点</NuxtLink></li>
        <li><NuxtLink :class="$style.menu" to="#policy">3. キャンセルポリシー</NuxtLink></li>
      </ul>
      <p>
        すべての内容をご確認いただいたうえで、<br>
        下部ページの
        <NuxtLink 
          to="#booking"
          :class="$style.booking_link"
        >予約フォーム</NuxtLink>
        よりお申し込みください。
      </p>
    </div>
    <div :class="$style.main_container"> 
      <SectionRisks id="risks"/>
      <SectionPrecautions id="precautions"/>
      <SectionPolicy id="policy"/>
      <SectionBooking id="booking"/>
    </div>
  </FadeInContainer>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.reservation_container {
  margin-block-start: calc(var(--sp-larger) * 4);

  > p {
    text-align: center;
  }
}

.main_container {
  display        : flex;
  flex-direction : column;
  align-items    : center;
  gap           : calc(var(--sp-larger) * 5);

  > p {
    margin-block-start: 200px;
    text-align: center;
  }

  @include mediaScreen('mobile') {
    gap: calc(var(--sp-larger) * 3);
  }
}

.link {
  display         : flex;
  flex-direction  : column;
  align-items     : center;
  font-size       : var(--font-size-small);
  margin-block-end: calc(var(--sp-larger) * 2);
  padding-inline  : var(--sp-medium);

  > strong {
    font-weight: 600;
    color: var(--gray);
  }

  > ul {
    display       : flex;
    flex-direction: column;
    gap           : var(--sp-medium);
    margin-block  : var(--sp-large);
  }
}

.menu {
  position   : relative;

  &:hover::before {
    content                  : '';
    inline-size              : 100%;
    height                   : 1px;
    background-color         : var(--gold);
    position                 : absolute;
    bottom                   : -5px;
    animation-name           : hoverAnime;
    animation-duration       : 0.2s;
    animation-timing-function: ease;
    animation-fill-mode      : forwards;
  }
}

.booking_link {
  font-weight: 400;
  color: var(--gold);
  
  &:hover {
    opacity: 0.6;
  }
}

@keyframes hoverAnime {
  0% {
    inline-size: 0;
  }
  100% {
    inline-size: 100%;
  }
}
</style>