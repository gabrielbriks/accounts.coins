import { Request, Response } from 'express';
import Bcrypt from 'bcryptjs';

import UserSchema from '../models/User';

export default {

    async signin(req:Request, res:Response){
        
        const { login, password } = req.body;
        
        const userLogin = await UserSchema.findOne({ login });
        
        if(!userLogin)
            return res.json({error:"Usuário inválido!"});   
        
        if(!Bcrypt.compareSync(password, userLogin.password))
            return res.json({error:"Senha inválida!"});
        
        return res.json(userLogin); 
            
    },

    async signout(req: Request, res: Response){
        //Delete session 
        //Redireciona user para tela login
        const destroySessions = await {"DESTROY": "SESSION DESTROYED"};
        return res.json(destroySessions);
    }


};