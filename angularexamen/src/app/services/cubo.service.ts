import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()

export class CuboService {

    constructor(private _http: HttpClient){}
    
    getCubos(): Observable<any> {
        var request = "api/Cubos"
        var url = environment.urlCubos + request
        return this._http.get(url)
    }

    getMarcas(): Observable<any> {
        var request = "api/Cubos/Marcas";
        var url = environment.urlCubos + request
        return this._http.get(url);
    }

    getDetallesCubo(idcubo: number): Observable<any> {
        var request = "api/Cubos/" + idcubo
        var url = environment.urlCubos + request;
        return this._http.get(url);
    }

    getCubosMarca(marca: string): Observable<any> {
        var request = "api/Cubos/CubosMarca/" + marca
        var url = environment.urlCubos + request;
        return this._http.get(url);
    }

    getComentariosCubo(idcubo:number): Observable<any> {
        var request = "api/ComentariosCubo/GetComentariosCubo/" + idcubo
        var url = environment.urlCubos + request;
        return this._http.get(url);
    }
}