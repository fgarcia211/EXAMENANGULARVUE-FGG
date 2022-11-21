<template>
    <div class="w-100 p-5" style="height: 600px;">
        <div class="bg-white w-100" v-if="cubo">
            <div class="w-25" style="float: left">
                <img :src="cubo.imagen" width="250px" height="250px"/>
            </div>
            <div class="w-100 bg-warning p-2" height="250px">
                <h1 class="text-center">{{cubo.nombre}}</h1>
                <h6 class="p-2">Marca: {{cubo.marca}}</h6>
                <h6 class="p-2">Modelo: {{cubo.modelo}}</h6>
                <h6 class="p-2">Color: {{cubo.color}}</h6>
                <h6 class="p-2">Precio: {{cubo.precio}}€</h6>
            </div>
        </div>
        <div class="p-5 mt-5 bg-white" v-if="comentarios">
            <div class="w-100" v-for="comentario in comentarios" :key="comentario">
                <h4>Id-Usuario: {{comentario.idUsuario}}</h4>
                <h4>Fecha: {{comentario.fechaComentario}}</h4>
                <h4>Comentario: {{comentario.comentario}}</h4>
            </div>
        </div>
    </div>
</template>

<script>

    import ServiceCubos from './../service/ServiceCubos';
    const service = new ServiceCubos();

    export default {
        name: "DetallesCubo",
        data(){
            return {
                comentarios: [],
                cubo: {}
            }
        },
        mounted(){
            if (this.$route.params.id != undefined){
                service.getDetallesCubo(this.$route.params.id).then(res => {
                    this.cubo = res
                    service.getComentariosCubo(this.$route.params.id).then(res => {
                        this.comentarios = res
                        console.log(this.cubo)
                    })
                })
            }
        }
    }
</script>