<template>
    <div class="inputbox">
        <el-input v-model="input" placeholder="Please input" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style lang="less" scoped>
.inputbox {
    :deep(.el-input__inner) {
        color: red
    }
}
</style>
