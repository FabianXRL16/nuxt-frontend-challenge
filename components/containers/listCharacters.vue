<template>
  <div class="px-10 md:px-10 flex flex-col gap-2 divide-y divide-gray-400">
    <table class="w-full sticky divide-y divide-gray-300">
        <headerTable />
    </table>
    <div class="container">
      <table class="w-full divide-y divide-gray-300">
        <tbody class="divide-y md:divide-gray-200 divide-gray-300">
          <characters v-for="n in 20" :key="n" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import headerTable from "@/components/general/headerTable";
import characters from "@/components/items/characters";
export default {
  name: "ListCharacters",
  components: { headerTable, characters },
  data() {
    return {};
  }
};
</script>

<style scoped>
.container {
  max-height: 445px;
  overflow-x: auto;
  box-sizing: border-box;
}
.container::-webkit-scrollbar {
  width: 0;
}
</style>
