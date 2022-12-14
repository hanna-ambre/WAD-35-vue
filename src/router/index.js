import { createRouter, createWebHashHistory } from 'vue-router'
import mainView from '../../../WAD-35-vue/src/views/mainView.vue'
import signupView from '../../../WAD-35-vue/src/views/signupView.vue'
import loginView from '../../../WAD-35-vue/src/views/loginView.vue'
import newPostView from '../../../WAD-35-vue/src/views/newPost.vue'
import contactUsView from '../../../WAD-35-vue/src/views/contactUs.vue'
import editPost from '../../../WAD-35-vue/src/views/editPost.vue'
import auth from "../auth";

const routes = [{
    path: '/',
    name: 'main',
    component: mainView,
    beforeEnter: async(to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login')
        } else {
            next();
        }
    }
    },

    {
        path: '/signup',
        name: 'signup',
        component: signupView
    },
    {
        path: '/login',
        name: 'login',
        component: loginView
    },
    {
        path: '/newPost',
        name: 'newPost',
        component: newPostView
    },
    {
        path: "/editPost/:id",
        name: "editPost",
        component: editPost,
    },
    {
        path: "/all/posts",
        name: "editPost",
        component: editPost,
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