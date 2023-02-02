<template>
    <div class="client">
        <TheNavigation />
        <v-main>
            <div class="main">
                <router-view />
            </div>
            
        </v-main>
        <TheFooter />
    </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
    name:'client',
    components:{
        TheNavigation,
        TheFooter
    }
}
</script>

<style scoped>
/* .client{
    position: relative;
} */
.main{
    margin-top:130px;
}
</style>