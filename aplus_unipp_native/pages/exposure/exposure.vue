<template>
    <div class="event-exposure">
        <div class="exposure-auto">
            <view>自动曝光 场景1: 轮播</view>
            <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                <swiper-item v-for="(item, index) in swiperImg" :key="index" class="banner_item" :data-index="index">
                    <img :src="item.url" alt="">
				</swiper-item>
			</swiper>
        </div>
        <div class="exposure-manual">
            <view>自动曝光 场景2: 瀑布流</view>
            <section v-for="value in 2" :key="value" class="exposure-grid">
                <div v-for="(item, index) in list" :key="index" class="exposure-grid-item" :data-index="index" :data-name="item.name">
                    <div class="grid-item-box">
                        <img :src="item.url" alt="">
						<p>{{ item.name }}</p>
                        <p class="grid-item-detail">
                            <span>{{ item.price }}</span>
                            <span>{{ item.scale }}</span>
                        </p>
					</div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import {uniGrid, uniGridItem} from '@dcloudio/uni-ui'
export default {
    components: {
        uniGrid,
        uniGridItem
    },
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
                    url: 'https://gd2.alicdn.com/imgextra/i1/102300773/O1CN01dpaiNa1Ha4kjrxZ92_!!102300773.jpg_400x400.jpg',
                    name: '小王子摆件',
                    price: '￥129.0',
                    scale: '88人购买'
                },
                {
                    url: 'https://gd3.alicdn.com/imgextra/i4/2200765507102/O1CN01eq8lrv22KlW6szsan_!!2200765507102.jpg_400x400.jpg',
                    name: '小王子杯具',
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
    view {
        font-size: 20px;
        padding: 15px 2% 10px;
    }
    .swiper {
        width: 100%;
        height: 211px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
.exposure-manual {
    view {
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