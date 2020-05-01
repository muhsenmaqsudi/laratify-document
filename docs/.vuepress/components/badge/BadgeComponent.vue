<template>
  <span
    class="text-xs font-semibold inline-block py-1 px-2 last:mr-0 mr-1"
    :class="[props[0], props[1], processSelectedTab]"
  >
    Your text goes here
  </span>
</template>

<script>
export default {
  // props[0] = "bgColor"
  // props[1] = "textColor"
  // props[2] = "rounded option"
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
