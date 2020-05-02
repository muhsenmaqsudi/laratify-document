<template>
  <div>
    <Playground :tabs="tabs" @active-tab="selectedTab = $event">
      <template #options>
        <options
          label="Color"
          :options="colors"
          default-option="blue"
          @selected-option="background = $event"
        />

        <options
          label="Color Shade"
          :options="shades"
          default-option="500"
          @selected-option="shade = $event"
        />
      </template>
      <template #component>
        <component :is="component" :props="[bgColor, selectedTab]"></component>
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
      component: "file-FileComponent",
    };
  },
};
</script>
