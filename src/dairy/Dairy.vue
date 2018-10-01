<template>
  <div class="dairy-container">    
    <b-row>
        <b-col cols="5" offset="3">
          <dairy-items :itemList="dairy" 
            @addItem="addItem($event)" 
            @deleteItem="deleteItem($event)"
            @selectItem="selectItem($event)">
          </dairy-items>
        </b-col>
        <b-col cols="4">
            <dairy-comments :item="getCurrentDairy()"
            @addComment="addComment($event)"></dairy-comments>
        </b-col>        
    </b-row>
  </div>
</template> 

<script>
import DairyItems from './Dairy-items'
import DairyComments from './Dairy-comments'
import DairyStore from '../model/Dairy.store'

export default {
  name: 'Dairy',
  components: { DairyItems, DairyComments },
  data(){
    return {
      dStore: {},
      dairy: [],
      currentIndex: null      
    }
    },
  methods:{
    addItem(item){
      this.dStore.addItem(item);
    },
    deleteItem(index){      
      this.dStore.deleteItem(index);
    },
    selectItem(index){
      this.currentIndex = index;
    },

    addComment(comment){
      this.dStore.addComment(this.currentIndex, comment);
    },
    getCurrentDairy(){      
      return this.dairy[this.currentIndex];
    }    
  },
  created(){
    this.dStore = new DairyStore();        
    this.dStore.addItem('aaa');    
    this.dStore.addItem('bbb');    
    
    this.currentIndex = 0;    
    this.dStore.addComment(0, 'test1');
    this.dStore.addComment(0, 'test2');  
    this.dStore.addComment(0, 'test3');  
    this.dairy = this.dStore.getDairy();        
  }  
}

</script>


<style scoped lang="scss">
a {
  color: #42b983;
}
.dairy-container{
  margin-top: 10px;
}
</style>
