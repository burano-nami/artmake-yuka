<script setup lang="ts">

const selectedTab = ref('restrictions'); // 初期値として 'trainers' を設定

const toggleTab = (tabName: string) => {
  selectedTab.value = tabName;
}

const decorationHeight = ref(0);

onMounted(() => {
  const decoration = document.getElementById('decoration');
  if (decoration) {
    decorationHeight.value = decoration.clientHeight;
  }
});
</script>

<template>
  <SectionContainer :class="$style.risks_container">
    <SectionTitle
      title="Risks"
      jaTitle="リスクと副作用"
    />
      <div :class="$style.risks_contents">
        <div :class="$style.tab_button_wrap">
          <button 
            :class="[$style.tab_button, { [$style.active]: selectedTab === 'restrictions' }]"
            @click="toggleTab('restrictions')"
          >
            施術ができない方
          </button>
          <button
            :class="[$style.tab_button, { [$style.active]: selectedTab === 'risks' }]"
            @click="toggleTab('risks')"
          >
            施術に伴うリスク
          </button>
          <button
            :class="[$style.tab_button, { [$style.active]: selectedTab === 'mriInfo' }]"
            @click="toggleTab('mriInfo')"
          >
            MRIについて
          </button>
        </div>
        <RisksContent
          :selectedTab="selectedTab"
        />
      </div>  
  </SectionContainer>
</template> 


<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;


.risks_container {
  max-inline-size: var(--contents-max-width);
  inline-size: 100%;       
  position        : relative;
}

.risks_contents {
  max-width         : var(--section-max-width);
  margin-inline     : auto;
  margin-bottom     : var(--decoration-height);
  margin-block-start: var(--sp-larger);
}

.tab_button_wrap {
  display        : flex;
  justify-content: space-between;
  gap            : var(--sp-min);
  padding-block-start  : var(--sp-medium);
}

.tab_button {
  width        : 100%;
  font-weight  : normal;
  border-radius: 0px;
  padding-block: var(--sp-medium);
  color        : var(--black);
  border-radius: 10px 10px 0px 0px;
  background   : var(--pale-green);
  cursor       : pointer;

  &.active {
    background   : var(--white);
    border-radius: 10px 10px 0px 0px;
    border-top   : 5px solid var(--pale-green);
    border-right : 5px solid var(--pale-green);
    border-left  : 5px solid var(--pale-green);
    font-weight  : bold;
  }
}
</style>