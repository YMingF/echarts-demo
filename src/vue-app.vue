<template>
  <div>
    <h3>在vue里使用echarts</h3>
    <vue-echarts :option="option" :loading="loading"></vue-echarts>
    <button @click="loadMore">点击加载更多</button>
  </div>
</template>

<script>
import VueEcharts from './vue-echarts.vue'

export default {
  data() {
    return {
      loading: false,
      option: {
        baseOption: {
          tooltip: {
            show: true
          },
          xAxis: {
            type: 'category',
            data: ['1', '2', '3']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [10, 20, 30],
            type: 'line'
          }
          ]
        }
      }
    }
  },
  components: {VueEcharts},
  methods: {
    loadMore() {
      this.loading = true
      setTimeout(() => {
        this.option = {
          xAxis: {
            data: ['1', '2', '3', '4']
          },
          series: [
            {data: [10, 20, 30, 40]}
          ]
        }
        this.loading = false
      }, 1000)
    }
  }
}
</script>