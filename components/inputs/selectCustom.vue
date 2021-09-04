<template>
  <div class="relative flex flex-col gap-2 rounded-xl px-4">
    <label class="text-gray-600">{{ label }}</label>
    <button
      type="button"
      @click="open = !open"
      class="outBtn w-full outline-none bg-gray-200 px-4 text-gray-500 rounded-xl h-12"
    >
      {{ optionVal }}
    </button>
    <div
      v-if="open"
      class="grid grid-cols-1 shadow absolute rounded-xl mt-8 wOptions"
    >
      <button
        @click="optionValue(option)"
        v-for="option of options"
        :key="option"
        class="outBtn border border-gray-200 box-border border-t-0
        border-b-1 border-l-0 border-r-0 py-4 px-2 sm:px-4 rounded
        text-md font-light transition duration-200 ease-in-out bg-white
        hover:bg-gray-200 hover:text-black transform hover:-translate-y-1"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "selectCustom",
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      require: false,
      default: null
    }
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    optionVal: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {
    optionValue(option) {
      this.open = !this.open;
      this.optionVal = option;
    }
  }
};
</script>

<style scoped>
.outBtn {
  outline: none;
}
.wOptions {
  width: calc(100% - 2rem);
}
</style>
