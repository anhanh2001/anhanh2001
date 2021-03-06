import CategoryAPI from "../api/categoryAPI";

const Header = {
    async render(){
        const {data:categories}=await CategoryAPI.getAll();
        return `
        <div id="topbar">
	<div class="container">
		<div class="topbar-content row flexAlignCenter rowFlexMargin">
			<div class="info-contact-top-bar hidden-xs hidden-sm d-flex col-md-4">
				<ul class="list_support unstyled">
					<li><span><a href="mailto:giaycuoikiyoko@gmail.com">giaycuoikiyoko@gmail.com</a></span></li>
					<li><span>Hotline:<a href="tel:0899459988">0899459988</a></span></li>
				</ul>
			</div>
			<div class="info-promotion-top-bar text-center col-xs-12 col-md-4">Thương hiệu Giày cưới uy tín tại Việt Nam</div>
			<div class="search-top-bar hidden-xs hidden-sm col-md-4">
				<div class="wpo-wrapper-search">
					<form action="/search" class="search-product ultimate-search">
						<input type="hidden" name="type" value="product" />
						<input required id="inputSearchAuto-desktop" name="q" maxlength="40" autocomplete="off" class="search-product-input" type="text" size="20" placeholder="Tìm ý tưởng giày của Dâu...">
						<button type="submit" class="btn-search-product">
							<svg version="1.1" class="svg search" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 27" style="enable-background:new 0 0 24 27;" xml:space="preserve"><path d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z"></path><rect x="17" y="17" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)" width="4" height="8"></rect></svg>
						</button>
					</form>
					<div id="ajaxSearchResults-mb" class="smart-search-wrapper ajaxSearchResults">
						<div class="resultsContent"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<header id="site-header" class="main-header">
	<div class="container">
		<div class="flexContainer-header flexAlignCenter rowFlexMargin">
			<div class="hidden-lg col-md-4 col-xs-3 col-sm-4 hidden-md">
				<div id="site-menu-handle" aria-hidden="true">
					<div class="btnMenuMobile">
						<span class="iconMenu"></span>
						<span class="iconMenu"></span>
						<span class="iconMenu"></span>
						<span class="iconMenu"></span>
					</div>
				</div>
			</div>
			<div class="header-mid d-flex flexAlignCenter col-xs-6 col-sm-3 col-md-3 col-lg-3">
				<div class="wrap-logo" itemscope="" itemtype="http://schema.org/Organization">
					
					
					<a href="https://www.giaycuoitrang.com"  itemprop="url">
						<img itemprop="logo" data-src="https://file.hstatic.net/200000106819/file/logo-01_212ea9e3dfa245a6b157f30fbac601d6.png" alt="Giày cưới - Kiyoko Garden" class="img-responsive logoimg lazyload"/>
					</a>      
					<h1 style="display:none"><a href="https://www.giaycuoitrang.com" itemprop="url">Giày cưới - Kiyoko Garden</a></h1>
					
					
				</div>		
			</div>	
			<div class="menu-desktop hidden-xs hidden-sm d-flex col-lg-6 col-md-6 col-sm-6">
<div id="nav">
	<nav class="main-nav text-center">
		<ul class="clearfix">
			<li class="active">
				<a href="/#/" title="Trang chủ"> 
					Trang chủ
				</a>
			</li>
			<li class="">
				<a href="/#/about" title="Giới thiệu"> 
					Giới thiệu
				</a>
			</li>
			<li class="">
				<a href="/#/products" title="Sản phẩm"> 
					Sản phẩm <i class="fa fa-chevron-down" aria-hidden="true"></i>
				</a>
				<ul class="sub_menu">
					<li class="">
						<a href="/collections/giay-cuoi" title="Danh mục"> 
							Danh mục <i class="fa fa-chevron-right" aria-hidden="true"></i>
						</a>
						<ul class="sub_menu">
                        ${
                            categories.map(category=>{
                                return `
                                <li class="">
								<a href="/#/category/${category.id}" title="${category.name}"> 
									${category.name}	
								</a>
							    </li>`
                            }).join("")
                        }
							
						</ul>
					</li>
				</ul>
			</li>
			<li class="">
				<a href="/#/listproduct" title="Quản trị"> 
					Quản trị 
				</a>
				
			</li>
			<li class="">
				<a href="/#/contact" title="Liên hệ"> 
					Liên hệ
				</a>
			</li>
		</ul>
	</nav>
</div>			</div>
			<div class="header-wrap-icon col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<span class="icon-account" aria-label="Tài khoản" title="Tài khoản">
					<a href="/account/login" title="Đăng nhập" class="d-flex flexAlignCenter">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
							<path d="M18 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-8c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM14 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM12 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM24 21v-2c-0.001-1.245-0.457-2.385-1.216-3.261-0.652-0.753-1.528-1.311-2.529-1.576-0.534-0.141-1.081 0.177-1.222 0.711s0.177 1.081 0.711 1.222c0.607 0.161 1.136 0.498 1.528 0.952 0.455 0.526 0.727 1.206 0.728 1.952v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM15.752 4.099c0.803 0.206 1.445 0.715 1.837 1.377s0.531 1.47 0.325 2.273c-0.176 0.687-0.575 1.256-1.105 1.652-0.314 0.235-0.675 0.41-1.063 0.511-0.534 0.14-0.854 0.687-0.713 1.221s0.687 0.854 1.221 0.713c0.637-0.167 1.232-0.455 1.753-0.844 0.883-0.66 1.552-1.613 1.845-2.758 0.342-1.337 0.11-2.689-0.542-3.788s-1.725-1.953-3.062-2.296c-0.535-0.137-1.080 0.186-1.217 0.721s0.186 1.080 0.721 1.217z"></path>
						</svg>
						<span>Đăng nhập</span>
					</a>
				</span>
				<span id="site-cart-handle" class="icon-cart" aria-label="Open cart" title="Giỏ hàng">
					<span class="cart-menu clearfix" aria-hidden="true">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
							<path d="M19 5h-14l1.5-2h11zM21.794 5.392l-2.994-3.992c-0.196-0.261-0.494-0.399-0.8-0.4h-12c-0.326 0-0.616 0.156-0.8 0.4l-2.994 3.992c-0.043 0.056-0.081 0.118-0.111 0.183-0.065 0.136-0.096 0.282-0.095 0.425v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.219-0.071-0.422-0.189-0.585-0.004-0.005-0.007-0.010-0.011-0.015zM4 7h16v13c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707zM15 10c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121c0-0.552-0.448-1-1-1s-1 0.448-1 1c0 1.38 0.561 2.632 1.464 3.536s2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path>
						</svg>
						<span class="count-holder"><span class="count">0</span></span>
					</span>
				</span>
			</div>
		</div>
	</div>
</header>
<div class="search-bar-mobile">
	<div class="search-box wpo-wrapper-search">
		<form action="/search" class="searchform searchform-categoris ultimate-search">
			<div class="wpo-search-inner">
				<input type="hidden" name="type" value="product" />
				<input required id="inputSearchAuto-mb" name="q" maxlength="40" autocomplete="off" class="searchinput input-search search-input" type="text" size="20" placeholder="Tìm kiếm sản phẩm...">
			</div>
			<button type="submit" class="btn-search btn" id="search-header-btn-mb">
				<svg version="1.1" class="svg search" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 27" style="enable-background:new 0 0 24 27;" xml:space="preserve"><path d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z"></path><rect x="17" y="17" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)" width="4" height="8"></rect></svg>
			</button>
		</form>
		<div id="ajaxSearchResults-mb" class="smart-search-wrapper ajaxSearchResults" style="display: none">
			<div class="resultsContent"></div>
		</div>
	</div>
</div>
        `;
    }
}
export default Header;