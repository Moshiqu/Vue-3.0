<template>
  <div class="container">
    <h1>ToDo List</h1>
    <ul class="list-group">
      <template v-for="(item, index) in state.lists">
        <li
          class="list-group-item"
          :key="'lists-' + index"
          @click="changeCheckedStatus(index)"
          v-if="!item.isChecked"
        >
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="item.isChecked"
              :id="'item-' + index"
            />
            <label :for="'item-' + index" class="form-check-label">
              {{ item.name }}
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
        @click="changeCheckedStatus(index)"
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
          name: "1",
          isChecked: false,
          isEdit: false,
        },
        {
          name: "2",
          isChecked: false,
          isEdit: false,
        },
        {
          name: "3",
          isChecked: false,
          isEdit: false,
        },
      ],
      finished: computed(() =>
        state.lists.filter((item) => item.isChecked == true)
      ),
    });

    const changeCheckedStatus = (index) => {
      state.lists[index].isChecked = !state.lists[index].isChecked;
    };

    return { state, changeCheckedStatus };
  },
};
</script>
