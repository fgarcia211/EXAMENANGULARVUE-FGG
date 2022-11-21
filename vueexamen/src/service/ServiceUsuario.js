import axios from "axios";
import Global from "@/Global";

export default class UsuarioService {

    loginUsuario(email, pass){

        return new Promise (function(resolve){
            var request = "api/Manage/Login";
            var url = Global.urlCubos + request;
            var envio = { "email":email, "password":pass }
            axios.post(url,envio).then(res => {
                resolve(res.data)
            })
        })

        
    }

    infoUsuario() {

        return new Promise (function(resolve){
            var request = "api/Manage/PerfilUsuario"
            var url = Global.urlCubos + request;

            axios.get(url,{headers:{"Authorization":"Bearer "+ localStorage.getItem("token")}}).then(res => {
                resolve(res.data)
            })
        })

    }

    infoCompras() {

        return new Promise (function(resolve){

            var request = "api/Compra/ComprasUsuario"
            var url = Global.urlCubos + request;

            axios.get(url,{headers:{"Authorization":"Bearer "+ localStorage.getItem("token")}}).then(res => {
                resolve(res.data)
            })

        })


    }

    realizaCompra(idcubo) {

        return new Promise (function(resolve){

            var request = "api/Compra/InsertarPedido/" + idcubo
            var url = Global.urlCubos + request;

            axios.post(url,{},{headers:{"Authorization":"Bearer "+ localStorage.getItem("token")}}).then(res => {
                resolve(res.data)
            })

        })

    }

    insertaUsuario(user) {

        return new Promise (function(resolve){
            var request = "api/Manage/RegistroUsuario";
            var url = Global.urlCubos + request;
            var envio = user
            axios.post(url,envio).then(res => {
                resolve(res.data)
            })
        })
        
    }
    
}