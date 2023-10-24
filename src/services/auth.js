import db from "../models"
import bcrypt from 'bcrypt'
import generateToken from '../utils/jwtToken'
import jwt from 'jsonwebtoken'
import {v4} from 'uuid'


const newPassword = (password) => bcrypt.hashSync(password,bcrypt.genSaltSync(10))

export const registerService = ({phone,name,password}) => new Promise(async (resolve, reject)=>{
    
    try {
        const response = await db.User.findOrCreate({
            where:{phone},
            defaults:{
                phone,
                name,
                password:newPassword(password),
                id: v4(),
            }
        })
        const token =response[1] && jwt.sign({id:response[0].id,phone:response[0].phone},process.env.JWT_KEY,{ expiresIn: '1d' })
        resolve({
            err:token ? 1 : -1,
            msg: token ? "Register is successfull" : "Phone number has been already used!",
            token: token || null
        })
    } catch (error) {
         reject(error)   
    }
}) 

export const loginService = ({phone,password}) => new Promise(async (resolve, reject)=>{
    
    try {
        const response = await db.User.findOne({
            where:{phone},
            raw:true,
        })
        const isCorrectPassword = response && bcrypt.compareSync(password,response.password)
        const token =isCorrectPassword && jwt.sign({id:response.id,phone:response.phone},process.env.JWT_KEY,{ expiresIn: '1d' })
        resolve({
            err:token ? 1 : -1,
            msg: token ? "Login is successfull" : response ? "Password is wrong!" : "Phone number is not found!",
            token: token || null
        })
    } catch (error) {
         reject(error)   
    }
}) 