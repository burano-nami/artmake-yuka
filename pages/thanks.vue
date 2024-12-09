<template>
  <SectionContainer :class="$style.thanks_container">
    <div :class="$style.image">
      <img src="assets/images/profile-white.png" alt="プロフィール画像">
    </div>
    <p>
      お問い合わせありがとうございます。<br>
      内容を確認の上、<br :class="$style.mobile_only">
      ご連絡させていただきます。
    </p>
  </SectionContainer>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.thanks_container {
  inline-size: 100%;
  block-size : 100%;
  display        : flex;
  align-items    : center;
  justify-content: center;

  @include mediaScreen('mobile') {
    flex-direction: column;

    > p {
      text-align: center;
    }
  }
}

.image {
  inline-size: 200px;
}


.mobile_only {
  display: none; 

    @include mediaScreen('mobile') {
      display: inline; 
    }
  }
</style>