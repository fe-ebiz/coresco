$(function() {
    
    /* 팝업실행 */
    if( $('div').hasClass('.pop-notice') ){
        /* 공지사항 팝업 고정 */
        popupOn();
    }
    
    
    /*페이지 스크롤*/
    $('.main-nav a').bind('click', function(event) {
        var $_anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($_anchor.attr('href')).offset().top - 89
        }, 800, 'easeInOutQuad');
        event.preventDefault();
    });
    
    /*고정 해더 등장*/
    $(window).scroll(function() {
        var st = $(window).scrollTop();
        if( st > 100){
            $("#header-affix").fadeIn("fast");
        } else {
            $("#header-affix").fadeOut("fast");
        }

    });
    
    /*지점 이미지 슬라이드*/
    $('.bs-box').bxSlider({
        auto: true
        /*prevSelector: '#slider-prev',
        nextSelector: '#slider-next',
        prevText: '<img src="../../images/sldBtn/prev.png" alt="다음">',
        nextText: '<img src="../../images/sldBtn/next.png" alt="이전">'*/
    });
    
    /*지도 탭 클릭*/
    $("#w-t-inner li").on("click",function() {
        var thIdx = $(this).index();
        //$("#w-t-inner li").removeClass("on");
        $("#w-t-inner li").eq(thIdx).addClass("on").siblings().removeClass("on");
        //$("#w-m-inner li").fadeOut("fast");
        $("#w-m-inner li").eq(thIdx).fadeIn("fast").siblings().fadeOut("fast");
        //$("#w-a-inner li").removeClass("on");
        $("#w-a-inner li").eq(thIdx).addClass("on").siblings().removeClass("on");
    });
    
    //회원예약 바로가기 버튼 클릭시
    $('.bi-link').on('click', function(){
        //popupOn($('#pop_wrap'));	//180727 이준혁 주석
    });
    
    //회원예약 바로가기 팝업 닫기
    $('.close').on('click', function(){
        popupOff($('#pop_wrap'));
    });
    
    //이용관리규정안내 버튼 클릭시
    $('.btn-consult').on('click', function(){
        popupOn($('#popConsult'));
    });
    
    //상담신청하기 버튼 클릭시
    /*$('#popConsult .btn-pop-apply').on('click', function(){
        $(this).parents('.popup-com').fadeOut();
        popupOn($('#popConsultEnd'));
    });*/
    
    //2018여름 성수기 회원예약접수 배너 클릭시
    $('.banner-summer a').on('click', function(){
		//180810 이준혁 추가
		var top = ( $(window).scrollTop() + ( $(window).height() - $('.window').height()) / 2 );
		top = top - 400;
		// css 스타일을 변경합니다.
		$('#popSummer').css({'top':top, 'position':'absolute'});
		$('#popSummerNext').css({'top':top, 'position':'absolute'});
		$('#popSummerCheck').css({'top':top, 'position':'absolute'});
		$('#popSummerEnd').css({'top':top, 'position':'absolute'});

        popupOn($('#popSummer'));
    });
    
	//성수기 시즌 즉시 확정 배너 클릭시
    $('.banner-season a').on('click', function(){
        popupOn($('#popSeason'), 'auto');
    });

    //2018년 9월 회원 사전 예약 접수 클릭시
    $('.banner-member9 a').on('click', function(){
        popupOn($('#popMember9'), 'auto');
    });
    
    //회원카드 공지, 상담신청, 회원예약접수 팝업 닫기
    $('.btn-pop-close, .btn-pop-close-2, #popConsultEnd .a-btn').on('click', function(){
        if( $(this).parents('div').hasClass('popup-com') ){
            var popCloseWrap = $(this).parents('.popup-com');
            popupOff(popCloseWrap);
        }else{
            //공지
            popupOff($('.pop-notice'));
        }
    });
    
    //달력 팝업 
    $('.btn-cal').on('click', function(){
        popupOn($('#popSummerCal'));
    });
    
});

/* 팝업 오픈  */
function popupOn(openitem, type){
    openitem.show(function(){
        $(window).scrollTop(0);
    });
    
    if( type == 'auto' ){
        //console.log('성수기')
    }else{
        //console.log('고정')
        $('html').css({'overflow': 'hidden', 'height': '100%'});
        /*openitem.on('scroll touchmove mousewheel', function(event) { 
            event.preventDefault();     
            event.stopPropagation();     
            return false; 
        });*/
    }
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