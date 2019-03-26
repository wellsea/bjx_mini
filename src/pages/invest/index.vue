<template>
  <div class="invest">
    <div class="flex tab">
      <div @click="bindtap(0)" :class="{'active':currentTab == 0}">出借</div>
      <div @click="bindtap(1)" :class="{'active':currentTab == 1}">债转</div>
    </div>
    <div class="investBox inner" v-if="currentTab==0">
      <view class="list" v-for="(item, i) in investData.list" :key="i">
        <navigator :url="'../detail/main?id=' + item.id">
          <div class="item-top">
            <p class="f28 omg">{{item.categoryName ? item.categoryName : '精选标'}}[{{item.name}}]</p>
            <div class="flex mt10">
              <div class="item">
                <p class="f40 main-color">{{item.rateYear}}% <small class="f20 red" v-if="item.platformRateYear">+{{item.platformRateYear}}%</small>
                </p>
                <p class="color-99">历史年化收益</p>
              </div>
              <div class="item flex">
                <div class="item">
                  <p class="main-color">
                    <span class="f40">{{item.timeLimit}}</span>
                    <span>{{item.timeType == 1 ? '天' : '个月'}}</span>
                  </p>
                  <p class="color-99">项目期限</p>
                </div>
                <div class="item tar">
                  <div class="progressCircle circleRed" v-if="item.status != 4">
                    <b>{{item.progressPercentage}}%</b>
                  </div>
                  <div class="progressCircle circleGrey" v-if="item.countDown <= 0 && item.status == 4">
                    <b>还款中</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item-bottom">
            <div class="flex">
              <div class="item">
                <p class="color-99">
                  剩余&nbsp;
                  <span class="main-color">{{item.amountInvestable?item.amountInvestable:0}}</span>&nbsp;元
                </p>
              </div>
              <div class="item tac main-color" v-if="item.creditRatingName" v-text="item.creditRatingName"></div>
              <div class="item">
                <p class="color-99 tar">
                  起投&nbsp;
                  <span class="main-color">{{item.investMin}}</span>&nbsp;元
                </p>
              </div>
            </div>
          </div>
        </navigator>
      </view>
    </div>
    <div class="bondBox inner" v-else>
      <view class="list"  v-for="(item, i) in bondData.list" :key="i">
        <navigator :url="'../detail/main?id=' + item.id">
          <div class="item-top">
            <p class="f28 omg">{{item.categoryName ? item.categoryName : '精选标'}}[{{item.borrowName}}]</p>
            <div class="flex mt10">
              <div class="item">
                <p class="f40 main-color">{{item.rateYear}}%</p>
                <p class="color-99">历史年化收益</p>
              </div>
              <div class="item">
                <div class="item tar">
                  <div class="progressCircle" v-if="item.status==1">
                    <yd-progressbar :progress="item.sellingProgress/100" trail-width="3" stroke-width="5"
                                    :trail-color="item.sellingProgress<100 ? '#ffaf32': '#FE5D51'"
                                    v-bind:class="[item.sellingProgress<100 ? 'main-color' : 'red', 'f22']">{{item.sellingProgress}}<span class="f14">%</span>
                    </yd-progressbar>
                  </div>
                  <div class="progressCircle circleGrey" v-if="item.status==3||item.status==4||item.status==5||item.status==6">
                    <b>已完成</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item-bottom">
            <div class="flex">
              <div class="item">
                <p class="color-99">
                  剩余期限&nbsp;
                  <span class="main-color">{{item.remainDays}}</span>&nbsp;天
                </p>
              </div>
              <div class="item tac main-color" v-if="item.creditRatingName" v-text="item.creditRatingName"></div>
              <div class="item">
                <p class="color-99 tar">
                  折让率&nbsp;
                  <span class="main-color">{{item.discountRate}}%</span>
                </p>
              </div>
            </div>
          </div>
        </navigator>
      </view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTab: 0,
      investData: {
        list: [],
        params: {
          page: 1,
          rows: 10,
          categoryId: -1,
          rateYearSearch: -1,
          status: -1,
          timeLimitSearch: -1,
          type: -1
        }
      },
      bondData: {
        list: [],
        params: {
          rateYearSearch: -1,
          rows: 10,
          status: -3,
          page: 1
        }
      }
    }
  },
  async onPullDownRefresh () {
    // to doing..
    // 停止下拉刷新
    wx.stopPullDownRefresh()
  },
  // 上拉加载，拉到底部触发
  onReachBottom () {
    // 到这底部在这里需要做什么事情
    this.currentTab === 0 ? this.getInvestList() : this.getBondList()
  },
  methods: {
    tabChange (e) {
      this.currentTab = e.mp.detail.current
      this.getData(this.currentTab)
    },
    bindtap (i) {
      this.currentTab = i
      this.getData(i)
    },
    getInvestList () {
      this.$http.getInvestList(this.investData.params).then(res => {
        const list = res.resData.rows
        this.investData.list = this.investData.list.concat(list)
        if (list.length < this.investData.params.rows || this.investData.params.page === res.resData.totalPage) {
          /* 所有数据加载完毕 */
          wx.showToast({
            icon: 'none',
            title: '没有更多了~'
          })
        } else {
          this.investData.params.page++
        }
      })
    },
    getBondList () {
      this.$http.getBondList(this.bondData.params).then(res => {
        const list = res.resData.rows
        this.bondData.list = this.bondData.list.concat(list)
        if (list.length < this.bondData.params.rows || this.bondData.params.page === res.resData.totalPage) {
          /* 所有数据加载完毕 */
          wx.showToast({
            icon: 'none',
            title: '没有更多了~'
          })
        } else {
          this.bondData.params.page++
        }
      })
    },
    getData (i) {
      this.investData = {
        list: [],
        params: {
          page: 1,
          rows: 10,
          categoryId: -1,
          rateYearSearch: -1,
          status: -1,
          timeLimitSearch: -1,
          type: -1
        }
      }
      this.bondData = {
        list: [],
        params: {
          rateYearSearch: -1,
          rows: 10,
          status: -3,
          page: 1
        }
      }
      i === 0 ? this.getInvestList() : this.getBondList()
    }
  },
  mounted () {
    this.getData(this.currentTab)
  }
}
</script>

