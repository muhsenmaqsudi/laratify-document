<template>
  <div class="w-40 px-3 mb-6 md:mb-0">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold m-2"
      v-text="label"
    >
    </label>
    <div class="relative">
      <select
        v-model="selected"
        class="block capitalize appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        @change="$emit('selected-option', selected)"
        :class="inputClass"
      >
        <option
          v-for="option in options"
          :value="option"
          v-text="option"
        ></option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["label", "options", "defaultOption", "inputClass"],
  // provide: {
  //   options: ["bgColor", "textColor"],
  // },
  // in consumer comopnent
  // inject: ["options"],
  data() {
    return {
      selected: this.defaultOption,
    };
  },
};
</script>
