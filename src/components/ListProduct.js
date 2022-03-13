import ProductAPI from "../api/productAPI";
import {$, reRender} from "../pages/utils.js";

const ListProduct = {
    async render(){
        const {data:products} = await ProductAPI.getAll();
        return `
            <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th width=340px>Detail</th>
                <th><a href = "/#/addproduct" class="btn btn-success">Add New</a></th>
            </tr>
            </thead>
            <tbody>
            ${products.map( (product,index) =>{
                    return `
                        <tr>
                            <td>${++index}</td>
                            <td>${product.name}</td>
                            <td><img style="height:90px;width:120px;" src="${product.image}"/></td>
                            <td>${product.price}$</td>
                            <td>${product.detail}</td>
                            <td>
                                <a href = "/#/editproduct/${product.id}" class="btn btn-primary">Update</a>
                                <button class="btn btn-danger btn-remove" data-id="${product.id}">Remove</button>
                            </td>
                        </tr>
                    `
            }).join("")}
            </tbody>
        </table>
        `;
    },
    async afterRender(){
        const btns = $('#list-products .btn');
        // console.log(btns);
        btns.forEach(btn=>{
            const id=btn.dataset.id;
            btn.addEventListener('click',async function(){
                if(btn.classList.contains('btn-remove')){
                    const question=confirm("Ban co muon xoa khong ?");
                    if(question){
                        await ProductAPI.remove(id);
                        await reRender(ListProduct,'#list-products');
                    }
                }
            })
        })
    }
}
export default ListProduct;