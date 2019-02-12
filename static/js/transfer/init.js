$(function() {
    
    //faq
    var faqLi = $('.faq-list li');
    var faqA = faqLi.find('.f-a');
    faqA.css({'display' : 'none'});
    
    $('.faq-list li .f-q').on('click', function(){
        var faqThis = $(this).parent('li');
        
        if( faqThis.hasClass('on') ){
            faqThis.removeClass('on');
            faqThis.find('.f-a').slideUp('fast');
        }else{
            faqLi.removeClass('on');
            faqA.slideUp('fast');
            faqThis.addClass('on');
            faqThis.find('.f-a').slideDown('fast');
        }
    });
    
    //팝업 tab
    /*$('.adress-tab li').on('click', function(){
        if( $(this).hasClass('on') ){
            //console.log('true')
        }else{
            var liIndex = $('.adress-tab li').index(this)+1;
            
            $('.adress-tab').find('li').removeClass('on');
            $(this).addClass('on');
            $('div[id^="adtab"]').css({'display' : 'none'});
            $('#adtab-'+liIndex).css({'display' : 'block'});
        }
    });*/
    
    //팝업 열기 
    $('.btn-apply').on('click', function(){
        popOpen($('#popApply'));
    });
	
    //팝업 닫기
    $('.btn-pop-close, .btn-cancel').on('click', function(){
        popClose($(this));
    });
    
});

//팝업 열기
function popOpen(sec){
	//180823 이준혁 추가
	var left = ( $(window).scrollLeft() + ( $(window).width() - $('.window').width()) / 2 );
	var top = ( $(window).scrollTop() + ( $(window).height() - $('.window').height()) / 2 );
	top = top-400;
	sec.css({'left':left,'top':top, 'position':'absolute'});

    var popBg = $('.pop_Bg_bk');
	
	sec.show();
	popBg.show();
}

//팝업 닫기
function popClose(sec){
    var popBg = $('.pop_Bg_bk');
	
	sec.parents('.popup-card').hide();
	popBg.hide();
}







