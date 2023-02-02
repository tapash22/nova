<template>
<div class="products">
    <v-row class="d-flex justify-center my-5">
        <v-col cols="12" sm="12" md="3" lg="3" xl="3" v-for="product in products" :key="product.id" class="mx-2">
            <Card :item="product" />
        </v-col>
    </v-row>
</div>
</template>

<script>
import Card from '@/components/Card.vue';

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
    },

    components: {
        Card
    }

}
</script>