<style lang="scss" scoped>
  $brand-main: #FF4C3E;
  .mt10{
    margin-top: 10rpx;
  }
  .tab {
    text-align: center;
    background-color: $brand-main;
    position: fixed;
    top: 0;
    height: 90rpx;
    line-height: 90rpx;
    font-size: 30rpx;
    left: 0;
    width: 100%;
    z-index: 99;
    div{
      width: 150rpx;
      transition: all 0.3s;
      color: #fff;
      &.active{
        font-size: 36rpx;
        position: relative;
        &:before{
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4rpx;
          background-color: #fff;
        }
      }
    }
  }
  .inner{
    padding: 90rpx 20rpx 10rpx;
    background-color: #f0f2f5;
    .list{
      border-radius: 8rpx;
      background-color: #fff;
      margin-top: 20rpx;
      navigator{
        background-color: #fff;
        .creditRating{
          border: 1px solid $brand-main;
          display: inline-block;
          padding: 1rpx 10rpx;
          font-size: 10rpx;
          border-radius: 8rpx;
          color: $brand-main;
        }
        .item-top{
          padding: 10rpx 30rpx 10rpx 22rpx;
          height: 160rpx;
          border-bottom: 1px solid #f5f5f5;
          position: relative;
          overflow: hidden;
          .mt10, .omg {
            position: relative;
            z-index: 2;
          }
          &:before, &:after{
            content: '';
            position: absolute;
            top: -24rpx;
            left: -24rpx;
            width:168rpx;
            height:168rpx;
            background:$brand-main;
            opacity:0.1;
            border-radius:50%;
            z-index: 1;
          }
          &:after{
            top: 50rpx;
            left: 120rpx;
            width: 120rpx;
            height: 120rpx;
            background:$brand-main;
            z-index: 0;
            opacity:0.05;
          }
          .progressCircle{
            width: 84rpx;
            height: 84rpx;
            text-align: center;
            display: inline-block;
            border: 5rpx solid #e2e2e2;
            border-radius: 50%;
            line-height: 80rpx;
            overflow: hidden;
            color: #e2e2e2;
            b{
              display: block;
              width: 100%;
              height: 100%;
              font-size: 20rpx;
            }
            &.circleRed{
              border-color: $brand-main;
              color: $brand-main;
              b{
                font-size: 28rpx;
              }
            }
          }
          .icon-yiwen{
            color: #ccc;
          }
        }
        .item-bottom{
          padding: 0 30rpx 0 22rpx;
          height: 80rpx;
          line-height: 80rpx;
        }
      }
    }
  }
</style>
