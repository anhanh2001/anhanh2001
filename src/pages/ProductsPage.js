import ProductAPI from '../api/productAPI';
const ProductsPage = {
    async render() {
        try{
            const {data : products} = await ProductAPI.getAll();
            const result = products.map(product=>{
            }).join("")
                return `
                <main class="mainContainer_theme"><div class="breadcrumb-shop clearfix">
	<div class="container">
		<div class="">
			<ol class="breadcrumb breadcrumb-arrows" itemscope itemtype="http://schema.org/BreadcrumbList">
				<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
					<a href="/" target="_self" itemprop="item"><span itemprop="name">Trang chủ</span></a>
					<meta itemprop="position" content="1" />		
				</li>
				<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
					<a href="/collections" target="_self"  itemprop="item">
						<span itemprop="name">Danh mục</span>
					</a>
					<meta itemprop="position" content="2" />
				</li>
				<li class="active" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
					<span itemprop="item" content="https://www.giaycuoitrang.com/collections/giay-cuoi"><span itemprop="name">Giày cưới</span></span>
					<meta itemprop="position" content="3" />
				</li>
			</ol>
		</div>
	</div>
</div><div id="collection" class="collection-page">
	<div class="banner-collection-header">
		<img src="https://file.hstatic.net/200000106819/file/collection_0dc21fa80d754e0eb2a3108be30f2c80.png" alt="Giày cưới"/>
	</div>
	<div class="main-content container">
		<div class="row">
			<div id="collection-body" class="wrap-collection-body clearfix">
				<div class="wrap-filter">
					<div class="filterTagFullwidthClose"></div>
<div class="box_sidebar">
	<div class="block left-module">
		<div class="filter_xs">
			<div class="layered ">
				<div class="group-menu">
					<div class="title_block layered_subtitle dropdown-filter">
						<span>Danh mục sản phẩm</span>
						<span class="icon-control">
							<i class="fa fa-minus"></i>
						</span>
					</div>
					<div class="layered-content">
						<ul class="menuList-links">
							
											
							<li class="">
								<a href="/collections/onsale" title="Sản phẩm khuyến mãi">
									<span>Sản phẩm khuyến mãi</span>
								</a>
							</li>
							
							
											
							<li class="">
								<a href="/collections/hot-products" title="Sản phẩm nổi bật">
									<span>Sản phẩm nổi bật</span>
								</a>
							</li>
							
							
											
							<li class="">
								<a href="/collections/all" title="Tất cả sản phẩm">
									<span>Tất cả sản phẩm</span>
								</a>
							</li>
							
							
						</ul>
					</div>
				</div>
				<div class="block_content">
					<div class="group-filter" aria-expanded="true" >
						<div class="layered_subtitle dropdown-filter"><span>Giá sản phẩm</span><span class="icon-control"><i class="fa fa-minus"></i></span></div>
						<div class="layered-content bl-filter filter-price">
							<ul class="check-box-list">
								<li>
									<input type="checkbox" id="p1" name="cc" data-price="(price:product<=550000)" />
									<label for="p1">
										<span>Dưới</span> 550,000₫
									</label>   
								</li>
								<li>
									<input type="checkbox" id="p2" name="cc" data-price="((price:product>550000)&amp;&amp;(price:product<=750000))"/>
									<label for="p2">
										550,000₫ - 750,000₫
									</label>   
								</li>
								<li>
									<input type="checkbox" id="p3" name="cc" data-price="((price:product>750000)&amp;&amp;(price:product<=950000))"/>
									<label for="p3">
										750,000₫ - 950,000₫
									</label>   
								</li>
								<li>
									<input type="checkbox" id="p4" name="cc" data-price="((price:product>950000)&amp;&amp;(price:product<=1200000))"/>
									<label for="p4">
										950,000₫ - 1,200,000₫
									</label>   
								</li>
								<li>
									<input type="checkbox" id="p5" name="cc" data-price="(price:product>=1200000)"/>
									<label for="p5">
										<span>Trên</span> 1,200,000₫
									</label>   
								</li>
							</ul>
						</div>
					</div>

					<div class="group-filter" aria-expanded="true" >
						<div class="layered_subtitle dropdown-filter"><span>Màu sắc</span><span class="icon-control"><i class="fa fa-minus"></i></span></div>
						<div class="layered-content filter-color s-filter">
							<ul class="check-box-list">
								<li>
									<input type="checkbox" id="data-color-p1" value="Nude" name="color-filter" data-color="(variant:product contains Nude)"/>
									<label title="nude" for="data-color-p1" style="background-color: #fff0d4">Nude</label>  
								</li>
								<li>
									<input type="checkbox" id="data-color-p2" value="Vàng" name="color-filter" data-color="(variant:product contains Vàng)"/>
									<label title="vang" for="data-color-p2" style="background-color: #fff287">Vàng</label>  
								</li>
								<li>
									<input type="checkbox" id="data-color-p9" value="Trắng" name="color-filter" data-color="(variant:product contains Trắng)"/>
									<label title="trang" for="data-color-p9" style="background-color: #ffffff">Trắng</label>  
								</li>

							</ul>
						</div>
					</div>
					<div class="group-filter" aria-expanded="true" >
						<div class="layered_subtitle dropdown-filter"><span>Size</span><span class="icon-control"><i class="fa fa-minus"></i></span></div>
						<div class="layered-content filter-size bl-filter">
							<ul class="check-box-list clearfix">
								<li>
									<input type="checkbox" id="data-size-p1" value="34" name="size-filter" data-size="(variant:product=34)"/>
									<label for="data-size-p1">34</label>   
								</li>
								<li>
									<input type="checkbox" id="data-size-p2" value="35" name="size-filter" data-size="(variant:product=35)"/>
									<label for="data-size-p2">35</label>   
								</li>
								<li>
									<input type="checkbox" id="data-size-p3" value="36" name="size-filter" data-size="(variant:product=36)"/>
									<label for="data-size-p3">36</label>   
								</li>
								<li>
									<input type="checkbox" id="data-size-p4" value="37" name="size-filter" data-size="(variant:product=37)"/>
									<label for="data-size-p4">37</label>   
								</li>
								<li>
									<input type="checkbox" id="data-size-p5" value="38" name="size-filter" data-size="(variant:product=38)"/>
									<label for="data-size-p5">38</label>   
								</li>
								<li>
									<input type="checkbox" id="data-size-p6" value="39" name="size-filter" data-size="(variant:product=39)"/>
									<label for="data-size-p6">39</label>   
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>				</div>
				<div class="col-xs-12">
					<div class="wrap-collection-title row">
						<div class="heading-collection row">
							<div class="col-md-3 hidden-sm hidden-xs">
								<div class="filterTagFullwidthButton-desktop">
									<i class="fa fa-sliders"></i>
									<span>Bộ lọc</span>
								</div>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12">
								<h1 class="title">
Tất cả sản phẩm								</h1>
							</div>
							<div class="col-md-3 col-sm-12 col-xs-12">
								<div class="outer-sort-filter">					
									<div class="filterTagFullwidthButton-mobile">
										<i class="fa fa-sliders"></i>
										<span>Bộ lọc </span>
									</div>
									<div class="collection-sortby">
										<div class="sortby-option browse-tags option">
											<label class="label-tt" for="sort-by"><i class="fa fa-sort-alpha-asc" aria-hidden="true"></i></label>
											<span class="custom-dropdown custom-dropdown--grey ">
												<select class="sort-by custom-dropdown__select boxstyle-mb">
																						
													<option value="manual">Sản phẩm nổi bật</option>
													
													<option value="price-ascending" data-filter="&amp;sortby=(price:product=asc)">Giá: Tăng dần</option>
													<option value="price-descending" data-filter="&amp;sortby=(price:product=desc)">Giá: Giảm dần</option>
													<option value="title-ascending" data-filter="&amp;sortby=(title:product=asc)">Tên: A-Z</option>
													<option value="title-descending" data-filter="&amp;sortby=(price:product=desc)">Tên: Z-A</option>
													<option value="created-ascending" data-filter="&amp;sortby=(updated_at:product=desc)">Cũ nhất</option>
													<option value="created-descending" data-filter="&amp;sortby=(updated_at:product=asc)">Mới nhất</option>
													<option value="best-selling" data-filter="&amp;sortby=(sold_quantity:product=desc)">Bán chạy nhất</option>
													<option value="quantity-descending">Tồn kho: Giảm dần</option>
												</select>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="group_filter_tags">

						<div class="filter_tags">
							Giá sản phẩm: <b></b>
							<span class="filter_tags_remove">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 50 50" xml:space="preserve">
									<path fill="#333" d="M9.016 40.837a1.001 1.001 0 0 0 1.415-.001l14.292-14.309 14.292 14.309a1 1 0 1 0 1.416-1.413L26.153 25.129 40.43 10.836a1 1 0 1 0-1.415-1.413L24.722 23.732 10.43 9.423a1 1 0 1 0-1.415 1.413l14.276 14.293L9.015 39.423a1 1 0 0 0 .001 1.414z" />
								</svg>
							</span>
						</div>

						<div class="filter_tags">
							Màu sắc: <b></b>
							<span class="filter_tags_remove">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 50 50" xml:space="preserve">
									<path fill="#333" d="M9.016 40.837a1.001 1.001 0 0 0 1.415-.001l14.292-14.309 14.292 14.309a1 1 0 1 0 1.416-1.413L26.153 25.129 40.43 10.836a1 1 0 1 0-1.415-1.413L24.722 23.732 10.43 9.423a1 1 0 1 0-1.415 1.413l14.276 14.293L9.015 39.423a1 1 0 0 0 .001 1.414z" />
								</svg>
							</span>
						</div>

						<div class="filter_tags">
							Size: <b></b>
							<span class="filter_tags_remove">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 50 50" xml:space="preserve">
									<path fill="#333" d="M9.016 40.837a1.001 1.001 0 0 0 1.415-.001l14.292-14.309 14.292 14.309a1 1 0 1 0 1.416-1.413L26.153 25.129 40.43 10.836a1 1 0 1 0-1.415-1.413L24.722 23.732 10.43 9.423a1 1 0 1 0-1.415 1.413l14.276 14.293L9.015 39.423a1 1 0 0 0 .001 1.414z" />
								</svg>
							</span>
						</div>

						<div class="filter_tags filter_tags_remove_all"><span>Xóa hết </span></div>
					</div>
					<div class="row filter-here">
						<div class="content-product-list product-list filter clearfix">
                        ${products.map(product=>{
                            return `
							<div class="col-md-3 col-sm-4 col-xs-6 pro-loop">

<div class="product-block product-resize site-animation">
	<div class="product-img">


		<a href="/#/products/${product.id}" title="${product.name}" class="image-resize fade-box">
			<picture>
				<source media="(max-width: 767px)" data-srcset="${product.image}">
				<source media="(min-width: 768px)" data-srcset="${product.image}">
				<img class="img-loop lazyload" alt="${product.name}" data-src="${product.image}"  />
			</picture>
			<picture>
				<source media="(max-width: 767px)" data-srcset="${product.image}">
				<source media="(min-width: 768px)" data-srcset="${product.image}">
				<img class="img-loop img-hover lazyload" alt="${product.name}" data-src="${product.image}"/>
			</picture>
		</a>
		<div class="productQuickView">
			<a class="btnProductQuickview" href="javascript:void(0)" data-handle="${product.name}" title="Xem nhanh"></a>
		</div>
		<div class="pro-price-mb">	
			<span class="pro-price">${product.price}$</span>
		</div>
	</div>
	<div class="product-detail clearfix">
		<div class="box-pro-detail">
			<h3 class="pro-name">
				<a href="/#/products/${product.id}" title="${product.name}">
					${product.name}
				</a>
			</h3>
			<div class="box-pro-prices">	
				<p class="pro-price ">
					
					<span>${product.price}$</span>
					
				</p>
			</div>
		</div>
		
	</div>
</div>								</div>`

                            }).join("")
                            }
									
						<div class="sortpagibar pagi clearfix text-center">
<div id="pagination" class="clearfix">
	<div class="col-xs-12">
		<ul class="pagination">
			<li>
				<span class="current">
					1
				</span>
			</li>		
			<li>
				<a href="/collections/giay-cuoi?page=2">2</a>
			</li>
			<li>
				<a href="/collections/giay-cuoi?page=2">
					<i class="fa fa-angle-double-right"></i>			
				</a>
			</li>
		</ul>
	</div>
</div>						</div>
					</div>

					<div class="alert-no-filter"></div>		
				</div>
			</div>
		</div>
	</div>
	<input type="text" class="hidden" id="coll-handle" value="(collectionid:product=1002063730)" />
</div>
<script>
Haravan.queryParams = {};
if (location.search.length) {
	for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
		aKeyValue = aCouples[i].split('=');
		if (aKeyValue.length > 1) {
			Haravan.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
		}
	}
}
var collFilters = jQuery('.coll-filter');
collFilters.change(function() {
	var newTags = [];
	var newURL = '';
	delete Haravan.queryParams.page;
	collFilters.each(function() { 
		if (jQuery(this).val()) {
			newTags.push(jQuery(this).val());
		}
	});
	
	newURL = '/collections/' + 'giay-cuoi';
	 if (newTags.length) {
		 newURL += '/' + newTags.join('+');
	 }
	 var search = jQuery.param(Haravan.queryParams);
	 if (search.length) {
		 newURL += '?' + search;
	 }
	 location.href = newURL;    
	       
		});
		jQuery('.sort-by')
		.val('title-ascending')
		.bind('change', function() {
			Haravan.queryParams.sort_by = jQuery(this).val();
			location.search = jQuery.param(Haravan.queryParams);
		});
		</script>
<script>
jQuery(document).ready(function(){
	function smoothScroll(a, b){
		$('body,html').animate({
			scrollTop : a
		}, b);
	}
	jQuery('.check-box-list li > input').click(function(){
		jQuery(this).parent().toggleClass('active');
		Stringfilter();
		var x = $('#collection-body').offset().top;
		smoothScroll(x-100, 400);

		var indexTitle = jQuery(this).parents('.group-filter').index();
		if (jQuery(this).parents('.group-filter').find('li.active').length > 0 ){
			var textFilter = [];
			jQuery(this).parents('.group-filter').find('li.active').each(function(){
				var textVal = $(this).find('label').html();
				textFilter.push(textVal);
			});
			$('.filter_tags:eq('+indexTitle+') b').html(textFilter.join('; ')).parent().addClass('opened');
			if ($('.filter_tags.opened').length > 1 ){
				$('.filter_tags_remove_all').addClass('opened');
			}
		}
		else{
			$('.filter_tags:eq('+indexTitle+') b').html('').parent().removeClass('opened');
			$('.filter_tags_remove_all').removeClass('opened');
		}
	});
	jQuery('.filter_tags_remove').click(function(){
		jQuery(this).parent().removeClass('opened').find('b').html();
		var indexClick = $(this).parent().index();
		$('.group-filter:eq('+indexClick+') li.active input').attr('checked',false);
		$('.group-filter:eq('+indexClick+') li.active').removeClass('active');
		if($('.filter_tags:not(.filter_tags_remove_all).opened').length == 1){
			$('.filter_tags_remove_all').removeClass('opened');
		}
		Stringfilter();
	});
	jQuery('.filter_tags_remove_all').click(function(){
		$('.group-filter li.active input').attr('checked',false);
		$('.group-filter li.active').removeClass('active');
		$('.filter_tags b').html('').parent().removeClass('opened');
		$('.filter_tags_remove_all').removeClass('opened');
		Stringfilter();
	});
	str = "";
	var Stringfilter = function(){
		var q="", gia="",vendor="",color="", size="",total_page=0, cur_page=1;
		var handle_coll = $('#coll-handle').val();
		var str_url = 'filter=';
		q = "("+handle_coll+")";
		jQuery('.filter-price ul.check-box-list li.active').each(function(){
			gia = gia + jQuery(this).find('input').data('price') + '||';
		})
		gia=gia.substring(0,gia.length -2);
		if(gia != ""){
			gia='('+gia+')';
			q+='&&'+gia;
		}
		jQuery('.filter-brand ul.check-box-list li.active').each(function(){
			vendor = vendor + jQuery(this).find('input').data('vendor') + '||';
		})
		vendor=vendor.substring(0,vendor.length -2);
		if(vendor != ""){
			vendor='('+vendor+')';
			q+='&&'+vendor;
		}
		jQuery('.filter-color ul.check-box-list li.active').each(function(){
			color = color + jQuery(this).find('input').data('color') + '||';
		})
		color=color.substring(0,color.length -2);
		if(color != ""){
			color='('+color+')';
			q+='&&'+color;
		}
		jQuery('.filter-size ul.check-box-list li.active').each(function(){
			size = size + jQuery(this).find('input').data('size') + '||';
		})
		size=size.substring(0,size.length -2);
		if(size != ""){
			size='('+size+')';
			q+='&&'+size;
		}
		str_url += encodeURIComponent(q);
		str = str_url;
		jQuery.ajax({
			url: "/search?q="+str_url+"&view=page",	
			async: false,
			success:function(data){
				total_page = parseInt(data);
			}
		})
		if(cur_page <= total_page){
			jQuery('.pagi').show();
			jQuery.ajax({
				url : "/search?q="+str_url+"&view=filter",
				success: function(data){
					jQuery(".product-list.filter").html(data);
					jQuery(".product-list.filter").removeClass('border');
					jQuery(".alert-no-filter").hide(); 
					jQuery('.content-product-list img').imagesLoaded( function() {
						jQuery(window).resize();
					});
				}
			})
			jQuery.ajax({
				url: "/search?q="+str_url+"&view=paginate",
				async: false,
				success:function(data){
					jQuery(".pagi").html(data);
				}
			})
		} else {
			if(jQuery('.alert-no').length > 0){
				jQuery(".alert-no").html("<p>Không tìm thấy sản phẩm nào phù hợp!</p>");
			}
			else {
				jQuery(".alert-no-filter").show().html("<p>Không tìm thấy sản phẩm nào phù hợp!</p>"); 
			}
			jQuery(".product-list.filter").html('');			
			jQuery(".product-list.filter").addClass('border');
			jQuery('.pagi').hide();
		}
		jQuery('.pagi').on("click","a",function(){
			var link = jQuery(this).attr("data-link");
			if(link == 'm'){
				link = cur - 1;
			}
			if(link == 'p'){
				link = cur + 1;
			}
			link = parseInt(link);
			jQuery.ajax({
				url : "/search?q="+str+"&view=filter&page="+link, 
				success: function(data){
					jQuery(".product-list.filter").html(data);
					jQuery('.content-product-list img').imagesLoaded( function() {
						jQuery(window).resize();
					});
					cur = link;
				}
			})
			jQuery.ajax({ 
				url: "/search?q="+str+"&view=paginate&page="+link,	
				success:function(data){
					jQuery(".pagi").html(data);
				}
			})
		});
	}
	})
</script></main>
                `
            
        }
        catch(error){
            console.log(error);
        }

        //const { products } = data;
        
    }
}
export default ProductsPage;