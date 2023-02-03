<template>
    <div class="aqua">
        <v-container>
            <v-row>
                <v-col>
                    <v-img src="@/assets/aqua.png" width="100%" height="400" contain>     </v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name:'aqua',

    data(){
        return{
            image:''
        }
    },

    mounted(){
        window.scrollTo(0,0);
    }
}
</script>