import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reconhecimento {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    from: string;
    @Column()
    to: string;
    @Column()
    message: string;
    @Column() 
    coins: number; 
}