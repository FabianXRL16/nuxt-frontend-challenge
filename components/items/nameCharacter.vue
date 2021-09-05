<template>
  <div class="flex items-center border-box">
    <div class="flex-shrink-0 h-12 w-12">
      <avatar :image="data.image" />
    </div>
    <div class="ml-4">
      <div class="font-medium text-gray-500 md:pb-1">
        {{ data.name }}
      </div>
      <div class="text-sm text-gray-500 flex gap-2 divide-x divide-gray-400">
        <div>
          <span>{{ data.species }}</span>
        </div>
        <div class="pl-2 hidden md:table-cell">
          <span> {{ data.gender }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from "@/components/general/avatar";
export default {
  name: "nameCharacter",
  components: {
    avatar
  },
  props:{
   data:{
     type: Object,
     default: () => {}
   }
  }
};
</script>
