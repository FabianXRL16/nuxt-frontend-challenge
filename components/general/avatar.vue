<template>
    <img class="h-12 w-12 rounded-full" :src="image" :alt="name">
</template>

<script>
export default{
    name: "avatar",
    props:{
        image:{
            type: String,
            default: ""
        },
        name:{
            type: String,
            default: ""
        }
    },
}
</script>