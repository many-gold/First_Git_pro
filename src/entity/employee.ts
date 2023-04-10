import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity ()
export class employee {

    @PrimaryGeneratedColumn ()
    idEmployee: number

    @Column ()
    Employee_F_Name : String

    @Column ()
    Employee_L_Name: String

    @Column ()
    Employee_Id: number
}