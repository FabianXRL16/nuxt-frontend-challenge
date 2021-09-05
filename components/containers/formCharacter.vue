<template>
  <div class="md:w-2/3 w-11/12 h-5/6 p-8 bg-white rounded-xl relative">
    <upButton class="buttonUp" :icon="false" />
    <div class=" h-full grid grid-cols-2">
      <h1 class="text-2xl text-gray-500 text-center col-span-2">
        Register a new character
      </h1>
      <input-custom class="col-span-2" v-model="name" label="Name" />
      <input-custom class="col-span-2" v-model="species" label="Specie" />
      <select-custom v-model="status" :options="statusOptions" label="Status" />
      <select-custom
        v-model="gender"
        :options="gendersOptions"
        label="Gender"
      />
      <input-custom class="col-span-2" v-model="img" label="Img" />
      <div class="col-span-2 px-4">
        <button
          class=" rounded-xl w-full py-4 text-white text-xl"
          :class="validar ? 'bg-gray-500' : 'bg-blue-500'"
          :disabled="validar"
          @click="addCharacter"
        >
          Add of Character
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import inputCustom from "@/components/inputs/inputCustom";
import baseButton from "@/components/inputs/baseButton";
import upButton from "@/components/inputs/upButton";
import selectCustom from "@/components/inputs/selectCustom";
export default {
  name: "FormCharacter",
  components: {
    inputCustom,
    baseButton,
    upButton,
    selectCustom
  },
  data() {
    return {
      name: "",
      species: "",
      img: "",
      status: "",
      gender: "",
      statusOptions: ["Alive", "Dead", "Unknown"],
      gendersOptions: ["Female", "Male"],
    };
  },
  computed: {
    validar() {
      return (
        this.name === "" ||
        this.specie === "" ||
        this.status === "" ||
        this.gender === ""
      );
    }
  },
  methods: {
    addCharacter() {
      const today = new Date();
      const created = today.toISOString();
      if(this.img==="") this.img = "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
      this.$store.dispatch("registerCharacter",  {
        name: this.name,
        species: this.species,
        image: this.img,
        status: this.status,
        gender: this.gender,
        created
      });
      this.$store.dispatch("showForm");
    }
  },
};
</script>

<style scoped>
.buttonUp {
  position: absolute;
  right: -1rem;
  top: -1rem;
}
</style>
