<template>
  <div
    class="w-20 rounded-full grid place-content-center py-0.5"
    :class="style[status.toLowerCase()]"
  >
    <span class="text-xs font-bold text-white">
      {{ status }}
    </span>
  </div>
</template>

<script>
export default {
  name: "statusCharacter",
  props: {
    status: {
      type: String,
      default: "Alive"
    }
  },
  data() {
    return {
      style: {
        alive: "bg-green-400",
        dead: "bg-red-400",
        unknown: "bg-gray-400"
      }
    };
  }
};
</script>
