<template>
  <div class="q-pa-md row items-start q-gutter-md">          
    <q-btn
     @click="handleGetReuests()"
    >GET LIST</q-btn>        

    <q-table
      title="Test Requests"             
      :rows="testRequests"
      :columns="columns"
      row-key="reqTime"
      @row-click="handleRowClick"
    />

  </div>

</template>

<script>
import axios from 'axios'

const columns = [
  {
    name    : 'reqTime',
    required: true,
    label   : 'req time',
    align   : 'left',
    field   : row => row.reqTime,
    format  : val => `${val}`,
    sortable: true
  },
  { name: 'symbol'      , label: 'Symbol'     , field: 'symbol'     , align: 'center' , sortable: true },
  { name: 'timeFrame'   , label: 'Time Frame' , field: 'timeFrame'                    , sortable: true },
  { name: 'position'    , label: 'position'   , field: 'position'},
  { name: 'strategyId'  , label: 'strategyId' , field: 'strategyId'},
  { name: 'timeFrame'   , label: 'START'      , field: 'startDatetime',  format:val => test_format(val) } ,
  { name: 'timeFrame'   , label: 'END'        , field: 'endDatetime'  ,  format:val => test_format(val) } ,
  { name: 'numPosition' , label: 'numPosition', field: 'numPosition'},
  { name: 'numWin'      , label: 'numWin'     , field: 'numWin'},
  // { name: 'profitBySys'      , label: 'profitBySys'     , field: 'profitBySys' },
  { name: 'profitBySys'      , label: 'profitBySys'     , field: 'profitBySys' , format:val => format_percent(val)  },
]

function  test_format( val) {
  return val.substring(0,4) + '-' +  val.substring(4,6) + '-' + val.substring(6,8) ;  
}

function  format_percent( val){
  console.log( val, val*100);
  return Number(val * 100).toFixed(2) + '%';
}

export default {   
  // components: {
  //   Chart
  // },

  data () {
    return {
      lorem       : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      columns     : columns,
      testRequests: []
    }
  },
  mounted() {
    this.handleGetReuests();
  },
  methods:{
    handleGetReuests:function() {
      let that = this;      
      axios.get('http://localhost:8002/backtest/list')
            .then( function( respose ){              
              respose.data.forEach( test_req => {
                that.testRequests.push( test_req ) ;  
              });              
              
            })
    },
    handleRowClick : function( e, row, index ) {      
      window.open('/#/cryptocola/position/'  + row.reqTime );
    },
  }
}
</script>





<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>