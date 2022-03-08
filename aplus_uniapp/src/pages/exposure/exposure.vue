<template>
    <div class="event-exposure">
        <div class="exposure-auto">
            <view class="exposure-auto-title">自动曝光 场景1: 轮播</view>
            <div class="exposure-swiper">
                <div class="banner_item">
                    <img v-for="(item, index) in swiperImg" :key="index" :src="item.url"/>
                </div>
            </div>
        </div>
        <div class="exposure-manual">
            <view class="exposure-manual-title">自动曝光 场景2: 瀑布流</view>
            <div v-for="value in 2" :key="value" class="exposure-grid">
                <div v-for="(item, index) in list" :key="index" class="exposure-grid-item">
                    <div class="grid-item-box">
                        <img :src="item.url" alt="">
						<p>{{ item.name }}</p>
                        <p class="grid-item-detail">
                            <span>{{ item.price }}</span>
                            <span>{{ item.scale }}</span>
                        </p>
					</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperImg: [
                {url: "https://img.alicdn.com/imgextra/i4/O1CN0198ZqQc1ipBYrWKD7b_!!6000000004461-0-tps-1316-736.jpg"},
                {url: "https://img.alicdn.com/imgextra/i1/O1CN01EdIpVV1jxiYfVOw8v_!!6000000004615-0-tps-1316-736.jpg"},
                {url: "https://img.alicdn.com/imgextra/i4/O1CN01RjAj8X1aJZIQk6G27_!!6000000003309-0-tps-1316-736.jpg"},
            ],
            background: ['color1', 'color2', 'color3'],
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 500,
            list: [
                {
                    url: 'https://gd1.alicdn.com/imgextra/i4/2208928232857/O1CN019LfEfG1WyYGv4pMQ5_!!2208928232857.jpg_400x400.jpg',
                    name: '大理石香薰灯',
                    price: '￥129.0',
                    scale: '88人购买'
                },
                {
                    url: 'https://gd1.alicdn.com/imgextra/i1/2028723128/O1CN01AHNoOr1YyfbGi6ogZ_!!2028723128.jpg',
                    name: '大理石融蜡灯',
                    price: '￥379.0',
                    scale: '73人购买'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.event-exposure {
    padding-bottom: 30px;
}
.exposure-auto {
    .exposure-auto-title {
        font-size: 20px;
        padding: 15px 2% 15px;
    }
    .exposure-swiper {
        width: 100%;
        height: 211px;
        overflow: hidden;
    }
    .banner_item {
        width: 300%;
        height: 211px;
        animation: switch 5s ease-out infinite;
        img {
            float: left;
            width: 33.33%;
            height: 211px;
        }
    }
}
@keyframes switch {
	0%, 25% {
		margin-left: 0;
	}
	35%, 60% {
		margin-left: -100%;
	}
	70%, 100% {
		margin-left: -200%;
	}
}
.exposure-manual {
    .exposure-manual-title {
        font-size: 20px;
        padding: 15px 2% 0;
    }
    .exposure-grid {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin: 15px 0;
        .exposure-grid-item {
            width: 45%;
            -webkit-box-shadow: #ccc 0px 0px 10px; 
            -moz-box-shadow: #ccc 0px 0px 10px;
            .grid-item-box {
                display: flex;
                flex-direction: column;
                padding: 5%;
                font-size: 14px;
                img {
                    width: 100%;
                    height: 180px;
                    margin-bottom: 8px;
                }
                .grid-item-detail {
                    span:first-child {
                        color: red;
                    }
                    span:last-child {
                        color: #aaa;
                        margin-left: 5px;
                    }
                }
            }
            
        }
    }
}
</style>