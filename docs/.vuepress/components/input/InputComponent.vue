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
        :disabled="props[1]"
        :readonly="props[2]"
      />
    </label>
  </div>
</template>

<script>
export default {
  // props[0] = "selected tab"
  // props[1] = "disabled"
  // props[2] = "readonly"
  props: ["props"],
};
</script>

<style></style>
