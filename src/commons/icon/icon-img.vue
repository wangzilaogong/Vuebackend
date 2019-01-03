<template>
  <div class="icon-img">
    <img :src="boxUrl" :style="{height:boxSizeY,width:boxSizeX}"  alt="logo">
  </div>
</template>

<script>
// import {getFile} from 'Api/api'
// img icon 只支持在线的图标地址 暂不支持本地，因为转base64
// <icon-img icon-class="logo" :imgUrl="'https://pub-static.haozhaopian.net/static/web/site/features/cn/crop/images/crop_20a7dc7fbd29d679b456fa0f77bd9525d.jpg'"  :size="60"  ></icon-img>
export default {
  name: 'IconImg',
  props: {
    sizex: {
      type: Number,
      default: 30
    },
    sizey: {
      type: Number,
      default: 30
    },
    imgUrl: {
      type: String
    }
  },
  data () {
    return {
      // asyncUrl: ''
    }
  },
  computed: {
    boxSizeX () {
      return this.sizex + 'px'
    },
    boxSizeY () {
      return this.sizey + 'px'
    },
    boxUrl () {
      return this.imgUrl
    }
  },

  // async created () {
  //   // console.log(this.boxUrl)
  //   try {
  //     const res = await getFile({key: this.boxUrl})
  //     if (res.status === 200) {
  //       this.asyncUrl = res.data.url
  //     }
  //   } catch (error) {

  //   }
  // },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .icon-img{
    img{
      border-radius: 4px;
    }
  }
</style>
