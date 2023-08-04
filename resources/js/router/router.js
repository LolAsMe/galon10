import { createRouter, createWebHashHistory } from 'vue-router';
// 1. Define route components.
// These can be imported from other files
const Home = { template: '<div>Home231</div>' }
const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/',name:'home', component: () => import('@/pages/home.vue') },
  { path: '/about',name:'about', component: () => import('@/pages/about.vue') },
  { path: '/dashboard',name:'dashboard', component: () => import('@/pages/dashboard.vue') },
  { path: '/contact',name:'contact', component: () => import('@/pages/contact.vue') },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router
