<template>
  <div>
    <div
      class="w-screen h-screen flex flex-col items-center 
      py-16 md:bg-blue-100 bg-blue-200 bg-opacity-50 
      md:bg-opacity-none"
    >
      <Nuxt />
    </div>
    <shadowForm v-if="showForm" />
  </div>
</template>

<script>
import shadowForm from "@/components/general/shadowForm";
export default {
  components: {
    shadowForm
  },
  computed: {
    showForm() {
      return this.$store.getters["getUp"];
    }
  }
};
</script>
