<template>
    <div class="p-5">
    <div v-if="usuario" class="w-50 bg-white border border-dark" style="margin-left: 25%;">
        <h3 class="p-3 text-danger">Nombre de usuario: {{usuario.nombre}}</h3>
        <h3 class="p-3 text-primary">Email: {{usuario.email}}</h3>
    </div>
</div>

</template>

<script>

    import ServiceUsuario from './../service/ServiceUsuario'
    const service = new ServiceUsuario();

    export default {
        name: "DatosUsuario",
        data(){
            return {
                usuario: {}
            }
        },
        mounted(){
            service.infoUsuario().then(res => {
                this.usuario = res
            })
        }
    }
</script>