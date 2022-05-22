$(document).ready(function ($) {
    "use strict";
    awe_backtotop();
    awe_owl();
    awe_category();
    awe_menumobile();
    awe_tab();
    awe_lazyloadImage();
});

function awe_lazyloadImage() {
    var i = $("[data-lazyload]");
    i.length > 0 && i.each(function() {
        var i = $(this), e = i.attr("data-lazyload");
        i.appear(function() {
            i.removeAttr("height").attr("src", e);
        }, {
            accX: 0,
            accY: 120
        }, "easeInCubic");
    });
    var e = $("[data-lazyload2]");
    e.length > 0 && e.each(function() {
        var i = $(this), e = i.attr("data-lazyload2");
        i.appear(function() {
            i.css("background-image", "url(" + e + ")");
        }, {
            accX: 0,
            accY: 120
        }, "easeInCubic");
    });
    var s = $("[data-lazyload3]");
    s.length > 0 && s.each(function() {
        var s = $(this), e = s.attr("data-lazyload3");
        s.appear(function() {
            s.attr("srcset", e);
        }, {
            accX: 0,
            accY: 120
        }, "easeInCubic");
    });
} window.awe_lazyloadImage=awe_lazyloadImage;


function awe_showNoitice(selector) {
    $(selector).animate({right: '0'}, 500);
    setTimeout(function() {
        $(selector).animate({right: '-300px'}, 500);
    }, 3500);
}  window.awe_showNoitice=awe_showNoitice;


function awe_showLoading(selector) {
    var loading = $('.loader').html();
    $(selector).addClass("loading").append(loading);
}  window.awe_showLoading=awe_showLoading;


function awe_hideLoading(selector) {
    $(selector).removeClass("loading");
    $(selector + ' .loading-icon').remove();
}  window.awe_hideLoading=awe_hideLoading;


function awe_showPopup(selector) {
    $(selector).addClass('active');
}  window.awe_showPopup=awe_showPopup;


function awe_hidePopup(selector) {
    $(selector).removeClass('active');
}  window.awe_hidePopup=awe_hidePopup;


function awe_category(){
    $('.nav-category .fa-angle-down').click(function(e){
        $(this).parent().toggleClass('active');
    });
} window.awe_category=awe_category;


function awe_menumobile(){
    $('.menu-bar').click(function(e){
        e.preventDefault();
        $('#nav').toggleClass('open');
    });
} window.awe_menumobile=awe_menumobile;

$('.menu-bar').click(function(){
    $('.nav').slideToggle("fast");
});

$('.nav-mobile .open-close2').click(function(){
    $(this).toggleClass("active");
    $(this).closest('li').find('>ul').slideToggle("fast");
});

$("#nav .dropdown-menu").before("<span class='icon-click-hover'></span>")
$(".icon-click-hover").click(function(e){
	$(this).next("ul").toggleClass("active");
	$(this).prev("a").toggleClass("icon-up");
	let parent_this = $(this).parents(".nav-item");
	let not_this_parents = $("#nav>.nav-item").not(parent_this);
	not_this_parents.children("ul").removeClass("active");
	not_this_parents.children("a").removeClass("icon-up");
});

function awe_accordion(){
    $('.accordion .nav-link').click(function(e){
        e.preventDefault;
        $(this).parent().toggleClass('active');
    })
} window.awe_accordion=awe_accordion;


function awe_owl() {
	$( ".owl-carousel" ).each(function( index ) {
	  let text_id = "id_tiny_"+index;	
	  $(this).attr("id", text_id);
	  $(this).attr("data-target-id", text_id);
	  $(this).children().wrap("<div class='space-item-tsn'></div>");
	});
    setTimeout(function(){
        $('.owl-carousel').each(function () {
            let xxs_item = $(this).attr('data-xss-items');
            let xs_item = $(this).attr('data-xs-items');
            let md_item = $(this).attr('data-md-items');
            let lg_item = $(this).attr('data-lg-items');
            let sm_item = $(this).attr('data-sm-items');
            let margin = $(this).attr('data-margin');
            let id_tiny = $(this).attr('data-target-id');
            const slider = tns({
                container: `#${id_tiny}`,
                loop: true,
                items: lg_item,
                slideBy: 'page',
                nav: true,
                autoplay: false,
                speed: 400,
                autoplayButtonOutput: false,
                mouseDrag: true,
                gutter: margin,
                rewind: true,
                lazyload: true,
                responsive: {
                    0: {
                        items: Number(xxs_item) || 1,
                    },
                    543: {
                        items: Number(xs_item) || 1,
                    },
                    768: {
                        items: Number(sm_item) || 1
                    },
                    992: {
                        items: Number(md_item) || 1
                    },
                    1200: {
                        items: Number(lg_item) || 1
                    }
                },
            });
        });
    },300);
} window.awe_owl=awe_owl;


