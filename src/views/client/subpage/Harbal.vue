<template>
    <div class="harbal">
        <v-container>
            <v-row class="d-flex justify-center">
                <v-col cols="6" sm="6" md="3" lg="3" xl="3" v-for="poultry in poultrys" :key="poultry.id">
                    <Card :item="poultry" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
    name:'harbal',
    data(){
        return{
            poultrys:[
                {
                    id:1,
                    name:'Antibiotic',
                    img:require('@/assets/product/anti.png')
                },
                {
                    id:2,
                    name:'Nutritional',
                    img:require('@/assets/product/nutri.jpg')
                },
                {
                    id:3,
                    name:'Harbal',
                    img:require('@/assets/product/harbal.jpg')
                },
                {
                    id:4,
                    name:'Probiotics & Prebiotics',
                    img:require('@/assets/product/nutri.jpg')
                },
            ]
        }
    },

    components:{
        Card
    }
}
</script>