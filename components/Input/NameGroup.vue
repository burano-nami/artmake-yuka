<script setup lang='ts'>
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const props = defineProps<{
  modelValue: boolean 
}>()

const fullName = ref<string>('')
const fullNameKana = ref<string>('')

watch([fullName, fullNameKana], ([fullName, fullNameKana]) => {
  const isValid = fullName.trim().length > 0 && fullNameKana.trim().length > 0
  emit('update:modelValue', isValid)
})

</script>

<template>
  <div>
    <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="name">お名前<span :class=$style.badge>必須</span></label>
        </div>
        <div :class="$style.input_group">
          <input 
            v-model="fullName"
            :class="$style.input"
            type="text"
            name="full-name"
            autocomplete="name"
            placeholder="山田 花子"
            required
          />
        </div>
      </div>
      <!-- ふりがな -->
      <div :class="$style.form_group_wrapper">
        <div :class="$style.label_group">
          <label :class="$style.label" for="kana">フリガナ<span :class=$style.badge>必須</span></label>
        </div>
        <div :class="$style.input_group">
          <input 
            v-model="fullNameKana"
            :class="$style.input"
            type="text"
            name="given-name-kana"
            autocomplete="given-name"
            placeholder="ヤマダ ハナコ"
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
  inline-size    : 100%;
  padding        : var(--sp-small);
  display        : flex;
  justify-content: space-between;
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