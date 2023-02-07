<template>
    <div class="poultry">
        <v-container>
            <v-row class="d-flex justify-center">
                <v-col cols="6" sm="6" md="3" lg="3" xl="3" v-for="poultry in poultrys" :key="poultry.id">
                    <Card1 :item="poultry" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Card1 from '@/components/Card1.vue';

export default {
    name:'poultry',
    data(){
        return{
            poultrys:[
                {
                    id:1,
                    name:'Antibiotic',
                    img:require('@/assets/product/anti.png'),
                    link:'probiotics'
                },
                {
                    id:2,
                    name:'Nutritional',
                    img:require('@/assets/product/nutri.jpg'),
                    link:'nutritional'
                },
                {
                    id:3,
                    name:'Harbal',
                    img:require('@/assets/product/harbal.jpg'),
                    link:'harbal'
                },
                {
                    id:4,
                    name:'Probiotics & Prebiotics',
                    img:require('@/assets/product/nutri.jpg'),
                    link:'probiotics'
                },
            ]
        }
    },

    mounted(){
        window.scrollTo(0,0);
    },

    components:{
        Card1
    }
}
</script>