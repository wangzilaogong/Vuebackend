<template>
  <svg class="svg-icon" :style="{fontSize:iconSize}" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
// <icon-svg icon-class="zhichang-normal" :size='10'></icon-svg>
export default {
  name: 'icon-svg',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    size: {
      type: Number
    }

  },
  computed: {
    iconName () {
      return `#wx-${this.iconClass}`
    },
    iconSize () {
      return this.size + 'px'
    }
  }
}
</script>

<style>
  .svg-icon{
   width: 1em;
   height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
  }
</style>
