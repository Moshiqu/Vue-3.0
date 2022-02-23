<template>
  <div class="form-group">
    <label for="exampleInputEmail1">添加待办事项</label>
    <!-- 新增项目输入框 -->
    <input type="text" class="form-control" v-model.trim="inputValue" @keydown.enter="add(inputValue)"/>
    <small id="emailHelp" class="form-text text-muted">回车即可加入</small>
  </div>
  <ul class="list-group">
    <li class="list-group-item" v-for="(item,index) in todos" :key="'tods-'+index">
      <div class="form-check">
        <label class="form-check-label" for="exampleCheck1">{{item}}</label>
        <div class="float-right">
          <button type="button" class="btn btn-primary mr-3 btn-sm" @click="check(index)">完成</button>
          <button type="button" class="btn btn-danger btn-sm" @click="del(index)">删除</button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import store from '@/store'
import { defineComponent, ref, reactive, computed } from 'vue'

export default defineComponent({
  setup () {
    const inputValue = ref('')

    // 添加新的list
    const add = (value:string) => {
      if (value) {
        store.commit('add', value)
        inputValue.value = ''
      }
    }

    // 删除list
    const del = (index:number) => {
      store.commit('delete', index)
    }

    // 修改状态
    const check = (index:number) => {
      store.commit('check', index)
    }

    return reactive({
      inputValue,
      todos: computed(() => store.state.todos),
      add,
      del,
      check
    })
  }
})
</script>

<style lang="less" scoped>
</style>
