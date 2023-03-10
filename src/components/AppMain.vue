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
        projectArray(currentPage){
            this.loading = true;
            axios.get(`${this.baseUrl}/api/project`, { params:{'page': currentPage}}).then(response =>{
                if(response.data.success){
                    this.loading = false;
    
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                }
            });
        }
    },
    mounted() {
        this.projectArray(this.current_page);
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
            <nav>
                <ul class="list-unstyled d-flex justify-content-center pagination mt-3">
                    <li :class="currentPage === 1 ? 'disabled' : 'page-item'">
                        <button class="page-link" @click="projectArray(currentPage - 1)">Prev</button>
                    </li>
                    <li :class="currentPage === i ? 'disabled' : 'page-item'" v-for="i in lastPage">
                        <button class="page-link" @click="projectArray(i)" >{{i}}</button>
                    </li>
                    <li :class="currentPage === lastPage ? 'disabled' : 'page-item'">
                        <button class="page-link" @click="projectArray(currentPage + 1)">Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .align{
        height: 100vh;
    }
</style>