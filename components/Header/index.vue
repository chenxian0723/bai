<template name="Header">
	<view>
		<view class="status-bar"></view>
		<view class="header">
			<view class="header-menu-icon">
				<text class="text-black cuIcon-sort" @tap="showDrawer"></text>
			</view>
			<view class="header-search-icon">
				<text class="text-black cuIcon-search" @tap="goSearch"></text>
			</view>
		</view>		
	</view>
</template>

<script>
	export default {
		name: "Header",
		props:{
			current:{
				type: Number,
				default: 1
			}
		},
		data() {
			return{
				
			}
		},
		methods:{
			goSearch(){
				uni.navigateTo({
					url: '../../pages/search/search'
				})
			},
			showDrawer(){
				this.$emit('showDrawer', true);
			}
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
