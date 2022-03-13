import ProductAPI from '../api/productAPI';
import { parseRequestUrl } from './utils.js';

const ProductDetail ={
    async render(){
        const {id} = parseRequestUrl();
        const {data : product} = await ProductAPI.get(id);
        return `
        <main class="mainContainer_theme"><div class="breadcrumb-shop clearfix">
        <div class="container">
            <div class="">
                <ol class="breadcrumb breadcrumb-arrows" itemscope itemtype="http://schema.org/BreadcrumbList">
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a href="/#/" target="_self" itemprop="item"><span itemprop="name">Trang chủ</span></a>
                        <meta itemprop="position" content="1" />		
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a href="/#/products" target="_self" itemprop="item">
                            <span itemprop="name">Sản phẩm</span>
                        </a>
                        <meta itemprop="position" content="2" />
                    </li>
                    <li class="active" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <span itemprop="item" content="https://www.giaycuoitrang.com/products/giay-cuoi-co-dau-ho-eo-vien-da-lap-lanh">
                            <span itemprop="name">${product.name}</span>
                        </span>
                        <meta itemprop="position" content="3" />
                    </li>
                </ol>
            </div>
        </div>
    </div><div id="product" class="productDetail-page">
        <div class="container">
            <div class="row product-detail-wrapper">
                <div class="col-md-12 col-sm-12 col-xs-12">
    
                    <div class="row product-detail-main pr_style_03">
                        <div class="col-md-6 col-sm-12 col-xs-12 product-content-img n_padding">
                            <div class="product-gallery">
                                
                                <div class="product-image-details">
                                    <ul id="sliderproduct3" class="slide_product">
                                        <li class="product_gallery_item"  data-image="${product.image}"> 
                                            <a data-fancybox="gallery" href="${product.image}">
                                                <img class="product-image-feature" src="${product.image}" alt="${product.name}">
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>							
                        </div>
                        <div class="col-md-6 col-sm-12 col-xs-12 product-content-desc" id="detail-product">
                            <div class="product-title">
                                <h1>${product.name}</h1>
                                <span id="pro_sku"><strong>Mã sản phẩm: </strong>${product.id}</span>
    <span class="pro-soldold"></span>
                            </div>
                            <div class="product-price" id="price-preview">
    
                                <span class="pro-price">${product.price}$</span>
                            </div>
    
                            <form id="add-item-form" action="/cart/add" method="post" class="variants clearfix">				
                                <div class="select clearfix">
                                    <select id="product-select" name="id" style="display:none;">
                                        <option value="1066354275">34 / Trắng - 800,000₫</option>
                                        <option value="1066354276">35 / Trắng - 800,000₫</option>
                                        <option value="1066354277">36 / Trắng - 800,000₫</option>
                                        <option value="1066354278">37 / Trắng - 800,000₫</option>
                                        <option value="1066354279">38 / Trắng - 800,000₫</option>
                                        <option value="1066354280">39 / Trắng - 800,000₫</option>
                                    </select>
                                </div>
                                

                                <div class="selector-actions">
                                    <div class="quantity-area">
                                        <input type="button" value="-" onclick="minusQuantity()" class="qty-btn btn-left-quantity">
                                        <input type="text" id="quantity" name="quantity" value="1" min="1" class="quantity-selector">
                                        <input type="button" value="+" onclick="plusQuantity()" class="qty-btn btn-right-quantity">
                                    </div>
                                    <div class="wrap-addcart">						
                                        <button type="button" id="add-to-cart"   class=" add-to-cartProduct button drakpay btn-addtocart" name="add"> 
    Thêm vào giỏ									</button>
                                    </div>	
                                </div>
                                <div class="product-action-bottom visible-xs">
                                    <div class="input-bottom">
                                        <input id="quan-input" name="quantiti_mb" type="number" value="1" min="1">
                                    </div>
                                    <button type="button" id="add-to-cartbottom"   class=" add-to-cartProduct add-cart-bottom button drakpay" name="add"> 
    Thêm vào giỏ								</button>
                                </div>
                            </form>
                            <div class="product-description">	
                                <section class="proDetailInfo">
                                    <ul class="nav velaProductNavTabs nav-tabs">
                                        <li class="active">
                                            <a data-tab="proTabs1" href="javascript:void(0)">Mô tả</a>
                                        </li>
                                        <li class="">
                                            <a data-tab="proTabs2" href="javascript:void(0)">Điều khoản dịch vụ</a>
                                        </li>
                                        <li class="">
                                            <a data-tab="proTabs3" href="javascript:void(0)">Chính sách bảo hành</a>
                                        </li>
    
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="proTabs1">
                                            <div class="description-productdetail">
                                                ${product.detail}
                                            </div>
                                        </div>
    
                                        <div class="tab-pane" id="proTabs2">
                                            <p style="text-align: justify;"><strong>I. GIỚI THIỆU</strong></p><p style="text-align: justify;">Chào mừng quý khách hàng đến với Kiyoko.</p><p style="text-align: justify;">Khi quý khách hàng truy cập vào giaycuoitrang.com của chúng tôi có nghĩa là quý khách đồng ý với các điều khoản này. Trang web có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Điều khoản mua bán hàng hóa này, vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước. Và khi quý khách tiếp tục sử dụng trang web, sau khi các thay đổi về Điều khoản này được đăng tải, có nghĩa là quý khách chấp nhận với những thay đổi đó.</p><p style="text-align: justify;">Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của chúng tôi.</p><hr /><p style="text-align: justify;"><strong>II. HƯỚNG DẪN SỬ DỤNG</strong></p><p style="text-align: justify;">Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi, hoặc truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp. Khách hàng đảm bảo có đầy đủ hành vi dân sự để thực hiện các giao dịch mua bán hàng hóa theo quy định hiện hành của pháp luật Việt Nam.</p><p style="text-align: justify;">Trong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo từ website. Nếu không muốn tiếp tục nhận mail, quý khách có thể từ chối bằng cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo.</p><hr /><p style="text-align: justify;"><strong>III. THANH TOÁN AN TOÀN TIỆN LỢI</strong></p><p style="text-align: justify;">Người mua có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp dụng phương thức phù hợp:</p><p style="text-align: justify;"><strong>Cách 1</strong>: Thanh toán trực tiếp (người mua nhận hàng tại cửa hàng)<br /><strong>Cách 2</strong><strong>:</strong>&nbsp;Thanh toán sau (COD – giao hàng và thu tiền tận nơi)<br /><strong>Cách 3</strong><strong>:</strong>&nbsp;Thanh toán online qua thẻ tín dụng, chuyển khoản</p>
                                        </div>
    
                                        <div class="tab-pane" id="proTabs3">
                                            <p><p style="text-align:justify"><strong>I. CHÍNH SÁCH <span style="color:#e74c3c">ĐỔI HÀNG</span></strong></p><p style="text-align:justify"><strong>1. Tại cửa hàng:</strong> Khách hàng sau khi xem, thử và kiểm tra giày&nbsp;đầy đủ, chấp nhận thanh toán với cửa hàng sẽ không được đổi hàng&nbsp;vì bất kỳ&nbsp;lý do gì.</p><p style="text-align:justify"><strong>2. Online (Shopee, COD):&nbsp;</strong></p><p style="text-align:justify">&nbsp; &nbsp;2.1 Sản phẩm&nbsp;chưa qua sử dụng (có nghĩa là đế giày chưa bị trầy xước, mòn đế, bề mặt da chưa biến dạng)</p><p style="text-align:justify">&nbsp; &nbsp;2.2&nbsp;Sản phẩm khách hàng nhận được bị lỗi về da, keo, họa tiết bong tróc, sẽ được shop đổi lại hàng mới. Khách hàng cần thông báo ngay cho Shop sau khi nhận hàng và tiến hành gửi bưu phát về shop trong thời gian 1 ngày kể từ khi nhận hàng</p><p style="text-align:justify">&nbsp; &nbsp;2.3&nbsp;Sản phẩm bị chênh lệch size với thực tế (bị rộng hoặc chật so với chân của khách hàng),&nbsp;&nbsp;Khách hàng có nhu cầu đổi size cần thông báo ngay với shop trong thời gian 1 ngày kể từ khi nhận hàng, shop sẽ đổi lại hàng trong điều kiện giày còn size, giày chưa sử dụng&nbsp;và khách hàng chịu phí vận chuyển đổi hàng.&nbsp;</p><hr /><p style="text-align:justify"><strong>II. CHÍNH SÁCH <span style="color:#e74c3c">BẢO HÀNH</span></strong></p><p style="text-align: justify;">Quý khách mua sản phẩm tại Kiyoko, sản phẩm sẽ được&nbsp;<strong>bảo hành 3 tháng kể từ ngày mua hàng&nbsp;</strong>đối với các trường hợp bung keo, sứt chỉ.&nbsp;Các chi tiết trang trí, phụ kiện gắn trên sản phẩm nếu không còn phụ kiện thay thế sẽ thay bằng phụ kiện khác tương tự.</p><hr /><p><strong>III. ĐIỀU KIỆN <span style="color:#e74c3c">BẢO HÀNH</span></strong></p><p style="text-align: justify;"><strong>1. Trường hợp từ chối bảo hành:</strong>&nbsp;Kiyoko từ chối bảo hành với các trường hợp sau:</p><p style="text-align: justify;">&nbsp; &nbsp;1.1 Sản phẩm không nằm trong thời gian&nbsp;bảo hành của Kiyoko, nếu Quý khách có nhu cầu bảo hành, Kiyoko sẽ thẩm định và thông báo chi phí bảo hành sau.</p><p style="text-align: justify;">&nbsp; &nbsp;1.2 Sản phẩm bị hư hỏng và lỗi từ phía khách hàng gây nên như trầy xước, đế mòn, sản phẩm không còn nguyên vẹn do bị động vật cắn, bảo quản không tốt gây ẩm mốc, phai nắng, nóng chảy, …</p><p style="text-align: justify;">&nbsp; &nbsp;1.3 Bảo quản không đúng quy cách như: lau hóa chất lên giày dép làm ố da, phai màu, giày&nbsp;để lâu không sử dụng để tự phân hủy, da khô cứng, lão hóa không bám keo...</p><p style="text-align: justify;">&nbsp; &nbsp;1.4&nbsp;Các sản phẩm khuyến mãi, giảm giá.</p><p style="text-align: justify;"><strong>2.&nbsp;Thời gian bảo hành</strong>:&nbsp;Sau khi nhận được sản phẩm yêu cầu bảo hành, tùy thuộc vào mức độ hư hại của sản phẩm, Kiyoko sẽ thông báo thời gian bảo hành đến Quý khách sau.</p><p style="text-align: justify;"><strong>3.&nbsp;Hướng dẫn bảo hành</strong>: Để thực hiện yêu cầu bảo hành sản phẩm, Quý khách vui lòng kiểm tra tình trạng sản phẩm có&nbsp;<strong>đáp ứng đủ điều kiện bảo hành</strong>&nbsp;trước khi gửi sản phẩm cho Kiyoko để bảo hành.</p><p><strong><em>Cách 1: Gửi sản phẩm bảo hành trực tiếp tại cửa hàng</em></strong></p><p style="text-align: justify;">Khách hàng có nhu cầu bảo hành sản phẩm đã mua trực tiếp tại cửa hàng Kiyoko hoặc mua online tại website&nbsp;<a target="_blank" href="https://shopdonghai.com/">giaycuoitrang.com</a>&nbsp;và các kênh TMĐT khác có thể mang sản phẩm kèm theo hóa đơn đến cửa hàng để bảo hành.</p><p><em><strong>Cách 2: Gửi sản phẩm bảo hành qua đường bưu điện</strong></em></p><p style="text-align: justify;">Khách hàng ở những khu vực xa cửa hàng, khi có nhu cầu bảo hành sản phẩm đã mua,&nbsp;quý khách vui lòng gửi sản phẩm, hóa đơn mua hàng, phụ kiện đi kèm sản phẩm và quà tặng (nếu có) về&nbsp;<strong>Kiyoko Garden</strong>&nbsp;tại địa chỉ:</p><p><strong>Kiyoko Garden:&nbsp;</strong><strong><em>91/27 Nguyên Hồng, Phường 1, Quận Gò Vấp, HCM</em></strong></p><p>- Trên bưu phẩm ghi rõ&nbsp;<strong>“Sản phẩm bảo hành”</strong>.</p><p style="text-align: justify;">Khách hàng chịu trách nhiệm về trạng thái nguyên vẹn của sản phẩm khi gửi về Kiyoko. Sau khi nhận được sản phẩm bảo hành của Quý khách, chúng tôi sẽ kiểm tra tình trạng và thông báo về việc thực hiện bảo hành đến quý khách trong thời gian sớm nhất. Đối với khách hàng gửi sản phẩm bảo hành qua đường bưu điện, khách hàng sẽ chịu 100% chi phí giao nhận sản phẩm bảo hành.</p><p style="text-align: justify;">- TRONG MỌI TRƯỜNG HỢP, QUYẾT ĐỊNH CỦA KIYOKO LÀ QUYẾT ĐỊNH CUỐI CÙNG -</p></p>
                                        </div>
    
                                    </div>
                                </section>
                            </div>
                            <div class="product_social_share_fb">
                                    <div class="fb-like" data-href="/products/giay-cuoi-co-dau-ho-eo-vien-da-lap-lanh" data-layout="button" data-action="like" data-size="small" 
    data-show-faces="true" data-share="true"></div>
    
    
    
    
                            </div>
                        </div>
                    </div>
    </main>
        `;
    }
}
export default ProductDetail;