import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import DetallesCubo from './components/DetallesCubo.vue';
import ZonaLogin from './components/ZonaLogin.vue';
import DatosUsuario from './components/DatosUsuario.vue';
import DetallesCompra from './components/DetallesCompra.vue';
import RealizaCompra from './components/RealizaCompra.vue';
import CreaUsuario from './components/CreaUsuario.vue';

const misRutas = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/:marca", component: HomeComponent
    },
    {
        path: "/cubo/:id?", component: DetallesCubo
    },
    {
        path: "/login", component: ZonaLogin
    },
    {
        path: "/datosusuario", component: DatosUsuario
    },
    {
        path: "/detallescompra", component: DetallesCompra
    },
    {
        path: "/realizacompra", component: RealizaCompra
    },
    {
        path: "/register", component: CreaUsuario
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: misRutas
});

export default router;