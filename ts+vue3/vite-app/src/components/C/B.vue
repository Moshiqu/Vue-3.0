<template>
    <div class="B">
        {{flag}}
    </div>
</template>
 
<script lang='ts' setup>
import { getCurrentInstance, ref } from 'vue';


const instance = getCurrentInstance()

const flag = ref(false)

instance?.proxy?.$Bus.on('onEmitA',(str:any)=>{
    flag.value = str
})
</script>
 
<style lang='less' scoped>
.B {
    width: 300px;
    height: 300px;
    background-color: blue;
    margin-bottom: 20px;
    color: #fff;
}
</style>
