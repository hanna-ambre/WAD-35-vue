import { createRouter, createWebHashHistory } from 'vue-router'
import mainView from '../../../WAD-35-vue/src/views/mainView.vue'
import signupView from '../../../WAD-35-vue/src/views/signupView.vue'

const routes = [{
    path: '/',
    name: 'main',
    component: mainView
    },
    {
        path: '/signup',
        name: 'signup',
        component: signupView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router