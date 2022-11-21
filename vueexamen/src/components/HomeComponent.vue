<template>
    <div>
        <div class="p-5" style="height: 3000px">
            <div @click="detallesCubo(cubo.idCubo)" v-for="cubo in cubos" :key="cubo" style="width: 25%;margin-left: 5%; margin-top: 5%;height: 400px; float: left" class="bg-white border border-dark">
                <img :src="cubo.imagen" class="w-100" style="height:300px"/>
                <h4 style="color: blue" class="text-center p-2">{{cubo.nombre}}</h4>
                <h4 style="color: blue" class="text-center p-2">{{cubo.precio}}€</h4>
            </div>
        </div>
    </div>
</template>

<script>

    import ServiceCubos from './../service/ServiceCubos';
    const service = new ServiceCubos();

    export default {
        name: "HomeComponent",
        data(){
            return {
                cubos: []
            }
        },
        mounted(){
            if (this.$route.params.marca == undefined){
                service.getCubos().then(res => {
                    this.cubos = res
                })
            }else{
                service.getCubosMarca(this.$route.params.marca).then(res => {
                    this.cubos = res
                })
            }
            
        },
        methods: {
            detallesCubo(idcubo){
                this.$router.push("/cubo/" + idcubo)
            }
        }
    }

</script>