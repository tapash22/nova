<template>
<div class="card">
    <router-link v-if="item.link" :to="item.link" class="text-decoration-none">
        <v-card elevation="3">
            <v-img :src="item.img" height="200" class="image" contain></v-img>
            <v-card-title class="
                    d-flex justify-center text-body-1
                    text-uppercase black--text
                    title
                    ">
                {{ item.name }}
            </v-card-title>
        </v-card>
    </router-link>
    
    <v-card v-else>
        <v-card elevation="3">
            <v-img :src="item.img" height="250" contain></v-img>
      
        </v-card>
    </v-card>
</div>
</template>

<script>
export default {
    name: 'card',
    props: ['item']
}
</script>

<style >
.title {
    background: #7dced1d0;
}

.image {
   background-position: bottom bottom !important;
}
</style>
