<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <h1 class="title text-gray-500 font-medium -mt-10">
      404
    </h1>
    <h1 class="md:text-4xl text-2xl text-gray-500 font-medium md:-mt-8 -mt-4 ">
      Sorry, page not found
    </h1>
    <router-link
      class="md:mt-20 mt-16 bg-blue-500 hover:bg-blue-600 text-white md:text-3xl text-2xl px-20 py-4 rounded-xl"
      to="/"
    >
      Go Back
    </router-link>
  </div>
</template>

<style scoped>
.title {
  font-size: 150px;
}
@media (max-width: 768px) {
  .title {
    font-size: 120px;
  }
}
</style>
