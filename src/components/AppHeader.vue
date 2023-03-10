<script>
export default {
    data(){
        return{
            menu: [
                {
                    label: 'Homepage',
                    routeName: 'homepage'
                },
                {
                    label: 'Post',
                    routeName: 'post'
                }
            ]
        }
    }
}
</script>
<template lang="">
    <header class="bg-secondary">
        <nav class="navbar navbar-expand-md">
            <div class="container">
                <div class="navbar-brand">
                    <img class="w-25" src="https://hiringplatform.boolean.careers/images/logo.png" alt="logo">
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" v-for="(item, index) in menu" :key="index">                        
                            <router-link class="nav-link text-white" :to="{name: item.routeName }">{{ item.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style lang="scss" scoped>
    
</style>