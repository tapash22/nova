<template>
<div class="products">
    <v-row class="d-flex justify-center my-5">

        <v-col cols="12" sm="12" md="3" lg="3" xl="3" v-for="product in products" :key="product.id" class="mx-2">

            <v-card elevation="3">
                <v-img :src="product.img" height="200" cover></v-img>
                <v-card-title class="d-flex justify-center text-h6 text-uppercase black--text font-weight-bold red lighten-1">{{ product.name }}</v-card-title>
            </v-card>
        </v-col>

    </v-row>
</div>
</template>

    
    
<script>
export default {
    name: 'products',

    data() {
        return {
            products: [{
                    id: 1,
                    name: 'Poultry',
                    link: 'poultry',
                    img: require('../../assets/chi.png'),
                },
                {
                    id: 2,
                    name: 'dairy',
                    link: 'dairy',
                    img: require('../../assets/co.png'),
                },
                {
                    id: 3,
                    name: 'aqua',
                    link: 'dairy',
                    img: require('../../assets/fi.png'),
                },
            ],
        }
    }

}
</script>
