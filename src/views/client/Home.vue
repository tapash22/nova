<template>
<div class="home">
    <v-row>
        <TheSlider />
    </v-row>
    <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-card elevation="5" class="mx-5">
                <v-card-title class="d-flex justify-center text-h6 font-weight-bold">STAY WITH US</v-card-title>
                <v-card-text class="d-flex justify-center">
                    <p class="text-h6 text-center ">
                        We are constantly touching new heights of success through our market expertise.
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>

    <h2 class="d-flex justify-center text-h6 font-weight-bold my-5">PRODUCTS</h2>
    <v-row class="d-flex justify-center">

        <v-col cols="12" sm="12" md="3" lg="3" xl="3" v-for="product in products" :key="product.id" class="mx-2">
            <router-link :to="product.link" class="text-decoration-none">
            <v-card elevation="3">
                <v-img :src="product.img" height="200" cover></v-img>
                <v-card-title class="d-flex justify-center text-h6 text-uppercase black--text font-weight-bold red lighten-1">{{ product.name }}</v-card-title>
            </v-card>
        </router-link>
        </v-col>

    </v-row>

    <h2 class="d-flex justify-center text-h6 font-weight-bold my-5">PARTNERS</h2>
    <v-container>
        <v-row class="d-flex justify-center">

            <v-col cols="6" sm="6" md="2" lg="2" xl="2" v-for="product in partners" :key="product.id" class="">
                <router-link :to="product.link" class="text-decoration-none">
                <v-card elevation="3">
                    <v-img :src="product.img" height="200" cover></v-img>
                    <v-card-title class="d-flex justify-center text-body-1 text-uppercase black--text pa-1 red lighten-1 pa-0">{{ product.partner }}</v-card-title>
                </v-card>
            </router-link>
            </v-col>

        </v-row>
    </v-container>

</div>
</template>

<script>
import TheSlider from '@/components/TheSlider.vue';
export default {
    name: 'home',
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
            partners: [{
                    id: 1,
                    partner: 'Poultry',
                    link: 'poultry',
                    img: require('../../assets/chi.png'),
                },
                {
                    id: 2,
                    partner: 'dairy',
                    link: 'dairy',
                    img: require('../../assets/co.png'),
                },
                {
                    id: 3,
                    partner: 'aqua',
                    link: 'dairy',
                    img: require('../../assets/fi.png'),
                },
                {
                    id: 4,
                    partner: 'Poultry',
                    link: 'poultry',
                    img: require('../../assets/chi.png'),
                },
                {
                    id: 5,
                    partner: 'dairy',
                    link: 'dairy',
                    img: require('../../assets/co.png'),
                },
                {
                    id: 6,
                    partner: 'aqua',
                    link: 'dairy',
                    img: require('../../assets/fi.png'),
                },
            ]
        }

    },

    components: {
        TheSlider,
    }
}
</script>

<style scoped>
</style>
