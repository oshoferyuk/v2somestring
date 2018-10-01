<template>

  <div class="dairy-items__container">    
    <div class="dairy-items__controls">
      <input placeholder="Type name here..." type="text" ref="input" @keyup.enter="addItem()"/>
      <button class="btn btn-info" type="submit" @click="addItem()">Add new</button>    
    </div>
    <div class="dairy-item__list">
      <div v-for="(item, index) in itemList" :key="index">
        <dairy-item :item="item" :index="index" @deleteItem="deleteItem($event)" @selectItem="selectItem($event)"></dairy-item>
      </div>
    </div>    
  </div>  
  
</template>

<script>
 import DairyItem from './Dairy-item'
export default {
  name: 'DairyItems',
  components: { DairyItem },
  props: {    
    itemList: Array    
  },
  mounted(){    
    // console.log('test');
    // console.log(this.itemList);
  },
  methods:{
    addItem(){       
      this.$emit('addItem', this.$refs.input.value);
      this.$refs.input.value = '';
    },
    deleteItem(index){            
      this.$emit('deleteItem', index);
      // this.ds.deleteItem(index);
    },
    selectItem(index){
      this.$emit('selectItem', index);
    }
  }
}
</script>


<style scoped>
.dairy-items__container {
    padding: 30px 15px 30px 20px;
    box-shadow: 0 0 10px 0 #949494;
    max-height: 95vh;    
}

.dairy-items__controls{
    display: flex;
    justify-content: space-between;
}

input{
  flex-basis: 60%;
}

button{
    height: 37px;
    background-color: #27CCC0;
    width: 97px;
    margin-left: 20px;
}

</style>
