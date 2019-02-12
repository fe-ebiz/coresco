$(function() {
    
	//수직정렬
	/*
	var popComLen = $('.popup-com').length;

	$(window).resize(function(){

		for ( var i = 0 ; i < popComLen ; i++){
			if ( $('.popup-com:eq('+i+')').attr('id') == 'popApply' ) {
				console.log($('.popup-com:eq('+i+')').attr('id'));
			} else if ( $('.popup-com:eq('+i+')').css('display') == 'block' ) {
				var secAlign = $('.popup-com:eq('+i+')').find('.popup-wrap');
				var popH = secAlign.outerHeight();

				secAlign.css({'margin-top' : '-'+(popH/2)+'px'});

				$('.msc-container').css({'position':'fixed'}).find('.msc-top-area, .msc-tab-area ').css({'position':'relative'});
				$('footer, .quick').css({'position':'fixed', 'bottom':'-330px'});
			}
		}
	}).resize();	
	*/
    
    //tab
    $('.msc-tab li').on('click', function(){
        if( $(this).hasClass('on') ){
            //console.log('true')
        }else{
            var liIndex = $('.msc-tab li').index(this)+1;
            
            $('.msc-tab').find('li').removeClass('on');
            $(this).addClass('on');
            $('section[id^="msctab"]').css({'display' : 'none'});
            $('#msctab-'+liIndex).css({'display' : 'block'});
        }
    });
    
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
    $('.adress-tab li').on('click', function(){
        if( $(this).hasClass('on') ){
            //console.log('true')
        }else{
            var liIndex = $('.adress-tab li').index(this)+1;
            
            $('.adress-tab').find('li').removeClass('on');
            $(this).addClass('on');
            $('div[id^="adtab"]').css({'display' : 'none'});
            $('#adtab-'+liIndex).css({'display' : 'block'});
        }
    });
    
    
    //팝업 열기 
    $('.btn-apply').on('click', function(){
        var sec;
        
		if( $(this).parents('section').hasClass('msc-family') ){
			//console.log('확장신청')
			sec = $('#popFamily');
		}else{
			//console.log('재발급 신청')
			sec = $('#popApply');
		}
        popOpen(sec);
        $('.msc-container').css({'position':'fixed'}).find('.msc-top-area, .msc-tab-area ').css({'position':'relative'});
        $('footer, .quick').css({'position':'fixed', 'bottom':'-330px'});
    });
	
    //팝업 닫기
    $('.btn-pop-close, .btn-cancel').on('click', function(){
        popClose($(this));
        $('.msc-container').css({'position':'relative'});
        $('footer, .quick').css({'position':'relative', 'bottom':'auto'});
    });
    
});

//팝업 열기
function popOpen(sec){
    var popBg = $('.pop_Bg_bk');
	
	sec.show();
	popBg.show();
        
	//수직정렬
	$(window).resize(function(){
		var secAlign = sec.find('.popup-wrap');
		var popH = secAlign.outerHeight();
		//var popW = secAlign.outerWidth();

		//secAlign.css({'margin-top' : '-'+(popH/2)+'px'});

	}).resize();
}

//팝업 닫기
function popClose(sec){
    var popBg = $('.pop_Bg_bk');
	
	sec.parents('.popup-com, .popup-card').hide();
	popBg.hide();
}





