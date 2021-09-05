<template>
  <button class="bg-blue-500 rounded-xl text-white text-xl" :disabled="val" @click="btnFunction">
    Add of Character
  </button>
</template>

<script>
export default {
  name: "baseButton",
  props:{
    val:{
      type: Boolean,
      default: false
    }
  },
  methods:{
    btnFunction(){
      this.$emit("btn")
    }
  }
};
</script>
