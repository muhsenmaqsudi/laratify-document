<template>
  <div class="flex m-4">
    <label :for="name" class="flex items-center cursor-pointer">
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input
          :id="name"
          type="checkbox"
          class="hidden"
          v-model="isToggleOn"
          @change="$emit('toggle-state', isToggleOn)"
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
      <div class="ml-3 text-gray-700 font-medium capitalize">
        {{ name }}
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      isToggleOn: false,
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
