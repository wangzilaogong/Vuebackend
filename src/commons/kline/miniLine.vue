<template>
  <div class="miniLine">
      <div :id="id"></div>
  </div>
</template>

<script>
export default {
  name: 'miniKline',
  props: ['id', 'miniLineData'],
  data () {
    return {
      getOpt2: function (data, config) {
        return {
          credits: {
            enabled: false
          },
          chart: {
            backgroundColor: null,
            borderWidth: 0,
            type: 'area',
            margin: [2, -2, 2, -4],
            height: 80,
            style: {
              overflow: 'visible'
            },
            skipClone: true
          },
          tooltip: {
            enabled: false
          },
          title: {
            text: '' // 标题
          },
          xAxis: {
            lineWidth: 0, // 去掉x轴线
            tickWidth: 0, // 去掉刻度
            labels: {
              enabled: false
            },
            title: {
              text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickPositions: []
          },
          yAxis: {
            endOnTick: false,
            startOnTick: false,
            labels: {
              enabled: false
            },
            title: {
              text: null
            },
            tickPositions: [0]
          },
          legend: {
            enabled: false
          },
          series: [{ // 数据列
            name: null, // 数据列名
            // data: [0, 1, 2, 4, 1, 9, 1, 23], // 数据
            data: data,
            marker: {
              radius: 0, lineWidth: 0, lineColor: '#fba845', fillColor: '#fba845', states: { hover: { enabled: false } }
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      let result = this.miniLineData.items.map((item) => {
        return Number(item.volume)
      })
      this.$hcharts(this.id, this.getOpt2(result))
    }
  }
}
</script>

<style>

</style>
