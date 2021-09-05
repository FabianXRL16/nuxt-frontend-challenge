<template>
  <span class="text-sm text-gray-500">
    {{ formt(created) }}
  </span>
</template>

<script>
export default {
  name: "createdCharacter",
  props:{
    created:{
      type: String,
      default: ''
    }
  },
  methods: {
    formt(fecha) {
      let fechaN = fecha.replace(/\D/g, " ").split(" ");
      fechaN.pop();
      fechaN.pop();
      fechaN.pop();
      fechaN.pop();
      fechaN.pop();
      return fechaN.join("-");
    }
  }
};
</script>
