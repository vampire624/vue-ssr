<template>
    <div>
        <Head></Head>
        <h1>this is Login component!</h1>
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
    title () {
        return "login title"
    }
}
</script>

<style>

</style>