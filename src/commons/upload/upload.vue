<template>
  <Row type="flex" align="middle" >
    <Col>
        <Upload :action="postUrl" :on-success="handleSuccess" :before-upload="handleUpload" :ref="picType"  :show-upload-list="false" :headers="headers">
        <div >
          <img :src="imgUrl" alt="imgHere"  class="uploadStyle">
          <div  class="iconcenter">
                 <Icon type="ios-cloud-upload" size="40" color="#2699fb"></Icon>
                 <p>{{describtion}}</p>
          </div>
        </div>
        </Upload>
    </Col>
  </Row>
</template>

<script>
// 预览 & return key=>url
// event 得监听父页面传下来的emit
/**
 * actionUrl / preViewUrl / describtion / picType
 * post的URL ／图片背景 / 上传文件的描述 / domId 以及 监听的时候针对不同的data赋值给不同的对象
 */
// import {getFile} from 'Api/api'

import bus from 'Utils/eventBus'
export default {
  name: 'wkupload',
  props: {
    actionUrl: {
      type: String,
      required: true
    },
    preViewUrl: {
      type: String
    },
    describtion: {
      type: String
    },
    picType: { // key
      type: String
    }
  },
  data () {
    return {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      file: '', // File类型
      postUrl: this.actionUrl,
      imgUrl: this.preViewUrl
    }
  },
  watch: { // 监听prop 变化 -> 替换url
    preViewUrl: function () {
      this.imgUrl = this.preViewUrl
    }
  },
  created () {

  },
  mounted () {
    bus.$on('postPicture', (exist) => {
      this.doPostFile(exist)
    })
  },
  beforeDestroy () { // 去除监听
    bus.$off('postPicture')
  },
  methods: {
    async  handleSuccess (response, file, fileList) {
      // try {
      //   const res = await getFile(response) // response.key
      //   if (res.status === 200) {
      //     const url = res.data.url
      //     // 传值给父组件
      //     bus.$emit('getUploadUrl', url, this.picType)
      bus.$emit('getUploadUrl', response.key, this.picType) // 返回key
      //   }
      // } catch (error) {
      //   this.$Notice.warning({
      //     title: '文件获取URL失败'
      //   })
      // }
      try {

      } catch (error) {

      }
    },
    async doPostFile (exist) { // 上传操作
      try {
        this.$refs[this.picType].post(this.file)
      } catch (error) {
        if (exist) {
          bus.$emit('getUploadUrl', exist, this.picType) // 返回key
        } else {
          this.$Notice.warning({
            title: '上传的图片不能缺少'
          })
        }
      }
    },
    handleUpload (file) {
      const fileSize = 2048000 // 2M
      if (file.size > fileSize) {
        console.log(file.size)
        this.$Notice.warning({
          title: '文件大小超出2M',
          desc: `${file.name}大小超限`
        })
      } else if (!file.type.includes('image')) { // 文件类型
        this.$Notice.warning({
          title: '文件类型不对',
          desc: `${file.name}类型不对`
        })
      } else {
        this.file = file
        const reader = new FileReader()
        reader.readAsDataURL(this.file)
        reader.onload = (e) => {
          this.imgUrl = e.target.result
        }
      }
      console.log(file)
      return false
    }
  }

}
</script>

<style  lang="less" scoped>
.uploadStyle{
   cursor: pointer;
   display: inline-block;
   width: 200px;
   height: 130px;
   border:1px dotted #dcdee2 ;//#218ffa;
   border-radius: 4px;
   & :hover{
    border:1px dotted #218ffa;
   }
}
.iconcenter{
    text-align:center;
   cursor: pointer;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
   }
</style>
