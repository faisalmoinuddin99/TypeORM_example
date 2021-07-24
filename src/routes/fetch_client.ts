import express from "express"
import { Client } from "../entity/Client"

const router = express.Router()

router.get('/api/client', async(req,res) => {
    
    const client = await Client.find()
    const metadata = {
        total_count : client.length
    }

    return res.json({_metadata: metadata, records: client})
})


export  {
    router as fetchClientRouter
}