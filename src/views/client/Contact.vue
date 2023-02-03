<template>
    <div class="contact">
        <v-container>
            <v-row class="d-flex justify-center">
            <v-col cols="12" sm="12" md="10" mg="10" xl="10">
                <v-timeline style="z-index:0;" reverse :dense="$vuetify.breakpoint.smAndDown">
                    <v-timeline-item color="#0a7691a2" >
                        <v-card>
                            <v-card-title class="d-flex justify-center title">
                                Contact Form
                            </v-card-title>
                            <v-card-text class="pa-1">
                                <form>
                                    <v-text-field dense hide-details v-model="email" label="Email" outlined  class="my-2"/>
                                    <v-text-field dense hide-details v-model="subject" label="Subject" outlined class="my-2" />
                                    <v-textarea label="Writing" v-model="text" outlined></v-textarea>
                                    <v-btn color="#0a7691a2" elevation="2" class="my-2 mt-n5" >Send</v-btn>
                                </form>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item color="#0a7691a2">
                        <v-card>
                            <v-card-title class="d-flex justify-center title ">With us</v-card-title>
                            <v-card-text>
                                <v-list class="d-flex-sm-and-up d-block-sm-and-down"  color="transparent">
                                    <v-list-item>
                                        <v-list-item-content class="pa-5 text-center text-body-1">
                                            {{ address }}
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-divider vertical></v-divider>
                                    <v-list-item class="d-flex justify-center">
                                        <v-list-item-content v-for="list in links" :key="list.id" >
                                           <router-link  :to="list.link" class="text-decoration-none"><v-icon size="40" color="#0a7691a2">{{list.name}}</v-icon></router-link> 
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
        </v-container>

    </div>
</template>

<script>
export default {
    name: 'contact',

    data(){
        return{
            address:'Chandona, Chowrasta,Joydebpur, Gazipur-1702.',
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
    },

    mounted(){
        window.scrollTo(0,0)
    }

}
</script>

<style scoped>
.v-timeline::before {
    top: 150px;
    height: calc(100% - 220px)
}
.title{
    background: #0a7691a2;
}
</style>