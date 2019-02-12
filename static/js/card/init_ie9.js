$(function() {
    
    var selectParent = ["#popApply", "#popFamily .phone-box", "#popFamily .ticket-box"];
    var selParnetLen = selectParent.length;

    for( var i = 0 ; i < selParnetLen ; i++ ){
        var allIndx = i;
        selectText($(selectParent[allIndx]));
    }
    
    $('.btn-pop-apply').on('click', function(){
        if( $('#popAddCard').css('display') == 'block' ){
            var cardSel = $('#popAddCard');
            var cardSelLen = cardSel.find('.pop-family-box').length;
            
            for( var j = 0 ; j < cardSelLen ; j++ ){
                var index = j+1;
                var cardSels = cardSel.find('.pop-family-box:nth-of-type('+ index +')');
                selectText(cardSels);
            }
            
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
