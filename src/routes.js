import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path:"",
        redirect:"/login"
    },
    {
        path: '/login',
        name: 'login',
        component: ()=>import("./components/LoginPage.vue")
    },
    {
        path: "/blogs",
        name: "blogs",
        component: ()=>import("./components/BlogsComponent.vue")
    },
    {
        path: "/blogs/:id",
        component: ()=> import("./components/BlogDetail.vue")
    },
    {
        path: "/account",
        component: ()=>import("./components/AccountComponent.vue")
    },
    {
        path: "/my-blogs",
        component: ()=>import("./components/MyBlogs.vue")
    },
    {
        path: "/my-blogs/:id",
        component: ()=>import("./components/BlogDetail.vue")
    },
    {
        path:"/:catchAll(.*)",
        component:()=>import("./components/NotFound.vue")
    },
    {
        path:"/home",
        component:()=>import("./components/HomeComponent.vue")
    },
    {
        path:"/logout",
        redirect:"login"
    }
  
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
