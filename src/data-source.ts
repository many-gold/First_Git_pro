import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { employee } from  "./entity/employee"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "many@gold",
    database: "example",
    synchronize: true,
    logging: false,
    entities: [User, employee],
    migrations: [],
    subscribers: [],
})
