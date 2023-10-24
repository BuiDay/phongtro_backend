import jwt from 'jsonwebtoken'

export const generateToken = (id,phone) =>{
    return jwt.sign({id:id,phone:phone},process.env.JWT_KEY,{ expiresIn: '1d' })
}

