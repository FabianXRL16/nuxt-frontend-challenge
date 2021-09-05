<template>
    <img class="h-12 w-12 rounded-full" :src="image" alt="">
</template>

<script>
export default{
    name: "avatar",
    props:{
        image:{
            type: String,
            default: ""
        }
    }
}
</script>