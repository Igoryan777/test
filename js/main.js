$(function (){
    $('#form input').focus(function (){
        if ( $(this).val().toUpperCase() == $(this).data('def-text').toUpperCase() ) {
            $(this).val('');
        }
    });
    $('#form input').blur(function (){
        if ( $(this).val().length == 0) {
            $(this).val($(this).data('def-text').toUpperCase());
        }
    });

    let rangeShow = $("#show");
    let rangeClock =  $('.meter-clock');
    let checkBox = 100 / $('input[type=checkbox]').length;
    $(rangeShow).text(0 + '%');
    rangeClock.css({'transform': 'rotate(' + (-90) + 'deg)'});

    function checkChange() {
        let rotateClock = $('input[type=checkbox]:checked').length * checkBox;
        rangeClock.css({'transform': 'rotate(' + (-90 + ((rotateClock * 180) / 100)) + 'deg)'});
        $(rangeShow).text(Math.round(rotateClock) + '%');
    }

    $('input[type="checkbox"]').on('change', checkChange);
});