<template>
    <div class="card2">
        <a :href="item.plink" class="text-decoration-none">
            <v-card elevation="3">
                <v-img :src="'/sub/storage/app/' +item.pimage" height="200" class="image" ></v-img>
                <v-card-title class="
                        d-flex justify-start text-body-2
                        text-uppercase black--text
                        title
                        ">
                    {{ item.pname }}
                </v-card-title>
            </v-card>
        </a>
    </div>
    </template>
    
    <script>
    export default {
        name: 'card2',
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
    