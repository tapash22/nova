<template>
<div class="about">
    <v-container>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="col">
                <v-img src="@/assets/about.jpg" height="400" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12" v-for="about in abouts" :key="about.id">
                <v-card elevation="2">
                    <v-card-title class="text-h6 font-weight-bold d-flex justify-center title ">{{ about.name }}</v-card-title>
                    <v-card-text class="ba">
                        <p class="mx-2 text-body-1 my-2 text-center">
                            {{ about.text }}
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    name: 'about',

    data() {
        return {
            abouts: [{
                    id: 1,
                    name: 'ABOUT THE COMPANY',
                    text: 'Novatech Bangladesh Ltd. is an agro based company engaged in importing from different countries and marketed a wide range of veterinary health products and animal health care products throughout the Bangladesh. We have made a significant industrial growth with our hard work. We are constantly touching new heights of success through our market expertise.'
                },
                {
                    id: 2,
                    name: 'TEAM POWER',
                    text: 'The strength of the company lies in its qualified and experienced team that always tries to searching excellent quality products. Our main motive is to optimize client’s satisfaction level at every cost. We have 52 dedicated stuffs and they are working with dedicated and reputation of their respective place or areas.'
                },
                {
                    id: 3,
                    name: 'QUALITY ASSURANCE',
                    text: 'Quality is our prime concern, thus we lay special emphasis on the quality of the products. To assure the quality, we have set up experienced people related to field.'
                },
                {
                    id: 4,
                    name: 'BACKGROUND',
                    text: 'Veterinary pharmaceutical finished products such as feed premix, medicament premix etc.'
                },
                {
                    id: 5,
                    name: 'OUR VISION',
                    text: 'Our products, service and people will be the most valued by animal health customers throughout the Bangladesh'
                },
                {
                    id: 6,
                    name: 'OUR MISSION',
                    text: 'We build focus on animal health to bring customers quality products, services and commitment to their business.'
                },
            ]
        }
    },

    mounted(){
        window.scrollTo(0,0)
    }

}
</script>

<style scoped>
.title {
    background: #0a7691a2;
}

.col {
    background: #0a7691a2;
    padding: 5px;
}
</style>
