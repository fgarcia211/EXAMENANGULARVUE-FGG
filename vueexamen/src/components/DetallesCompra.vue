<template>
    <div class="w-100 p-5" style="height: 600px;">
    <div class="p-5 bg-white" v-if="compras">
        <div class="w-100 p-5 mt-5 border border-dark" v-for="compra in compras" :key="compra">
            <h4>ID de cubo comprado: {{compra.idCubo}}</h4>
            <h4>ID del pedido: {{compra.idPedido}}</h4>
            <h4>Fecha de compra: {{compra.fechaPedido}}</h4>
        </div>
    </div>
</div>

</template>

<script>

    import ServiceUsuario from './../service/ServiceUsuario'
    const service = new ServiceUsuario();

    export default {
        name: "DetallesCompra",
        data(){
            return {
                compras: []
            }
        },
        mounted(){
            service.infoCompras().then(res => {
                this.compras = res
            })
        }
    }
</script>