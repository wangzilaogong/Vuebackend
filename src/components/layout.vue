<template>
    <div class="layout">
        <Layout>
            <Layout >
                <Sider hide-trigger :style="{background: '#fff'}">
                          <Menu theme="light" width="auto" :active-name="chosenName"  :accordion="true" style="padding-top:50px;" @on-select="selectMenu" :open-names="chosenExpandMenu">
                            <MenuItem name="0-1" to="/">
                            <icon-svg icon-class="dashboard-normal" :size='15'></icon-svg>
                            Dashboard
                            </MenuItem>
                      <Submenu name="1">
                        <template slot="title">
                            <icon-svg icon-class="xianmuguanli-normal" :size='15'></icon-svg>
                            项目管理
                        </template>
                        <MenuItem name="1-1" to="/accesstoproject">接入项目</MenuItem>
                        <MenuItem name="1-2" to="/allproject">所有项目</MenuItem>
                        <MenuItem name="1-3" to="/receiveproject">接受项目申请</MenuItem>
                      </Submenu>
                      <Submenu name="2">
                        <template slot="title">
                            <icon-svg icon-class="jiaoyiguanli-normal" :size='15'></icon-svg>
                            交易所管理
                        </template>
                        <MenuItem name="2-0" to="/editexchange">交易所信息管理</MenuItem>
                        <MenuItem name="2-1" to="/market">市场管理</MenuItem>
                        <Submenu name="3">
                            <template  slot="title">财务管理</template>
                            <MenuItem name="3-1" to="/commission">委托纪录</MenuItem>
                            <MenuItem name="3-2" to="/transaction">成交纪录</MenuItem>
                            <MenuItem name="3-3" to="/fees">手续费纪录</MenuItem>
                        </Submenu>
                        <Submenu name="4">
                            <template  slot="title">内容管理</template>
                            <MenuItem name="4-1" to="/announcements">公告管理</MenuItem>
                            <MenuItem name="4-2" to="/advertisement">广告图管理</MenuItem>
                        </Submenu>
                        <MenuItem name="2-2" to="/serviceorder" >服务订单</MenuItem>
                      </Submenu>

                      <Submenu name="5">
                        <template slot="title">
                            <icon-svg icon-class="zhichang-normal" :size='15'></icon-svg>
                            资产管理
                        </template>
                        <MenuItem name="5-1" to="/mine">我的资产</MenuItem>
                        <MenuItem name="5-2" to="/details">收支细明</MenuItem>
                        <MenuItem name="5-3" to="/chargecoinrecord">充币纪录</MenuItem>
                        <MenuItem name="5-4" to="/takecoinrecord">提币纪录</MenuItem>
                      </Submenu>
                           <MenuItem name="6-1" to="account">
                            <icon-svg icon-class="account" :size='15'></icon-svg>
                              个人账户
                            </MenuItem>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 20px 0px 10px'}">
                    <Content style="min-height:890px;min-width:1200px;">
                        <router-view ></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
  name: 'layout',
  data () {
    return {
      chosenName: '',
      chosenExpandMenu: [],
      thirdMenu: [],
      istrue: true
    }
  },
  computed: {
    currentUserInfo () {
      return this.$store.getters.getUserInfo
    }
  },
  created () {
    this.getChosen() // 侧边栏
  },
  beforeRouteEnter (to, from, next) { // exchangeID -> 跳转
    next(vm => {
    // 通过 `vm` 访问组件实例
      if (!vm.currentUserInfo.accountInfo.exchangeId) {
        vm.$router.push({name: 'Login'})
      }
    })
  },
  methods: {
    getChosen () {
      let name = localStorage.getItem('wx-menu')
      if (name) {
        this.chosenName = name// 选中的菜单项
        if (['3', '4'].includes(name.split('-')[0])) { // 展开三层
          this.chosenExpandMenu = ['2', name.split('-')[0]]
        } else {
          this.chosenExpandMenu = [name.split('-')[0]]
        }
      }
    },
    selectMenu (name) {
      // select menu store state
      localStorage.setItem('wx-menu', name)
    }
  }
}
</script>
<style lang="less" scoped>
  .layout{
    margin-top:20px;
  }
</style>
