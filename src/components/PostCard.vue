<script>
import { store } from '../store.js'
export default {
    name:'PostCard',
    data(){
        return{
            store
        }
    },
    props:{
        project: Object,
        baseUrl: String
    }
}
</script>
<template>
    <div class="card w-100">
        <img :src="project.post_image != null ? `${store.baseUrl}/storage/${project.post_image}` : 'https://picsum.photos/300/200'" :alt="project.id">
        <div class="card-body">
            <h5 class="card-title mb-4">{{project.titolo}}</h5>
            <p class="card-text"><strong>Tipo: </strong><em class="badge bg-warning">{{project.type != null ? project.type.name : 'Nessun tipo'}}</em></p>
            <p class="card-text">
                <strong>Tech: </strong>
                <em class="badge bg-primary" v-for="project in project.technologies" :key="project.id">
                    {{project.name_tech != '' ? project.name_tech : 'Nessun tipo'}}
                </em>
            </p>
            <p class="card-text"><strong>Descrizione: </strong>{{project.descrizione}}</p>
        </div>
        <div class="card-footer">
            <router-link class="btn btn-sm btn-success" :to="{ name: 'post_info', params: { titolo: project.titolo}}">Approfondisci</router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>