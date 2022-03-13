import ProductAPI from '../api/productAPI.js';
import { parseRequestUrl,$ } from './utils.js';
import firebase from '../firebase';
const ProductEditPage={
    async render(){
        const {id}=parseRequestUrl();
        const {data:product}=await ProductAPI.get(id);
        return `
        <form id="form-update-product">
            <div class="form-group">
                <label for="product-name" class="form-label">Product name</label>
                <input type="text" value="${product.name}" class="form-control" id="product-name" aria-describedby="emailHelp">            </div>
            </div>
            <div class="form-group">
                <label for="product-name" class="form-label">Product image</label>
                <input type="file" class="form-control" id="product-image" aria-describedby="emailHelp">            </div>
            </div>
            <div class="form-group">
                <label for="product-name" class="form-label">Product price</label>
                <input type="text" value="${product.price}" class="form-control" id="product-price" aria-describedby="emailHelp">            </div>
            </div>
            <div class="form-group">
                <label for="product-name" class="form-label">Product detail</label>
                <input type="text" value="${product.detail}" class="form-control" id="product-detail" aria-describedby="emailHelp">            </div>
            </div>
            <div class="form-group">
            <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
        `
    },
    async afterRender(){
        var a=document.getElementById("product-name");
        var b=document.getElementById("product-image");
        var c=document.getElementById("product-price");
        var d=document.getElementById("product-detail");
        const {id}=parseRequestUrl();
        const {data:product}=await ProductAPI.get(id);
        $('#form-update-product').addEventListener('submit',e=>{
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
                    const newProduct = {
                        ...product,
                        name: $('#product-name').value,
                        price: $('#product-price').value,
                        detail: $('#product-detail').value,
                        image: url
                    };
                    ProductAPI.update(id,newProduct);
                    alert("Update sản phẩm thành công");
                    window.location.hash='/listproduct';
                })
            })}
        })
    }
}
export default ProductEditPage;