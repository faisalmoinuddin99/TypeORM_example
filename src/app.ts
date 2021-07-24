require("dotenv").config();
import { createConnection } from "typeorm"
import { Banker } from "./entity/Banker";
import { Client } from "./entity/Client";
import { Transaction } from "./entity/Transaction"
import express from "express"
import { createClientRouter } from "./routes/create_client";
import bodyParser from "body-parser";
import { createBankerRouter } from "./routes/create_banker";
import { fetchClientRouter } from "./routes/fetch_client";
import { createTransactionRouter } from "./routes/create_transaction";
import { connectBankerToClientRouter } from "./routes/connect_banker_to_clinet";


const app = express()
const port = process.env.PORT || 8080

const db_mysql:any = process.env.DB_TYPE
const db_host: any = process.env.DB_HOST
const db_username: any = process.env.DB_USERNAME
const db_port: any = process.env.DB_PORT
const converted_dbPort = Number(db_port)
const db_password: any = process.env.DB_password
const db_database: any = process.env.DB_DATABASE



const main = async () => {
    
    
    try {
       await createConnection({
        type: db_mysql,
        host: db_host,
        port: converted_dbPort,
        username: db_username,
        password: db_password,
        database: db_database,
        entities:[Client,Banker, Transaction],
        synchronize: true
    })
    console.log("connected to mysql database successfully...");
    
    app.use((req,res,next) => {
        res.header("Access-Control-Allow-Origin", "*")
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        res.header('Access-control-Allow-Methods','GET,PUT,PATCH,POST,DELETE,OPTIONS')
        next()
    })
    app.use(bodyParser.json())
    app.use(createClientRouter,createBankerRouter)
    app.use(fetchClientRouter)
    app.use(createTransactionRouter)
    app.use(connectBankerToClientRouter)

    app.listen(port,()=>{
        console.log(`server is running at ${port}...`);
        
    })
        
    } catch (error) {
        console.log(error);
        throw new Error("Unable to connect to db");
        
        
    }
}

main()