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
// import data from "../../src/api/characters.js";
// import axios from "axios";
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

  // methods:{
  //   getDataApi(){
  //     axios.get('https://rickandmortyapi.com/api/character')
  //     .then(response=>{
  //       this.data = response.data.results
  //       console.log(response.data.results)
  //     })
  //     .catch(e => {console.log(e)})
  //   }
  // },
  // mounted(){
  //   this.getDataApi()
  // }
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
