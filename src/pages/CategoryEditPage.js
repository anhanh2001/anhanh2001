import CategoryAPI from '../api/categoryAPI.js';
import { parseRequestUrl,$ } from './utils.js';
const CategoryEditPage={
    async render(){
        const {id}=parseRequestUrl();
        const {data:category}=await CategoryAPI.get(id);
        return `
        <form id="form-update-category">
            <div class="mb-3">
                <label for="category-name" class="form-label">Category name</label>
                <input type="text" value="${category.name}" class="form-control" id="category-name" aria-describedby="emailHelp">            </div>
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
        </form>
        `
    },
    async afterRender(){
        var a=document.getElementById("category-name");
        const {id}=parseRequestUrl();
        const {data:category}=await CategoryAPI.get(id);

        $('#form-update-category').addEventListener('submit',e=>{
            e.preventDefault();
            if(a.value==""){
                a.focus();
                a.placeholder="Bạn cần nhập tên danh mục";
                return false;
            }
            else{        const newCategory = {
                        ...category,
                        name: $('#category-name').value,
                    };
                    //console.log(product);
                    CategoryAPI.update(id,newCategory);
                    alert("Update danh mục thành công");
                    window.location.hash='/listcategory';}
                })

    }
}
export default CategoryEditPage;