const echarts = require('echarts')
let main = document.getElementById('main')
let myChart = echarts.init(main)
const loadMoreButton = document.getElementById('loadMore')
let n = 0
let m=0
function createKey() {
  n += 1
  return `1-${n}`
}

function createValue() {
  m += 10
  return m
}

const xData = [createKey(), createKey(), createKey()] //存储横坐标信息
const yValue = [createValue(), createValue(), createValue()] //存储纵坐标值
// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
    xAxis: {
      type: 'category',
      data: xData
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: yValue,
        type: 'line'
      }
    ]
  }
)
loadMoreButton.addEventListener('click', () => {
  //用setOption只改你要改的部分
  myChart.setOption({
    xAxis: {
      data: [...xData, createKey()]
    },
    series: [
      {data: [...yValue, createValue()]}
    ]
  })
})