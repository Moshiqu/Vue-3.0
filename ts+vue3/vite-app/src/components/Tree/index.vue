<template>
    <div class="tree">
        <div v-for="(item,index) in data" :key="index" @click.stop="clickItem(item)">
            {{item.name}}
            <TreeItem @on-click="treeItemClick" :data="item.children" v-if="item.children?.length"></TreeItem>
        </div>
    </div>
</template>

<script setup lang="ts">
type TreeList = {
    name:string,
    icon?:string,
    children?:TreeList[]|[]
}
type Props = {
    data?:TreeList[]
}

defineProps<Props>()

const emit = defineEmits(['on-click'])
const clickItem = (item:TreeList)=>{
    emit('on-click',item)
}

const treeItemClick = (item:TreeList)=>{
    console.log(item,'--------->');
}


</script>

<script lang="ts">
    export default {
        name:'TreeItem'
    }
</script>

<style lang="less" scoped>
    .tree{
        margin-left: 10px;
    }
</style>