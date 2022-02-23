<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(item,index) in dones" :key="'dones-' + index">
      <div class="form-check">
        <label class="form-check-label" for="exampleCheck1">{{ item }}</label>
        <div class="float-right">
          <!-- <button type="button" class="btn btn-danger" @click="del(index)">删除</button> -->
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import store from '@/store'
import { computed, defineComponent, reactive } from 'vue'

export default defineComponent({
  setup () {
    return reactive({
      dones: computed(() => store.state.dones)
    })
  }
})
</script>

<style lang="less" scoped>
</style>
