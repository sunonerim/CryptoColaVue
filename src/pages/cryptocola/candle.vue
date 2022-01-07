<template>
  <div>
    <q-btn
     @click="handleGetPositions()">GET LIST</q-btn>

      <q-table
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
      />
      <div>
      </div>
  </div>

</template>

<script>
import { ref }      from "vue"
import axios        from "axios"


function  test_format( val) {
  return val.substring(0,4) + '-' +  val.substring(4,6) + '-' + val.substring(6,8) ;  
}

function  format_percent( val){
  console.log( val, val*100);
  return Number(val * 100).toFixed(2) + '%';
}

export default {   
  //  components: {       
  //     CandleChart      
  //    },

  data () {
    return {
      pagination: ref({
        rowsPerPage: 0
      }),
      columns     : [ { name: 'id'           , label: 'ID'     , field: 'id'     , align: 'center'  },  
                      { name: 'symbol'       , label: 'Symbol'     , field: 'symbol'     , align: 'center' , sortable: true },
                      { name: 'candleInterval'    , label: 'Time Frame' , field: 'candleInterval'                    , sortable: true },
                      { name: 'openTimeStr'  , label: 'openTimeStr'   , field: 'openTimeStr'},
                      { name: 'closeTimeStr' , label: 'closeTimeStr'   , field: 'closeTimeStr'},
                      
                      { name: 'openPrice'    , label: 'openPrice'   , field: 'openPrice'},
                      { name: 'highPrice'    , label: 'highPrice'   , field: 'highPrice'},
                      { name: 'lowPrice'     , label: 'lowPrice'   , field: 'lowPrice'},
                      { name: 'closePrice'   , label: 'closePrice'   , field: 'closePrice'},
                      { name: 'volume'       , label: 'volume'   , field: 'volume'},
                      { name: 'numTrades'    , label: 'numTrades'   , field: 'numTrades'},
                    ],
      positions: [],
      prices:[],
      title : 'sampel',
    }
  },
  
  methods:{
    handleGetPositions:function() {
      let that = this;

      console.log('handle GET REQ');
      axios.get('http://localhost:8002/backtest/candles', {params: { market: 'binance', symbol:'ADAUSDT', timeFrame:'15m', startDate:'20211201000000', endDate:'20211210235959' }})
            .then( function( respose ){ 
              that.positions= [];             
              respose.data.forEach( position => {
                
                that.positions.push( position ) ;  

                let price_data = 
                {
                  x: new Date( position.openTime),
                  y: [ position.openPrice, position.highPrice, position.lowPrice, position.closePrice]
                };
                that.prices.push( price_data );
              });              
              console.log( that.prices );

            });

          axios.get('http://localhost:8002/backtest/candles', {params: { market: 'binance', symbol:'ADAUSDT', timeFrame:'15m', startDate:'20211201000000', endDate:'20211210235959' }})
            .then( function( respose ){ 
              that.positions= [];             
              respose.data.forEach( position => {
                
                that.positions.push( position ) ;  

                let price_data = 
                {
                  x: new Date( position.openTime),
                  y: [ position.openPrice, position.highPrice, position.lowPrice, position.closePrice]
                };
                that.prices.push( price_data );
              });              
              console.log( that.prices );

            });

    },
    handleRowClick : function( e, row, index ) {
      console.log( row, index) ;
      window.open('/#/dbcola/position')
    },
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
</style>