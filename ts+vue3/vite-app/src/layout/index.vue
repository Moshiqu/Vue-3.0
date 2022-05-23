<template>
    <div class="layout">
        <Menu title='非默认' :data="data"></Menu>
        <div class="layout-right">
            <Header></Header>
            <Content></Content>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from './Header/index.vue'
import Content from './Content/index.vue'
import Menu from './Menu/index.vue';
import { reactive } from 'vue';

const data = reactive([1,1,1,1])

</script>

<style lang="less" scoped>
.layout {
    height: 100%;
    display: flex;

    &-right {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
}
</style>