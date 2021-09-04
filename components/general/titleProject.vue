<template>
    <div class="md:h-16 h-20 py-10 md:pt-10 grid place-content-center">
        <h1 class="text-2xl md:text-gray-600 text-gray-800">
            {{ title }}
            <!-- el title es una props con el fin de reutilizarlo en un futuro -->
        </h1>
    </div>
</template>

<script>
export default{
    name: "titleProject",
    props:{
        title:{
            type: String,
            default: "Rick and Morty"
        }
    }
}
</script>