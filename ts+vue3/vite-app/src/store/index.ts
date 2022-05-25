import { defineStore } from "pinia";
import { Names } from './store-name'

export const useTestStore = defineStore(Names.TEST,{
    state:()=>{
        return {
            current:1,
            name:'啊手动阀'
        }
    },
    // computed 修饰一些值
    getters:{

    },
    // methods 同步 异步 都可以处理, 提交state
    actions:{

    }
})