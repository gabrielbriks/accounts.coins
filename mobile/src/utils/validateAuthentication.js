import React from "react";
import { AsyncStorage } from "react-native";


export default function validateAutentication() {
    const isAutenticated = AsyncStorage.getItem("@UserData:id"); 
    let msg = {error: null, sucess: false};

    if(isAutenticated.length == 0 ) {
       msg = {
           error: "Houve um problema com a sua conexão, realize o login novamente!",
           sucess: false
        }
        return msg;
    }

    return msg = { 
        error: null,
        sucess : true
    };

}