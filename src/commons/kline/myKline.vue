<template>
  <div class="kline">
    <div id="kline"></div>
  </div>
</template>

<script>
import Highcharts from 'highcharts/highstock'

import { getProjectKline } from 'Api/api'

export default {
  name: 'MyKline',
  props: ['coinId'],
  data () {
    return {
    }
  },
  async created () {
    Highcharts.setOptions({
      lang: {
        rangeSelectorZoom: '', // 不显示 'zoom' 文字
        rangeSelectorFrom: '从',
        rangeSelectorTo: '到',
        shortMonths: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月'
        ]
      }
    })

    const { data } = await getProjectKline({coinId: this.coinId, scope: '1w'})
    let result = data.map((item) => {
      return Object.values(item)
    })
    let lineData = result.map((item) => {
      let a, b, c, d, e, f, item2
      [a, b, c, d, e, f] = item
      item2 = [Number(a), Number(b), Number(c), Number(d), Number(e), Number(f)]
      return item2
    })
    let volume = lineData.map((item) => { // 成交量
      return [item[0], item[5]]
    })
    const opt = {
      credits: {
        enabled: false
      },
      rangeSelector: {
        allButtonsEnabled: true,
        buttonTheme: {
          width: 60
        },
        selected: 0,
        inputDateFormat: '%b %d,%Y',
        inputEditDateFormat: '%Y.%m.%d',
        buttons: [
          {
            type: 'day',
            count: 1,
            text: '日'
          },
          {
            type: 'week',
            count: 1,
            text: '周'
          },
          {
            type: 'month',
            count: 1,
            text: '月'
          }
        ]

      },
      yAxis: [
        {
          height: '75%',
          title: {
            text: '',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          }
        },
        {
          top: '75%',
          height: '25%',
          offset: 0,
          opposite: false,
          title: {
            text: '成交量',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          }
        }
      ],

      chart: {
        height: '510'
      },
      title: {
        text: `${this.coinId}的历史走势`
      },
      plotOptions: {
        series: {
          showInLegend: true
        }
      },
      tooltip: {
        split: false,
        shared: true
      },
      series: [{
        type: 'line',
        id: '000001',
        name: '价格',
        data: lineData
      }, {
        type: 'column',
        id: 'volume',
        name: '成交量',
        color: '#4c4747fc',
        data: volume,
        yAxis: 1
      }
      ]
    }
    Highcharts.stockChart('kline', opt)
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .kline{
    height: 340px;
  }

</style>
