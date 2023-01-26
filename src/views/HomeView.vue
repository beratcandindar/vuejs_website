<template>
  <div class="container">
    <h3> {{ counterData.title }}: {{ counterData.count }}</h3>
    <div class="counter" :class="{'yellow' : oddOrEven ==='tektir'}">
        <button @click="decreaseCounter(1)">-</button>
        <span>{{ counterData.count }}</span>
        <button @click="increaseCounter(1)">+</button>
    </div>
    <div>
      <h3>Bu sayı {{ oddOrEven }}</h3>
      <h3>Başlığı değiştir:</h3>
      <input v-model="counterData.title" type="text">
    </div>
  </div>
  
</template>

<script setup>
import {ref, reactive, computed} from 'vue'
const oddOrEven= computed(() =>{
    if(counterData.count %2 ==0) return 'çifttir'
    else return 'tektir'
})

const counterData = reactive({
  count: Math.floor(Math.random() * 10)+1,
  title: 'My counter',
  odd: 'çifttir'
})
    
function increaseCounter(amount){
    
    counterData.count+= amount
    console.log(amount)
}
function decreaseCounter(amount){
    if(counterData.count > 0)
      counterData.count -= amount
}
</script>

<style>
    .counter{
      display: block ;
      width: 100%;
      text-align: center;
      padding: 20px;
      border-radius: 7px;
      background-color: bisque;
      color: black;
    }
    .counter span{
      font-size: 20px;
      color: black;
    }
    .counter.yellow{
      background-color: yellow;
    }
    .container{
      
      margin-top:69px;
      display: block;
    }
</style>