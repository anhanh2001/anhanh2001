import CategoryAPI from "../api/categoryAPI";
import {$, reRender} from "../pages/utils.js";

const ListCategory = {
    async render(){
        const {data:categories} = await CategoryAPI.getAll();
        return `
            <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th>Number</th>
                <th>Name</th>
                <th><a href = "/#/addcategory" class="btn btn-success">Add New</a></th>
            </tr>
            </thead>
            <tbody>
            ${categories.map( (category,index) =>{
                    return `
                        <tr>
                            <td>${++index}</td>
                            <td>${category.name}</td>
                            <td>
                                <a href = "/#/editcategory/${category.id}" class="btn btn-primary">Update</a>
                                <button class="btn btn-danger btn-remove" data-id="${category.id}">Remove</button>
                            </td>
                        </tr>
                    `
            }).join("")}
            </tbody>
        </table>
        `;
    },
    async afterRender(){
        const btns = $('#list-category .btn');
        btns.forEach(btn=>{
            const id=btn.dataset.id;
            btn.addEventListener('click',async function(){
                if(btn.classList.contains('btn-remove')){
                    const question=confirm("Ban co muon xoa khong ?");
                    if(question){
                        await CategoryAPI.remove(id);
                        await reRender(ListCategory,'#list-category');
                    }
                }
            })
        })
    }
}
export default ListCategory;