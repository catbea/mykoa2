<template>
    <div class="star-banner">
        <van-swipe @change="onChange" :loop="false">
            <van-swipe-item v-for="(item, index) in bannerList" :key="index">
                <div class="banner-img" :style="`background-image:url(${item.img})`"></div>
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.content}}</div>
            </van-swipe-item>
        </van-swipe>
        <div class="jump-over" @click="StarLogin">跳过</div>
    </div>
</template>
<script>
export default {
  name: "StartBanner",
  data() {
    return {
        current: 0,
        bannerList: [
            {
            img: require("../../assets/img/raw_1512446076.jpeg"),
            title: "做最好的咖啡",
            content: "2017 年 50+ 最好的咖啡和咖啡机评测"
            },
            {
            img: require("../../assets/img/raw_1512446089.jpeg"),
            title: "负担的起的沙滩圣地",
            content: "给我一个沙滩和吊床，我很高兴"
            },
            {
            img: require("../../assets/img/raw_1512446063.jpeg"),
            title: "美丽的疯狂",
            content: "2017 年 50+ 最好的咖啡和咖啡机评测"
            },
            {
            img: require("../../assets/img/raw_1512446113.jpeg"),
            title: "做最好的咖啡",
            content: "2017 年 50+ 最好的咖啡和咖啡机评测"
            }
        ]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
      console.log(this.current); 
      if(index===3){
          this.StarLogin()
      }     
    },
    StarLogin(){
        this.$router.push({path:"/StarLogin"});
    }
  }
};
</script>
<style lang="less" scoped>
.comm-style{
    position: absolute;
    left: 0;
    width: 100vw;
    height: .933333rem;
    line-height: .853333rem;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    font-family: Arial;
    text-align: center;
}
.van-swipe{
    width: 100vw;
    height: 100vh;
    background: rgba(9, 30, 46, 1);
}

.banner-img{
    position: absolute;
    left: 50%;
    top: 3.573333rem;
    transform: translateX(-50%);
    width: 5.626667rem;
    height: 5.626667rem;
    border-radius: 5.626667rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.title{
    top: 10.746667rem;
    font-size: .64rem;
    .comm-style 
}
.desc{
    position: absolute;
    top: 11.92rem;
    font-size: .373333rem;
    opacity: 0.5;
    .comm-style 
}
.jump-over{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 15.413333rem;
    width: 5.546667rem;
    height: 1.333333rem;
    line-height: 1.333333rem;
    border-radius: 1.066667rem;
    background-color: rgba(155, 163, 181, 1);
    text-align: center;
    color: rgba(255, 255, 255, 1);
    opacity: 0.85;
    font-size: .56rem;
}
</style>