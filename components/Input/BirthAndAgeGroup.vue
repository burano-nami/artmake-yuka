<script setup lang='ts'>


</script>

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
          :value="new Date(new Date().setFullYear(new Date().getFullYear() - 30)).toISOString().substr(0, 10)"
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
  appearance: none;
  -webkit-appearance: none;
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