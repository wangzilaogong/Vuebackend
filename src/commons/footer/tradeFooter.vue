<template>
  <div  class="footer"   :class="{bgstyle:currentHeader}">
     <Row type="flex" align="middle"   class="font-style">
       <Col span="3" > <icon-svg icon-class="logo" class="logo" :size="17"></icon-svg>  kinmall exchange</Col>
       <Col span="4" ><router-link  to="/sso"  style="color:#fff;"> 人人交易所</router-link ></Col>
       <Col span="4" ><router-link  to="/sso"  style="color:#fff;"> 项目方运营平台</router-link ></Col>
       <Col span="5"></Col>
        <Col span="2" >关于我们</Col>
       <Col span="2">新手引导</Col>
       <Col span="2">经营者管理</Col>
       <Col span="2">法律法规</Col>
     </Row>
     <Row type="flex" align="middle"  justify="end"  class="font-style">
       <Col span="2" >公司团队</Col>
       <Col span="2">用户指引</Col>
       <Col span="2">经营管理</Col>
       <Col span="2">法律声明</Col>
     </Row>
      <Row type="flex" align="middle"  justify="end" class="font-style">
       <Col span="2" >核心优势</Col>
       <Col span="2">商家入驻</Col>
       <Col span="2">经营公告</Col>
       <Col span="2">隐私权政策</Col>
     </Row>
      <Row type="flex" align="middle"  justify="end" class="font-style">
       <Col span="16" class="font-style">自主数字资产交易平台</Col>
       <Col span="2">联系我们</Col>
       <Col span="2"></Col>
       <Col span="2">经营者保障</Col>
       <Col span="2"></Col>
     </Row>
      <Row type="flex" align="middle"  justify="end" class="font-style">
       <Col span="4" class="font-style"> <icon-svg icon-class="logo" class="logo" :size="17"></icon-svg> </Col>
       <Col span="4" class="font-style"> <icon-svg icon-class="logo" class="logo" :size="17"></icon-svg> </Col>
       <Col span="4" class="font-style"> <icon-svg icon-class="logo" class="logo" :size="17"></icon-svg> </Col>
       <Col span="4" class="font-style"> <icon-svg icon-class="logo" class="logo" :size="17"></icon-svg> </Col>
       <Col span="2" >合作伙伴</Col>
       <Col span="2"></Col>
       <Col span="2">营销推广</Col>
       <Col span="2"></Col>
     </Row>
  </div>
</template>

<script>
export default {
  name: 'bottom',
  data () {
    return {
    }
  },
  computed: {
    currentHeader () {
      return this.$store.getters.getCurrentHeader
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
  .bgstyle{
   background-color: #000 !important;
  }
  .footer{
    background-color: #005DFF;
    padding-top:20px;
    height: 150px;
    padding-left: 20px;
    .font-style{
      height: 20px;
      font-size:12px;
      font-family:Segoe UI;
      font-weight:400;
      color:#fff;
      line-height:16px;
      opacity:0.8;
    }
  }
</style>
