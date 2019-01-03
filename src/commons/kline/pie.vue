<template>
  <div class="pie-style">
    <div :id="pieId"></div>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
import {getPie} from 'Api/api'
export default {
  name: 'Pie',
  props: [ 'pieId', 'coinId' ],
  data () {
    return {
      getOpt: function (data) {
        return {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height: 200,
            type: 'pie'
          },
          title: {
            text: '交易成交占比'
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
              }
            }
          },
          series: [{
            name: '占比',
            colorByPoint: true,
            data: data
          }]
        }
      }

    }
  },
  async mounted () {
    let data = await getPie(this.coinId)
    let result = data.data.map((item) => {
      return Object.values(item)
    })
    console.log(result, 'pie')
    let pieResult = result.map((item) => { // 转数字
      let a, b, item2
      [a, b] = item
      item2 = [a, Number(b)]
      return item2
    })
    console.log(pieResult, 'pie2')

    this.$hcharts(this.pieId, this.getOpt(pieResult))
  },
  methods: {
    chosePieData () {
      // 根据Id 选择 getData（)

    }
  }
}
</script>

<style lang="less" scoped>
  .pie-chart{
    height: 100px;
  }
</style>
