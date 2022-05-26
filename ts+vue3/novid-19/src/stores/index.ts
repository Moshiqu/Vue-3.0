import { defineStore } from 'pinia'
import { getApiList } from '../server'
import type { Children, RootObject } from './type' 

export const useStore = defineStore({
    id: 'counter',
    state: () => ({
        list:<RootObject> {},
        item:<Children[]>{}
    }),
    getters: {
    },
    actions: {
        async getList() {
            const result = await getApiList()
            this.list = result
        }
    }
})
