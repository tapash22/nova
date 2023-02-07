<template>
    <div class="product-details">
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                    <v-img :src="'/sub/storage/app/' +products.pimage" height="250" contain />
                </v-col>
                <v-col cols="12" sm="12" md="8" lg="8" xl="8">
                    <v-card>
                        <v-card-title>
                            {{products.pdname}}
                        </v-card-title>
                        <v-card-subtitle>
                            {{ products.pcname }}
                        </v-card-subtitle>
                        <v-card-text>
                           <v-img height="200" contain  :src="'/sub/storage/app/' +products.pcomimage"/>
                           <h3 class="text-body-1 font-weight-bold my-2">Description:</h3>
                           <p class="text-body-2">
                            {{ products.pdescription }}
                           </p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import product from '@/api/Products';

export default {
    name:'product-details',

    data(){
        return{
            id:this.$route.params.id,
            products:null
        }
    },

    created(){
        this.getProduct(this.id);
    },

    methods:{
        getProduct() {
            product.getProductid(this.id).then((response) => {
                this.products = response.data;
                console.log(this.products);
            });
        },
    }
    
}
</script>