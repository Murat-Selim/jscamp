import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import Customer from "../models/customer.js"
import UserService from "../services/userService.js"

console.log("User component yuklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Engin","Demirog","Ankara")
let user2 = new User(2,"Baran","Gokcekli","Mugla")

userService.add(user1)
userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))


console.log("----------------------")
userService.load()
userService.add(new Customer(1,"Seda","Yilmaz","Ankara","fhgfghfgf"))
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())




