<template>  
  <apexchart type="candlestick" height="230" :options="chartOptions" :series="seriesData"></apexchart>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
  name: 'CandleChart',
  components:{
     apexchart: VueApexCharts,
  },
  props:{ prices :Array },
  data () {
    return {
      series: [{
        name: 'Series 1',
        data: this.prices
      }],
      chartOptions: {
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 1000
        },
        title: {
          text: 'Candle Stick',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        xaxis: {
          type: 'datetime',
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        yaxis: {
          tooltip: {
            enabled: true
          },
          labels: {
            style: {
              colors: '#fff'
            }
          }
        }
      }
    }
  },

  computed:{
    seriesData() {
      return [{
        name: 'Series 1',
        data: this.prices
      }];
    }
  },

  mounted() {
    console.log("MOUNTED ....",   this.title );
  }
}
</script>