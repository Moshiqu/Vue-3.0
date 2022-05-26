import axios from "axios";

const server = axios.create({
    baseURL: 'http://localhost:9088'
})

export const getApiList = () => server.get('/api/list').then(res => res.data)