
import { Entity, Column, OneToMany, ManyToMany, Double } from "typeorm"
import { Person } from "./utils/Person"
import {Transaction} from "./Transaction"
import { Banker } from "./Banker"

@Entity('client' // -> table name
)
export class Client extends Person {
    
   @Column({
       type: "numeric"
   })
   balance!: number

    @Column({
        type: "boolean",
        default: true,
        name: "active"
    })
    is_active! : boolean 

    @Column({
        type: "simple-json",
        nullable: true
    })
    additional_info! : {
        age : number,
        father_name : string,
        mother_name: string
    }

    @OneToMany(
        ()=> Transaction,
        transaction => transaction.client
    )
    transactions!: Transaction[]

    @ManyToMany(
        () => Banker
    )
    bankers!: Banker
    @Column({
        type: "simple-array",
        nullable: true,
        
    })
    countries_visited! : string

    
}