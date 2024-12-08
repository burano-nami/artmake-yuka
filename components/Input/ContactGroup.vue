<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void 
}>()

const props = defineProps<{
  modelValue: boolean // v-modelのバインディング値
}>()

// メールアドレス入力を監視
const email = ref<string>('')

// 入力の有効性を確認
watch(email, (newValue) => {
  const isValid = newValue.trim().length > 0 // 空チェック
  emit('update:modelValue', isValid) // 親に状態を通知
})
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
          type="text"
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
          v-model="email"
          type="email"
          id="email"
          name="email"
          placeholder="art_make@gmail.com"
          :class="$style.input"
          required
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
  margin-block-end: var(--sp-small);

  @include mediaScreen('mobile') {
    flex-direction: column;
    gap    : 0;
    margin-block-end: var(--sp-medium);
  }
}

.label_group {
  flex       : 0 0 auto;
  inline-size: 33.33333333%;
  font-weight: 400;
  /* border-top : 0.5px solid var(--gray); */

  @include mediaScreen('mobile') {
    inline-size: 100%;
  }
}

.input_group {
  flex       : 0 0 auto;
  inline-size: 66.66666667%;
  /* border-top : 0.5px solid var(--gray); */

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
  font-size       : var(--fs-smaller);
  display         : flex;
  align-items     : center;
  padding-inline  : var(--sp-min);
  background-color: var(--red);
}
</style>