<template>
  <div class="container">
    <h1>ToDo List</h1>
    <ul class="list-group">
      <template v-for="(item, index) in state.lists">
        <li
          class="list-group-item"
          :key="'lists-' + index"
          v-if="!item.isChecked"
        >
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="item.isChecked"
              :id="'item-' + index"
              @click="changeCheckedStatus(index)"
            />
            <label
              class="form-check-label"
              v-if="!item.isEdit"
              @dblclick="showEditInput(index)"
            >
              {{ item.name }}
            </label>
            <label :for="'item-' + index" class="form-check-label" v-else>
              <input type="text" class="form-control" ref='editInputRef' v-model="state.editValue" @blur="editInputBlur(index)"/>
            </label>
          </div>
        </li>
      </template>
    </ul>
    <h2>已完成列表</h2>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in state.finished"
        :key="'finished-' + index"
      >
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input"
            v-model="item.isChecked"
            :id="'finished-' + index"
            disabled
          />
          <label :for="'finished-' + index" class="form-check-label">
            {{ item.name }}
          </label>
        </div>
      </li>
    </ul>
    <h1>添加新的Task</h1>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placehodler="添加新的Task"
        v-model.trim="state.addValue"
        @keyup.enter="add"
      />
      <input
        type="button"
        value="添加"
        @click="add"
        class="btn btn-primary btn-lg btn-block"
        :disabled="!state.addValue"
      />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "Home",
  setup(props) {
    const state = reactive({
      lists: [
        {
          name: "是否阿桑的歌肉体和就的风格和是否会",
          isChecked: false,
          isEdit: false,
        },
        {
          name: "阿斯蒂芬请问图为引入儿童语重心长v",
          isChecked: false,
          isEdit: false,
        },
        {
          name: "是否会如有屁ui右腿图",
          isChecked: false,
          isEdit: false,
        },
      ],
      finished: computed(() =>
        state.lists.filter((item) => item.isChecked == true)
      ),
      addValue: "",
      editValue: ""
    });

    const add = () => {
      state.lists.push({
        name: state.addValue,
        isChecked: false,
        isEdit: false,
      });
      state.addValue = "";
    };

    const showEditInput = (index) => {
      state.lists[index].isEdit = !state.lists[index].isEdit;
      state.editValue = state.lists[index].name
    };

    const editInputBlur = (index)=>{
      state.lists[index].isEdit = !state.lists[index].isEdit;    
    }

    const changeCheckedStatus = (index) => {
      state.lists[index].isChecked = !state.lists[index].isChecked;
    };

    return { state, changeCheckedStatus, add, showEditInput, editInputBlur };
  },
};
</script>
