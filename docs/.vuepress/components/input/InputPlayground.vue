<template>
  <div>
    <Playground :tabs="tabs" @active-tab="selectedTab = $event">
      <template #options>
        <div class="flex m-4">
          <label for="toogleA" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div class="relative">
              <!-- input -->
              <input
                id="toogleA"
                type="checkbox"
                class="hidden"
                v-model="disabled"
              />
              <!-- line -->
              <div
                class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
              ></div>
              <!-- dot -->
              <div
                class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
              ></div>
            </div>
            <!-- label -->
            <div class="ml-3 text-gray-700 font-medium">
              Disabled
            </div>
          </label>
        </div>
        <div class="flex m-4">
          <label for="toogleB" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div class="relative">
              <!-- input -->
              <input
                id="toogleB"
                type="checkbox"
                class="hidden"
                v-model="readonly"
              />
              <!-- line -->
              <div
                class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
              ></div>
              <!-- dot -->
              <div
                class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
              ></div>
            </div>
            <!-- label -->
            <div class="ml-3 text-gray-700 font-medium">
              Readonly
            </div>
          </label>
        </div>
      </template>
      <template #component>
        <component
          :is="component"
          :props="[bgColor, textColor, selectedTab, disabled, readonly]"
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
      tabs: ["normal"],
      selectedTab: "",
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
