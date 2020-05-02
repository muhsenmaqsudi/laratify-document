<template>
  <div class="block">
    <span class="text-gray-700">Radio Buttons</span>
    <div class="mt-2">
      <div>
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio"
            name="radio"
            value="1"
            checked
          />
          <span class="ml-2">Option 1</span>
        </label>
      </div>
      <div>
        <label class="inline-flex items-center">
          <input type="radio" class="form-radio" name="radio" value="2" />
          <span class="ml-2">Option 2</span>
        </label>
      </div>
      <div>
        <label class="inline-flex items-center">
          <input type="radio" class="form-radio" name="radio" value="3" />
          <span class="ml-2">Option 3</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props[0] = "selected tab"
  props: ["props"],
};
</script>

<style></style>
