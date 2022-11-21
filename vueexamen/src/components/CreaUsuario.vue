<template>
    <form @submit.prevent="enviaForm()" class="text-center m-4">

    <h1>Crea usuario:</h1>
    <div class="mt-4">
        <label>Introduce tu nombre</label>
        <input type="text" name="cajanombre" v-model="nombre" required>
    </div>
    <div class="mt-4">
        <label>Introduce tu correo</label>
        <input type="text" name="cajaemail" v-model="email" required>
    </div>
    <div class="mt-4 mb-4">
        <label>Introduce tu contraseña</label>
        <input type="password" name="cajapass" v-model="pass" required>
    </div>
    <div class="mt-4 mb-4">
        <label>Repite tu contraseña</label>
        <input type="password" name="cajapass2" v-model="pass2" required>
    </div>
    
    <button>Crea usuario</button>

    </form>

</template>

<script>
    import ServiceUsuario from './../service/ServiceUsuario'
    const service = new ServiceUsuario();

    export default {
        name: "CreaUsuario",
        data(){
            return {
                nombre: "",
                email: "",
                pass:"",
                pass2: ""
            }        
        },
        methods: {
            enviaForm(){
                if (this.pass == this.pass2){
                    var objeto = { "idUsuario":0 , "nombre":this.nombre, "email":this.email, "pass":this.pass}
                    service.insertaUsuario(objeto).then(res => {
                        console.log(res)
                        this.$router.push("/login")
                    })
                }else{
                    alert("No coinciden las contraseñas")
                }
                
            }
        }
    }
</script>