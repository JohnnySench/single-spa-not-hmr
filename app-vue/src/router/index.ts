import { createRouter, createWebHistory } from 'vue-router'

const router = (basePath: string) => createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: `${basePath}`,
            component: () => import("@/layouts/mainLayout.vue"),
            redirect: `${basePath}/foo`,
            children: [
                {
                    path: `${basePath}/foo`,
                    name: "foo",
                    component: () => import("@/views/FooView.vue"),
                },
                {
                    path: `${basePath}/bar`,
                    name: "bar",
                    component: () => import("@/views/BarView.vue"),
                }
            ],

        }
    ],
})

export default router
