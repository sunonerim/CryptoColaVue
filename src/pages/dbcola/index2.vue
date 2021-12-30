<template>

    <q-card bordered class="my-card" 
      style="width:240px; position:absolute; left:100px; top:80px;"> 
      <q-card-section>
        ENTITY w
        <span class="float-right" draggable="true">
            <q-avatar color="red" text-color="white" icon="style" size="sm"/>          
        </span>
      </q-card-section>

      <q-list dense bordered separator>        
      <draggable        
        :list="Columns"        
        item-key="Id"
        @start="dragging = true"
        @end="dragging = false"        
        @change="log"        
      >
      <template #item="{ element }">
      <q-item clickable v-ripple class="normal-height">
        <q-item-section avatar>
          <q-avatar size="xs" color="primary" text-color="white" v-show="element.Key=='PK'">
            P
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ element.LogicalName }}</q-item-label>          
          <q-item-label class="text-xs">{{ element.LogicalType }} ({{ element.LogicalLength }}) </q-item-label>          
        </q-item-section>
      </q-item>
      </template>

      </draggable>
      </q-list>
    </q-card>
    

   <q-card bordered  class="my-card" 
      style="width:320px; position:absolute; left:360px; top:180px;"> 
      <q-card-section>
        ENTITY
        <span class="float-right" draggable="true">
            <q-avatar color="red" text-color="white" icon="style" size="sm"/>          
        </span>
      </q-card-section>

      <q-list dense bordered separator>        
      <draggable        
        :list="pkColumns"        
        item-key="Id"
        @start="dragging = true"
        @end="dragging = false"        
        @change="log"        
      >
      <template #item="{ element }">

      <q-item clickable v-ripple>
          <div class="row text-xs q-px-sm" style="width:100%;">
            <div style="width:20px;">
                <span v-show="element.Key=='PK'">PK</span>
            </div>
            <div style="width:160px;">
              {{ element.LogicalName }}
            </div>
            <div style="width:120px;">
                {{ element.LogicalType }} ({{ element.LogicalLength }})
            </div>           
          </div>
      </q-item> 
      </template>
      </draggable>      
      </q-list>


      <q-list dense>        
      <draggable        
        :list="Columns"        
        item-key="Id"
        @start="dragging = true"
        @end="dragging = false"        
        @change="log"        
      >
      <template #item="{ element }">

      <q-item clickable v-ripple>
          <div class="row text-xs q-px-sm" style="width:100%;">
            <div style="width:20px;">
                <span v-show="element.Key=='PK'">PK</span>
            </div>
            <div style="width:160px;">
              {{ element.LogicalName }}
            </div>
            <div style="width:120px;">
                {{ element.LogicalType }} ({{ element.LogicalLength }})
            </div>           
          </div>
      </q-item> 
      </template>
      </draggable>      
      </q-list>


   </q-card>
    

  <div class="q-pa-md" style="width:350px; position:absolute; left:580px; top:380px;">
    <q-list dense padding class="rounded-borders">
      <q-item clickable v-ripple>
        <q-item-section>
          Item
        </q-item-section>
      </q-item>

      <draggable        
        :list="pkColumns"        
        item-key="Id"
        @start="dragging = true"
        @end="dragging = false"        
        @change="log"        
      >          
      <template #item="{ element }">
      <q-item clickable v-ripple >
        <q-item-section>          
          <div class="row items-start">
            <div class="col">
              {{ element.LogicalName }}
            </div>
            <div class="col">
              {{ element.LogicalType }} ({{ element.LogicalLength }})
            </div>            
          </div>          
        </q-item-section>
      </q-item>      
      </template>        
      </draggable>
      
      <q-item clickable v-ripple>
        <q-item-section>

          <div class="row items-start">
            <div class="col">
              One of three
            </div>
            <div class="col">
              One of three cols
            </div>
            <div class="col">
              One of three
            </div>
          </div>

        </q-item-section>
      </q-item>
    </q-list>
  </div>

</template>

<script>
import erdTestData    from "/src/store/testdata.js"
import draggable      from "vuedraggable";

export default {
  name      : "clone",
  display   : "Clone",
  order     : 2,
  components: {
    draggable
  },
  setup() {
    let pks = erdTestData[1].Columns.filter( c => c.Key == 'PK');
    let normal_cols = erdTestData[1].Columns.filter( c => c.Key != 'PK');

    console.log( pks );

    // const state = reactive({
    //   dragging  : false,
    //   entity    : erdTestData[0],
    //   pkColumns : pks,
    //   Columns   : normal_cols,      
    // })
    // return { state }    

    return {
      dragging  : false,
      entity    : erdTestData[0],
      pkColumns : pks,
      Columns   : normal_cols,      
    };
  },

  computed: {
    entities() {
      return   erdTestData;      
    },
    columns() {
      return erdTestData[0].Columns;
    }    
  },

  methods: {
    log: function(evt) {
      console.log( evt );
      console.log( this.list2);
    }
  }
};
</script>
<style scoped>
.text-xs {
  font-size: 0.75rem;
}
.q-item{
  min-height: 24px;
  height    : 24px;
  padding   : 0px;
}
.normal-height{
  min-height: 48px;
  padding: 8px 16px;
}
</style>