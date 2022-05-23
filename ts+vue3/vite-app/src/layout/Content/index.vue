<template>
    <div class="content">
        <div class="tab">
            <div @click="switchTab(item)" v-for="(item, index) in data" :key="index" class="tab-item">
                {{ item.name }}
            </div>
        </div>
        <component :is="current.comName"></component>
    </div>
</template>

<script lang="ts" setup>
import { markRaw, reactive, ref } from 'vue';
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'

type Tab = {
    name: string,
    comName: any
}

type Com = Pick<Tab, 'comName'>

const data = reactive<Tab[]>([
    {
        name: '按钮A',
        comName: markRaw(A)
    }, {
        name: '按钮B',
        comName: markRaw(B)
    }, {
        name: '按钮C',
        comName: markRaw(C)
    },
])

let current = reactive<Com>({
    comName: data[0].comName
})

const switchTab = (item:Tab)=>{
    current.comName = item.comName
}

</script>

<style lang="less" scoped>
.content {
    margin: 20px;
    border: 1px solid #ccc;
    flex: 1;
    overflow: auto;
    padding: 10px;

    .tab {
        display: flex;

        .tab-item {
            margin: 8px;
            margin-left: 0;
            padding: 10px;
            border: 1px solid #ccc;
        }
    }
}
</style>