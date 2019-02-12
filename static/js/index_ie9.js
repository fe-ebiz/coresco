$(function() {
    
    var selectParent = ["#popConsult", "#popSummer", "#popSummerNext .day-box", "#popSummerNext .room-box", "#popSummerNext .num-box"];
    var selParnetLen = selectParent.length;

    for( var i = 0 ; i < selParnetLen ; i++ ){
        var allIndx = i;
        selectText($(selectParent[allIndx]));
    }
    
    //이용관리규정안내 팝업 시 셀렉트박스
    $('.btn-consult').on('click', function(){
        var sels = $('#popConsult');
        selectText(sels);
    });
    
    //성수기 회원예약접수 팝업 시 셀렉트박스
    $('.btn-banner-summer').on('click', function(){
        var sels = $('#popSummer');
        selectText(sels);
    });
    
    //성수기 회원예약접수 신청하기 팝업 시 셀렉트박스
    $('#popSummerNext .a-btn').on('click', function(){
        var sel = $('#popSummerNext');
        var selLen = sel.find('.form-box .sel-box').length;

        for( var j = 0 ; j < selLen ; j++ ){
            var index = j+1;
            var sels = sel.find('.sel-box:nth-of-type('+ index +')');
            selectText(sels);
        }
    });
    
    //성수기 시즌 즉시 확정 팝업 시 셀렉트박스
    $('.banner-season').on('click', function(){
        var sel = $('#popSeason');
        var selLen = sel.find('.form-box').length;
        //console.log(selLen)

        for( var j = 0 ; j < selLen ; j++ ){
            var index = j+1;
            var sels = sel.find('.form-box:nth-of-type('+ index +')');
            selectText(sels);
        }
    });
});

function selectText(item){
    var selarea = item.find('.sel-area');
    var selSpan = selarea.find('span');
    var select = selarea.find('select');
    
    selSpan.text(select.find('option:selected').text());
    selarea.change(function() {
        selSpan.text(select.find('option:selected').text());
    });
}