<template>
  <tr class="hover:bg-blue-200 md:hover:bg-blue-100">
    <td class="md:px-6 py-4 whitespace-nowrap rounded-l-xl">
      <name-character />
    </td>
    <td class="px-6 py-4 whitespace-nowrap hidden md:table-cell w-20">
      <status-character />
    </td>
    <td class="px-6 py-4 whitespace-nowrap hidden md:table-cell w-20">
      <createdCharacter />
    </td>
    <td
      class="md:px-6  px-0 py-6 whitespace-nowrap md:text-left
      text-right rounded-r-xl w-20"
    >
      <detailsCharacter />
    </td>
  </tr>
</template>

<script>
import nameCharacter from "@/components/items/nameCharacter";
import statusCharacter from "@/components/items/statusCharacter";
import detailsCharacter from "@/components/items/detailsCharacter";
import createdCharacter from "@/components/items/createdCharacter";
export default {
  name: "characters",
  components: {
    nameCharacter,
    statusCharacter,
    detailsCharacter,
    createdCharacter
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
