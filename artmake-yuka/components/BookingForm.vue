<script setup lang='ts'>


</script>

<template>
  <div :class="$style.booking_form_container">
    <p :class="$style.text">LINEをご利用でない方はこちら</p>
    <form :class="$style.form_container">
      <!-- お名前 -->
      <div :class="$style.form_group">
        <label for="name">お名前</label>
        <div :class="$style.row">
            <div class="">姓</div>
            <input 
              type="text"
              name="family-name"
              autocomplete="family-name"
              class="form-control"
              placeholder="田中"
              required
            />
            <div class="">名</div>
            <input 
              type="text"
              name="given-name"
              autocomplete="given-name"
              class="form-control"
              placeholder="太郎"
              required
            />
          </div>
      </div>
      <!-- ふりがな -->
      <div :class="$style.form_group">
        <label for="kana">フリガナ</label>
        <div :class="$style.row">
          <div class="">セイ</div>
          <input 
            type="text"
            name="family-name"
            autocomplete="family-name"
            class="form-control"
            placeholder="田中"
            required
          />
          <div class="">メイ</div>
          <input 
            type="text"
            name="given-name"
            autocomplete="given-name"
            class="form-control"
            placeholder="太郎"
            required
          />
        </div>
      </div>
      <!-- 生年月日、年齢 -->
      <div :class="$style.form_group">
        <label for="kana">生年月日</label>
        <input type="date" id="birthdate" />
      </div>
      <div :class="$style.form_group">
        <label for="kana">ご年齢</label>
        <input type="number" id="age" />
      </div>


      <!-- 住所 -->
      <div :class="$style.form_group">
          <label>郵便番号</label>
          <input
            type="text"
            name="postal-code"
            autocomplete="postal-code"
            placeholder="郵便番号"
          />
      </div>

      <div :class="$style.form_group">
        <label>住所</label>
        <div>
          <div :class="$style.row">
            <div class="">都道府県</div>
            <input
              type="text"
              name="address-level1"
              autocomplete="address-level1"
              placeholder="東京都"
            />
          </div>
          <div :class="$style.row">
            <div class="">市区町村</div>
            <input
              type="text"
              name="address-level2"
              autocomplete="address-level2"
              placeholder="中央区"
            />
          </div>
          <div :class="$style.row">
            <div class="">番地等</div>
            <input
              type="text"
              name="address-line1"
              autocomplete="address-line1"
              class="form-control"
              placeholder="◯丁目◯番"
            />
          </div>
        </div>
      </div>

      <!-- 電話番号、メールアドレス -->
      <div :class="$style.form_group">
        <label for="kana">電話番号</label>
        <input type="number" id="number" />
      </div>
      <div :class="$style.form_group">
        <label for="kana">メールアドレス<span :class=$style.badge>必須</span></label>
        <input type="email" id="email" />
      </div>

      <!-- 施術希望場所-->
      <div :class="$style.form_group">
        <label for="place">施術希望場所</label>
        <div :class="$style.row">
          <input
            type="radio"
            id="clinic1"
            name="clinic"
            value="clinic1"
          />
          <div class="">洗足整形・形成外科</div>
          <input
            type="radio"
            id="clinic2"
            name="clinic"
            value="clinic2"
          />
          <div class="">go-en.デンタルクリニック自由が丘</div>
        </div>
      </div>

      <!-- ご希望日時 -->
      <div :class="$style.form_group">
        <label for="kana">施術希望場所</label>
        <div>
          <div :class="$style.row">
            <div class="">第一希望</div>
            <input type="date" />
            <input type="time" />
          </div>
          <div :class="$style.row">
            <div class="">第二希望</div>
            <input type="date" />
            <input type="time" />
          </div>
          <div :class="$style.row">
            <div class="">第三希望</div>
            <input type="date" />
            <input type="time" />
          </div>
        </div>
      </div>

      <!-- アレルギーの有無 -->
      <div :class="$style.form_group">
        <label for="kana">アレルギーの有無</label>
        <div :class="$style.row">
          <input
            type="radio"
            id="clinic1"
            name="clinic"
            value="clinic1"
          />
          <div class="">無し</div>
          <input
            type="radio"
            id="clinic2"
            name="clinic"
            value="clinic2"
          />
          <div class="">有り(有りの方は詳細をご記入ください)</div>
          <input 
            type="text"
            id="clinic2"
            name="clinic"
            placeholder="アルコール、薬剤、金属など"
          />
        </div>
      </div>

      <!-- 既往歴、アートメイク経験、希望の色や形、その他 -->
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
      <!-- 連絡方法のご希望 -->
      <div :class="$style.form_group">
        <label for="kana">連絡方法のご希望</label>
        <div :class="$style.row">
          <input
            type="radio"
            id="clinic1"
            name="clinic"
            value="clinic1"
          />
          <div class="">電話</div>
          <input
            type="radio"
            id="clinic2"
            name="clinic"
            value="clinic2"
          />
          <div class="">メール</div>
        </div>
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
  color      : var(--black);
  text-align : center;
  font-size  : var(--fs-larger);
  font-weight: 500;
}

  /* ここからフォーム */
.form_container {
  inline-size       : var(--contents-max-width);
  margin-block-start: var(--sp-large);
  gap               : var(--sp-medium);
}

.form_group {
  display              : grid;
  grid-template-columns: auto 61.8%;
  border-top           : 0.5px solid var(--gray);

  label {
    inline-size     : 100%;
    padding         : var(--sp-small);
    background-color: antiquewhite;
    display         : flex;
    justify-content : space-between;

  }

  input {
    margin     : var(--sp-small);
    border     : 1px solid var(--light-gray);

    &::placeholder {
      color: #d9d9d9;
    }
  }
}

.row {
  display: grid;
  grid-template-columns: 10% auto 10% auto;
  align-items: center;
  margin     : var(--sp-small);
}

.badge {
  color           : var(--white);
  display         : flex;
  padding         : calc(var(--sp-min) / 2 ) var(--sp-min);
  background-color: #d9d9d9;
}
</style>
