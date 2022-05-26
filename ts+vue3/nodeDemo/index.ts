import express, { Express, Router, Request, Response } from 'express'
import axios from 'axios'

const app: Express = express()

const router: Router = express.Router()

app.use('/api', router)

router.get('/list',async (req: Request, res: Response) => {
    const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf')
    res.json({
        data:result.data
    })
})

app.listen(9088, () => {
    console.log('express running on 127.0.0.1:9088');
})