<template>
    <div class="menu">
        <Tree @on-click="treeItemClick" :data="data"></Tree>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import Tree from '../../components/Tree/index.vue';

type TreeList = {
    name:string,
    icon?:string,
    children?:TreeList[]|[]
}

const data = reactive<TreeList[]>([
    {
        name:'no.1',
        children:[
            {
                name:'no.1-1',
                children:[
                    {
                        name:'no.1-1-1'
                    }
                ]
            },{
                name:'no.1-2',
                children:[
                    {
                        name:'no.1-2-1'
                    }
                ]
            }
        ]
    },{
        name:'no.2',
        children:[
            {
                name:'no.2-1',
                children:[
                    {
                        name:'no.2-1-1'
                    }
                ]
            },{
                name:'no.1-2',
                children:[
                    {
                        name:'no.2-2-1',
                        children:[
                            {
                                name:'no.2-2-1-1'
                            },{
                                name:'no.2-2-2-1'
                            }
                        ]
                    }
                ]
            }
        ]
    }
])

const treeItemClick = (item:TreeList)=>{
    console.log(item,'====>');
}


</script>

<style lang="less" scoped>
    .menu{
        width: 200px;
        height: 100%;
        border-right: 1px solid #ccc;
    }
</style>