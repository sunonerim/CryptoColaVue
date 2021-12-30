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
        <span>{{ $route.query.text }}</span>
        <span>{{ $route.params.reqtime }}</span>
      </div>
  </div>

</template>

<script>
import { ref }      from "vue"
import axios        from "axios"

function  test_format( val) {
  return val.substring(0,4) + '-' +  val.substring(4,6) + '-' + val.substring(6,8)  + ' ' + val.substring(8,10) + ':'+ val.substring(10,12) + ':'+ val.substring(12,14) ;  
}

function  format_percent( val){
  console.log( val, val*100);
  return Number(val * 100).toFixed(2) + '%';
}

export default {      
  name: 'Params',
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
      positions: []
    }
  },
  methods:{
    handleGetPositions:function() {
      let that = this;
      console.log( '$route.params.reqtime', this.reqtime );
            
      axios.get('http://localhost:8002/backtest/positions', {params:{reqTime:this.reqtime}} )
            .then( function( respose ){ 
              that.positions= [];             
              respose.data.forEach( position => {
                console.log( position );                
                that.positions.push( position ) ;  
              });              
              
            })
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

.minus_tr
  color : #FFFFFF  
  background-color: $pink

.plus_tr
  color : #000000  
  background-color: $light-green-13

</style>