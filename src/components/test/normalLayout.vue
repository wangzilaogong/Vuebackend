<style scoped lang="less">
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}

.layout-footer-center {
  text-align: center;
}

</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>{{$t('navigator')}}
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>Item 2
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>Item 3
            </MenuItem>
            <MenuItem name="4">
            <Icon type="ios-paper"></Icon>Item 4
            </MenuItem>
          </div>
          <div class="router-root">
            <router-link to="/">Back</router-link>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <div style="min-height: 200px;text-align: left">
            <div class="button-test">
              <Button type="primary" loading>Loading...</Button>
              <Button type="primary" :loading="loading" @click="toLoading">
                <span v-if="!loading">Click me!</span>
                <span v-else>Loading...</span>
              </Button>
              <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
                <span v-if="!loading2">Click me!</span>
                <span v-else>Loading...</span>
              </Button>
            </div>
            <div class="icon-test">
              <Icon type="ionic"></Icon>
              <Icon type="arrow-up-a" size="36"></Icon>
              <Icon type="arrow-up-a" size="xs"></Icon>
              <Icon type="heart-broken" color="red"></Icon>
              <Icon type="paper-airplane" color="#0f0"></Icon>
            </div>
            <div class="message-test">
              <Button @click="renderFunc">show message</Button>
            </div>
            <br>
            <div class="table-test">
              <Table :columns="columns1" :data="data1"></Table>
              <p>Custom arbitrary cell styles:</p>
              <Table class="table" :columns="columns1" :data="data8"></Table>
            </div>
          </div>
        </Card>
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'Mmp',
  data () {
    return {
      loading: false,
      loading2: false,
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [],
      data8: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          name: 'Jim Green',
          age: 25,
          address: 'London No. 1 Lake Park',
          cellClassName: {
            age: 'demo-table-info-cell-age',
            address: 'demo-table-info-cell-address'
          }
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          cellClassName: {
            name: 'demo-table-info-cell-name'
          }
        }
      ]
    }
  },
  methods: {
    toLoading () {
      this.loading = true
    },
    toLoading2 () {
      this.loading2 = true
    },
    renderFunc () {
      this.$Message.info({
        render: h => {
          return h('span', [
            'This is created by ',
            h('a', 'render'),
            ' function'
          ])
        }
      })
    }
  }
}

</script>
