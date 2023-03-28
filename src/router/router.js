import {createWebHistory, createRouter} from "vue-router";

import CatalogBlock from "@/components/catalog/Catalog-block.vue";
import CartBlock from "@/components/Header/cart/Cart-block.vue";

// let router = createRouter({
//     routes:[
//         {
//             path: '/',
//             name: 'catalog',
//             component: CatalogBlock
//         },
//         {
//             path: '/cart',
//             name: 'cart',
//             component: CartBlock,
//             props: true
//         }
//     ]
// })
//
// const router = createRouter({
//     history: createWebHistory(),
//     routes,
// });
const routes = [
    {
        path: "/",
        name: "catalog",
        component: CatalogBlock,
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

