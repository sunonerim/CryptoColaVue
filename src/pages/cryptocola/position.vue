<template>
  <div>    
    <q-btn
      @click="handleGetPositions()">GET LIST</q-btn>
      <q-table
        dense
        title="Positions"
        virtual-scroll    
        v-model:pagination="pagination"  
        :rows-per-page-options="[0]"
        :virtual-scroll-sticky-size-start="48"
        :rows="positions"
        :columns="columns"
        row-key="id"
        @row-click="handleRowClick"      
        class="my-sticky-virtscroll-table"
      >
<!--
      <template v-slot:body="props">        
        <q-tr :props="props" >
          <template v-for="col in props.cols" :key="col.name">
            <q-td v-if=" col.name == 'profit' && col.value < 0 " class="minus_tr" >{{ col.value }}</q-td>
            <q-td v-else>{{ col.value }}</q-td>
          </template>
        </q-tr>
      </template>
-->      

      <template v-slot:body="props">        
         <q-tr :props="props" v-if=" props.row.profit < 0 " class="minus_tr" >
            <template v-for="col in props.cols" :key="col.name">              
              <q-td >{{ col.value }}</q-td>
            </template>
         </q-tr>        
         <q-tr :props="props" v-else class="plus_tr">
            <template v-for="col in props.cols" :key="col.name">              
              <q-td >{{ col.value }}</q-td>
            </template>           
         </q-tr>
      </template>            
      </q-table>

      <div>
        <span>title</span>
        <span>{{ $route.params.reqtime }}</span>
      </div>      
      <div id="chartPanel"></div>
  </div>

</template>

<script>
import { ref }      from "vue"
import axios        from "axios"
import Data         from '/src/pages/cryptocola/data.json'
import { createChart } from 'lightweight-charts';

function  test_format( val) {
  return val.substring(0,4) + '-' +  val.substring(4,6) + '-' + val.substring(6,8)  + ' ' + val.substring(8,10) + ':'+ val.substring(10,12) + ':'+ val.substring(12,14) ;  
}

function  format_percent( val){
  console.log( val, val*100);
  return Number(val * 100).toFixed(2) + '%';
}

function  alignment( field ) {
    console.log( field );
}

