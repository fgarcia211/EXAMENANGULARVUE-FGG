<template>
    <form class="text-center m-4" v-on:submit.prevent="sacarToken()">

        <h1>Inicia sesion:</h1>
        <div class="mt-4">
            <label>Introduce tu correo</label>
            <input type="text" name="cajaemail" v-model="email">
        </div>
        <div class="mt-4 mb-4">
            <label>Introduce tu contraseña</label>
            <input type="password" name="cajapass" v-model="password">
        </div>
        
        <button>Iniciar sesion</button>

    </form>
</template>

<script>
    import ServiceUsuario from './../service/ServiceUsuario'
    const service = new ServiceUsuario();

    export default {
        name: "ZonaLogin",
        data(){
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            sacarToken(){
                service.loginUsuario(this.email,this.password).then(res => {
                    localStorage.setItem("token",res.response);
                    this.$router.push("/");
                    /*Tienes que recargar la pagina para ver los apartados una vez logeado*/
                })
            }
        }
    }
</script>