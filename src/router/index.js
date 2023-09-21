import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: ()=>import('../views/layouts/Default.vue'),
            children: [
                // {
                //     path: '',
                //     name:'Home',
                //     component: ()=>import('../components/HelloWorld.vue'), 
                // },


            ]
        },  
        {
            path: '/Details/:post_id/post',
            name:'Details',
            component: ()=>import('../components/Aii/Details.vue'), 
        },
        {
            path: '/testDetail/',
            name:'testDetail',
            component: ()=>import('../components/Aii/testDetail.vue'), 
        },
        {
            path: '/All/',
            name:'All',
            component: ()=>import('../components/Aii/All.vue'), 
        },
        {
            path: '/Coo',
            name:'Coo',
            component: ()=>import('../components/Coo.vue'), 
        },
        {
            path: '/Login',
            name:'Login',
            component: ()=>import('../components/Login.vue'), 
        },
        {
            path: '/Tools',
            name:'Tools',
            component: ()=>import('../views/layouts/Tools.vue'), 
        },
        {
            path: '/Image',
            name:'Image',
            component: ()=>import('../components/ImageButton.vue'), 
        },
        {
            path: '/Team',
            name:'Team',
            component: ()=>import('../components/Team.vue'), 
        },
        {
            path: '/layout',
            name:'layout',
            component: ()=>import('../components/layout.vue'), 
        },
        {
            path: '/Signup',
            name:'Signup',
            component: ()=>import('../components/Signup.vue'), 
        },
        {
            path: '/test',
            name:'test',
            component: ()=>import('../components/test.vue'), 
        },
        {
            path: '/Linkai',
            name:'Linkai',
            component: ()=>import('../components/Linkai.vue'), 
        },
      


    ]
})
export default router