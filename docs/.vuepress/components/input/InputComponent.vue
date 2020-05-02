<template>
  <div class="mb-3 pt-0">
    <label class="block" for="name">
      <span class="text-gray-700">Email:</span>
      <input
        type="email"
        name="email"
        class="form-input mt-1 block w-full"
        id="email"
        value=""
        placeholder="Enter your email"
        :disabled="props[3]"
        :readonly="props[4]"
      />
    </label>
  </div>
</template>

<script>
export default {
  // props[0] = "bgColor"
  // props[1] = "textColor"
  // props[2] = "rounded option"
  // props[3] = "disabled"
  // props[4] = "readonly"
  props: ["props"],
  computed: {
    processSelectedTab() {
      if (this.props[2] == "rounded") {
        return "rounded-full";
      }
    },
  },
};
</script>

<style></style>
