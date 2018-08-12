function getTitle(vm) {
    const { title } = vm.$options
    if (title) {
        return typeof title === 'function'
            ? title.call(vm)
            : title
    }
}

const serverTitleMixin = {
    created () {
        const title = getTitle(this)
        if (title) {
            this.$ssrContext.title = title // 服务端替换context对象的title，server.js可设置title默认值
        }
    }
}

const clientTitleMixin = {
    mounted () {
        const title = getTitle(this)
        if (title) {
            document.title = title // 客户端直接为document.title 赋值
        }
    }
}

export default process.env.VUE_ENV === 'server'
    ? serverTitleMixin
    : clientTitleMixin