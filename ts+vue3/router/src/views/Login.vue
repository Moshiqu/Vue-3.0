<template>
    <div class="login">
        <el-card class="box-card">
            <el-form :rules="rules" :model="formInline" class="demo-form-inline" ref="formRef">
                <el-form-item label="账号" prop="user">
                    <el-input v-model="formInline.user" placeholder="账号" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="formInline.password" placeholder="密码" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

type From = {
    user: string,
    password: string
}

const formInline = reactive<From>({
    user: '',
    password: '',
})

const formRef = ref<FormInstance>()
const rules = reactive<FormRules>({
    user: [
        { required: true, message: '请输入用户名', trigger: 'change', type: 'string' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'change' },
    ]
})

const router = useRouter()
const onSubmit = () => {
    formRef.value?.validate(valid => {
        if (valid) {
            const time = 1500
            ElMessage({
                message: '验证通过',
                type: 'success',
                duration: time
            })
            localStorage.setItem("token", JSON.stringify(formInline));
            const timer = setTimeout(() => {
                router.push('/index')
                clearTimeout(timer)
            }, time);
        } else {
            ElMessage.error('验证失败')
        }
    })
}
</script>

<style lang="less" scoped>
.login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>