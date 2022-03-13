import ListProduct from "../components/ListProduct.js";
import SidebarMenu from "../components/SidebarMenu.js";
import {$} from "../pages/utils.js";


const AdminProductPage = {
    async render(){
        return `
        <div style="margin-left:300px;margin-top:20px;" class="row">
          
      
          <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
          
            <h2>Quản trị sản phẩm</h2>
            <div class="table-responsive" id="list-products">
              ${SidebarMenu.render()}

              ${await ListProduct.render()}
            </div>
          </div>
      </div>
        `;
    },
    async afterRender(){
      return `${await ListProduct.afterRender()}`;
    }
}
export default AdminProductPage;