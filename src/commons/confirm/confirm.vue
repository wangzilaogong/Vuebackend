<template>
 <Poptip
        confirm
        :title="confirmData.title"
        @on-ok="confirmData.ok"
        @on-cancel="confirmData.cancel"
        :data-step="confirmData.order"
        >
        <Button :type="confirmData.type" :style="confirmData.style" size="small" > {{confirmData.btntxt}}</Button>
    </Poptip>
</template>
<script>
// Confrim 弹窗
export default {
  name: 'confrim',
  props: {
    confirmData: {
      type: Object
    }
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="less" >
.ivu-icon-ios-help-circle:before{
    // position: relative;
    // left: -60px;
    content: ''
}
</style>
