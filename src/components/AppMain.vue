<script>
import axios from 'axios';
import PostCard from './PostCard.vue';
export default { 
    components:{
        PostCard
    },
    data(){
        return{
            projects: [],
            loading: true,
            baseUrl: 'http://localhost:8000',
            currentPage: 1,
            lastPage: null
        }
    },
    methods:{
        projectArray(){
            this.loading = true
            axios.get(`${this.baseUrl}/api/project`).then(response =>{
                this.loading = false;

                this.projects = response.data.results.data;
                this.currentPage = response.data.results.currentpage;
                this.lastPage = response.data.results.lastpage;
            });
        }
    },
    mounted() {
        this.projectArray();
    }
}
</script>
<template lang="">
    <div class="container mt-4">
        <div class="row" v-if="loading">
            <div class="col-12 d-flex justify-content-center align-items-center align">
                <div class="spinner-border" role="status">
                </div>
            </div>
        </div>
        <div class="row" v-else>
            <div class="col-sm-4 d-flex justify-content-center gy-4" v-for="project in projects" :key="project.id">
                <PostCard :project="project" :baseUrl="baseUrl"></PostCard>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .align{
        height: 100vh;
    }
</style>