import ProductAPI from '../api/productAPI';

const HomePage ={
    async render(){
      const {data:products}=await ProductAPI.getAll();  
      
        return `
        <main class="mainContainer_theme">
        <section id="section-collection-home" class="section section-collection">
        <div class="wrapper-heading-home  text-center">
          <div class="container">
            <div class="groupTitle-home">
              <h2>
                <a href="/collections/hot-products">
                  Sản phẩm mới
                </a>
              </h2>
              <p>Bộ sưu tập những mẫu giày mới nhất từ nhà Kiyoko. Hãy cùng nhau khám phá nhé!</p>
            </div>
          </div>
        </div>
        <div class="wrapper-collection-1">
      
          <div class="container" >
            <div class="row collection-special-two">
            ${products.filter(product=>product.categoryId==3).map(product=>{
              return `
              <div class="col-md-6 col-sm-12 col-xs-12">
      
      <div class="product-loop-special has-image more-image ">
        <div class="product-col-left text-center">
          <a href="/#/products/${product.id}" title="${product.name}">
            <picture>
              <source media="(max-width: 767px)" srcset="${product.image}">
              <source media="(min-width: 768px)" srcset="${product.image}">
              <img class="img-loop" alt="${product.name}" src="${product.image}"  />
            </picture>
          </a>
        </div>
        <div class="product-col-right">
          <div class="product-width">
            <div class="product-img-sub">
              <a href="/#/products/${product.id}" title="${product.name}">
                <picture>
                  <source media="(max-width: 767px)" srcset="${product.image}">
                  <source media="(min-width: 768px)" srcset="${product.image}">
                  <img class="img-loop img-hover" alt="${product.name}" src="${product.image}"/>
                </picture>
              </a>
            </div>
            <div class="product-detail">
              <h3 class="pro-name">
                <a href="/#/product/${product.id}" title="${product.name}">
                  <span>${product.name}</span>
                </a>
              </h3>
              <div class="box-pro-prices">	
                <p class="overflowed pro-price ">
                  <span>${product.price}$</span>
                  <span class="pro-price-del">
                  </span>
                </p>
              </div>
            </div>
            <div class="action text-center">
              <a class="button dark" href="/#/products/${product.id}" title="${product.name}">Xem chi tiết</a>
            </div>
          </div>
        </div>
      </div>				</div>`
              
             }).join("")};

            </div>
          </div>
        </div>
      </section>
      <section id="section-banner-video-home" class="section section-banner-video">
        <div class="container">
          <div class="rowFlexMargin">
            <div class="col-xs-12 col-sm-6">
              <div class="mbItemGutter effectFour fade-box">
                <a href="/collections/giay-cuoi" title="">
                  <img class="img-responsive lazyload" data-src="https://file.hstatic.net/200000106819/file/hinh-1-2_4d89498092184873bf87ed92629b5fc2.png" alt="" />
                </a>
              </div>
              <div class="mbItemGutter effectFour fade-box">
                <a href="https://shopee.vn/giaycuoi_kiyoko" title="">
                  <img class="img-responsive lazyload" data-src="https://file.hstatic.net/200000106819/file/hinh-duoi_36fcd792bdbb4ff5a9b6822552050dce.png" alt="" />
                </a>
              </div>
            </div>
            <div class="mbItemGutter col-xs-12 col-sm-6">
              <div class="effectFour fade-box">
                <a href="/blogs/co-dau-nha-kiyoko" title="">
                  <img class="img-responsive lazyload" data-src="https://file.hstatic.net/200000106819/file/demo-3_c8d7790fad784eafb2707dfbfa97c00d.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-blog" class="section section-blog">
        <div class="wrapper-heading-home text-center">
          <div class="container">
            <div class="groupTitle-home">
              <h2>
                <a href="/blogs/tin-tuc">
                  Bản tin nhà Kiyoko
                </a>
              </h2>
              <p>
                Cập nhật tin tức mới nhất!
              </p>
            </div>
          </div>
        </div>
        <div class="wrapper-content-home ">
          <div class="container">
            <div class="row clearfix owl-carousel" id="blog-slide">
      
              <div class="col-md-4 col-xs-12 col-sm-6 item-blog">
                <div class="velaBlogItem ">
                  <div class="blogPostImage fade-box">
                    <a href="/blogs/tin-tuc/ma-uu-dai-lan-dau-theo-doi-kenh-shopee-kiyoko" title="Mã Ưu đãi lần đầu theo dõi kênh Shopee Kiyoko">
                      <img class="img-responsive lazyload" data-src="//file.hstatic.net/200000106819/article/shopee-voucher---hinh-30k_c3f5f3cb48494206bddefc5d0be893d6_large.png" alt="Mã Ưu đãi lần đầu theo dõi kênh Shopee Kiyoko" />
                    </a>
                  </div>
                  <div class="blogPostContent">
                    <h4 class="blogPostTitle">
                      <a href="/blogs/tin-tuc/ma-uu-dai-lan-dau-theo-doi-kenh-shopee-kiyoko" title="Mã Ưu đãi lần đầu theo dõi kênh Shopee Kiyoko">
                        Mã Ưu đãi lần đầu theo dõi kênh Shopee Kiyoko
                      </a>
                    </h4>
                    <div class="blogPostShortdesc rte mb20">
                      <p>Các Dâu tương lai ơi!Ngày cưới là ngày trọng đại nhất đúng không nè! Hiện tại Kiyoko có duy nhất 1...</p>
                    </div>
                    <a class="btnBlogReadMore" href="/blogs/tin-tuc/ma-uu-dai-lan-dau-theo-doi-kenh-shopee-kiyoko" title="Xem thêm">
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
      
              <div class="col-md-4 col-xs-12 col-sm-6 item-blog">
                <div class="velaBlogItem ">
                  <div class="blogPostImage fade-box">
                    <a href="/blogs/tin-tuc/ho-tro-danh-cho-khach-hang-mua-online" title="Hỗ trợ dành cho khách hàng mua Online">
                      <img class="img-responsive lazyload" data-src="//file.hstatic.net/200000106819/article/ho-tro-khach-online_6bde030bfcc349f5a5b8aa765ffb4e6e_large.png" alt="Hỗ trợ dành cho khách hàng mua Online" />
                    </a>
                  </div>
                  <div class="blogPostContent">
                    <h4 class="blogPostTitle">
                      <a href="/blogs/tin-tuc/ho-tro-danh-cho-khach-hang-mua-online" title="Hỗ trợ dành cho khách hàng mua Online">
                        Hỗ trợ dành cho khách hàng mua Online
                      </a>
                    </h4>
                    <div class="blogPostShortdesc rte mb20">
                      <p>Thân gửi Cô Dâu!Ngày cưới sắp đến, Dâu Rể phải bộn bề lo toan những công việc từ cá nhân...</p>
                    </div>
                    <a class="btnBlogReadMore" href="/blogs/tin-tuc/ho-tro-danh-cho-khach-hang-mua-online" title="Xem thêm">
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
        `;
    }
}
export default HomePage;