import { createConnection } from "typeorm"
import { Client } from "./entity/Client";

const main = async () => {
    try {
       await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "8692927930",
        database: "social_network",
        entities:[Client],
        synchronize: true
    })
    console.log("connected to mysql database successfully...");
    
    } catch (error) {
        console.log(error);
        throw new Error("Unable to connect to db");
        
        
    }
}

main()