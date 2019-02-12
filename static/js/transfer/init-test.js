$(function() {
    
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
    /*$('.btnOn').on('click', function(){
        var sec;
        var parentId = $(this).parents('.popup-com').attr('id');
        
        if( $(this).hasClass('btn-apply') ){
            if( $(this).parents('section').hasClass('msc-family') ){
                //console.log('확장신청')
                sec = $('#popFamily');
            }else{
                //console.log('재발급 신청')
                sec = $('#popApply');
            }
        }else if( $(this).hasClass('btn-adress') ){
            //console.log('주소')
            sec = $('#popAdress');
            
            //초기화
            $('.adress-tab').find('li').removeClass('on');
            $('.adress-tab').find('li:nth-of-type(1)').addClass('on');
            $('div[id^="adtab"]').css({'display' : 'none'}).end().find('#adtab-1').css({'display' : 'block'});
        }else{
            //console.log('nothing')
        }
        
        popToggle(sec, $(this));
    });*/
	
    $('.btnOn').on('click', function(){
        var sec;
        var parentId = $(this).parents('.popup-com').attr('id');
        
        if( $(this).hasClass('btn-apply') ){
            if( $(this).parents('section').hasClass('msc-family') ){
                //console.log('확장신청')
                sec = $('#popFamily');
            }else{
                //console.log('재발급 신청')
                sec = $('#popApply');
            }
        }else if( $(this).hasClass('btn-pop-apply') ){
            if( parentId == 'popApply' ){
                //console.log('배송지 체크')
                sec = $('#popCheck');
            }else if( parentId == 'popFamily' ){
                //console.log('확장신청 전 배송지 체크')
                sec = $('#popCheck');
                $('#popCheck').find('.a-btn:last-of-type').addClass('btn-add-family');
            }else{
                //console.log('가족 확장 체크')
                sec = $('#popFamilyCheck');
            }
        }else if( $(this).hasClass('btn-add-family') ){
            //console.log('가족 확장 입력')
            sec = $('#popAddCard');
				
			$('#popCheck').hide();

			var popBg = $('.pop_Bg_bk');
			var popBgIndex = Number(popBg.css('z-index'));
			var Index = 2;
			popBg.css({'z-index' : popBgIndex-Index})
			
        }else if( $(this).hasClass('btn-adress') ){
            //console.log('주소')
            sec = $('#popAdress');
            
            //초기화
            $('.adress-tab').find('li').removeClass('on');
            $('.adress-tab').find('li:nth-of-type(1)').addClass('on');
            $('div[id^="adtab"]').css({'display' : 'none'}).end().find('#adtab-1').css({'display' : 'block'});
        }else{
            //console.log('nothing')
        }
        
        popToggle(sec, $(this));
    });
    
    //팝업 닫기
    $('.btn-pop-close, .btn-cancel').on('click', function(){
        popToggle($(this).parents('.popup-com'), $(this));
        $('#popCheck').find('.a-btn:last-of-type').removeClass('btn-add-family');
    });
    
});

//팝업 열고 닫기
function popToggle(sec, btn){
    var popBg = $('.pop_Bg_bk');
    var popBgIndex = Number(popBg.css('z-index'));
    var Index = 2;
    
    if( btn.hasClass('btnOn') ){
        sec.show();
    
        if( popBgIndex == 9998 ){
			popBg.show();
			//console.log(popBg.css('z-index'))
        }
		popBg.css({'z-index' : popBgIndex+Index})
    }else{
        sec.hide();

        if( popBgIndex == 10000 ){
           popBg.hide();
		}
        popBg.css({'z-index' : popBgIndex-Index})
    }
}







