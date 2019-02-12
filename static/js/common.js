$(function() {

	//2018여름 성수기 회원예약접수 배너 클릭시
    $('.banner-summer a').on('click', function(){
        popupOn($('#popSummer'));
    });

	//성수기 시즌 즉시 확정 배너 클릭시
    $('.banner-season a').on('click', function(){
        popupOn($('#popSeason'), 'auto');
    });
    
    //팝업 닫기
    $('.btn-pop-close, .btn-pop-close-2, #popConsultEnd .a-btn').on('click', function(){
        if( $(this).parents('div').hasClass('popup-com') ){
            var popCloseWrap = $(this).parents('.popup-com');
            popupOff(popCloseWrap);
        }else{
            //공지
            popupOff($('.pop-notice'));
        }
    });

});

/* 팝업 오픈  */
function popupOn(openitem, type){
    openitem.show();
    
    if( type == 'auto' ){
        //console.log('성수기')
    }else{
        //console.log('고정')
        $('html').css({'overflow': 'hidden', 'height': '100%'});
        openitem.on('scroll touchmove mousewheel', function(event) { 
            event.preventDefault();     
            event.stopPropagation();     
            return false; 
        });
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