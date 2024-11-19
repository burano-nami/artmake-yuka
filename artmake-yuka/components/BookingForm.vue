<script setup lang='ts'>


</script>

<template>
  <div :class="$style.booking_form_container">
    <p :class="$style.text">LINEをご利用でない方はこちら</p>
    <form :class="$style.form_container">
      <!-- お名前 -->
      <div :class="$style.form_group">
        <label :class="$style.label" for="name">お名前</label>
        <div :class="$style.row">
            <label>
              姓
              <input 
                type="text"
                name="family-name"
                autocomplete="family-name"
                class="form-control"
                placeholder="田中"
                required
              />
            </label>
            <label>
              名
              <input 
                type="text"
                name="given-name"
                autocomplete="given-name"
                class="form-control"
                placeholder="太郎"
                required
              />
            </label>
          </div>
      </div>
      <!-- ふりがな -->
      <div :class="$style.form_group">
        <label :class="$style.label" for="kana">フリガナ</label>
        <div :class="$style.row">
          <label>
            セイ
            <input 
              type="text"
              name="family-name"
              autocomplete="family-name"
              class="form-control"
              placeholder="田中"
              required
            />
          </label>
          <label>メイ
            <input 
              type="text"
              name="given-name"
              autocomplete="given-name"
              class="form-control"
              placeholder="太郎"
              required
            />
          </label>
        </div>
      </div>
      <!-- 生年月日、年齢 -->
      <div :class="$style.form_group">
        <label :class="$style.label" for="kana">生年月日</label>
        <input type="date" id="birthdate" />
      </div>
      <div :class="$style.form_group">
        <label :class="$style.label" for="kana">ご年齢</label>
        <input type="number" id="age" />
      </div>


      <!-- 住所 -->
      <div :class="$style.form_group">
          <label :class="$style.label">郵便番号</label>
          <input
            type="text"
            name="postal-code"
            autocomplete="postal-code"
            placeholder="郵便番号"
          />
      </div>

      <div :class="$style.form_group">
        <label :class="$style.label">住所</label>
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
        <label :class="$style.label" for="kana">電話番号</label>
        <input type="number" id="number" />
      </div>
      <div :class="$style.form_group">
        <label :class="$style.label" for="kana">メールアドレス<span :class=$style.badge>必須</span></label>
        <input type="email" id="email" />
      </div>

      <!-- 施術希望場所-->
      <div :class="$style.form_group">
        <label :class="$style.label" for="place">施術希望場所</label>
        <div :class="$style.column">
          <label>
            <input
              type="radio"
              id="clinic1"
              name="clinic"
              value="clinic1"
            >
            洗足整形・形成外科
          </label>
          <label>
            <input
              type="radio"
              id="clinic2"
              name="clinic"
              value="clinic2"
            />
            go-en.デンタルクリニック自由が丘
          </label>
        </div>
      </div>

      <!-- ご希望日時 -->
      <div :class="$style.form_group">
        <label :class="$style.label" for="kana">施術希望場所</label>
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
        <label :class="$style.label" for="kana">アレルギーの有無</label>
        <div :class="$style.column">
          <div :class="$style.row">
            <label>
              <input
                type="radio"
                id="clinic1"
                name="clinic"
                value="clinic1"
              />無し
            </label>
            <label>
              <input
                type="radio"
                id="clinic2"
                name="clinic"
                value="clinic2"
              />有り(有りの方は詳細をご記入ください)
            </label>
          </div>
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
        <label :class="$style.label" for="kana">既往歴
        </label>
        <input
          type="text"
          id="medical-history"
          placeholder="口唇ヘルペスの既往が一度でもある方は必ずご記入ください"
          />
      </div>
      <div :class="$style.form_group">
        <label :class="$style.label" for="kana">これまでのアートメイク経験</label>
        <input
          type="text"
          id="kana"
          placeholder="初めて/過去にあり(部位・回数)"
        />
      </div>
      <div :class="$style.form_group">
        <label :class="$style.label" for="kana">希望の色や形</label>
        <input
          type="text"
          id="make"
          placeholder="わからない場合はおまかせ、またはご相談とご記入ください"
        />
      </div>
      <div :class="$style.form_group">
        <label :class="$style.label" for="kana">その他</label>
        <input type="text" id="other" />
      </div>
      <!-- 連絡方法のご希望 -->
      <div :class="$style.form_group">
        <label :class="$style.label" for="kana">連絡方法のご希望</label>
        <div :class="$style.row">
          <label>
            <input
              type="radio"
              id="clinic1"
              name="clinic"
              value="clinic1"
            />電話
          </label>
          <label>
            <input
              type="radio"
              id="clinic2"
              name="clinic"
              value="clinic2"
            />メール
          </label>
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

.form_group {
  display              : grid;
  grid-template-columns: auto 61.8%;
  border-top           : 0.5px solid var(--gray);

  @include mediaScreen('mobile') {
    grid-template-columns: 1fr;
  }

  input {
    margin     : var(--sp-small);
    border     : 1px solid var(--light-gray);

    &::placeholder {
      color: #d9d9d9;
    }
  }
}

.label {
  inline-size     : 100%;
  padding         : var(--sp-small);
  background-color: antiquewhite;
  display         : flex;
  justify-content : space-between;
}

.row {
  display: flex;
  align-items: center;
  margin     : var(--sp-small);

  > label {
    flex: 1 0 0%;
  }
}

.column {
  display: flex;
  flex-direction: column;
  margin-block     : var(--sp-small);
}

.badge {
  color           : var(--white);
  display         : flex;
  padding         : calc(var(--sp-min) / 2 ) var(--sp-min);
  background-color: #d9d9d9;
}
</style>
