import { type } from "os"
import { Entity, Column, ManyToMany, JoinColumn, JoinTable } from "typeorm"
import { Client } from "./Client"
import { Person } from "./utils/Person"

@Entity('banker' // -> table name
)
export class Banker extends Person {
    
   
    @Column({
        unique: true,
        length: 10
    })
    employee_number! : string

    @ManyToMany(
        () => Client
    )
    @JoinTable({
        name:"bankers_clients",
        joinColumn:{
            name: "banker",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "client",
            referencedColumnName: "id"
        }
    })
    clients!: Client[]

    

}