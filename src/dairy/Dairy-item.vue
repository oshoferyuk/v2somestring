<template>
  <div class="dairy-item__container">
      <p @click="selectItem()">{{item.name}}</p>
      <span class="point">{{item.comments.length}}</span>
      <button class="delete-btn" type="btn" @click="deleteItem()">Delete</button>
  </div>  
</template>

<script lang="ts">
import Dairy from '../model/Dairy.model';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DairyItem extends Vue {
  @Prop() private item!: Dairy;
  @Prop() private index!: number;
  selectItem(){      
      this.$emit('selectItem', this.index);
  }

  deleteItem(){
      this.$emit('deleteItem', this.index);
  }  

}
</script>


<style scoped lang="scss">
.dairy-item__container{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;    
    p{
        flex-basis: 50%;
        text-align: left;
    }

    .point{
        width: 30px;
        height: 25px;
        background-color: #27CCC0;
        color: #fff;
        font-size: 13px;
        text-align: center;
        line-height: 20px;
        margin-left: 40px;
        padding: 3px 10px;
        border-radius: 10%;
    }
    button{
        width: 97px;
        height: 30px;        
        border: 2px solid #FF3159;
        color: #FF3159;
        background-color: #fff;
        border-radius: 5px;        
        display: inline-block;
        cursor: pointer;  
    }
}
</style>
