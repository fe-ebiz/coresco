$(document).ready(function(){

    /* 팝업실행 */
    if( $('div').hasClass('.pop-notice') ){
        /* 공지사항 팝업 고정 */
        popupOn();
    }
    
    //이용관리규정안내 버튼 클릭시
    $('.btn-consult').on('click', function(){
        popupOn($('#popConsult'));
    });
    
    //상담신청하기 버튼 클릭시
    /*$('#popConsult .btn-pop-apply').on('click', function(){
        $(this).parents('.popup-com').fadeOut();
        popupOn($('#popConsultEnd'));
    });*/
    
    //회원카드 공지, 상담신청 팝업 닫기
    $('.btn-pop-close, #popConsultEnd .btn-pop-apply').on('click', function(){
        if( $(this).parents('div').hasClass('popup-com') ){
            var popCloseWrap = $(this).parents('.popup-com');
            popupOff(popCloseWrap);
        }else{
            //공지
            popupOff($('.pop-notice'));
        }
    });
    
    //2018여름 성수기 회원예약접수 배너 클릭시
    $('.banner-summer a').on('click', function(){
        popupOn($('#popSummer'));
    });
    
    //180820 성수기 시즌즉시 확정 이벤트 예약 접수 배너 클릭 시
    $('.banner-season a').on('click', function(){
        popupOn($('#popSeason'));
    });
    
    //180823 2018년 9월 회원 사전예약 배너 클릭 시
    $('.banner-member9 a').on('click', function(){
        popupOn($('#popMember9'));
    });
    
    //회원카드 공지, 상담신청, 회원예약접수 팝업 닫기
    $('.btn-pop-close, #popConsultEnd .a-btn').on('click', function(){
        if( $(this).parents('div').hasClass('popup-com') ){
            var popCloseWrap = $(this).parents('.popup-com');
            popupOff(popCloseWrap);
        }else{
            //공지
            popupOff($('.pop-notice'));
        }
    });
    
    //팝업 - 예약하기 클릭시 이동
    $('.popup-com .btn-move').on('click', function(){
        var moveT = $(this).parents('.popup-com').find(".evt-box").offset();
        $('html, body').stop().animate({scrollTop: moveT.top}, 800);
        event.preventDefault();
    });
    
    
    //달력 팝업 
    $('.btn-cal').on('click', function(){
        popupOn($('#popSummerCal'));
    });
    
	var mySwiper = new Swiper('.banner01', {
		prevButton:'.banner01 .btn-prev',
		nextButton:'.banner01 .btn-next',
	});
	var mySwiper = new Swiper('.banner02', {
		prevButton:'.banner02 .btn-prev',
		nextButton:'.banner02 .btn-next',
	});
	var mySwiper = new Swiper('.banner03', {
		prevButton:'.banner03 .btn-prev',
		nextButton:'.banner03 .btn-next',
	});
//	var gnbSwiper;
//	var target = $('.section');
//	gnbSwiper = new Swiper('.tab', {
//		slidesPerView:'auto',
//		freemode:true
//	});
	var target = $('.section');
	$('.menu_wr li a').click(function(){
		idx = $(this).parent().index();
		$('html, body').stop().animate({scrollTop:$($(this).attr('href')).offset().top-80},200),function(){
			$(this).addClass('on').parent().siblings().find('a').removeClass('on');
			//gnbSwiper.slideTo(idx-1);
		};
		return false;
	});
//	$(window).scroll(function(){
//		scroll = $(window).scrollTop();
//		target.each(function(i){
//			posY = $(this).offset().top-80;
//			if (scroll >= posY)
//			{
//				$('.menu_wr li').eq(i).find('a').addClass('on').parent('li').siblings().find('a').removeClass('on');
//				gnbSwiper.slideTo(i-1);
//			}
//			if (scroll == $(document).height()-$(window).height())
//			{
//				$('.menu_wr li:eq(5)').find('a').addClass('on').parent('li').siblings().find('a').removeClass('on');
//			}
//		});
//	});
    /* 190117 오시는 길 */
	$('#w-t-inner .way-tit').click(function(){
        var thIdx = $(this).index();
        $("#w-t-inner li").eq(thIdx).addClass("on").siblings().removeClass("on");
        //$("#w-m-inner li").eq(thIdx).addClass("on").siblings().removeClass("on");
        $("#w-m-inner li").eq(thIdx).fadeIn("fast").siblings().fadeOut("fast");
        $("#w-a-inner li").eq(thIdx).addClass("on").siblings().removeClass("on");
	});
    
	/*$('.map h4').click(function(){
		$(this).addClass('on').siblings('h4').removeClass('on');
		$(this).next('div').show().siblings('div').hide();
	});*/
    
	var fileTarget = $('.filebox .upload-hidden');
	fileTarget.on('change', function(){
		if (window.FileReader){
			var filename = $(this)[0].files[0].name;
		}
		else {
			var filename = $(this).val().split('/').pop().split('\\').pop();
		}
		$(this).siblings('.upload-name').val(filename);
	});
	$('.layer_popup').click(function(){
		var ancor = $(this).attr('href');
		$(ancor).fadeIn(200);
	});
	$('.close_layerpop').click(function(){
		$(this).parents('.layerpop').fadeOut(200);
		$("#pw").val("");
	});
	$('.side-bar a:first-child').click(function(){
		$('.side-bar').toggleClass('on');
		return false;
	});
	if ($('.receipt').css('display') == 'block')
	{
		$('#Wrapper').addClass('receipt_on');
	}else {
		$('#Wrapper').removeClass('receipt_on');
	}
	
	$('#allmenuH').hide();
	$('.menu_bt').click(function(){
		$('#allmenuH').show();
	});
	$('.dim').click(function(){
		$('#allmenuH').hide();
	});
});

/* 팝업 고정 */
function popupOn(openitem){
    openitem.show(function(){
        $(window).scrollTop(0);
    });
    
    //수직정렬
	$(window).resize(function(){
        
        if( openitem.hasClass('popup-com') ){
	        	if( openitem.hasClass('popup-season') ){

	        	}else{
	            var popH = openitem.find('.popup-wrap').outerHeight();

	            openitem.find('.popup-wrap').css({'margin-top' : '-'+(popH/2)+'px'});
    
    					$('html').css({'overflow': 'hidden', 'height': '100%'});
					    openitem.on('scroll touchmove mousewheel', function(event) { 
					        event.preventDefault();     
					        event.stopPropagation();     
					        return false; 
					    });
	        	}
            
        }else{
            //공지 팝업
            var popH = openitem.outerHeight();

            openitem.css({'margin-top' : '-'+(popH/2)+'px'});
        }
		
	}).resize();
}

/* 팝업 고정해제 */
function popupOff(closeitem){
    closeitem.hide();
    
    if( closeitem.hasClass('popup-cal') ){
        
    }else{
        $('html').css({'overflow': 'auto', 'height': '100%'});

        closeitem.off('scroll touchmove mousewheel');
    }
}