<template>
    <div class="A">
        <button @click="emit">emit</button>
    </div>
</template>
 
<script lang='ts' setup>
import { getCurrentInstance, ref } from 'vue';


const instance = getCurrentInstance()
const flag = ref<boolean>(false)
const emit = ()=>{
    flag.value = !flag.value
    instance?.proxy?.$Bus.emit('onEmitA',flag.value)
}
</script>
 
<style lang='less' scoped>
    .A{
        width:300px;
        height: 300px;
        background-color: red;
        margin-bottom: 20px;
    }
</style>
