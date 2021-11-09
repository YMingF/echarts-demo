<template>
  <div>
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
      n: 3,
      m: 30,
      xData: ['1', '2', '3'],
      yValue: [10, 20, 30],
    }
  },
  computed: {
    option() {
      return {
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          data: this.xData
        },
        yAxis: {},
        series: [{
          data: this.yValue,
          type: 'bar'
        }
        ]
      }
    }
  },
  components: {VueEcharts},
  methods: {
    loadMore() {
      if (this.loading) return
      this.loading = true
      this.xData = [...this.xData, this.createId()]
      this.yValue = [...this.yValue, this.createValue()]
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    createId() {
      return this.n += 1
    },
    createValue() {
      return this.m += 10
    },
  }
}
</script>