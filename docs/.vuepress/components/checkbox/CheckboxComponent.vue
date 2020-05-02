<template>
  <div>
    <label class="inline-flex items-center">
      <input
        type="checkbox"
        class="form-checkbox"
        checked
        :disabled="props[1]"
      />
      <span class="ml-2">Accept Terms</span>
    </label>
  </div>
</template>

<script>
export default {
  // props[0] = "selected tab"
  // props[1] = "disabled"
  props: ["props"],
};
</script>

<style></style>
