import { Request, Response } from 'express';
import Bcrypt from "bcryptjs";

import UserSchema from '../models/User'; 

export default {

     // Listar : Index
     async index(req: Request, res: Response){
         const users = await UserSchema.find();
        return res.json(users);
    },

    // Buscar : show
    
    // Cadastro : strore
    async store(req: Request, res: Response){
        req.body.password = Bcrypt.hashSync(req.body.password, 10);
        const user = await UserSchema.create(req.body);
      
        return res.json(user);
    },

    // Atualizar : update
     
    // Excluir : destroy
    async destroy(req: Request, res: Response){
        let User = new UserSchema();
        User._id =  req.query.id;
        const user = await UserSchema.findOneAndRemove(User._id);
        return res.send();
    }
    
    

};