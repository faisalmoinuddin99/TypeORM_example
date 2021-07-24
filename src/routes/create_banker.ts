import express from "express"
import { Banker } from "../entity/Banker";

const router = express.Router()

router.post('/api/banker',async(req,res) => {

    const { 
        firstName,
        lastName,
        email,
        cardNumber,
        employeeNumber
    } = req.body

    const banker = Banker.create({
        first_name: firstName,
        last_name : lastName,
        email,
        card_number: cardNumber,
        employee_number: employeeNumber
        
    })
    try {
        await banker.save()
        return res.json(banker)
    } catch (error) {
        console.log('Catch an error: ', error)
    }
})

export {
    router as createBankerRouter
}