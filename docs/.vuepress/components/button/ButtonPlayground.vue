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

        <options
          label="Size"
          :options="sizes"
          default-option="sm"
          @selected-option="size = $event"
        />
      </template>
      <template #component>
        <component
          :is="component"
          :props="[bgColor, size, selectedTab]"
        ></component>
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
      tabs: ["normal", "rounded", "outline"],
      selectedTab: "normal",
      component: "button-ButtonComponent",
    };
  },
};
</script>
