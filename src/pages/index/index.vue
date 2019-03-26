<template>
  <div class="home">
    <swiper v-show="banner.length > 0"
            indicator-color="#f00"
            indidator-dots
            autoplay
            circular>
      <block v-for="(item, index) in banner" :key="index" >
        <swiper-item class="imgBox">
          <image :src="domain+item.imageUrl" mode="scaleToFill"></image>
        </swiper-item>
      </block>
    </swiper>

    <div class="flex tac paddingVer-15">
      <div class="item">
        <p>累计出借金额(元)</p>
        <b class="main-color">{{staticData.sumInvestmentAmount}}</b>
      </div>
      <div class="item">
        <p>累计为用户赚取(元)</p>
        <b class="main-color">{{staticData.sumInterestAmount}}</b>
      </div>
      <div class="item">
        <p>总待收本息(元)</p>
        <b class="main-color">{{staticData.inRepaymentMoney}}</b>
      </div>
    </div>

    <div class="invest tac">
      <div class="list" v-for="(item, index) in invest" :key="index" v-if="index<2">
        <h1 class="bdb">{{item.categoryName?item.categoryName:'精选标'}} -【{{item.name}}】</h1>
        <div>
          <p class="color-999">历史年化收益</p>
          <strong class="main-color">{{item.rateYear}}%</strong>
          <p class="main-color">{{item.creditRatingName}}</p>
          <div class="progress">
            <progress :percent="item.progressPercentage"
                      color="#FF4C3E"
                      stroke-width="12"
                      active
                      border-radius="20rpx"/>
          </div>
          <div class="flex marginVer-15">
            <div class="item">
              <icon type="waiting" size="26rpx" color="#FF4C3E" />
              出借期限 {{item.timeLimit}}月
            </div>
            <div class="item">
              <icon type="waiting" size="26rpx" color="#FF4C3E" />
              剩余金额 {{item.amountInvestable}}元
            </div>
          </div>
        </div>
        <div class="padding-15">
          <navigator :url="'../detail/main?id=' + item.id">
            <button type="warn">
              立即投资
            </button>
          </navigator>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      domain: '',
      banner: [],
      invest: [],
      staticData: null
    }
  },
  methods: {
    getBanner () {
      this.$http.getBanner().then(res => {
        const data = res.resData
        this.domain = data.qiniuDomain
        this.banner = data.bannerList
      })
    },
    getInvest () {
      this.$http.getInvest().then(res => {
        this.invest = res.resData
      })
    },
    getStatic () {
      this.$http.getStatic().then(res => {
        const data = res.resData
        this.staticData = data
      })
    },
    getAll () {
      this.getBanner()
      this.getInvest()
      this.getStatic()
    }
  },

  created () {
    this.getAll()
  }
}
</script>

<style scoped lang="scss">
  .home{
    background-color: #f0f2f5;
  }
  swiper{
    height: 400rpx;
  }
  .imgBox image{
    width: 100%;
  }
  .invest{
    padding: 20rpx;
    .list{
      -webkit-border-radius: 8rpx;
      -moz-border-radius: 8rpx;
      border-radius: 8rpx;
      background-color: #fff;
      padding: 30rpx 20rpx;
      margin-bottom: 20rpx;
      h1{
        font-size: 30rpx;
        padding-bottom: 10rpx;
        margin-bottom: 15rpx;
      }
      .progress{
        width: 90%;
        margin: 10rpx auto;
      }
      strong{
        font-size: 70rpx;
      }
      button{
        -webkit-border-radius: 50rpx;
        -moz-border-radius: 50rpx;
        border-radius: 50rpx;
        font-size: 28rpx;
      }
      icon{
        vertical-align: middle;
      }
    }
  }

</style>
