<template>
  <div class="my-4">
    <div class="bg-white border border-2 shadow">
      <nav class="flex flex-col justify-between sm:flex-row">
        <div class="flex flex-row">
          <button
            v-for="(tab, index) in tabs"
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
            v-for="(tab, index) in tabs"
            :key="index"
          >
            <slot name="component"></slot>
            <!-- <slot :user="user">{{ user.lastName }}</slot> -->
          </div>
        </div>

        <div class="my-8">
          <slot name="options"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tabs"],
  data() {
    return {
      activeTab: "normal",
    };
  },
  computed: {
    activeClass() {
      return "text-blue-500 border-b-2 font-medium border-blue-500";
    },
  },
};
</script>
