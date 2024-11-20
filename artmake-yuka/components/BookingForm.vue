<script setup lang='ts'>


</script>

<template>
  <div :class="$style.booking_form_container">
    <p :class="$style.text">LINEをご利用でない方はこちら</p>
    <form :class="$style.form_container">
      <!-- お名前 -->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="name">お名前</label>
        </div>
        <div :class="$style.input_group">
          <div :class="$style.name_row">
              <label :class="$style.name_label">
                <div style="margin-inline-end: var(--sp-small);">姓</div>
                <input 
                  type="text"
                  name="family-name"
                  autocomplete="family-name"
                  :class="$style.name_form"
                  placeholder="山田"
                  required
                />
              </label>
              <label :class="$style.name_label">
                <div style="margin-inline-end: var(--sp-small);">名</div>
                <input 
                  type="text"
                  name="given-name"
                  autocomplete="given-name"
                  :class="$style.name_form"
                  placeholder="花子"
                  required
                />
              </label>
            </div>
        </div>
      </div>

      <!-- ふりがな -->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="kana">フリガナ</label>
        </div>
        <div :class="$style.input_group">
          <div :class="$style.name_row">
            <label :class="$style.name_label">
                <div style="margin-inline-end: var(--sp-small);">セイ</div>
                <input 
                  type="text"
                  name="family-name"
                  autocomplete="family-name"
                  :class="$style.name_form"
                  placeholder="ヤマダ"
                  required
                />
            </label>
            <label :class="$style.name_label">
              <div style="margin-inline-end: var(--sp-small);">メイ</div>
              <input 
                type="text"
                name="given-name"
                autocomplete="given-name"
                :class="$style.name_form"
                placeholder="ハナコ"
                required
              />
            </label>
          </div>
        </div>
      </div>

      <!-- 生年月日 -->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="kana">生年月日</label>
        </div>
        <div :class="$style.input_group">
          <input type="date" id="birthdate" :class="$style.input"/>
        </div>
      </div>

      <!-- 年齢 -->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="kana">ご年齢</label>
        </div>
        <div :class="$style.input_group">
          <input type="number" id="age" :class="$style.input"/>
        </div>
      </div>


      <!-- 郵便番号 -->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label">郵便番号</label>
        </div>
        <div :class="$style.input_group">
          <input
            type="text"
            name="postal-code"
            autocomplete="postal-code"
            placeholder="郵便番号"
            :class="$style.input"
          />
        </div>
      </div>

      <!-- 住所 -->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label">住所</label>
        </div>
        <div :class="$style.input_group">
          <div :class="$style.row_address">
            <div :class="$style.address_label">都道府県</div>
            <input
              type="text"
              name="address-level1"
              autocomplete="address-level1"
              placeholder="東京都"
              style="margin: 0;"
              :class="$style.address_form"
            />
          </div>
          <div :class="$style.row_address">
            <div :class="$style.address_label">市区町村</div>
            <input
              type="text"
              name="address-level2"
              autocomplete="address-level2"
              placeholder="中央区"
              :class="$style.address_form"
              style="margin: 0;"
            />
          </div>
          <div :class="$style.row_address">
            <div :class="$style.address_label">番地等</div>
            <input
              type="text"
              name="address-line1"
              autocomplete="address-line1"
              placeholder="◯丁目◯番"
              :class="$style.address_form"
              style="margin: 0;"
            />
          </div>
        </div>
      </div>

      <!-- 電話番号-->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="kana">電話番号</label>
        </div>
        <div :class="$style.input_group">
          <input type="number" id="number" :class="$style.input"/>
        </div>
      </div>

      <!-- メールアドレス-->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="kana">メールアドレス<span :class=$style.badge>必須</span></label>
        </div>
        <div :class="$style.input_group">
          <input type="email" id="email" :class="$style.input"/>
        </div>
      </div>

      <!-- 施術希望場所-->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="place">施術希望場所</label>
        </div>
        <div :class="$style.input_group">
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
      </div>

      <!-- ご希望日時 -->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="kana">施術希望日時</label>
        </div>
        <div :class="$style.input_group">
          <div>
            <div :class="$style.row">
              <div class="">第一希望</div>
              <input type="date" :class="$style.input"/>
              <input type="time" :class="$style.input"/>
            </div>
            <div :class="$style.row">
              <div class="">第二希望</div>
              <input type="date" :class="$style.input"/>
              <input type="time" :class="$style.input"/>
            </div>
            <div :class="$style.row">
              <div class="">第三希望</div>
              <input type="date" :class="$style.input"/>
              <input type="time" :class="$style.input"/>
            </div>
          </div>
        </div>
      </div>

      <!-- アレルギーの有無 -->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="kana">アレルギーの有無</label>
        </div>
        <div :class="$style.input_group">
          <div :class="$style.column">
              <label>
                <input
                  type="radio"
                  id="clinic1"
                  name="allergy"
                  value="clinic1"
                />無し
              </label>
              <label>
                <input
                  type="radio"
                  id="clinic2"
                  name="allergy"
                  value="clinic2"
                />有り(有りの方は詳細をご記入ください)
              </label>
            <input 
              type="text"
              id="clinic2"
              placeholder="アルコール、薬剤、金属など"
              :class="$style.input"
            />
          </div>
        </div>
      </div>

      <!-- 既往歴 -->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="kana">既往歴</label>
        </div>
        <div :class="$style.input_group">
          <input
            type="text"
            id="medical-history"
            placeholder="口唇ヘルペスの既往が一度でもある方は必ずご記入ください"
            :class="$style.input"
          />
        </div>
      </div>

      <!-- アートメイク経験 -->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="kana">これまでのアートメイク経験</label>
        </div>
        <div :class="$style.input_group">
          <input
            type="text"
            id="kana"
            placeholder="初めて/過去にあり(部位・回数)"
            :class="$style.input"
          />
        </div>
      </div>

      <!-- 希望の色や形 -->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="kana">希望の色や形</label>
        </div>
        <div :class="$style.input_group">
          <input
            type="text"
            id="make"
            placeholder="わからない場合はおまかせ、またはご相談とご記入ください"
            :class="$style.input"
          />
        </div>
      </div>

      <!-- その他 -->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="kana">その他</label>
        </div>
        <div :class="$style.input_group">
          <input type="text" id="other" style="height:100px" :class="$style.input"/>
        </div>
      </div>


      <!-- 連絡方法のご希望 -->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="kana">連絡方法のご希望</label>
        </div>
        <div :class="$style.input_group">
          <div :class="$style.column">
            <label>
              <input
                type="radio"
                id="clinic1"
                name="contact"
                value="clinic1"
              />電話
            </label>
            <label>
              <input
                type="radio"
                id="clinic2"
                name="contact"
                value="clinic2"
              />メール
            </label>
          </div>
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

