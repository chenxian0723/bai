<template>
	<view class="content">
		<swiper
		class="main-swiper"
		:indicator-dots="false"
		:autoplay="false"
		:current="swiperCurrent"
		@change="changeView"
		>
			<swiper-item>
				<scroll-view scroll-y style="height: 1800rpx;width: 100%;">
					<Discover></Discover>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" style="height: 100%;">
					<Group></Group>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" style="height: 100%;">
					<Enjoy></Enjoy>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" style="height: 100%;">
					<Tools></Tools>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" style="height: 100%;">
					<Mine></Mine>
				</scroll-view>
			</swiper-item>
		</swiper>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" height=105 active-color=#ff5500 :list="list" @change="changeCurrent"></u-tabbar>
	
	</view>
</template>

<script>
	
	import Header from '../../components/Header/header.vue';
	import Message from '../../components/Header/Message/message.vue';
	import Search from '../../components/Header/Search/search.vue';
	import Scan from '../../components/Header/Scan/scan.vue'
	import Setting from '../../components/Header/Setting/setting.vue'
	
	import Bottom from '../../components/NavPages/bottom.vue';
	import Discover from '../../components/NavPages/Discover/discover.vue';
	import Group from '../../components/NavPages/Group/group.vue';
	import Enjoy from '../../components/NavPages/Enjoy/enjoy.vue';
	import Tools from '../../components/NavPages/Tools/tools.vue';
	import Mine from '../../components/NavPages/Mine/mine.vue';
	
	
	export default {
		components:{
			Header,
			Message,
			Search,
			Scan,
			Setting,
			Bottom,
			Discover,
			Group,
			Enjoy,
			Tools,
			Mine,
		},
		props:{
		},
		data() {
			return {
				list: [{
						iconPath: "eye",
						selectedIconPath: "eye-fill",
						text: '发现',
						count: 2,
						isDot: true,
						customIcon: false,
					},
					{
						iconPath: "moments",
						selectedIconPath: "moments-circel-fill",
						text: '圈子',
						customIcon: false,
					},
					{
						iconPath: "heart",
						selectedIconPath: "heart-fill",
						text: '喜爱',
						customIcon: false,
					},
					{
						iconPath: "grid",
						selectedIconPath: "grid-fill",
						text: '工具',
						customIcon: false,
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '我的',
						count: 23,
						isDot: false,
						customIcon: false,
					},
				],
				current: 0,
				swiperCurrent: 0,
			}
		},
		onLoad() {
			
		},
		methods: {
			changeCurrent(index){
				this.swiperCurrent = index
			},
			changeView(e){
				this.current = e.detail.current
			}
		}
	}
</script>

<style>
	.main-swiper{
		width: 100%;
		flex: 1;
		margin-bottom: 90upx;
	}
</style>
