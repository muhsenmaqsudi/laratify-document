<template>
  <div>
    <Playground :tabs="tabs" @active-tab="selectedTab = $event">
      <template #component>
        <component :is="component" :props="[selectedTab]"></component>
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
      component: "textarea-TextareaComponent",
    };
  },
};
</script>
