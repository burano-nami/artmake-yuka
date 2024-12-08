<script setup lang='ts'>


</script>

<template>
  <div>
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
              name="clinic"
              value="洗足整形・形成外科"
            >
            洗足整形・形成外科
          </label>
          <label>
            <input
              type="radio"
              name="clinic"
              value="go-en.デンタルクリニック自由が丘"
            />
            go-en.デンタルクリニック自由が丘
          </label>
        </div>
      </div>
    </div>
    <!-- ご希望日時 -->
    <div :class="$style.form_group_wrapper">
      <div :class="$style.label_group">
        <label :class="$style.label">施術希望日時</label>
      </div>
      <div :class="$style.input_group">
        <div>
          <div :class="$style.row">
            <div class="">第一希望</div>
            <input
              type="datetime-local"
              name="DesiredDate_1"
              :class="$style.input"
              value=""
            />
          </div>
          <div  :class="$style.row">
            <div class="">第二希望</div>
            <input
              type="datetime-local"
              name="DesiredDate_2"
              :class="$style.input"
              value=""
            />
          </div>
          <div :class="$style.row">
            <div class="">第三希望</div>
            <input
              type="datetime-local"
              name="DesiredDate_3"
              :class="$style.input"
              value=""
            />
          </div>
        </div>
      </div>
    </div>

    <!-- アレルギーの有無 -->
    <div :class="$style.form_group_wrapper">
      <div :class="$style.label_group">
        <label :class="$style.label" for="allergy">アレルギーの有無</label>
      </div>
      <div :class="$style.input_group">
        <div :class="$style.column">
            <label>
              <input
                type="radio"
                id="allergy"
                name="allergy"
                value="無し"
              />無し
            </label>
            <label>
              <input
                type="radio"
                id="allergy"
                name="allergy"
                value="有り"
              />有り(有りの方は詳細をご記入ください)
            </label>
          <input 
            type="text"
            id="allergy"
            name="allergy"
            placeholder="アルコール、薬剤、金属など"
            :class="$style.input"
          />
        </div>
      </div>
    </div>

    <!-- 既往歴 -->
    <div :class="$style.form_group_wrapper">
      <div :class="$style.label_group">
        <label :class="$style.label" for="medical-history">既往歴</label>
      </div>
      <div :class="$style.input_group">
        <input
          type="text"
          id="medical-history"
          name="medical-history"
          placeholder="口唇ヘルペスの既往が一度でもある方は必ずご記入ください"
          :class="$style.input"
        />
      </div>
    </div>

    <!-- アートメイク経験 -->
    <div :class="$style.form_group_wrapper">
      <div :class="$style.label_group">
        <label :class="$style.label" for="art-make">これまでのアートメイク経験</label>
      </div>
      <div :class="$style.input_group">
        <input
          type="text"
          id="art-make"
          name="art-make_experience"
          placeholder="初めて/過去にあり(部位・回数)"
          :class="$style.input"
        />
      </div>
    </div>

    <!-- 希望の色や形 -->
    <div :class="$style.form_group_wrapper">
      <div :class="$style.label_group">
        <label :class="$style.label" for="design">希望の色や形</label>
      </div>
      <div :class="$style.input_group">
        <input
          type="text"
          id="design"
          name="design"
          placeholder="わからない場合はおまかせ、またはご相談とご記入ください"
          :class="$style.input"
        />
      </div>
    </div>

    <!-- その他 -->
    <div :class="$style.form_group_wrapper">
      <div :class="$style.label_group">
        <label :class="$style.label" for="other">その他</label>
      </div>
      <div :class="$style.input_group">
        <textarea
          id="other"
          name="other"
          style="height:100px"
          :class="$style.input"
        />
      </div>
    </div>

    <!-- 連絡方法のご希望 -->
    <div :class="$style.form_group_wrapper">
      <div :class="$style.label_group">
        <label :class="$style.label" for="contact">連絡方法のご希望</label>
      </div>
      <div :class="$style.input_group">
        <div :class="$style.column">
          <label>
            <input
              type="radio"
              id="contact"
              name="contact"
              value="電話"
            />電話
          </label>
          <label>
            <input
              type="radio"
              id="contact"
              name="contact"
              value="メール"
            />メール
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
  grid-template-columns: auto 1fr;
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