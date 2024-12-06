<script setup lang='ts'>
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const props = defineProps<{
  modelValue: boolean 
}>()

const familyName = ref<string>('')
const firstName = ref<string>('')
const familyNameKana = ref<string>('')
const firstNameKana = ref<string>('')

watch([familyName, firstName, familyNameKana, firstNameKana], ([familyName, firstName, familyNameKana, firstNameKana]) => {
  const isValid = familyName.trim().length > 0 && firstName.trim().length > 0 && familyNameKana.trim().length > 0 && firstNameKana.trim().length > 0
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
          <div :class="$style.name_row">
              <label :class="$style.name_label">
                <div style="margin-inline-end: var(--sp-small);">姓</div>
                <input 
                  v-model="familyName"
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
                  v-model="firstName"
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
          <label :class="$style.label" for="kana">フリガナ<span :class=$style.badge>必須</span></label>
        </div>
        <div :class="$style.input_group">
          <div :class="$style.name_row">
            <label :class="$style.name_label">
                <div style="margin-inline-end: var(--sp-small);">セイ</div>
                <input 
                  v-model="familyNameKana"
                  type="text"
                  name="family-name-kana"
                  autocomplete="family-name"
                  :class="$style.name_form"
                  placeholder="ヤマダ"
                  required
                />
            </label>
            <label :class="$style.name_label">
              <div style="margin-inline-end: var(--sp-small);">メイ</div>
                <input 
                  v-model="firstNameKana"
                  type="text"
                  name="given-name-kana"
                  autocomplete="given-name"
                  :class="$style.name_form"
                  placeholder="ハナコ"
                  required
                />
            </label>
          </div>
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

.name_row {
  display     : flex;
  align-items : center;
  margin-block: var(--sp-small);
  gap         : var(--sp-small);

  > label {
    flex       : 1 0 0%;
    inline-size: 100%;
  }

  @include mediaScreen('mobile') {
    flex-direction: column;
    align-items   : flex-start;
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

.name_label {
  display    : flex;
  align-items: center;

  > div {
    flex : 0 0 auto;
    width: 8.33333333%;
  }
}

.name_form {
  flex  : 1 1 0%;
  border: 1px solid var(--light-gray);
}
</style>