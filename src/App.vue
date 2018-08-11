<template>
	<div>
		<h1>this is content fron app.vue</h1>
		<hr />
		<router-link :to="{path: '/home'}">home</router-link>
		<router-link :to="{path: '/about'}">about</router-link>
		<router-link :to="{path: '/login'}">login</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	}
}
</script>

<style>

</style>


