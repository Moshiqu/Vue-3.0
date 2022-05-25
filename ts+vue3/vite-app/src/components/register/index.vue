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
        <tr>
            <td>验证码</td>
            <td><input type="text" v-model="formData.code"></td>
        </tr>
    </table>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

type FormData = {
    username: string,
    password: string,
    code: string
}

const formData = reactive<FormData>({
    username: '',
    password: "",
    code: ""
})

</script>

<style lang="less" scoped>
</style>