function awe_backtotop() {
    if ($('.back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-to-top').addClass('show');
                } else {
                    $('.back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    var s = $("header .middle-header");
    var pos = s.position();
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top) {
            s.addClass("pos-sticky");
        } else {
            s.removeClass("pos-sticky");
        }
    });
} window.awe_backtotop=awe_backtotop;



function awe_tab() {
    $(".e-tabs").each( function(){
        $(this).find('.tabs-title li:first-child').addClass('current');
        $(this).find('.tab-content').first().addClass('current');

        $(this).find('.tabs-title li').click(function(){
            var tab_id = $(this).attr('data-tab');
            var url = $(this).attr('data-url');
            $(this).closest('.e-tabs').find('.tab-viewall').attr('href',url);
            $(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
            $(this).closest('.e-tabs').find('.tab-content').removeClass('current');
            $(this).addClass('current');
            $(this).closest('.e-tabs').find("#"+tab_id).addClass('current');
        });
    });

} window.awe_tab=awe_tab;

/********************************************************
 # DROPDOWN
 ********************************************************/
$('.dropdown-toggle').click(function() {
    $(this).parent().toggleClass('open');
});
$('.btn-close').click(function() {
    $(this).parents('.dropdown').toggleClass('open');
});
$('body').click(function(event) {
    if (!$(event.target).closest('.dropdown').length) {
        $('.dropdown').removeClass('open');
    };
    $('.box-search-topbar').slideUp();
});
$('.icon-search-topbar').click(function(e) {
    e.stopPropagation();
    $(this).next('.box-search-topbar').slideToggle('open');
});

$('.box-search-topbar').click(function(e) {
    e.stopPropagation();
});
deferimg('img.basic', 100);
// Create tab
$(".not-dqtab").each( function(e){
    var $this1 = $(this);
    var datasection = $this1.closest('.not-dqtab').attr('data-section');
    $this1.find('.tabs-title li:first-child').addClass('current');
    $this1.find('.tab-content').first().addClass('current');
    $this1.find('.tabs-title.ajax li').click(function(){
        var $this2 = $(this),
            tab_id = $this2.attr('data-tab'),
            url = $this2.attr('data-url');
        var etabs = $this2.closest('.e-tabs2');
        etabs.find('.tab-viewall').attr('href',url);
        etabs.find('.tabs-title li').removeClass('current');
        etabs.find('.tab-content').removeClass('current');
        $this2.addClass('current');
        etabs.find("."+tab_id).addClass('current');
    });
});

//XĂ¡Â»Â­ lÄ‚Â½ mobile

$('.not-dqtab .next').click(function(e){

    var count = 0
    $(this).parents('.content').find('.tab-content').each(function(e){
        count +=1;
    })

    var str = $(this).parent().find('.tab-titlexs').attr('data-tab'),
        res = str.replace("tab-", ""),
        datasection = $(this).closest('.not-dqtab').attr('data-section');
    res = Number(res);
    if(res < count){
        var current = res + 1;
    }else{
        var current = 1;
    }
    action(current,datasection);
})
$('.not-dqtab .prev').click(function(e){
    var count = 0
    $(this).parents('.content').find('.tab-content').each(function(e){
        count +=1;
    })

    var str = $(this).parent().find('.tab-titlexs').attr('data-tab'),
        res = str.replace("tab-", ""),
        datasection = $(this).closest('.not-dqtab').attr('data-section'),
        res = Number(res);
    if(res > 1){
        var current = res - 1;
    }else{
        var current = count;
    }
    action(current,datasection);
})
// Action mobile
function action(current,datasection){
    $('.'+datasection+' .tab-titlexs').attr('data-tab','tab-'+current);
    var text = '',
        url = '',
        tab_id='';
    $('.'+datasection+' ul.tabs.tabs-title.hidden-xs li').each(function(e){

        if($(this).attr('data-tab') == 'tab-'+current){
            var $this3 = $(this);
            title = $this3.find('span').text();
            url = $this3.attr('data-url');
            tab_id = $this3.attr('data-tab');
            //NĂ¡ÂºÂ¿u Ă„â€˜Ä‚Â£ load rĂ¡Â»â€œi thÄ‚Â¬ khÄ‚Â´ng load nĂ¡Â»Â¯a
        }
    })
    $("."+ datasection+" .tab-titlexs span").text(title);
    $("."+ datasection+" .tab-content").removeClass('current');
    $("."+ datasection+" .tab-"+current).addClass('current');
}
// Get content cho tab
function getContentTab(){

}
// Ajax carousel
function ajaxCarousel(selector,dataLgg){
    $(selector+' .owl-carousel.ajax-carousel').each( function(){
        var xss_item = $(this).attr('data-xss-items');
        var xs_item = $(this).attr('data-xs-items');
        var sm_item = $(this).attr('data-sm-items');
        var md_item = $(this).attr('data-md-items');
        var lg_item = $(this).attr('data-lg-items');
        if(dataLgg !== typeof undefined){

        }
        var lgg_item = dataLgg;
        var margin=$(this).attr('data-margin');
        var dot=$(this).attr('data-dot');
        var nav=$(this).attr('data-nav');
        if (typeof margin !== typeof undefined && margin !== false) {
        } else{
            margin = 30;
        }
        if (typeof xss_item !== typeof undefined && xss_item !== false) {
        } else{
            xss_item = 1;
        }
        if (typeof xs_item !== typeof undefined && xs_item !== false) {
        } else{
            xs_item = 1;
        }
        if (typeof sm_item !== typeof undefined && sm_item !== false) {

        } else{
            sm_item = 3;
        }
        if (typeof md_item !== typeof undefined && md_item !== false) {
        } else{
            md_item = 3;
        }
        if (typeof lg_item !== typeof undefined && lg_item !== false) {
        } else{
            lg_item = 4;
        }
        if (typeof lgg_item !== typeof undefined && lgg_item !== false) {

        } else{
            lgg_item = lg_item;
        }

        if (typeof dot !== typeof undefined && dot !== true) {
            dot = dot;
        } else{
            dot = false;
        }
        if (typeof nav !== typeof undefined && nav !== true) {
            nav = nav;
        } else{
            nav = false;
        }
        $(this).owlCarousel({
            loop:false,
            margin:Number(margin),
            responsiveClass:true,
            dots:dot,
            nav:nav,
            navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
            responsive:{
                0:{
                    items:Number(xss_item),
                    margin:10
                },
                543:{
                    items:Number(xs_item)
                },
                768:{
                    items:Number(sm_item)
                },
                992:{
                    items:Number(md_item)
                },
                1200:{
                    items:Number(lg_item)
                },
                1500:{
                    items:Number(lgg_item)
                }
            }
        })
    })
}

/********************************************************
 # Coca Fashion
 ********************************************************/
function awe_flowersVietnamese(str) {
    str= str.toLowerCase();
    str= str.replace(/Ă |Ă¡|áº¡|áº£|Ă£|Ă¢|áº§|áº¥|áº­|áº©|áº«|Äƒ|áº±|áº¯|áº·|áº³|áºµ/g,"a");
    str= str.replace(/Ă¨|Ă©|áº¹|áº»|áº½|Ăª|á»|áº¿|á»‡|á»ƒ|á»…/g,"e");
    str= str.replace(/Ă¬|Ă­|á»‹|á»‰|Ä©/g,"i");
    str= str.replace(/Ă²|Ă³|á»|á»|Ăµ|Ă´|á»“|á»‘|á»™|á»•|á»—|Æ¡|á»|á»›|á»£|á»Ÿ|á»¡/g,"o");
    str= str.replace(/Ă¹|Ăº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g,"u");
    str= str.replace(/á»³|Ă½|á»µ|á»·|á»¹/g,"y");
    str= str.replace(/Ä‘/g,"d");
    str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
    str= str.replace(/-+-/g,"-");
    str= str.replace(/^\-+|\-+$/g,"");
    return str;
} window.awe_flowersVietnamese=awe_flowersVietnamese;

var end_slide_youtube = $('#box-video-youtube .modal-content');
$('.item.item-video').on('click', function(e) {
    e.preventDefault();
    var id_youtube_url =  $(this).data('videourl');
    var regex = /(\?v=|\&v=|\/\d\/|\/embed\/|\/v\/|\.be\/)([a-zA-Z0-9\-\_]+)/;
    var regexyoutubeurl = id_youtube_url.match(regex);
    var url = 'https://www.youtube.com/embed/' + regexyoutubeurl[2] + '?autoplay=1';
    end_slide_youtube.html('<iframe width="980" style="height: 552px;" src="'+url+'"></iframe>');
    var widthwindow = $(window).width();
    var width_iframe = widthwindow - 40;
    var height_iframe;
    if (widthwindow > 1024) {
        height_iframe = 552;
    } else {
        height_iframe = (width_iframe*315)/560;
    }
    $('#box-video-youtube iframe').css({
        "height": height_iframe + "px"
    });
});
$(window).on("orientationchange load resize", function() {
    var widthwindow = $(window).width();
    var width_iframe = widthwindow - 40;
    var height_iframe;
    let logo = $(".header-main .logo");
    let welcome_shop = $(".welcome-shop");
    let topbar__right = $(".topbar__right");
    if(widthwindow > 991){
        topbar__right.append(welcome_shop);
    }else{
        welcome_shop.insertAfter(logo);
    }
    if (widthwindow > 1024) {
        height_iframe = 552;
    } else {
        height_iframe = (width_iframe*315)/560;
    }
    $('#box-video-youtube iframe').css({
        "height": height_iframe + "px"
    });
});
$('#box-video-youtube').on('hidden.bs.modal', function () {
    end_slide_youtube.html('<iframe width="980" style="height: 552px;" src=""></iframe>');
});
/*Open filter*/
$('.open-filters').click(function(e){
    e.stopPropagation();
    $(this).toggleClass('openf');
    $('.dqdt-sidebar').toggleClass('openf');
    $('.cate-overlay3').toggleClass('open');
});

$('.cate-overlay3, .filter-item').click(function(e){
    $('.cate-overlay3.open').removeClass('open');
    $('.dqdt-sidebar.openf').toggleClass('openf');
    $('#open-filters.openf').toggleClass('openf');
});


$(document).on('click','.qtyplus',function(e){
    e.preventDefault();
    fieldName = $(this).attr('data-field');
    var currentVal = parseInt($('input[data-field='+fieldName+']').val());
    if (!isNaN(currentVal)) {
        $('input[data-field='+fieldName+']').val(currentVal + 1);
    } else {
        $('input[data-field='+fieldName+']').val(0);
    }
});

$(document).on('click','.qtyminus',function(e){
    e.preventDefault();
    fieldName = $(this).attr('data-field');
    var currentVal = parseInt($('input[data-field='+fieldName+']').val());
    if (!isNaN(currentVal) && currentVal > 1) {
        $('input[data-field='+fieldName+']').val(currentVal - 1);
    } else {
        $('input[data-field='+fieldName+']').val(1);
    }
});


$('.categories-box .open-close').click(function(){
    $(this).toggleClass("active");
    $(this).closest('li').find('>ul').slideToggle("fast");
});
$(document).on('click','.overlay, .close-popup, .btn-continue, .fancybox-close', function() {
    hidePopup('.awe-popup');
    setTimeout(function(){
        $('.loading').removeClass('loaded-content');
    },500);
    return false;
})

function callbackW() {
    iWishCheck();
    iWishCheckInCollection();
    $(".iWishAdd").click(function () {
        var iWishvId = iWish$(this).parents('form').find("[name='id']").val();
        if (typeof iWishvId === 'undefined') {
            iWishvId = iWish$(this).parents('form').find("[name='variantId']").val();
        };
        var iWishpId = iWish$(this).attr('data-product');
        if (Bizweb.template == 'collection' || Bizweb.template == 'index') {
            iWishvId = iWish$(this).attr('data-variant');
        }
        if (typeof iWishvId === 'undefined' || typeof iWishpId === 'undefined') {
            return false;
        }
        if (iwish_cid == 0) {
            iWishGotoStoreLogin();
        } else {
            var postObj = {
                actionx : 'add',
                cust: iwish_cid,
                pid: iWishpId,
                vid: iWishvId
            };
            iWish$.post(iWishLink, postObj, function (data) {
                if (iWishFindAndGetVal('#iwish_post_result', data) == undefined) return;
                var result = (iWishFindAndGetVal('#iwish_post_result', data).toString().toLowerCase() === 'true');
                var redirect = parseInt(iWishFindAndGetVal('#iwish_post_redirect', data), 10);
                if (result) {
                    if (Bizweb.template == "product") {
                        iWish$('.iWishAdd').addClass('iWishHidden'), iWish$('.iWishAdded').removeClass('iWishHidden');
                        if (redirect == 2) {
                            iWishSubmit(iWishLink, { cust: iwish_cid });
                        }
                    }
                    else if (Bizweb.template == 'collection' || Bizweb.template == 'index') {
                        iWish$.each(iWish$('.iWishAdd'), function () {
                            var _item = $(this);
                            if (_item.attr('data-variant') == iWishvId) {
                                _item.addClass('iWishHidden'), _item.parent().find('.iWishAdded').removeClass('iWishHidden');
                            }
                        });
                    }
                }
            }, 'html');
        }
        return false;
    });
    $(".iWishAdded").click(function () {
        var iWishvId = iWish$(this).parents('form').find("[name='id']").val();
        if (typeof iWishvId === 'undefined') {
            iWishvId = iWish$(this).parents('form').find("[name='variantId']").val();
        };
        var iWishpId = iWish$(this).attr('data-product');
        if (Bizweb.template == 'collection' || Bizweb.template == 'index') {
            iWishvId = iWish$(this).attr('data-variant');
        }
        if (typeof iWishvId === 'undefined' || typeof iWishpId === 'undefined') {
            return false;
        }
        if (iwish_cid == 0) {
            iWishGotoStoreLogin();
        } else {
            var postObj = {
                actionx: 'remove',
                cust: iwish_cid,
                pid: iWishpId,
                vid: iWishvId
            };
            iWish$.post(iWishLink, postObj, function (data) {
                if (iWishFindAndGetVal('#iwish_post_result', data) == undefined) return;
                var result = (iWishFindAndGetVal('#iwish_post_result', data).toString().toLowerCase() === 'true');
                var redirect = parseInt(iWishFindAndGetVal('#iwish_post_redirect', data), 10);
                if (result) {
                    if (Bizweb.template == "product") {
                        iWish$('.iWishAdd').removeClass('iWishHidden'), iWish$('.iWishAdded').addClass('iWishHidden');
                    }
                    else if (Bizweb.template == 'collection' || Bizweb.template == 'index') {
                        iWish$.each(iWish$('.iWishAdd'), function () {
                            var _item = $(this);
                            if (_item.attr('data-variant') == iWishvId) {
                                _item.removeClass('iWishHidden'), _item.parent().find('.iWishAdded').addClass('iWishHidden');
                            }
                        });
                    }
                }
            }, 'html');
        }
        return false;
    });

}  window.callbackW=callbackW;


$(".click-to-page-contry a").click(function(){
    let name = $(this).attr("data-contry");
	localStorage.setItem("contryDuHoc", name);
});

let contry = $(".section_news_form #input_contry");
let contruDuhoc = localStorage.getItem("contryDuHoc");
if (contry.length){
	if(contruDuhoc){
		contry.val(contruDuhoc);
		localStorage.setItem("contryDuHoc", "");
	}
}

$('.site-footer h4').on('click', function(e){
    e.preventDefault();
    let w_width = $(window).width();
    let $this = $(this);
    if (w_width < 768){
        $this.parents('.site-footer .block-cs').find('ul.list-menu.has-toggle').stop().slideToggle();
        $(this).toggleClass('active')
    }
    return false;
});
setTimeout(function(){ fontLoader(); }, 1000);
function fontLoader() {
	var headID = document.getElementsByTagName('head')[0];
	var link = document.createElement('link');
	var link2 = document.createElement('link');
	link.type = 'text/css';
	link.rel = 'stylesheet';
	link2.type = 'text/css';
	link2.rel = 'stylesheet';
	headID.appendChild(link);
	headID.appendChild(link2);
	link2.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap';
	link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
	
};