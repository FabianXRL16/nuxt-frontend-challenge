<template>
  <div class="md:w-2/3 w-11/12 h-5/6 p-8 bg-white rounded-xl relative">
    <upButton class="buttonUp" :icon="false" />
    <form class=" h-full grid grid-cols-2" :v-model="valid">
      <h1 class="text-2xl text-gray-500 text-center col-span-2">
        Register a new character
      </h1>
      <input-custom class="col-span-2" label="Name" :rules="[rules.required]" />
      <input-custom class="col-span-2" label="Specie" />
      <select-custom v-model="status" :options="statusOptions" label="Status" />
      <select-custom v-model="gender" :options="gendersOptions" label="Gender" />
      <input-custom class="col-span-2" label="Img" />
      <baseButton
        :disabled="!valid"
        class="col-span-2 disabled:opacity-50"
        label="Add"
      />
    </form>
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
      valid: false,
      status: "",
      gender: "",
      statusOptions: ["Alive", "Dead", "Unknown"],
      gendersOptions: ["Female", "Male"],
      rules: {
        required: (value) => !!value,
        filled: (value) => value != null,
        min: (value) => value >= 0,
      },
    };
  }
};
</script>

<style scoped>
.buttonUp {
  position: absolute;
  right: -1rem;
  top: -1rem;
}
</style>
