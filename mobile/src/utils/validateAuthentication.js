import React from "react";
import { AsyncStorage } from "react-native";


export default function validateAutentication() {
    const isAutenticated = AsyncStorage.getItem("@LogonUser"); 
    
    if(isAutenticated.length != 0 ) {
       const msg = {
           error: "Houve um problema com a sua conexão, realize o login novamente!"
        }
        return msg;
    }

    return msg = { sucess : true };

}