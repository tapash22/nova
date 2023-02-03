<template>
    <div class="product-details">
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                    <v-img src="@/assets/logo2.png" height="250" contain />
                </v-col>
                <v-col cols="12" sm="12" md="8" lg="8" xl="8">
                    <v-card>
                        <v-card-title>
                            name
                        </v-card-title>
                        <v-card-subtitle>
                            sub title
                        </v-card-subtitle>
                        <v-card-text>
                            <v-card-title>intro</v-card-title>
                            <v-card-subtitle>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga voluptates hic qui excepturi quidem saepe ratione nulla soluta, tenetur laboriosam odit accusantium ipsam recusandae vitae vel ad veritatis in porro rerum. Minus odit nemo eos consequatur obcaecati iste quaerat tempora?
                            </v-card-subtitle>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name:'product-details',

    data(){
        return{
            id:this.$route.params.id,
        }
    }
    
}
</script>