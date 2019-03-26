<template>
  <div class="index">
    <swiper v-if="banner.length > 0" indidator-dots="banner.length > 1" indicator-color="#ff6600">
      <block v-for="(item, index) in banner" :key="index" >
        <swiper-item class="imgBox">
          <image :src="domain+item.imageUrl" mode="scaleToFill"></image>
        </swiper-item>
      </block>
    </swiper>
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
        console.log(this.domain)
      })
    },
    getInvest () {
      this.$http.getInvest().then(res => {
      })
    },
    getStatic () {
      this.$http.getStatic().then(res => {
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
  swiper{
    height: 400rpx;
  }
  .imgBox image{
    width: 100%;
  }
</style>
