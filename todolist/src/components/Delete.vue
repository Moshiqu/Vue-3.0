<template>
    <ul class="list-group">
    <li class="list-group-item" v-for="(item,index) in deletes" :key="'delete-' + index">
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
      deletes: computed(() => store.state.deletes)
    })
  }
})
</script>

<style lang="less" scoped>

</style>
