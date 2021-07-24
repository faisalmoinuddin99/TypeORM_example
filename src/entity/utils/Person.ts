import { Column, Entity, BaseEntity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person extends BaseEntity {

    @PrimaryGeneratedColumn()
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

    @CreateDateColumn()
    create_at!: Date 
    
    @UpdateDateColumn()
    updated_at!: Date
}