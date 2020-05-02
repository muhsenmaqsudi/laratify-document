<template>
  <div>
    <Playground :tabs="tabs" @active-tab="selectedTab = $event">
      <template #options>
        <Toggle name="disabled" @toggle-state="disabled = $event" />
        <Toggle name="readonly" @toggle-state="readonly = $event" />
      </template>
      <template #component>
        <component
          :is="component"
          :props="[bgColor, textColor, selectedTab, disabled, readonly]"
        >
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
      component: "input-InputComponent",
      disabled: false,
      readonly: false,
    };
  },
};
</script>

<style scoped>
.toggle__dot {
  top: -0.25rem;
  left: -0.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
