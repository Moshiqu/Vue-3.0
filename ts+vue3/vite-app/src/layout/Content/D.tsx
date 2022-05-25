import { ref } from "vue"

const title = ref('')

const renderDom = ()=>{
    return (
        <div>
            <input type="text" v-model={title.value} />
            <div>{title.value}</div>
        </div>
    )
}

export default renderDom