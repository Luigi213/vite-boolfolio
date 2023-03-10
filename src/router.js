import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import PostList from './pages/PostList.vue';
import PostInfo from './pages/PostInfo.vue';
import NotFound from './pages/NotFound.vue';

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
        },
        {
            path: '/post/:titolo',
            name: 'post_info',
            component: PostInfo
        },
        {
            path: '/*',
            name: 'not_found',
            component: NotFound
        }
    ]
});

export { router };