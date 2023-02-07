<template>
<div class="dairy1">
    <v-container>
        <v-row class="d-flex justify-center">
            <v-col cols="6" sm="6" md="3" lg="3" xl="3" v-for="poultry in products" :key="poultry.id">
                <Product :item="poultry" />
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import Product from '@/components/Product.vue';
import product from '@/api/Products';
export default {
    name: 'antibiotics',
    data() {
        return {
            products:[],
        }
    },

    components: {
        Product
    },

    created(){
        this.getProduct();
    },
    methods: {
        getProduct() {
            product.getAntibiotics().then((response) => {
                this.products = response.data;
                console.log(this.products);
            });
        },
    },
}
</script>
