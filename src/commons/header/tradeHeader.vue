<template>
 <div class="layout-header">
    <Layout>
          <Menu mode="horizontal"  active-name="1" @on-select="selectedName" :class="{ bgstyle:!currentHeader}" >
                <div class="layout-logo">
                <icon-svg icon-class="logo" class="logo" :size="27"></icon-svg>
                  <span style="font-size:18px;" :class="{ bgfontstyle:!currentHeader}">Exchange交易所运营</span>
                </div>
                <div class="layout-nav">
                  <div class="fr">
                     <Submenu name="3" style="margin-right:10px;">
                          <template slot="title">
                            <Icon type="md-globe" :class="{ bgfontstyle:!currentHeader}" :size="30" />
                          </template>
                            <MenuItem :name="item.value"  :key="index"  v-for="(item,index) in langList">{{item.type}}</MenuItem>
                      </Submenu>
                    <template v-if="!getCurrentBtn">
                      <Submenu name="5" >
                          <template slot="title">
                            <Avatar>User</Avatar>
                          <a href="javascript:void(0)" style="color:black;">
                            {{currentUserInfo.accountInfo === undefined ? 'needgetAccountInfo':currentUserInfo.accountInfo.email}}
                          </a>
                          <Icon type="ios-arrow-down" />
                          </template>
                              <MenuItem v-show="showAuthInfo" name="turn" to="/authInfo">身份认证</MenuItem>
                              <MenuItem name="logout">退出登陆</MenuItem>
                      </Submenu>
                      </template>
                      <template v-else>
                        <Row style="width:300px;">
                          <Col span="8" align="right" pull="2">
                            <Button class="btnStyle"  to="/login" >登录</Button>
                          </Col>
                          <Col span="4" align="left">
                            <Button  class="btnStyle" to="/register"> 注册</Button>
                          </Col>
                        </Row>
                      </template>
                  </div>
                </div>
            </Menu>
        </Layout>
 </div>
</template>

<script>
import {logout} from 'Api/api'
import langList from '@/assets/js/langList'

export default {
  name: 'tradeHeader',
  data () {
    return {
      showAuthInfo: true,
      langList
    }
  },
  computed: {
    currentUserInfo () {
      return this.$store.getters.getUserInfo
    },
    currentHeader () {
      return this.$store.getters.getCurrentHeader
    },
    getCurrentBtn () {
      return this.$store.getters.getCurrentBtn
    }
  },
  watch: { // 监听路由更新
    $route (to, from) {
      const urlList = ['Identity', 'Person', 'Enterprise', 'Authres', 'AuthExchange', 'Result']
      if (urlList.includes(to.name)) {
        this.showAuthInfo = false
      } else {
        this.showAuthInfo = true
      }
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    changeI18n: function (val) { // i18n切换
      this.setLocalLang(val)
    },
    async initData () {

    },
    async logout () {
      try {
        const res = await logout()
        if (res.status === 200) {
          localStorage.setItem('token', '')
          this.$router.push({name: 'Login'})
        }
      } catch (error) {

      }
    },

    selectedName (name) {
      if (name === 'turn') return false
      if (name === 'logout') {
        this.logout()
      } else {
        this.changeI18n(name)
      }
    }
  }
}

</script>

<style scoped lang="less">
  .bgstyle{
    background: #005DFF
  }
  .bgfontstyle{
    color:#8DBAFF
  }
  .layout-header{
    // border: 1px solid #d7dde4;
    // background: red;
    position: relative;
    border-radius: 4px;
    border:none;
}
.layout-logo{
    width: 300px;
    height: 40px;
    border-radius: 3px;
    float: left;
    padding-left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    height: 100px;
    margin-right: 20px;
    .btnStyle{
      width: 100px;
      background:#005DFF ;
      color:#fff;
      border:none;
    }
}
</style>
<style>
  .layout-header .ivu-menu-submenu:hover{
    border-bottom: none !important;
  }
  .layout-header .ivu-icon.ivu-icon-ios-arrow-down.ivu-menu-submenu-title-icon{
    display: none ;
  }
  .layout-header .ivu-menu-submenu.ivu-menu-item-active.ivu-menu-child-item-active{
    border-bottom: none !important;
  }
  .layout-header .ivu-menu-horizontal.ivu-menu-light:after{
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
  }
</style>
