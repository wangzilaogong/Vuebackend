<template>
    <Tooltip v-if="flag" :content="msg" theme="light" placement="right">
     <icon-svg :icon-class="iconType" :size='iconSize' :style="iconStyle"></icon-svg>
    </Tooltip>
</template>

<script>
export default {
  name: 'PopTip',
  props: ['msg', 'iconType', 'iconSize', 'flag', 'iconStyle'],
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style>

</style>