export default {      
  name: 'Params',
  components: {           
  },

  props: {
      reqtime: Number,
  },

  data () {
    return {
      pagination: ref({
        rowsPerPage: 0
      }),
      columns     : [ 
                      // { name: 'reqTime'       , label: 'reqTime'        , field: 'reqTime'      , align: 'center' },
                      // { name: 'id'            , label: 'ID'             , field: 'id'           , align: 'center'  },
                      { name: 'enterDatetime' , label: 'enterDatetime'  , field: 'enterDatetime'  , format:val => test_format(val)  },
                      { name: 'enterPrice'    , label: 'enterPrice'     , field: 'enterPrice'   , align: 'right'  },

                      { name: 'exitDatetime'  , label: 'exitDatetime'   , field: 'exitDatetime'   , format:val => test_format(val)  },                      
                      { name: 'exitPrice'     , label: 'exitPrice'      , field: 'exitPrice'    , align: 'right'   },

                      { name: 'profit'        , label: 'profit'         , field: 'profit'      , align: 'right' },
                      { name: 'rate'          , label: 'rate'           , field: 'rate'        , align: 'right' },
                    ],
      positions: [],
      candles:[],
      markers:[],
      chart: Data,
      width: window.innerWidth,
      height: window.innerHeight,
      colors: {
          colorBack: '#fff',
          colorGrid: '#eee',
          colorText: '#333',
      },
    }
  },

  mounted() {
    this.handleGetPositions();
    
  },

  methods:{
    drawCandle        : function( candle_data , _markers) {
      console.log( '------------ draw chart -------------------');
      var chart = createChart( 'chartPanel', {
        width: 1200,
        height: 300,
        timeScale: {
            timeVisible: true,
            borderColor: '#D1D4DC',
          },
        rightPriceScale: {
          borderColor: '#D1D4DC',
        },
        layout: {
			textColor: '#d1d4dc',
			backgroundColor: '#202020',
        },
        grid: {
          horzLines: {
            color: '#808080',
          },
          vertLines: {
            color: '#AAAAAA',
          },
        },
      });

      var series = chart.addCandlestickSeries({
          upColor: 'rgb(38,166,154)',
          downColor: 'rgb(255,82,82)',
          wickUpColor: 'rgb(38,166,154)',
          wickDownColor: 'rgb(255,82,82)',
          borderVisible: false,
        });
      var data = [{ time: {year: 2018, month: 9, day: 22} , open: 29.630237296336794 , high: 35.36950035097501 , low: 26.21522501353531 , close: 30.734997177569916 },
                  ];
      if( candle_data ) {
        data = candle_data;
      }
      series.setData(data);
      
      // var datesForMarkers = [data[data.length - 39], data[data.length - 19]];
      // var indexOfMinPrice = 0;
      // for (var i = 1; i < datesForMarkers.length; i++) {
      //   if (datesForMarkers[i].high < datesForMarkers[indexOfMinPrice].high) {
      //     indexOfMinPrice = i;
      //   }
      // }

      // var markers = [{ time: data[data.length - 48].time, position: 'aboveBar', color: '#f68410', shape: 'circle', text: 'D' }];
      // for (var i = 0; i < datesForMarkers.length; i++) {
      //   if (i !== indexOfMinPrice) {
      //     markers.push({ time: datesForMarkers[i].time, position: 'aboveBar', color: '#e91e63', shape: 'arrowDown', text: 'Sell @ ' + Math.floor(datesForMarkers[i].high + 2) });
      //   } else {
      //     markers.push({ time: datesForMarkers[i].time, position: 'belowBar', color: '#2196F3', shape: 'arrowUp', text: 'Buy @ ' + Math.floor(datesForMarkers[i].low - 2) });
      //   }
      // }
      series.setMarkers(_markers);
      console.log( '------------ draw chart END -------------------');
    },


    handleGetPositions:function() {
      let self = this;      
      axios.get('http://localhost:8002/backtest/positions', {params:{reqTime:this.reqtime}} )
            .then( function( response ){ 
              self.positions= [];             
              response.data.forEach( position => {
                // console.log( position );                
                self.positions.push( position ) ;  
              });                            
            })

      
        self.requestChart();  
    },

    requestChart  :function() {
      let self = this;                  
      axios.get('http://localhost:8002/backtest/chart', {params:{reqTime:this.reqtime}} )
            .then( function( response ){ 
              // console.log( response );
              // self.positions= [];             
              // respose.data.forEach( position => {
              //   console.log( position );                
              //   self.positions.push( position ) ;  
              // });             
              response.data.candle.forEach( c => {
                console.log( c) ;
                let candle = {
                  time:c.openTime/1000 + ( 9*60*60 ),
                  open:c.openPrice,
                  high:c.highPrice,
                  low:c.lowPrice,
                  close:c.closePrice,
                  closeTime:c.closeTime/1000 + ( 9*60*60 )
                };

                
                // let candle = 
                // {
                //   x: new Date( c.openTime),
                //   y: [ c.openPrice, c.highPrice, c.lowPrice, c.closePrice]
                // };
                self.candles.push( candle );                
                
              });                

              // MARKER 
              self.markers = [];
              self.positions.forEach ( p => {
                let enter  = { time: self.candles[p.enterIndex].time, position: 'belowBar', color: '#2196F3', shape: 'arrowUp', text: 'Buy @ ' + p.enterPrice };                
                let exit   = { time: self.candles[ p.exitIndex].time, position: 'aboveBar', color: '#e91e63', shape: 'arrowDown', text: 'Sell @ '   + p.exitPrice  };
                self.markers.push( enter );
                self.markers.push( exit  );                
              });              
              self.drawCandle( self.candles , self.markers );
            })      

            
    },

    handleRowClick : function( e, row, index ) {
      console.log( row, index) ;
      window.open('/#/dbcola/position')
    },

    // findIndexOfDatatime : function( _timestamp ) {
    //   let adjust_timstamp = _timestamp /1000 + (  9*60*60 );
    //   // for ( let i =0 ; i<this.candles.length; i++){
    //   //   let c = this.candles[i];
    //   //   if(c.time <= adjust_timstamp &&  adjust_timstamp < c.closeTime ){
    //   //     return i;
    //   //   }
    //   // }
    //   let index = this.candles.findIndex( c => (c.time <= adjust_timstamp &&  adjust_timstamp < c.closeTime ) );
    //   return index;
    // }
  }
}
</script>

<style lang="sass" scoped>
.my-sticky-virtscroll-table  
  height: 600px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th 
    background-color: #fff

  thead tr th
    position: sticky
    z-index: 1
  
  thead tr:last-child th
    top: 48px

  thead tr:first-child th
    top: 0    

.minus_tr
  color : #FFFFFF  
  background-color: $pink

.plus_tr
  color : #000000  
  background-color: $light-green-13

</style>