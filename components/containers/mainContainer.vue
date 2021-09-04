<template>
  <div class="md:pb-6 md:box-border relative">
    <titleProject />
    <listCharacters />
    <upButton class="button" />
  </div>
</template>

<script>
import titleProject from "@/components/general/titleProject";
import upButton from "@/components/inputs/upButton";
import listCharacters from "@/components/containers/listCharacters";
export default {
  name: "mainContainer",
  components: {
    titleProject,
    listCharacters,
    upButton
  },
};
</script>

<style scoped>
.button {
  position: absolute;
  right: 2.5rem;
  bottom: -.5rem;
}
@media (max-width: 768px) {
  .button {
    right: 2.5rem;
    bottom: -2.5rem;
  }
}
</style>
