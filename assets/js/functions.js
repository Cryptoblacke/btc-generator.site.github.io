$( function() {
    var startValueRange = 0.1;
    if(localStorage.getItem("selected_amount") != null) {
        startValueRange = parseFloat(localStorage.getItem("selected_amount"));
        $(".selected-amount").text(startValueRange);
        var share = 3.45 - parseFloat(startValueRange);
        $(".miners-amount").html(((parseFloat(startValueRange)*share)/100).toFixed(5));
    }else {
        localStorage.setItem("selected_amount",0.1);
    }
    if(localStorage.getItem("selected_address") != null) {
        $(".input-address").val(localStorage.getItem("selected_address"));
    }
    $( "#slider-range-min" ).slider({
        range: "min",
        value: startValueRange,
        min: 0.1,
        max: 1.0,
        step: 0.02,
        slide: function( event, ui ) {
            $( "#amount" ).text(ui.value + " BTC" );
            $(".selected-amount").text(ui.value);
            var share = 3.45 - parseFloat(ui.value);

            $(".miners-amount").html(((parseFloat(ui.value)*share)/100).toFixed(5));
            localStorage.setItem('selected_share',((parseFloat(ui.value)*share)/100).toFixed(5));
            localStorage.setItem('selected_amount',ui.value);
            localStorage.setItem('selected_amount',ui.value);
        }
    });
    $( "#amount" ).text( $( "#slider-range-min" ).slider( "value" ) + " BTC" );

} );

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    var _ouibounce = ouibounce(document.getElementById('ouibounce-modal'),{
        aggressive: true
    });

    $('body').on('click', function() {
        $('#ouibounce-modal').hide();
    });

    $('#ouibounce-modal .modal-footer').on('click', function() {
        $('#ouibounce-modal').hide();
    });

    $('#ouibounce-modal .modal').on('click', function(e) {
        e.stopPropagation();
    });
});