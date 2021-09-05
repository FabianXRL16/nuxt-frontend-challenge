<template>
  <a
    :href="details" target="_blank"
    class="text-blue-600 hover:text-blue-900
    text-sm font-medium"
  >
    see more
  </a>
</template>

<script>
export default {
  name: "detailsCharacter",
  props:{
    details:{
      type: String,
      default: ""
    }
  }
};
</script>
