<template>
  <div class="dairy-container">    
    <b-row>
        <b-col cols="5" offset="3">
          <dairy-items :itemList="dairy" @addItem="addItem($event)"></dairy-items>
        </b-col>
        <b-col cols="4">
            This is comment2
        </b-col>        
    </b-row>
  </div>
</template> 

<script>
import DairyItems from './Dairy-items'
import DairyStore from '../model/Dairy.store'

export default {
  name: 'Dairy',
  components: { DairyItems },
  data(){
    return {
      ds: {},
      dairy: []
    }
    },
  methods:{
    addItem(item){
      this.ds.addItem(item);
    },
    deleteItem(index){
      alert(2);
      this.ds.deleteItem(index);
    }
  },
  created(){
    this.ds = new DairyStore();    
    this.ds.addItem('aaa');
    this.ds.addItem('bbb');
    this.dairy = this.ds.getDairy();    
  }  
}

</script>


<style scoped>
a {
  color: #42b983;
}
</style>
