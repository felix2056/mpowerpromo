/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

import loading from './components/layouts/loading.vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('./components/Index.vue')
        },
        {
            path: '/ads',
            name: 'ads',
            component: () => import('./components/ProductAds.vue')
        },
        {
            path: '/application',
            name: 'application',
            component: () => import('./components/Application.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./components/Contact.vue')
        },
        {
            path: '/champions',
            name: 'champions',
            component: () => import('./components/Champions.vue')
        },
        {
            path: '/integrations',
            name: 'integrations',
            component: () => import('./components/Integrations.vue')
        },
        {
            path: '/pod',
            name: 'pod',
            component: () => import('./components/POD.vue')
        },
        {
            path: '/pricing',
            name: 'pricing',
            component: () => import('./components/Pricing.vue')
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: () => import('./components/Privacy.vue')
        },
        {
            path: '/solutions',
            name: 'solutions',
            component: () => import('./components/Solutions.vue')   
        },
        {
            path: '/stores',
            name: 'stores',
            component: () => import('./components/Stores.vue')
        },
        {
            path: '/storeexamples',
            name: 'storeexamples',
            component: () => import('./components/StoreExamples.vue')
        },
        {
            path: '/suppliers',
            name: 'suppliers',
            component: () => import('./components/Suppliers.vue')
        },
        {
            path: '/terms',
            name: 'terms',
            component: () => import('./components/Terms.vue')
        }
        // Add more routes here
    ],
    scrollBehavior (to, from, savedPosition) {
        return { top: 0 }
    }
});

app.use(router);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('loading', loading);

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
