<template>
  <div>
    <!-- 郵便番号 -->
    <div :class="$style.form_group_wrapper">
      <div :class="$style.label_group">
        <label 
          :class="$style.label"
          for="postal-code"
        >
          郵便番号
        </label>
      </div>
      <div :class="$style.input_group">
        <input
          type="text"
          name="postal_code"
          autocomplete="postal-code"
          placeholder="1234567"
          :class="$style.input"
        />
      </div>
    </div>
    <!-- 住所 -->
    <div :class="$style.form_group_wrapper">
      <div :class="$style.label_group">
        <label
          :class="$style.label"
          for="address"
        >
          住所
        </label>
      </div>
      <div :class="$style.input_group">
        <div :class="$style.row_address">
          <div :class="$style.address_label">都道府県</div>
          <input
            type="text"
            name="address_level1"
            id="address"
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
            name="address_level2"
            id="address"
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
            name="address_line1"
            id="address"
            autocomplete="address-line1"
            placeholder="◯丁目◯番"
            :class="$style.address_form"
            style="margin: 0;"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.form_group_wrapper {
  display         : flex;
  margin-block-end: var(--sp-small);

  @include mediaScreen('mobile') {
    flex-direction: column;
    gap           : 0;
  }
}

.label_group {
  flex       : 0 0 auto;
  inline-size: 33.33333333%;
  font-weight: 400;

  @include mediaScreen('mobile') {
    inline-size: 100%;
  }
}

.input_group {
  flex       : 0 0 auto;
  inline-size: 66.66666667%;

  @include mediaScreen('mobile') {
    inline-size: 100%;
    border-top : none;
  }
}

.input {
  inline-size : 100%;
  margin-block: var(--sp-small);
  border      : 1px solid var(--light-gray);
}

.label {
  inline-size    : 100%;
  padding        : var(--sp-small);
  display        : flex;
  justify-content: space-between;
}

.row {
  display              : grid;
  grid-template-columns: auto 1fr 1fr;
  align-items          : center;
  margin-block         : var(--sp-small);
  gap                  : var(--sp-small);

  > label {
    flex: 1 0 0%;
  }
}

.row_address {
  display     : flex;
  margin-block: var(--sp-small);
}

.column {
  display       : flex;
  flex-direction: column;
  margin-block  : var(--sp-small);
}

.badge {
  color           : var(--white);
  display         : flex;
  padding         : calc(var(--sp-min) / 2 ) var(--sp-min);
  background-color: #d9d9d9;
}

.address_label {
  flex       : 0 0 auto;
  inline-size: 33.33333333%;
}

.address_form {
  flex       : 0 0 auto;
  inline-size: 66.66666667%;
  border     : 1px solid var(--light-gray);
}
</style>