<template>
    <div>
        <button @click="switchStatus(true)">登录</button>
        <button @click="switchStatus(false)">注册</button>
    </div>
    <keep-alive :include="['Login']">
        <Login v-if="status"></Login>
        <Register v-else></Register>
    </keep-alive>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Login from '../../components/login/index.vue'
import Register from '../../components/register/index.vue'

const status = ref<boolean>(true)
const switchStatus = (state: boolean) => {
    status.value = state
}
</script>

<style lang="less" scoped>
</style>