<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>
<template lang="">
    <!-- <div class="row" v-if="loading">
        <div class="col-12 d-flex justify-content-center align-items-center align">
            <div class="spinner-border" role="status">
            </div>
        </div>
    </div> -->
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 text-center">
                    Sinistra
                </div>
                <div class="col-12 col-md-6 text-center">
                    Destra
                </div>
            </div>
        </div>
        <div class="bg-secondary w-100">
            <div class="container">
                <div class="row">
                    <div class="row">
                        <form  class="row mt-4" @sumbit.prevent="">
                            <div class="col-12 col-md-6">
                                <label for="nome">Nome</label>
                                <input type="text" name="name" class="form-control" id="nome" placeholder="Inserire il nome">
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="cognome">Cognome</label>
                                <input type="text" name="surname" class="form-control" id="cognome" placeholder="Inserire il cognome">
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="mail">Email</label>
                                <input type="password" name="email" class="form-control" id="mail" placeholder="Inserire il email">
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="pass-word">Password</label>
                                <input type="password" name="password" class="form-control" id="pass-word" placeholder="Inserire il password">
                            </div>
                            <div class="form-group">
                                <label for="descrizione">Descrizione</label>
                                <textarea name="description" id="descrizione" class="form-control" rows="2"></textarea>
                            </div>
                            <div class="form-group my-3">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>