.form_group_wrapper {
  display: flex;
  gap: var(--sp-medium);

  @include mediaScreen('mobile') {
    flex-direction: column;
  }
}

.label_group {
  flex: 0 0 auto;
  inline-size:33.33333333%;
  border-top           : 0.5px solid var(--gray);

  @include mediaScreen('mobile') {
    inline-size:100%;
  }
}

.input_group {
  flex: 0 0 auto;
  inline-size: 66.66666667%;
  border-top           : 0.5px solid var(--gray);

  @include mediaScreen('mobile') {
    inline-size:100%;
    border-top           : none;
  }
}

.input {
  inline-size: 100%;
  margin-block     : var(--sp-small);
  border     : 1px solid var(--light-gray);
}

.label {
  inline-size     : 100%;
  padding         : var(--sp-small);
  /* background-color: antiquewhite; */
  display         : flex;
  justify-content : space-between;
}

.row {
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  align-items: center;
  margin-block     : var(--sp-small);
  gap: var(--sp-small);

  > label {
    flex: 1 0 0%;
  }
}

.row_address {
  display: flex;
  margin-block     : var(--sp-small);
}

.name_row {
  display: flex;
  align-items: center;
  margin-block     : var(--sp-small);
  gap: var(--sp-small);

  > label {
    flex: 1 0 0%;
    inline-size: 100%;
  }

  @include mediaScreen('mobile') {
    flex-direction: column;
    align-items: flex-start;
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

.name_label {
  display: flex;
  align-items: center;

  div > {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
}

.name_form {
  flex: 1 1 0%;
  border     : 1px solid var(--light-gray);
}

.address_label {
  flex: 0 0 auto;
  inline-size:33.33333333%;
}

.address_form {
  flex: 0 0 auto;
  inline-size: 66.66666667%;
  border     : 1px solid var(--light-gray);
}
</style>
