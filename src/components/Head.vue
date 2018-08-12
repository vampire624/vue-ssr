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
    name: 'pageHeader',
    data () {
        return {
            header: '-----this is header-----',
            id: 'asdqwer' // 缓存id 随便取的，真实应为组件传入props 的 id
        }
    },
    serverCacheKey: () => {
        return this.id
    }
}
</script>
<style lang="stylus" scoped>
.head
    background-color purple
</style>


