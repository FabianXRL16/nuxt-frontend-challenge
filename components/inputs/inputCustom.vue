<template>
  <div class="flex flex-col gap-2 rounded-xl px-4">
    <label class="text-gray-600">{{ label }}</label>
    <input
      class="outline-none bg-gray-200 px-4 text-gray-500 rounded-xl h-12"
      type="text"
      v-model="inputModel"
    />
  </div>
</template>

<script>
export default {
  name: "inputCustom",
  props: {
    label: {
      type: String,
      default: "Label"
    },
    value: String
  },
  computed:{
    inputModel:{
      get(){
        return this.value
      },
      set(newValue){
        this.$emit("input", newValue)
      }
    }
  }
};
</script>
