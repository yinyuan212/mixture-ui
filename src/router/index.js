import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProduct from '../views/product/AddProduct.vue'
import Product from '../views/product/Product.vue'
import ProductDetail from '../views/product/ProductDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin/product/add',
    name: 'addProduct',
    component: AddProduct
  },
  {
    path: '/product/',
    name: 'product',
    component: Product
  },
  {
    path: '/product/detail/:id',
    name: 'productDetail',
    component: ProductDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
