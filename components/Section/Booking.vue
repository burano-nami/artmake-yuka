<script setup lang="ts">
const isEmailValid = ref(false)
const isNameValid = ref(false)
const isChecked = ref(false)

const isValid = computed(() => {
  return isEmailValid.value && isNameValid.value && isChecked.value
})
</script>

<template>
  <SectionContainer :class="$style.booking_container">
    <SectionTitle
      title="Booking"
      jaTitle="ご予約"
    />
    <p :class="$style.description">
      ご予約は公式LINEから承ります。下記リンクでお友達登録→「ご予約」をタップ→必要事項を入力→送信してください。
      確認後、順次返信いたします。ご希望の日時が取れない場合もあるため、第三希望までお知らせください。LINE以外を
      ご利用の方は、下記の予約フォームからご連絡ください。
    </p>
    <BookingUpper />
    <!-- フォーム移植中 -->
    <div :class="$style.booking_form_container">
      <p :class="$style.text">LINEをご利用でない方はこちら</p>
      <form
        :class="$style.form_container"
        method="post"
        action="https://hyperform.jp/api/waZVnU3d"
      >
        <InputNameGroup v-model="isNameValid"/>
        <InputBirthAndAgeGroup />
        <InputAddressGroup />
        <InputContactGroup  v-model="isEmailValid"/>
        <InputQuestionsGroup />
        <div :class="$style.submit_wrapper">
          <p :class="$style.description_booking">
            施術にあたっての注意点、施術前後の注意点、キャンセルポリシーをご確認の上、<br :class="$style.mobile_hidden">
            ご納得いただいた方のみの施術となります。必ずご一読いただき、同意をおねがいします。
          </p>
          <label>
            <input
              v-model="isChecked"
              type="checkbox"
              required
            >
            すべての内容を確認し、同意いたしました。
          </label>
          <div>
            <p :class="$style.attention">
              名前、メールアドレスは必須項目です
            </p>
            <BaseButton
              type="submit"
              buttonText="送信"
              :variant="isValid? 'default' : 'disabled'"
            />
          </div>
        </div>
      </form>
    </div>
  </SectionContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.booking_container {
  display        : flex;
  flex-direction : column;
  align-items    : center;
  max-inline-size: var(--contents-max-width);
  inline-size: 100%;
}

.description {
  inline-size       : var(--contents-lower-width);
  margin-block-start: var(--sp-large);

  @include mediaScreen('mobile') {
    inline-size: 100%;
  }
}

.description_booking {
  inline-size       : var(--contents-lower-width);
  margin-block-start: var(--sp-large);
  text-align: center;

  @include mediaScreen('mobile') {
    inline-size: 100%;
    text-align: left;
  }
}

.mobile_hidden {
  @include mediaScreen('mobile') {
    display: none;
  }
}

.submit_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-large);
  margin-block-start: var(--sp-large);
}

.booking_form_container {
  display        : flex;
  flex-direction : column;
  align-items    : center;
  max-inline-size: var(--contents-max-width);
  inline-size: 100%;
}

.text {
  color      : var(--black);
  text-align : center;
  font-size  : var(--fs-larger);
  font-weight: 500;
}

  /* ここからフォーム */
.form_container {
  inline-size: 100%;
  margin-block-start: var(--sp-large);
  gap               : var(--sp-medium);
}

.attention {
  color      : var(--red);
  font-size  : var(--fs-small);
  text-align: center;
  margin-block: var(--sp-small);
}

</style>