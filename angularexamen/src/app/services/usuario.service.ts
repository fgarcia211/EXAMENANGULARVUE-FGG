import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Usuario } from "../models/Usuario";

@Injectable()

export class UsuarioService {

    constructor(private _http: HttpClient){}

    loginUsuario(email: string, pass: string): Observable<any>{

        var header = new HttpHeaders().set("content-type","application/json")

        var request = "api/Manage/Login";
        var url = environment.urlCubos + request;

        var envio = JSON.stringify({ "email":email, "password":pass })

        return this._http.post(url,envio,{headers: header})
        
    }

    infoUsuario(): Observable<any> {

        var header = new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("token"))

        var request = "api/Manage/PerfilUsuario"
        var url = environment.urlCubos + request;

        return this._http.get(url, {headers: header})
    }

    infoCompras(): Observable<any> {

        var header = new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("token"))

        var request = "api/Compra/ComprasUsuario"
        var url = environment.urlCubos + request;

        return this._http.get(url, {headers: header})

    }

    realizaCompra(idcubo: number): Observable<any> {

        var header = new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("token"))
        var cubo = idcubo

        var request = "api/Compra/InsertarPedido/" + idcubo
        var url = environment.urlCubos + request;

        return this._http.post(url, {}, {headers: header})

    }

    insertaUsuario(user: Usuario): Observable<any> {

        var header = new HttpHeaders().set("content-type","application/json")

        var request = "api/Manage/RegistroUsuario";
        var url = environment.urlCubos + request;

        var envio = JSON.stringify(user);

        return this._http.post(url,envio,{headers: header})
        
    }
    
}