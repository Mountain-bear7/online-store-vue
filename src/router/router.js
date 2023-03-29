import {createWebHistory, createRouter} from "vue-router";

import mainPage from "@/pages/mainPage.vue";
import CartBlock from "@/components/cart/Cart-block.vue";


const routes = [
    {
        path: "/",
        name: "mainPage",
        component: mainPage,
    },
    {
        path: "/cart",
        name: "cart",
        component: CartBlock,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router

