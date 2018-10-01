<template>
  <div class="dairy-comments__container" v-if="item">
      <div class="dairy-comments__controls">          
      <div v-for="(desc, index) in item.comments" :key="index" class="dairy-comments__comment-wrapper">            
            <div class="avatar"></div>
            <span>{{desc}}</span>                    
      </div>
      <div class="dairy-comments__textarea">        
        <div class="avatar"></div>
        <textarea ref="textarea" @keyup.ctrl.enter="addComment()"></textarea>
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import Dairy from '../model/Dairy.model';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DairyComments extends Vue {
  @Prop() private item!: Dairy;  
  selectItem(){
      alert('select item');
  }
  mounted(){
      // console.log(this.item);
  }
  addComment(){
      
      this.$emit('addComment', this.$refs.textarea.value);
      this.$refs.textarea.value = '';
  }    
}
</script>


<style scoped lang="scss">
.dairy-comments__container {
    padding: 30px 15px 30px 20px;
    box-shadow: 0 0 10px 0 #949494;
    max-height: 95vh;    
}

.dairy-comments__controls{    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.dairy-comments__comment-wrapper{
    margin-bottom: 10px;    
    display: flex;
    justify-content: left;    
    .avatar{
        width: 52px;
        height: 52px;        
        background-color: #FF8A00;
        margin-right: 10px
    }        

&:nth-child(2n){
        .avatar{
            background-color: #47568C;
        }
    }
}

.dairy-comments__textarea{
    display: flex;    
}
textarea{
    margin-left: 20px;
    flex-basis: 70%;
}
.avatar{
        width: 52px;
        height: 52px;        
        background-color: gray;
    }

</style>
