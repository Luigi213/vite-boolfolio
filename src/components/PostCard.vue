<script>
export default {
    props:{
        project: Object,
        baseUrl: String,
    }
}
</script>
<template lang="">
    <div class="card w-100">
        <img :src="project.post_image != null ? `${baseUrl}/storage/${project.post_image}` : 'https://picsum.photos/300/200'" :alt="project.id">
        <div class="card-body">
            <h5 class="card-title">{{project.titolo}}</h5>
            <p class="card-text">{{project.descrizione}}-{{project.post_image}}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>