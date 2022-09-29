<template>
    <div class="event-click">
        <div class="click-detail">
            <img src="https://gd1.alicdn.com/imgextra/i4/2207297515629/O1CN01W5rDzt1rS89qNHD1f_!!2207297515629.jpg_400x400.jpg" alt="">
            <div><p v-for="(item, index) in detail" :key="index">{{item.name}}: {{item.value}}</p></div>
        </div>
        <div class="click-purchase">
            <button type="default" @tap="navigateToClick">点击购买(自动)</button>
            <button type="default" @tap="navigateToClick">点击购买(手动)</button>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
        detail: [
            {name: '商品名称', value: '床头灯'},
            {name: '颜色', value: '黄色'},
            {name: '商品ID', value: '003'}
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
.event-click {
    padding: 30px 5%;
}
.click-detail {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 30px 0 50px;
}
.click-detail img {
    width: 50%;
    height: 180px;
}
.click-detail view {
    font-size: 18px;
    line-height: 30px;
}
.click-purchase {
    display: flex;
    justify-content: space-between;
}
.click-purchase button {
    width: 48%;
    margin: 0;
    font-size: 16px;
}
</style>
