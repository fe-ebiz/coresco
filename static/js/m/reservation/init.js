$(function() {
    
    //tab
    $('.rsv-tab li').on('click', function(){
        if( $(this).hasClass('on') ){
            //console.log('true')
        }else{
            $('.rsv-tab').find('li').removeClass('on');
            $(this).addClass('on');
        }
    });
    
});






