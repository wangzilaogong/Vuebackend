<template>
  <div class="sure-modal">
    <div class="content">
      <Icon type="ios-information-circle-outline" size="20" color="#2993fa" />
      <span>{{msg}}</span>
    </div>
    <div slot="footer">
      <Button @click="close" class="btn"> 取消</Button>
      <Button type="primary" class="btn" @click="submit">{{btnMsg}}</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SureModal',
  // props: ['msg', 'sureAction'],
  props: {
    msg: {
      type: String
    },
    btnMsg: {
      type: String,
      default: '确定'
    },
    sureAction: {
      type: Function
    }
  },
  data () {
    return {}
  },
  methods: {
    close () {
      this.$Modal.remove()
    },
    submit () {
      this.sureAction()
      this.$Modal.remove()
    }
  }
}
</script>

<style lang="less" scoped>
  .sure-modal{
    width:350px;
    height: 140px;
    padding: 40px 10px 10px 10px;
    .content{
      text-align: center;
    }
    .btn{
    margin-top: 30px;
      width: 160px;
      height: 36px;
    }
  }
</style>
<style>
.ivu-modal-body {
    /* padding: 16px; */
    padding: 0px;
    font-size: 12px;
    line-height: 1.5;
}
.ivu-modal-confirm-footer{
  display: none;
}
</style>
