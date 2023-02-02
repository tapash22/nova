<template>
<div class="home">
    <v-row>
        <TheSlider />
    </v-row>
    <v-container>
        <v-row class="my-5 d-flex justify-center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8">
                <v-card elevation="5" class="mx-5" rounded="xl">
                    <v-card-title class="d-flex justify-center text-h6 font-weight-bold title">STAY WITH US</v-card-title>
                    <v-card-text class="d-flex justify-center">
                        <p class="text-body-1 black-text my-5">
                            We are constantly touching new heights of success through our market expertise.
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- product -->

        <h2 class="d-flex justify-center text-h6 font-weight-bold my-5">PRODUCTS</h2>
        <v-row class="d-flex justify-center">
            <v-col cols="12" sm="12" md="3" lg="3" xl="3" v-for="product in products" :key="product.id" class="mx-2">
                <Card :item="product" />
            </v-col>
        </v-row>
        <!-- product end -->

        <!-- partner -->
        <h2 class="d-flex justify-center text-h6 font-weight-bold my-5">PARTNERS</h2>
        <v-row class="d-flex justify-center my-2">

            <v-col cols="6" sm="6" md="2" lg="2" xl="2" v-for="partner in partners" :key="partner.id" class="">
                <Card :item="partner" />
            </v-col>
        </v-row>
        <!-- partner end -->
    </v-container>

</div>
</template>

<script>
import TheSlider from '@/components/TheSlider.vue';
import Card from '@/components/Card.vue';

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
                {
                    id: 4,
                    name: 'Poultry',
                    link: 'poultry',
                    img: require('../../assets/chi.png'),
                },
                {
                    id: 5,
                    name: 'dairy',
                    link: 'dairy',
                    img: require('../../assets/co.png'),
                },
                {
                    id: 6,
                    name: 'aqua',
                    link: 'dairy',
                    img: require('../../assets/fi.png'),
                },
            ]
        }

    },

    components: {
        TheSlider,
        Card,
    }
}
</script>

<style scoped>
.title{
    background: #0a7691a2;
}
</style>
