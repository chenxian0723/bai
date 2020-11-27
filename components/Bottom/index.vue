<template name="Bottom">
	<view>
		<view class="status-bar"></view>
		<view class="bottom">
			<view class="bottom-menu">
				<view :class="current==0?'selected':''" @tap="childChangeView(0)">
					发现
				</view>
				<view :class="current==1?'selected':''" @tap="childChangeView(1)">
					圈子
				</view>
				<view :class="current==2?'selected':''" @tap="childChangeView(2)">
					养成
				</view>
				<view :class="current==3?'selected':''" @tap="childChangeView(3)">
					消息
				</view>
				<view :class="current==4?'selected':''" @tap="childChangeView(4)">
					我的
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Bottom",
		props:{
			current:{
				type: Number,
				default: 0
			}
		},
		data() {
			return{
				
			}
		},
		methods:{
			childChangeView(id){
				this.$emit('changeView', id);
			}
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
