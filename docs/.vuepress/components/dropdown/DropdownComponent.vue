<template>
  <div class="flex flex-wrap">
    <div class="w-full px-2">
      <div class="relative inline-flex align-middle w-full">
        <button
          @click="toggleDropdown"
          ref="btnDropdownRef"
          class="w-full text-white font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 font-normal px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 capitalize transition transition-all ease-in duration-1000"
          :class="[props[1]]"
          type="button"
          v-on-clickaway="toggleDropdown"
        >
          <div class="flex justify-around">
            <span class="px-1">Dropdown</span>
            <svg
              class="fill-current h-4 w-4"
              :class="{
                'transition duration-300 transform rotate-180 translate-x-1': dropdownPopoverShow,
                'transition duration-300 transform': !dropdownPopoverShow,
              }"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </button>
        <div
          :class="{ hidden: !dropdownPopoverShow, block: dropdownPopoverShow }"
          class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
          style="min-width: 12rem;"
          ref="popoverDropdownRef"
        >
          <a
            href="#pablo"
            class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 hover:bg-gray-100"
            style="text-decoration: none !important;"
          >
            Action
          </a>
          <a
            href="#pablo"
            class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 hover:bg-gray-100"
            style="text-decoration: none !important;"
          >
            Another action
          </a>
          <a
            href="#pablo"
            class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 hover:bg-gray-100"
            style="text-decoration: none !important;"
          >
            Something else here
          </a>
          <div
            class="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25"
          ></div>
          <a
            href="#pablo"
            class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 hover:bg-gray-100"
            style="text-decoration: none !important;"
          >
            Seprated link
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Popper from "popper.js";
import { directive as onClickaway } from "vue-clickaway";

export default {
  // props[0] = "selectedTab"
  // props[1] = "bgColor"
  props: ["props"],
  directives: {
    onClickaway: onClickaway,
  },
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown() {
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        new Popper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>
