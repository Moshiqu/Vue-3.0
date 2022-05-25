<template>
    <div>
        <div>pinia: {{ Test.current }}----{{ Test.name }}</div>
        <div>解构后: {{ current }}----{{ name }}</div>
        <div>
            <button @click="add">++</button>
            <button @click="change">$patch change</button>
            <button @click="functionChange">函数change</button>
            <button @click="stateChange">解构后改变state</button>
        </div>
        <div><button @click="reset">reset</button></div>
    </div>
</template>
 
<script lang='ts' setup>
import { storeToRefs } from 'pinia';
import { useTestStore } from '../../store'

const Test = useTestStore()
const add = () => {
    Test.current++
}
const change = () => {
    Test.$patch({
        name: '娃娃',
        current: 666
    })
}
const functionChange = () => {
    Test.$patch(state => {
        state.current = 999
        state.name = '摩西 '
    })
}

// pinia 解构后不具有响应式, storeToRefs使其解构后保留响应式
let { current, name } = storeToRefs(Test)
const stateChange = () => {
    current.value++
    Test.name = '哟西'
}

const reset  = ()=>{
    Test.$reset()
}
</script>
 
<style lang='less' scoped>
</style>
