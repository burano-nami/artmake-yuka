<template>
  <div>
    <!-- 生年月日 -->
    <div :class="$style.form_group_wrapper">
      <div :class="$style.label_group">
        <label :class="$style.label" for="kana">生年月日</label>
      </div>
      <div :class="$style.input_group">
        <input 
          type="date"
          id="birthdate"
          name="birthdate"
          :class="$style.input"
          :value="null"
        />
      </div>
    </div>

    <!-- 年齢 -->
    <div :class="$style.form_group_wrapper">
      <div :class="$style.label_group">
        <label :class="$style.label" for="kana">ご年齢</label>
      </div>
      <div :class="$style.input_group">
        <input
          type="text"
          id="age"
          name="age"
          :class="$style.input"
        />
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
    flex-direction  : column;
    gap             : 0;
    margin-block-end: var(--sp-medium);
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
</style>