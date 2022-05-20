import { createApp } from 'vue'
import App from './App.vue'
import {createWebHistory, createRouter} from 'vue-router'
import './index.css'
import Home from './views/Home.vue'
import Resume from './views/Resume.vue'
import Contact from './views/Contact.vue'

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
        {
            path: '/contact',
            name: "Contact",
            component: Contact
        }
    ]
})

createApp(App).use(router).mount('#app')
