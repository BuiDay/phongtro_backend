import * as authService from "../services/auth";

export const register = async (req, res)=>{
    const {name, phone, password} = req.body;
    try {
        if(!name || !phone || !password){
            return res.status(400).json({
                 code:1,
                 msg:"Missing input!"
             })
         }
         const response = await authService.registerService(req.body)
         return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            code:-1,
            msg:"Fail at auth controller!",
            error:error
        })
    }
    
}


export const login = async (req, res)=>{
    const {phone, password} = req.body;
    try {
        if(!phone || !password){
            return res.status(400).json({
                 code:1,
                 msg:"Missing input!"
             })
         }
         const response = await authService.loginService(req.body)
        //  if(response.err === -1 ){
        //     res.json(response)
        //  }
         return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            code:-1,
            msg:"Fail at auth controller!",
            error:error
        })
    }
    
}