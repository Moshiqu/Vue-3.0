<template>
    <table>
        <tr>
            <td>用户名</td>
            <td><input type="text" v-model="formData.username"></td>
        </tr>
        <tr>
            <td>密码</td>
            <td><input type="text" v-model="formData.password"></td>
        </tr>
    </table>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

type FormData = {
    username: string,
    password: string,
}

const formData = reactive<FormData>({
    username: '',
    password: "",
})


</script>

<script lang="ts">
export default {
    name: 'Login'
}
</script>

<style lang="less" scoped>
</style>