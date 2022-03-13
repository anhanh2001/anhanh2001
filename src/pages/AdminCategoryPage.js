import ListCategory from "../components/ListCategory.js";
import SidebarMenu from "../components/SidebarMenu.js";
import {$} from "./utils.js";


const AdminCategoryPage = {
    async render(){
        return `
        <div style="margin-left:300px;margin-top:20px;" class="row">
          
      
          <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
          
            <h2>Quản trị danh mục</h2>
            <div class="table-responsive" id="list-category">
                ${SidebarMenu.render()}

                ${await ListCategory.render()}
            </div>
          </div>
        </div>
        `;
    },
    async afterRender(){
      return `${await ListCategory.afterRender()}`;
    }
}
export default AdminCategoryPage;