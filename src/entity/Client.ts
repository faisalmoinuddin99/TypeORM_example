import { type } from "os"
import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('client' // -> table name
)
export class Client extends BaseEntity {
    
    @PrimaryColumn()
    id!: number 

    @Column()
    first_name!: string
    
    @Column()
    last_name!: string

    @Column({
        
        unique: true
    })
    email! : string 

    @Column({
        unique: true,
        length: 10
    })
    card_number! : string

    @Column(
        {
            type:"numeric"
        }
    )
    account_balance! : number 

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

    @Column({
        type: "simple-array",
        nullable: true,
        
    })
    countries_visited! : string

    @CreateDateColumn()
    create_at!: Date 
    
    @UpdateDateColumn()
    updated_at!: Date
}