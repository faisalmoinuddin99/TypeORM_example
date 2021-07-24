import express from "express"
import { Client } from "../entity/Client"
import { Banker } from "../entity/Banker"

const router = express.Router()

router.put("/api/banker/:bankerId/client/:clientId",async(req,res) => {
    const { bankerId, clientId } = req.params

    const client = await Client.findOne(parseInt(clientId))
    const banker = await Banker.findOne(parseInt(bankerId))

    if(!banker || !client) {
        return res.json({
            msg: "Client or Banker not present!"
        })
    } else {
        banker.clients = [
            
            client
        ]
        await banker.save()

        return res.json({
            msg: "Banker connected to client"
        })
    }
})


export {
    router as connectBankerToClientRouter
}