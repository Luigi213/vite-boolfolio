import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import PostList from './pages/PostList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/post',
            name: 'post',
            component: PostList
        }
    ]
});

export { router };