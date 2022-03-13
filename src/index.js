import HomePage from './pages/HomePage.js';
import ProductsPage from './pages/ProductsPage.js';
import ProductDetail from './pages/ProductDetail.js';
import Error404Page from './pages/Error404Page.js';
import { parseRequestUrl , $ } from './pages/utils.js';
import Header from './components/Header.js';
import CategoryPage from './pages/CategoryPage.js';
import ProductAddPage from './pages/ProductAddPage';
import CategoryAddPage from './pages/CategoryAddPage';
import AdminProductPage from './pages/AdminProductPage';
import ProductEditPage from './pages/ProductEditPage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';
import AdminCategoryPage from './pages/AdminCategoryPage.js'
import CategoryEditPage from './pages/CategoryEditPage.js';



const routes={
    '/':HomePage,
    '/products':ProductsPage,
    '/products/:id':ProductDetail,
    '/category/:id':CategoryPage,
    '/addproduct':ProductAddPage,
    '/listproduct':AdminProductPage,
    '/editproduct/:id':ProductEditPage,
    '/listcategory':AdminCategoryPage,
    '/editcategory/:id':CategoryEditPage,
    '/addcategory':CategoryAddPage,
    '/about':AboutPage,
    '/contact':ContactPage
}
const router = async () =>{
    const {resource,id} = parseRequestUrl();
    const parseUrl = ( resource ? `/${resource}` : '/') + (id ? `/:id` : '');
    const page=routes[parseUrl] ? routes[parseUrl] : Error404Page;
    //console.log(page);
    $('#header').innerHTML=await Header.render();
    $('#main-content').innerHTML=await page.render();
    await page.afterRender();
}


window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange',router);
