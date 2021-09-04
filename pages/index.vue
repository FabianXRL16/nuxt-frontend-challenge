<template>
  <div
    class="w-full md:pt-0 md:pb-8 max-w-screen-md box-border
      mx-auto md:bg-white md:bg-opacity-50 md:rounded-xl fixed relative"
  >
    <mainContainer />
  </div>
</template>

<script>
import mainContainer from "@/components/containers/mainContainer";
import shadowForm from "@/components/general/shadowForm";
export default {
  components: {
    mainContainer,
    shadowForm
  },
  data() {
    return {};
  },
};
</script>
