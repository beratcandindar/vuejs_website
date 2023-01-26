<template>
<div class="modals">
    <div>
        <h2>Title</h2>
        <button @click="showModal=true">Show Box</button>
    </div>
    <div class="modal" v-if="showModal">
        <p>Windows 10 ayarları üzerinden touchpadi devre dışı bırakabilirsiniz. Bunun için Ayarlar - Cihazlar kısmından sol tarafta bulunan Dokunmatik Yüzeyler seçeneğine tıklayın</p>
        <button @click="showModal=false">Hide Box</button>
    </div>
</div>

</template>

<script setup>
    import {ref} from 'vue'

    const showModal = ref(true)
</script>

<style>
body{
    background-color: black;
}
.modal{
    display: block;
    margin: 10px;
    width: 300px;
    background-color: beige;
    color: black;
}

</style>