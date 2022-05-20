import { createApp } from 'vue'
import App from './App.vue'
import {createWebHistory, createRouter} from 'vue-router'
import './index.css'
import Home from './views/Home.vue'
import Resume from './views/Resume.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "Home",
            component: Home
        },
        {
            path: '/resume',
            name: "Resume",
            component: Resume
        },

    ]
})

createApp(App).use(router).mount('#app')
