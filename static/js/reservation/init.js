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
    
    //리스트 페이지번호
    $("#pagenation li a").on("click", function() {
        var idx = $(this).closest("li").index();
        var lastIdx = $(this).closest("ul").find("li").length;
        lastIdx -- ;
        //console.log(lastIdx);
        
        if( idx != 0 && idx !=1 && idx != lastIdx && idx != lastIdx-1){
            $("#pagenation li").removeClass("on");
            $(this).closest("li").addClass("on");
        }
        event.preventDefault();
    });
    
});






