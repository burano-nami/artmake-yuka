<script setup lang='ts'>


</script>

<template>
  <div :class="$style.booking_container">
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
    <BookingForm />
    <div :class="$style.submit_wrapper">
      <p :class="$style.description">
        施術にあたっての注意点、施術前後の注意点、キャンセルポリシーをご確認の上、
        ご納得いただいた方のみの施術となります。必ずご一読いただき、同意をおねがいします。
      </p>
      <label>
        <input type="checkbox" required>
        すべての内容を確認し、同意いたしました。
      </label>
      <BaseButton
        buttonText="送信"
        backgroundColor="var(--button-primary-color)"
      />
    </div>
  </div>
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

.submit_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-large);
  margin-block-start: var(--sp-large);
}

</style>