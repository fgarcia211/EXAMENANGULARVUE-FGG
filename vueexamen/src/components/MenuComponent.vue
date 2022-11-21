<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand bg-dark p-3 text-white" href="#">API Compras</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/" class="nav-link active">Home</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Marcas
                    </a>
                    <ul class="dropdown-menu">
                        <!--Aqui el ngfor-->
                        <li v-for="marca in marcas" :key="marca"><router-link :to="'/'+marca" class="dropdown-item">{{marca}}</router-link></li>
                    </ul>
                </li>
                <li class="nav-item" v-if="!logeado">
                    <router-link to="/login" class="nav-link active">Login</router-link>
                </li>
                <li class="nav-item" v-if="!logeado">
                    <router-link to="/register" class="nav-link active">Registrate</router-link>
                </li>
                <li class="nav-item" v-if="logeado">
                    <router-link to="/datosusuario" class="nav-link active">Perfil</router-link>
                </li>
                <li class="nav-item" v-if="logeado">
                    <router-link to="/detallescompra" class="nav-link active">Mis compras</router-link>
                </li>
                <li class="nav-item" v-if="logeado">
                    <router-link to="/realizacompra" class="nav-link active">Realiza compra</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </div>
</template>

<script>

    import ServiceCubos from './../service/ServiceCubos';
    const service = new ServiceCubos();

    export default {

        name:"MenuComponent",
        data(){
            return {
                marcas: [],
                logeado: false
            }
        },
        mounted(){
            service.getMarcas().then(res => {
                /* localStorage.clear() */
                this.marcas = res
                if (localStorage.getItem("token") != null) {
                    this.logeado = true;
                }
            })
        },
        
    }
</script>