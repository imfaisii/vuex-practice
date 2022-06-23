const { createRouter, createWebHistory } = require("vue-router");

const routes = [
    {
        path: "/",
        name: "products",
        component: () => import ('../views/Products/Index.vue')
    },
    {
        path: "/counter",
        name: "counter",
        component: () => import ('../views/Counter/Index.vue')
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
