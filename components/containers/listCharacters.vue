<template>
  <div class="px-10 md:px-10 flex flex-col gap-2 divide-y divide-gray-400">
    <table class="w-full sticky divide-y divide-gray-300">
        <headerTable />
    </table>
    <div class="container">
      <table class="w-full divide-y divide-gray-300">
        <tbody class="divide-y md:divide-gray-200 divide-gray-300">
          <characters v-for="character in getData" :key="character.id" :character="character" />
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
    return {
      data: []
    };
  },
  
  computed:{
    characters(){
      return data
    },
    getData(){
      return this.$store.getters['getCharacters']
    }
  },
  created(){
    this.$store.dispatch("loadCharacters")
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
