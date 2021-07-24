import express from "express"
import { Client } from "../entity/Client"
import { Transaction,TransactionTypes } from "../entity/Transaction"


const router = express.Router()

router.post('/api/client/:clientId/transaction',async(req,res) => {
    const { clientId } = req.params
    
    const { type,amount } = req.body

    const client = await Client.findOne(parseInt(clientId))

    if(!client){
        return res.json({
            msg: "No client found..."
        })
    }

    const transaction = Transaction.create({
        type,
        amount,
        client
    })
    await transaction.save()

    if(type === TransactionTypes.DEPOSIT ){
        
        client.balance = amount + Number(client.balance) 

    }else if(type === TransactionTypes.WITHDRAW){
        client.balance = client.balance - amount 
    }
    await client.save()

    return res.json({
        msg: "transaction completed..."
    })
})

export  {
    router as createTransactionRouter
}