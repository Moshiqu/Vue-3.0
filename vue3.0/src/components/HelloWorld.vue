<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="state.num1" @keyup="add"/>
    +
    <input type="text" v-model="state.num2" @keyup="add" />
    =
    <span>{{ state.result }}</span>
    <input type="button" value="ClickEvent" @click="clickEvent">
  </div>
</template>

<script>
import { reactive, computed, onMounted, onUpdated, onUnmounted, onRenderTracked } from "vue";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props, { emit }) {

    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
    onRenderTracked((e) => {
      console.log(e);
    })

    const state = reactive({
      num1: 0,
      num2: 0,
      result: computed(()=> parseInt( state.num1 ) + parseInt( state.num2 ))
    })

    const clickEvent = () => {
      emit('sendMsg', state.result)
    }

    return {
      state,
      clickEvent
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
