<template>
  <button
    @click="up"
    class=" rounded-full text-white shadow-xl flex justify-center pt-1"
    :class="
      icon
        ? 'bg-blue-500 hover:bg-blue-600 w-14 h-14 text-4xl'
        : 'bg-red-500 hover:bg-red-600 w-10 h-10 text-xl'
    "
    v-text="icon ? '+' : 'x'"
  />
</template>

<script>
export default {
  name: "upButton",
  props: {
    icon: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    up() {
      this.$store.dispatch("showForm");
    }
  }
};
</script>
