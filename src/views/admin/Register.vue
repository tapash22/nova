<template>
<div class="home col-5 mx-auto py-5 mt-5">
    <h1 class="text-center">Register</h1>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <label for="name">Name:</label>
                <v-text-field v-model="form.name" label="name" required outlined></v-text-field>
                <span class="text-danger" v-if="errors.name">
                    {{ errors.name[0] }}
                </span>
            </div>
            <div class="form-group">
                <label for="email">Email address:</label>
                <v-text-field v-model="form.email" label="email" required outlined></v-text-field>
                <span class="text-danger" v-if="errors.email">
                    {{ errors.email[0] }}
                </span>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <v-text-field v-model="form.password" label="password" required outlined></v-text-field>

                <span class="text-danger" v-if="errors.password">
                    {{ errors.password[0] }}
                </span>
            </div>
            <div class="form-group">
                <label for="password_confirmation">Confirm Password:</label>
                <v-text-field v-model="form.password_confirmation" label="password" required outlined></v-text-field>
                <span class="text-danger" v-if="errors.password_confirmation">
                    {{ errors.password_confirmation[0] }}
                </span>
            </div>
            <v-btn color="green" type="submit" @click.prevent="register" > Submit</v-btn>
           
        </div>
    </div>
</div>
</template>

<script>
import User from "@/api/User";

export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            errors: []
        };
    },

    methods: {
        register() {
            User.register(this.form)
                .then(() => {
                    alert("Registration successfull!!" + this.form.name)
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }
                });
        }
    }
};
</script>
