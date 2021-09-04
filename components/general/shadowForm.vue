<template>
  <div class="form w-screen h-screen flex justify-center items-center">
    <form-character />
  </div>
</template>

<script>
import FormCharacter from "@/components/containers/formCharacter";
export default {
  name: "ShadowForm",
  components: {
    FormCharacter
  },
};
</script>

<style scoped>
.form {
  position: absolute;
  top: 0rem;
  background-color: rgba(0, 0, 0, .5);
}
</style>
