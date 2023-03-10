<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    data(){
        return{
            store,
            post: null,
            loading: true
        }
    },
    mounted(){
        this.loading = true;
        axios.get(`${this.store.baseUrl}/api/project/${this.$route.params.titolo}`).then((response) =>{
            this.post = response.data.results;
            this.loading = false;
        });
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row" v-if="loading">
            <div class="col-12 d-flex justify-content-center align-items-center align">
                <div class="spinner-border" role="status">
                </div>
            </div>
        </div>
        <div class="row" v-else>
            <div class="col-12 my-3">
                <router-link class="btn btn-sm btn-primary" :to="{ name: 'post'}">Torna Indietro</router-link>
            </div>
            <div class="col-12 mb-5">
                <div class="card w-25">
                    <img :src="post.post_image != null ? `${store.baseUrl}/storage/${post.post_image}` : 'https://picsum.photos/300/200'" :alt="post.id">
                    <div class="card-body">
                        <h5 class="card-title mb-4">{{post.titolo}}</h5>
                        <p class="card-text"><strong>Tipo: </strong><em class="badge bg-warning">{{post.type != null ? post.type.name : 'Nessun tipo'}}</em></p>
                        <p class="card-text">
                            <strong>Tech: </strong>
                            <em class="badge bg-primary" v-for="post in post.technologies" :key="post.id">
                                {{post.name_tech != '' ? post.name_tech : 'Nessun tipo'}}
                            </em>
                        </p>
                        <p class="card-text"><strong>Descrizione: </strong>{{post.descrizione}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>