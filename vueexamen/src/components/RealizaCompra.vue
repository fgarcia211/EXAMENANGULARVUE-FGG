<template>
    <form class="m-5 p-5 text-center">
    <h1>Insercion de compra</h1>
    <div class="p-3">
        <label>Selecciona un cubo: </label>
        <select name="selectcubo" v-model="cubosel">
            <option v-for="cubo in cubos" :key="cubo" :value="cubo.idCubo">{{cubo.nombre}}</option>
        </select>
    </div>
    <button class="btn btn-success" @click.prevent="realizaCompra()">Realiza compra</button>
    </form>
</template>

<script>

    import ServiceUsuario from './../service/ServiceUsuario'
    const serviceU = new ServiceUsuario();
    import ServiceCubos from './../service/ServiceCubos'
    const serviceC = new ServiceCubos();

    export default {
        name: "RealizaCompra",
        data(){
            return {
                cubos: [],
                cubosel: 1
            }
        },
        methods: {
            realizaCompra(){
                serviceU.realizaCompra(this.cubosel).then(res => {
                    console.log(res);
                    this.$router.push("/detallescompra")
                })
            }
        },
        mounted(){
            serviceC.getCubos().then(res => {
                this.cubos = res
            })
        }
    }
</script>