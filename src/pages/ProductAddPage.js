import CategoryAPI from '../api/categoryAPI.js';
import ProductAPI from '../api/productAPI.js';
import { $,reRender } from './utils.js';
import firebase from '../firebase';
import ListProduct from '../components/ListProduct.js';

const ProductAddPage={
    async render(){
        const {data:categories}=await CategoryAPI.getAll();
        const rendCate=categories.map(category=>{
            return `<option value="${category.id}">${category.name}</option> `
        }).join("");
        return `
            <form id="form-add">
                <div class="form-group">
                    <label for"product-name">Product name</label>
                    <input type="text" id="product-name" class="form-control">
                </div>
                <div class="form-group">
                <label for"product-image">Product image</label>
                    <input type="file" id="product-image" class="form-control">
                </div>
                <div class="form-group">
                    <label for"product-price">Product price</label>
                    <input type="number" id="product-price" class="form-control">
                </div>
                <div class="form-group">
                    <label for"product-category">Product category</label>
                    <select id="product-category" class="form-control">
                        ${rendCate}
                    </select>
                </div>
                <div class="form-group">
                    <label for"product-detail">Product detail</label>
                    <input type="text" id="product-detail" class="form-control">
                </div>
                <div class="form-group">
                    <input class="btn btn-primary" type="submit" value="Add Product">
                </div>
            </fom>
        `;
    },
    afterRender(){
        var a=document.getElementById("product-name");
        var b=document.getElementById("product-image");
        var c=document.getElementById("product-price");
        var d=document.getElementById("product-detail");

        $('#form-add').addEventListener('submit',e=>{
            e.preventDefault();
            if(a.value==""){
                a.focus();
                a.placeholder="Bạn cần nhập tên sản phẩm";
                return false;
            }
            if(b.value==""){
                b.focus();
                b.placeholder="Bạn cần chọn ảnh cho sản phẩm";
                return false;
            }
            if(c.value==""||c.value<0){
                c.focus();
                c.placeholder="Bạn cần nhập giá sản phẩm hoặc không được để số âm";
                return false;
            }
            if(d.value==""){
                d.focus();
                d.placeholder="Bạn cần nhập chi tiết sản phẩm";
                return false;
            }
            else{

            const productImage=$('#product-image').files[0];
            let storageRef= firebase.storage().ref(`images/${productImage.name}`);
            storageRef.put(productImage).then(function(){
                console.log("Thanh Cong");
                storageRef.getDownloadURL().then((url) => {
                    const product = {
                        id: Math.random().toString(36).substr(2, 9),
                        name: $('#product-name').value,
                        price: $('#product-price').value,
                        image: url,
                        categoryId:$('#product-category').value,
                        detail:$('#product-detail').value
                    };
                    //console.log(product);
                    ProductAPI.add(product);
                    window.location.hash='/listproduct'
                })
            })}
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
export default ProductAddPage;