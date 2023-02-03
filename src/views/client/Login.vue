<template>
<div class="login">
    <v-row class="d-flex justify-center my-5">
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <v-card elevation="4" rounded="lg" class="my-5">
                <v-card-title class="
                   d-flex justify-center text-h6 
                   font-weight-bold text-uppercase 
                   white--text
                   title">
                    Login
                </v-card-title>
                <v-card-text class="my-2">
                    <form>
                        <v-text-field v-model="email" label="E-mail" required outlined></v-text-field>
                        <v-text-field v-model="password" label="Password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" name="input-10-1" hint="At least 8 characters" @click:append="show1 = !show1" outlined></v-text-field>

                        <v-btn elevation="2" color="#0a7691a2">Login</v-btn>
                    </form>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>

</div>
</template>

<script>
export default {
    name: 'login',

    data() {
        return {
            show1: false,
            email: '',
            password: ''
        }
    },
    mounted(){
        window.scrollTo(0,0)
    }

}
</script>

<style scoped>
.title {
    background: #0a7691a2;
}
</style>
