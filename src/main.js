const echarts = require('echarts')
let main = document.getElementById('main')
const loadMoreButton = document.getElementById('loadMore')
const width = document.documentElement.clientWidth //手机限制的就是在宽度
main.style.width = `${width}px`
main.style.height = `${width * 1.2}px`
let myChart = echarts.init(main)
//
let n = 0
let m = 0

function createKey() {
  n += 1
  return `1-${n}`
}

function createValue() {
  m += 10
  return m
}

let xData = [createKey(), createKey(), createKey()] //存储横坐标信息
let yValue = [createValue(), createValue(), createValue()] //存储纵坐标值
// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
    baseOption: {
      tooltip: {
        show: true
      },
      xAxis: {
        type: 'category',
        data: xData
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: yValue,
        type: 'line'
      }
      ]
    },
    media: [
      {
        query: {
          maxWidth: 500 //最大宽度为500,即很有可能是手机设备
        },
        option: { //option记得别漏
          tooltip: {
            show: false
          },
        }
      }
    ]
  }
)
let isLoading = false
loadMoreButton.addEventListener('click', () => {
  if (isLoading) {return}
  isLoading = true
  myChart.showLoading()
  setTimeout(() => {
    xData = [...xData, createKey()]
    yValue = [...yValue, createValue()]
    myChart.setOption({
      xAxis: {
        data: xData
      },
      series: [
        {data: yValue}
      ]
    })
    myChart.hideLoading()
    isLoading = false
  }, 1000)
  //用setOption只改你要改的部分
})
myChart.on('click', (e) => {
  console.log(e.dataIndex)//获取到数据索引,即第几个
  console.log(e.data)//获取到具体的值
  console.log(e.name)//获取到对应横轴信息
})