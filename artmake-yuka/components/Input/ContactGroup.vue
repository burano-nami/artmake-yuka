<script setup lang='ts'>


</script>

<template>
  <div>
    <!-- 電話番号-->
    <div :class="$style.form_group_wrapper">
      <div :class="$style.label_group">
        <label
          :class="$style.label"
          for="number"
        >
          電話番号
        </label>
      </div>
      <div :class="$style.input_group">
        <input
          type="number"
          id="number"
          name="number"
          placeholder="09012345678"
          :class="$style.input"
        />
      </div>
    </div>

    <!-- メールアドレス-->
    <div :class="$style.form_group_wrapper">
      <div :class="$style.label_group">
        <label
          :class="$style.label"
          for="kana"
        >
          メールアドレス
        <span :class=$style.badge>必須</span></label>
      </div>
      <div :class="$style.input_group">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="art_make@gmail.com"
          :class="$style.input"
        />
      </div>
    </div>
  </div>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;


.form_group_wrapper {
  display: flex;
  gap    : var(--sp-medium);

  @include mediaScreen('mobile') {
    flex-direction: column;
  }
}

.label_group {
  flex       : 0 0 auto;
  inline-size: 33.33333333%;
  border-top : 0.5px solid var(--gray);

  @include mediaScreen('mobile') {
    inline-size: 100%;
  }
}

.input_group {
  flex       : 0 0 auto;
  inline-size: 66.66666667%;
  border-top : 0.5px solid var(--gray);

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
  inline-size: 100%;
  padding    : var(--sp-small);
    /* background-color: antiquewhite; */
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
</style>