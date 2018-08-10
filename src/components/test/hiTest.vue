<template>
  <div>
    <Row class="code-row-bg">
      <Col span="6" class="code-col-bg">{{$t('home')}}</Col>
      <Col span="6" class="code-col-bg"><h4>{{ $t('tips') }}</h4></Col>
      <Col span="6" class="code-col-bg"><a href="javascript:;" class="switch-btn" @click="switchLang">{{$t('switch')}}</a></Col>
      <Col span="6" class="code-col-bg">
        <a href="javascript:;" class="switch-btn">
          <router-link to="/home">Go to Home</router-link>
        </a>
      </Col>
    </Row>
    <br>
    <Row type="flex" justify="space-around" align="middle" class="code-row-bg">
      <Col span="4" class="code-col-bg"><p style="height: 80px">col-4</p></Col>
      <Col span="4" class="code-col-bg"><p style="height: 30px">col-4</p></Col>
      <Col span="4" class="code-col-bg"><p style="height: 100px">col-4</p></Col>
      <Col span="4" class="code-col-bg"><p style="height: 60px">col-4</p></Col>
    </Row>
    <br>
    <Row class="code-row-bg">
        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="code-col-bg">Col</Col>
        <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="code-col-bg">Col</Col>
        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="code-col-bg">Col</Col>
    </Row>
    <br>
    <div class="layout">
        <Layout>
            <Header class="lay-header">Header</Header>
            <Content class="lay-content">Content</Content>
            <Footer class="lay-footer">Footer</Footer>
        </Layout>
        <br>
        <Layout>
            <Header class="lay-header">Header</Header>
            <Layout>
                <Sider hide-trigger class="lay-sider">Sider</Sider>
                <Content class="lay-content">Content</Content>
            </Layout>
            <Footer class="lay-footer">Footer</Footer>
        </Layout>
        <br>
        <Layout>
            <Header class="lay-header">Header</Header>
            <Layout>
                <Content class="lay-content">Content</Content>
                <Sider hide-trigger class="lay-sider">Sider</Sider>
            </Layout>
            <Footer class="lay-footer">Footer</Footer>
        </Layout>
        <br>
        <Layout>
            <Sider hide-trigger class="lay-sider">Sider</Sider>
            <Layout>
                <Header class="lay-header">Header</Header>
                <Content class="lay-content">Content</Content>
                <Footer class="lay-footer">Footer</Footer>
            </Layout>
        </Layout>
    </div>
    <br>
    <br>
    <div class="go-top">
      <BackTop :height="100" :bottom="200">
        <div class="top">返回顶端</div>
      </BackTop>
    </div>
  </div>
</template>

<script>
import { getData2, getData3 } from '@/api/api'

export default {
  name: 'hiTest',
  data () {
    return {
      list: []
    }
  },
  methods: {
    switchLang () {
      this.setLocalLang('en')
    }
  },
  async created () {
    const {data: {list}} = await getData2()
    console.log(list, 'D2')
    this.$store.commit('UPDATEUSERINFO', list)
  },
  async mounted () {
    const {data} = await getData3({mock: true})
    console.log(data, 'D3')
    console.info(this.$store.getters.getUserInfo, 'Getters')
  }
}
</script>

<style scoped>
  .code-row-bg {
    border: 1px solid #dddee1;
  }
  .code-col-bg {
    color: #fff;
    padding: 10px 0;
    text-align: center;
    background: rgba(0,153,229,.9);
  }
  .lay-header{
    color: #fff;
  }
  .lay-content {
    min-height: 300px;
    background: #ccc;
  }
  .lay-sider{
    background: #666;
    color: #fff;
  }
  .lay-footer {
    background: slategray;
  }
  .router-home {
    padding-top: 8px;
    background: lightsalmon;
    font-size: 18px;
    color: green;
  }
  .switch-btn {
    background:#e9eaec;
    color:#495060;
    padding: 10px 15px;
    border-radius: 3px;
  }
  .top{
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
    }
</style>
