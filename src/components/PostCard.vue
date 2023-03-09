<script>
export default {
    props:{
        project: Object,
        baseUrl: String,
    }
}
</script>
<template>
    <div class="card w-100">
        <img :src="project.post_image != null ? `${baseUrl}/storage/${project.post_image}` : 'https://picsum.photos/300/200'" :alt="project.id">
        <div class="card-body">
            <h5 class="card-title mb-4">{{project.titolo}}</h5>
            <p class="card-text"><strong>Tipo: </strong><em>{{project.type != null ? project.type.name : 'Nessun tipo'}}</em></p>
            <p class="card-text"><strong>Tech: </strong><em>{{project.technologies[0] != null ? project.technologies[0].name_tech : 'Nessun Tech'}}</em></p>
            <p class="card-text"><strong>Descrizione: </strong>{{project.descrizione}}-{{project.post_image}}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>