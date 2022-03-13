import CategoryAPI from '../api/categoryAPI.js';
import { $,reRender } from './utils.js';
import firebase from '../firebase';

const CategoryAddPage={
    async render(){
        const {data:categories}=await CategoryAPI.getAll();
        return `
            <form id="form-add">
                <div class="form-group">
                    <label for"product-name">Category name</label>
                    <input type="text" id="category-name" class="form-control">
                </div>
                <div class="form-group">
                    <input class="btn btn-primary" type="submit" value="Add Category">
                </div>
            </form>
        `;
    },
    afterRender(){
        var a=document.getElementById("category-name");
        $('#form-add').addEventListener('submit',e=>{
            e.preventDefault();
                if(a.value==""){
                    a.focus();
                    a.placeholder="Bạn cần nhập tên danh mục";
                    return false;
                }
                else{    const product = {
                        id: Math.random().toString(36).substr(2, 9),
                        name: $('#category-name').value,
                    };
                    //console.log(product);
                    CategoryAPI.add(product);
                    window.location.hash='/listcategory'}
            })

        //reRender(ListProduct,'#list-products');
        // $('#form-add').addEventListener('submit' ,e=>{
        //     e.preventDefault();
        //     const product={
        //         id:100,
        //         name:$('#product-name').value
        //     }
        //     ProductAPI.add(product);
        // })
    }
}
export default CategoryAddPage;