<template>
    <v-footer>
        <v-row class="row">
            <v-col cols="12" md="4" sm="12" lg="4" xl="4">
                <h2 class="h2">WE ARE</h2>
                <p class="black--text text-justify text-body-1 my-5">{{ text }}</p>
            </v-col>
            <v-col cols="12" md="3" sm="12" lg="3" xl="3">
                <h2 class="h2">QUICK LINK</h2>
               
                <v-list class="d-flex justify-center list">
                    <v-list-item class="pa-0 d-block ">
                        <router-link v-for="list in lists" :key="list.id" :to="list.link" class="text-decoration-underline black--text pa-0"><v-list-item-title class="text-body-1 font-weight-bold text-center pa-1">{{ list.name }}</v-list-item-title></router-link>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col cols="12" md="4" sm="12" lg="4" xl="4">
               
                <v-list class="d-flex justify-center list my-5">
                    <v-list-item class="pa-0 d-flex  justify-center" >
                        <router-link v-for="link in links" :key="link.id" :to="link.link" class="text-decoration-none black--text pa-0 d-block">
                            <v-icon size="40" color="black" class="text-center mx-2">{{link.name}} </v-icon>
                        </router-link>
                    </v-list-item>
                </v-list>

                <h2 class="h2">GET IN TOUCH</h2>
                <p class="black--text text-center text-h6  pa-3">{{ address }}</p>
            </v-col>
            <!-- <v-col cols="12" md="3" sm="12" lg="3" xl="3">
                
            </v-col> -->
        </v-row>
    </v-footer>
</template>

<script>
export default {
    data(){
        return{
            text:'Novatech Bangladesh Ltd is a top leadin importer company in Banladesh, established in 2012. We do import different kinds of products from different country like India, China, South-korea, Poland and Spain.',
            address:'Chandona, Chowrasta,Joydebpur, Gazipur-1702.',
            lists:[
                {
                    id:1,
                    name:'Home',
                    link:'/home'
                },
                {
                    id:2,
                    name:'About',
                    link:'/about'
                },
                {
                    id:3,
                    name:'Gallery',
                    link:'/gallery'
                },
                {
                    id:4,
                    name:'Products',
                    link:'/products'
                },
                {
                    id:5,
                    name:'Contact Us',
                    link:'/contact'
                },
                {
                    id:6,
                    name:'Login',
                    link:'/login'
                },
            ],
            links:[
                {
                    id:1,
                    name:'mdi-facebook',
                    link:'/home'
                },
                {
                    id:2,
                    name:'mdi-linkedin',
                    link:'/about'
                },
                {
                    id:3,
                    name:'mdi-twitter',
                    link:'/gallery'
                }
            ]
        }
    }
}
</script>

<style scoped>
.row{
    background: #7dced1;
}

.h2{
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
}
.list{
    background: transparent;
}
.v-list-item{
    min-height:30px;
}
</style>