<template>
  <div>
    <button
      class="text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 transition transition-all ease-in duration-75"
      type="button"
      v-show="props[2] === 'normal'"
      :class="[getBackgroundColor, getButtonSize, getActivePsuedo]"
    >
      {{ buttonTitle }}
    </button>

    <button
      class="text-white font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 transition transition-all ease-in duration-75"
      type="button"
      v-show="props[2] === 'rounded'"
      :class="[getBackgroundColor, getButtonSize, getActivePsuedo]"
    >
      {{ buttonTitle }}
    </button>

    <button
      class="bg-transparent border border-solid hover:text-white font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 transition transition-all ease-in duration-75"
      type="button"
      v-show="props[2] === 'outline'"
      :class="[getBackgroundColor, getButtonSize, getActivePsuedo]"
    >
      {{ buttonTitle }}
    </button>
  </div>
</template>

<script>
export default {
  // props[0] = "bgColor"
  // props[1] = "btnSize"
  // props[2] = "button type",
  props: ["props"],
  data() {
    return {
      buttonTitle: "Button Title",
    };
  },
  computed: {
    getBackgroundColor() {
      if (this.props[2] === "outline") {
        return `hover:${this.props[0]} ${this.props[0].replace(
          "bg",
          "border"
        )} ${this.props[0].replace("bg", "text")}  `;
      } else {
        return this.props[0];
      }
    },
    getButtonSize() {
      if (this.props[1] == "sm") {
        return "text-xs";
      } else if (this.props[1] == "md") {
        return "text-sm";
      } else {
        return "text-base";
      }
    },
    getActivePsuedo() {
      let bgColorClass = this.props[0];
      if (bgColorClass == "bg-white" || bgColorClass == "bg-black") {
        return "";
      } else {
        let shade = bgColorClass.match(/\d00/i);
        let bg = bgColorClass.split(/\d/);
        let activeShade = +shade[0] + 100;
        return `active:${bg[0] + activeShade}`;
      }
    },
  },
};
</script>

<style></style>
