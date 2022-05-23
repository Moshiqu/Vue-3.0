<template>
    <div class="header">
        <Suspense>
            <template #default>
                <A></A>
            </template>

            <template #fallback>
                <div>loading...</div>
            </template>
        </Suspense>
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const A = defineAsyncComponent(()=>import('../../components/A/index.vue'))

</script>

<style lang="less" scoped>
.header {
    height: 80px;
    border-bottom: 1px solid #ccc;
}
</style>