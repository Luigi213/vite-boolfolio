<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: 'Contact',
    data(){
        return {
            store,
            name: '',
            surname: '',
            email: '',
            number: '',
            message: '',
            errors: {},
            loading: false,
            success: false
        }
    },
    methods:{
        sendMail(){
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                number: this.number,
                message: this.message
            };

            this.loading = true;

            this.errors = {};

            axios.post(`${this.store.baseUrl}/api/contact`, data).then((response) =>{
                if(!response.data.success){
                    this.errors = response.data.errors;
                    this.loading = false;
                }
                else{
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.number = '';
                    this.message = '';
                    this.success = true;
                    this.loading = false;

                    setTimeout(() => {
                        this.$router.push({'name': 'thankyou'});
                    }, 3000);
                }
            });
        }
    }
}
</script>
<template lang="">
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
                <form @submit.prevent="sendMail">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <label for="nome">Nome</label>
                            <input type="text" name="name" class="form-control" id="nome" placeholder="Inserire il nome" v-model="name">
                            <div class="alert alert-danger my-2" v-for="(error, index) in errors.name" :key="`message-error-${index}`">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="cognome">Cognome</label>
                            <input type="text" name="surname" class="form-control" id="cognome" placeholder="Inserire il cognome" v-model="surname">
                            <div class="alert alert-danger my-2" v-for="(error, index) in errors.surname" :key="`message-error-${index}`">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="mail">Email</label>
                            <input type="email" name="email" class="form-control" id="mail" placeholder="Inserire il email" v-model="email">
                            <div class="alert alert-danger my-2" v-for="(error, index) in errors.email" :key="`message-error-${index}`">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="numero">Numero</label>
                            <input type="text" name="number" class="form-control" id="numero" placeholder="Inserire il numero" v-model="number">
                            <div class="alert alert-danger my-2" v-for="(error, index) in errors.number" :key="`message-error-${index}`">
                                {{ error }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="messaggio">Messaggio</label>
                            <textarea name="message" id="messaggio" class="form-control" rows="2" v-model="message"></textarea>
                            <div class="alert alert-danger my-2" v-for="(error, index) in errors.message" :key="`message-error-${index}`">
                                {{ error }}
                            </div>
                        </div>
                        <div class="form-group my-3">
                            <button type="submit" class="btn btn-primary" :disabled="loading">{{ loading ? 'Invio in corso...' : 'Invia'}}</button>
                            <div class="alert alert-success mt-2" v-if="success">
                                Messaggio inviato
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>