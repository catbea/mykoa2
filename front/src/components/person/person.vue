<template>
    <div class="person">
        <header><img src="./../../assets/img/raw_1512446262.jpeg" alt=""></header>
        <div class="person-content">
            <div class="person-info">
                <img src="./../../assets/img/raw_1512446140.jpeg" alt="">
                <span>KiKa Kong</span>
            </div><hr>
            <div class="intro" v-html="intro"></div>
        </div>
        <div class="person-foot">
            <span class="btn attend">关注</span> 
            <span class="btn mess">私信</span> 
        </div>
    </div>
</template>
<script>
    export default {
        name:"",
        data(){
            return {
                intro:"二十出头的时候，我成了一个素食主义者，立刻感到惊讶，我感觉到了多么的美好 - 我觉得我的新素食生活方式是多么有价值。"
            }
        },
        methods: {
            
        }
    }
</script>
<style lang="less">
    .person{
        width: 100vw;
        header {
            width: 100%;
            height: 7.306667rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .person-content{
            padding:0 .853333rem; 
            margin-top:.666667rem; 
            .person-info{
                position: relative;
               img{
                  width: 2.666667rem; 
                  height: 2.666667rem; 
               } 
               span{
                    position: relative;
                    top: -1.733333rem;
                    margin-left: 10px;
                    color: rgba(16, 16, 16, 1);
                    font-size: .533333rem;
                    font-family: Arial; 
               }
            }
            hr{
                width: 1.733333rem;
                float: left;
                margin-top: 23px;
                margin-bottom: 20px;
            }
            .intro{
                clear: both;                
                line-height: 23px;
                opacity: 0.7;
                color: rgba(16, 16, 16, 1);
                font-size: .426667rem;
                text-align: left;
                font-family: Arial;
            }
        }
        .person-foot{
            display: flex;
            position: fixed;
            width: 100%;
            height: 1.173333rem;   
            left: 0;
            bottom: 0;
            .btn{  
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                font-size: .426667rem;
            }
            .attend{
                background-color: rgba(139, 195, 74, 1);
                color: rgba(255, 255, 255, 1);
            }
            .mess{
                background-color: rgba(232, 230, 232, 1);
                color: rgba(16, 16, 16, 1);

            }
        }
    }
</style>