import axios from 'axios';
import Global from '@/Global';

export default class ServiceCubos {
    
    getCubos(){
        return new Promise(function(resolve){
            var request = "api/Cubos"
            var url = Global.urlCubos + request
            axios.get(url).then(res => {
                resolve(res.data);
            })
        })
        
    }

    getMarcas(){
        return new Promise(function(resolve){
            var request = "api/Cubos/Marcas";
            var url = Global.urlCubos + request
            axios.get(url).then(res => {
                resolve(res.data);
            });
        })
        
    }

    getDetallesCubo(idcubo){
        return new Promise(function(resolve){
            var request = "api/Cubos/" + idcubo
            var url = Global.urlCubos + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        })
        
    }

    getCubosMarca(marca){
        return new Promise(function(resolve){
            var request = "api/Cubos/CubosMarca/" + marca
            var url = Global.urlCubos + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        })
        
    }

    getComentariosCubo(idcubo){
        return new Promise(function(resolve){
            var request = "api/ComentariosCubo/GetComentariosCubo/" + idcubo
            var url = Global.urlCubos + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        })
        
    }
}