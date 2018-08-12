<template>
    <div>
        <header>
            <h2 class="head">
                {{ header }}
            </h2>
            <hr>
        </header>
    </div>
</template>

<script>
export default {
    data () {
        return {
            header: '-----this is header-----'
        }
    }
}
</script>
<style lang="stylus" scoped>
.head
    background-color purple
</style>


