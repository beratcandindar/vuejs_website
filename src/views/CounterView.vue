<template>
    <div class="Counter">
        <p class="title">Counter</p>
        <div class="Counter-Box">
            <button class="crease" @click="decreaseCounter()"><fa class="fa-solid fa-xl me-3" icon="angle-left"/></button>
            <button class="click danger" @click="increaseCounter()">{{ counterData.count }}</button>
            <button class="crease" @click="increaseCounter()"><fa class="fa-solid fa-xl ms-3" icon="angle-right"/></button>
        </div>
        <button class="click reset" @click="resetCounter()">Reset</button>
    </div>
</template>

<script setup>
import '../style/counter.css';
import {reactive} from 'vue'

const counterData = reactive({
    count:0
})
function increaseCounter(){
    counterData.count++
}
function decreaseCounter(){
    counterData.count--
}
function resetCounter(){
    counterData.count = 0
}
</script>