<template>
    <div>
        <Head></Head>
        <h1>this is Home component!</h1>
        <h1>
            {{ info }}
        </h1>
    </div>
</template>

<script>
import Head from './Head.vue'
export default {
    components: {
        Head,
    },
    data () {
        return {

        }
    },
    asyncData (store) {
        console.log('dispatch getInfo')
        return store.dispatch('getInfo')
    },
    computed: {
        info () {
            return this.$store.getters.info
        }
    },
    title: 'home title'
}
</script>

<style>

</style>


