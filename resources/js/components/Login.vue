<template>
    <div>
        <form>
        <div class="alert alert-danger" v-if="invalidLoginError != false">
            {{ invalidLoginError }}
        </div>

        <!--Email-->
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="text" class="form-control" placeholder="Enter email" v-model="user.email" />
            <p class="form-text text-danger" v-if="error.email == null">Email cannot be empty</p>
            <p class="form-text text-danger" v-if="emailError != false">{{ emailError}}</p>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <!--Password-->
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" placeholder="Password" v-model="user.password" />
            <p class="form-text text-danger" v-if="error.password == null">Password cannot be empty</p>
            <p class="form-text text-danger" v-if="passwordError != false">{{ passwordError}}</p>
        </div>

        <!--Remember me-->
        <!--<div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
        </div>-->

        <!--login btn-->
        <button v-if="processing==false" type="button" class="btn btn-primary" @click="tryLogin">Login</button>
        <button v-if="processing==true" type="button" class="btn btn-info" disabled>Logging in...</button>
        
        </form>
    </div>
</template>

<script>

import  { mapActions, mapGetters } from 'vuex';

export default {
    name : 'Login',
    data(){
        return {
            user : {
                email : null,
                password : null
            },
            error : {
                email : true,
                password : true
            }
        }
    },
    methods : {
        ...mapActions([ 'hitLoginAPI' ]),
        tryLogin(){
            
            if(this.user.email == null){
                this.error.email = null;
            }else{
                this.error.email = true;
            }
           
            if(this.user.password == null){
                this.error.password = null;
            }else{
                this.error.password = true;
            }

            if(this.error.email == null || this.error.password == null){
                return;
            }
            this.hitLoginAPI(this.user);
        }        
    },
    computed : {
        ...mapGetters(['emailError','passwordError','invalidLoginError','processing'])
    }
}
</script>
