<template>
    <div class="dairy">
        <v-container>
            <v-row class="d-flex justify-center">
                <v-col cols="12" sm="12" md="3" lg="3" xl="3" v-for="dairy in dairys" :key="dairy.id" >
                    <Card1 :item="dairy" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Card1 from '@/components/Card1.vue';

export default {
    name:'dairy',

    data(){
        return{
            dairys:[
                {
                    id:1,
                    name:'Antibiotics',
                    img:require('@/assets/product/anti.png'),
                    link:'antibioticsdairy'
                },
                {
                    id:2,
                    name:'Penathaone',
                    img:require('@/assets/product/nutri.jpg'),
                    link:'penathaone'
                },
            ]
        }
    },

    components:{
        Card1,
    },

    mounted(){
        window.scrollTo(0,0);
    }
}
</script>