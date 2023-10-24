import express from 'express'
import * as inserController from '../controllers/insert'


const router = express.Router()
router.post('/', inserController.insert)
router.post('/priceAndArea', inserController.insertPriceArea)



export default router