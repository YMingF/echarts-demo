<template>
  <div ref="container">
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: ['option', 'loading'],
  mounted() {
    //获取到这个div
    let main = this.$refs.container
    const width = document.documentElement.clientWidth
    const height = document.documentElement.clientHeight
    main.style.width = `${width}px`
    main.style.height = `${height}px`
    this.chart = echarts.init(main, 'dark')
    this.chart.setOption(this.option)
  },
  watch: {
    option() {
      this.chart.setOption(this.option)
    },
    loading() {
      this.loading?this.chart.showLoading():this.chart.hideLoading()
    }
  }
}
</script>