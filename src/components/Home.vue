<template>
    <div>
        <h1>this is Home component!</h1>
        <h1>
            {{ info }}
        </h1>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    asyncData (store) {
        return store.dispatch('getInfo')
    },
    computed: {
        info () {
            return this.$store.getters.info
        }
    }
}
</script>

<style>

</style>


