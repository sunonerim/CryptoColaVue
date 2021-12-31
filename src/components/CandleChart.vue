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
      series: [
        {
          name: 'line',
          type: 'line',
          data: [
            {
              x: new Date(1638286200000),
              y: 1.57650000000000000000
            }, {
              x: new Date(1638287100000),
              y: 1.67650000000000000000
            }, {
              x: new Date(1638288000000),
              y: 1.58650000000000000000
            }, {
              x: new Date(1638288900000),
              y: 1.61650000000000000000
            }
          ]
        },

        {        
        name: 'Series 1',
        type: 'candlestick',        
        data: this.prices
      }],
      chartOptions: {
        animations: {
          enabled: false,
          // enabled: true,
          // easing: 'easeinout',
          // speed: 1000

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