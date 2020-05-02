<template>
  <div class="group p-2">
    <label
      class="w-64 flex flex-col items-center p-4 bg-white text-black rounded-lg shadow-lg tracking-wide cursor-pointer group-hover:text-white"
      :class="`hover:${props[0]}`"
    >
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
        />
      </svg>
      <span class="mt-1 text-sm leading-normal">FileUpload:</span>
      <input
        type="file"
        class="hidden"
        name="fileupload"
        id="fileupload"
        ref="selectedFile"
        @change="getFilename()"
      />
      <span
        class="text-gray-700 pt-1 text-xs group-hover:text-white"
        id="filename"
        v-text="filename"
      ></span>
    </label>
  </div>
</template>

<script>
export default {
  // props[0] = "selected tab"
  props: ["props"],
  data() {
    return {
      filename: null,
    };
  },
  methods: {
    getFilename() {
      this.filename = this.$refs.selectedFile.files[0].name;
    },
  },
};
</script>

<style></style>
