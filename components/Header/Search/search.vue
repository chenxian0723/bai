<template name="Search">
	<view class="search-input">
		<input
		class="input"
		type="text" 
		value=""
		focus="true"
		placeholder="大家都在搜 林宥嘉"
		placeholder-style="color:#ababab;"
		/>
	</view>
</template>

<script>
	export default {
		name: "Search",
		props:{},
		data() {
			return {
			}
		},
		methods:{
		}
	}
</script>

<style>
	@import url("./search.css");
</style>
