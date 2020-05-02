<template>
  <div>
    <Playground :tabs="tabs" @active-tab="selectedTab = $event">
      <template #options>
        <Toggle name="disabled" @toggle-state="disabled = $event" />
      </template>
      <template #component>
        <component :is="component" :props="[selectedTab, disabled]">
        </component>
      </template>
    </Playground>
  </div>
</template>

<script>
import { playground } from "@/mixins/playground";

export default {
  mixins: [playground],
  data() {
    return {
      tabs: ["normal"],
      selectedTab: "normal",
      component: "checkbox-CheckboxComponent",
      disabled: false,
    };
  },
};
</script>
