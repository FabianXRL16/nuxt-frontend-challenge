<template>
  <tr>
    <th
      v-for="(header, index) in headersList"
      :key="index"
      class="hName"
      :class="header.style"
    >
      {{ header.title }}
    </th>
  </tr>
</template>

<script>
import headersList from "@/global/headerList";
export default {
  name: "headerList",
  data() {
    return {
      headersList
    };
  }
};
</script>

<style scoped>
.hName:nth-child(1) {
  min-width: 230px;
}
</style>
