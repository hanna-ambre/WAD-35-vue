import { createRouter, createWebHashHistory } from 'vue-router'
import mainView from '../../../WAD-35-vue/src/views/mainView.vue'
import signupView from '../../../WAD-35-vue/src/views/signupView.vue'
import newPostView from '../../../WAD-35-vue/src/views/newPost.vue'
import contactUsView from '../../../WAD-35-vue/src/views/contactUs.vue'

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
    {
        path: '/newPost',
        name: 'newPost',
        component: newPostView
    },
    {
        path: '/contactUs',
        name: 'contactUs',
        component: contactUsView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router