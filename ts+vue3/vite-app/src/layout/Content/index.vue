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
import D from './D'
import E from './E.vue'
import F from './F.vue'
import G from './G.vue'

type Tab = {
    name: string,
    comName: any
}

type Com = Pick<Tab, 'comName'>

const data = reactive<Tab[]>([
    {
        name: 'keep-alive',
        comName: markRaw(A)
    }, {
        name: 'transition',
        comName: markRaw(B)
    }, {
        name: 'mitt',
        comName: markRaw(C)
    }, {
        name: 'tsx',
        comName: markRaw(D)
    }, {
        name: '自定义指令 directive',
        comName: markRaw(E)
    }, {
        name: 'hooks',
        comName: markRaw(F)
    }, {
        name: '全局挂载 filter',
        comName: markRaw(G)
    }
])

let current = reactive<Com>({
    comName: data[0].comName
})

const switchTab = (item: Tab) => {
    current.comName = item.comName
}

document.addEventListener('selectstart', function (e) {
    e.preventDefault();
})

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