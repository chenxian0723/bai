<template name="Header">
	<view>
		<view class="header">
			<uni-icons color="#000000" class="uni-searchbar__box-icon-search" size="22" type="bars" @tap="goMenu"/>
			<uni-icons color="#000000" class="uni-searchbar__box-icon-search" size="22" type="chat" @tap="goMessage"/>
		</view>		
	</view>
</template>

<script>
	export default {
		components: {
		},
		name: "Header",
		data() {
			return{
				
			}
		},
		methods:{
			goSearch(){
				uni.navigateTo({
					url: '/components/Header/Search/search'
				})
			},
			goPlay(){
				uni.navigateTo({
					url: '/components/Header/Play/play'
				})
			},
			goScan(){
				uni.navigateTo({
					url: '/components/Header/Scan/scan'
				})
			},
			goMessage(){
				uni.navigateTo({
					url: '/components/Header/Message/message'
				})
			},
			goMenu(){
				this.$emit('showDrawer', true);
			}
		}
	}
</script>

<style>
	@import url("./header.css");
</style>
