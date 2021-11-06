const echarts = require('echarts')
let main = document.getElementById('main')
let myChart = echarts.init(main)
// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}
)
