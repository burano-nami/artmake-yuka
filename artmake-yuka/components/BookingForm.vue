<script setup lang='ts'>


</script>

<template>
  <div :class="$style.booking_form_container">
    <p :class="$style.text">LINEをご利用でない方はこちら</p>


    <form :class="$style.form_container">
      <div :class="$style.form_group">
        <label for="name">名前</label>
        <input type="text" id="name" required />
      </div>
      <div :class="$style.form_group">
        <label for="kana">ふりがな</label>
        <input type="text" id="kana" />
      </div>
      <div :class="$style.form_group">
        <label for="kana">生年月日</label>
        <input type="text" id="birthdate" />
      </div>
      <div :class="$style.form_group">
        <label for="kana">ご年齢</label>
        <input type="text" id="age" />
      </div>
      <div :class="$style.form_group">
        <label for="kana">住所</label>
        <input type="text" id="address" />
      </div>
      <div :class="$style.form_group">
        <label for="kana">電話番号</label>
        <input type="number" id="number" />
      </div>
      <div :class="$style.form_group">
        <label for="kana">メールアドレス</label>
        <input type="email" id="email" />
      </div>
      <div :class="$style.form_group">
        <label for="kana">施術希望場所</label>
        <input type="text" id="clinic" />
      </div>
      <div :class="$style.form_group">
        <label for="kana">ご希望日時<br>
          (第三希望までお書きください)
        </label>
        <input type="date" id="date" />
      </div>
      <div :class="$style.form_group">
        <label for="kana">アレルギーの有無
        </label>
        <input type="text" id="allergie" />
      </div>
      <div :class="$style.form_group">
        <label for="kana">既往歴
        </label>
        <input type="text" id="medical-history" />
      </div>
      <div :class="$style.form_group">
        <label for="kana">これまでのアートメイク経験</label>
        <input type="text" id="kana" />
      </div>
      <div :class="$style.form_group">
        <label for="kana">希望の色や形</label>
        <input type="text" id="make" />
      </div>
      <div :class="$style.form_group">
        <label for="kana">その他</label>
        <input type="text" id="other" />
      </div>
      <div :class="$style.form_group">
        <label for="kana">連絡方法のご希望</label>
        <input type="text" id="contact" />
      </div>
    </form>

  </div>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.booking_form_container {
  display        : flex;
  flex-direction : column;
  align-items    : center;
  max-inline-size: var(--contents-max-width);
}

.text {
  color: var(--black);
  text-align: center;
  font-size: var(--fs-larger);
  font-weight: 500;
}

/* ここからフォーム */
.form_container {
  inline-size:  var(--contents-max-width);
  margin-block-start: var(--sp-large);
  gap: var(--sp-medium);
}

.form_group {
  display: grid;
  grid-template-columns: auto 61.8%;
  border-top: 0.5px solid var(--gray);

  label {
    inline-size: 100%;
    padding: var(--sp-small);
    background-color: antiquewhite;

  }

  input {
    inline-size: 100%;
    margin: var(--sp-small);
    border: 1px solid var(--light-gray);
  }
}
</style>
