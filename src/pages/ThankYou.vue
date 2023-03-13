<script>
export default {
    name: 'ThankYou',
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center gy-2">
                <h2>Grazie del messaggio</h2>
                <router-link class="btn btn-primary btn-sm" :to="{name: 'post'}">Torna ai post</router-link>
            </div>
        </div>  
    </div>
</template>
<style lang="scss" scoped>
    
</style>