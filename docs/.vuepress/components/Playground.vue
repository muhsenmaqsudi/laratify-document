<template>
  <div class="my-4">
    <div class="bg-white border border-2 shadow">
      <nav class="flex flex-col justify-between sm:flex-row">
        <div class="flex flex-row">
          <button
            v-for="(tab, index) in this.tabs"
            :key="index"
            @click="activeTab = tab"
            :class="[activeTab == tab ? activeClass : '']"
            class="text-gray-600 capitalize py-4 px-6 block hover:text-blue-500 focus:outline-none"
          >
            {{ tab }}
          </button>
        </div>
        <div>
          <span class="text-gray-600 py-4 px-6 block focus:outline-none">
            Options
          </span>
        </div>
      </nav>
      <div class="flex flex-row justify-between">
        <div class="p-4 flex">
          <div
            v-show="activeTab == tab"
            class="self-center ml-2"
            v-for="(tab, index) in this.tabs"
            :key="index"
          >
            <component
              :is="component"
              :bg-color="bgColor"
              :text-color="textColor"
            ></component>
            <!-- <alert-AlertComponent :bg-color="bgColor" :text-color="textColor" /> -->
          </div>
        </div>

        <div class="my-8">
          <div class="w-40 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold m-2"
            >
              Color
            </label>
            <div class="relative">
              <select
                v-model="background"
                class="block capitalize appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option
                  v-for="color in colors"
                  :value="color"
                  v-text="color"
                ></option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-40 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold m-2"
            >
              Text Color
            </label>
            <div class="relative">
              <select
                v-model="text"
                class="block capitalize appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option
                  v-for="color in colors"
                  :value="color"
                  v-text="color"
                ></option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-40 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold m-2"
            >
              Color Shade
            </label>
            <div class="relative">
              <select
                v-model="shade"
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option v-for="shadeValue in shades" :value="shadeValue">
                  {{ shadeValue }}
                </option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tabs", "options", "component"],
  data() {
    return {
      activeTab: "tab1",
      background: "blue",
      text: "white",
      shade: "500",
      shades: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      colors: [
        "white",
        "black",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "indigo",
        "purple",
        "pink",
      ],
    };
  },
  computed: {
    activeClass() {
      return "text-blue-500 border-b-2 font-medium border-blue-500";
    },
    bgColor() {
      if (this.background == "black" || this.background == "white") {
        return `bg-${this.background}`;
      } else {
        return `bg-${this.background}-${this.shade}`;
      }
    },
    textColor() {
      if (this.text == "black" || this.text == "white") {
        return `text-${this.text}`;
      } else {
        return `text-${this.text}-${this.shade}`;
      }
    },
  },
};
</script>

<style></style>
