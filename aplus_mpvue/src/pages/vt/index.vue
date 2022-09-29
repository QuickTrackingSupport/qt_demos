<template>
    <div class="event-exposure">
        <div class="exposure-auto">
            <view>自动曝光</view>
            <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                <swiper-item v-for="(item, index) in swiperImg" :key="index">
                    <img :src="item.url" alt="">
				</swiper-item>
			</swiper>
        </div>
        <div class="exposure-manual">
            <view>手动曝光</view>
            <section v-for="value in 2" :key="value" class="exposure-grid">
                <div v-for="(_item, _index) in list" :key="_index" class="exposure-grid-item">
                    <div class="grid-item-box">
                        <img :src="_item.url" alt="">
						<p>{{ _item.name }}</p>
                        <p class="grid-item-detail">
                            <span>{{ _item.price }}</span>
                            <span>{{ _item.scale }}</span>
                        </p>
					</div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

export default {
  data () {
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
                name: '大理石融腊灯',
                price: '￥379.0',
                scale: '73人购买'
            }
        ]
    }
  },
  components: {
  },
  methods: {
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.event-exposure {
    padding-bottom: 30px;
}
.exposure-auto view{
    font-size: 20px;
    padding: 15px 2% 10px;
}
.swiper {
    width: 100%;
    height: 211px;
}
.swiper img {
    width: 100%;
    height: 100%;
}
.exposure-manual view{
    font-size: 20px;
    padding: 15px 2% 0;
}
.exposure-grid {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 15px 0;
}
.exposure-grid-item {
    width: 45%;
    -webkit-box-shadow: #ccc 0px 0px 10px; 
    -moz-box-shadow: #ccc 0px 0px 10px;
}
.grid-item-box {
    display: flex;
    flex-direction: column;
    padding: 5%;
    font-size: 14px;
}
.grid-item-box img {
    width: 100%;
    height: 180px;
    margin-bottom: 8px;
}
.grid-item-detail span:first-child{
    color: red;
    font-size: 16px;
}
.grid-item-detail span:last-child {
    color: #aaa;
    margin-left: 5px;
    font-size: 16px;
}
</style>
