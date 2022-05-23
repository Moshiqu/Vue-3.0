<template>
    <div>
        <div v-for="item in list">{{ item.name }}</div>
    </div>
</template>

<script lang="ts" setup>
import { axios } from './server';

type Name = {
    name: string
}

const list:Name[] = await axios('./data.json')
console.log(list);
</script>

<style lang="less" scoped>
</style>