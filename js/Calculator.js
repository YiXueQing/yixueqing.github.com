$("#zero").click(function(){
    $('.mark').removeClass('active');
    $('.message').html(0);
});

$('#preCent').click(function(){
    var sn = $('.message').html();
    var h = $(this).html();
    $('.message').html(sn + h);
});

$('#remove').click(function(){
    var text = $('.message').html();
    $('.message').html(text.substr(0, text.length - 1));
});

function number(obj){
    if($('.message').html() == 0 || $('#result').hasClass('has')){
        $('.message').html('');
    }
    var value = $(obj).html();
    var sn = $('.message').html();
    $('.message').html(sn + value);
    $('#result').removeClass('has');
}

$('.mark').click(function(){
    if($('.message').html() != 0){
        $('.mark.active').removeClass('active');
        $(this).addClass('active');
        var an = $('.message').html();
        var n = $(this).html();
        $('.message').html(an + n);
        $('#result').removeClass('has');
    }

});

$('#result').click(function(){
    $(this).addClass('active');
    var re = $('.message').html();
    $('.message').html(eval(re));
    $('.mark').removeClass('active');
    setTimeout(function(){
        $('#result').removeClass('active');
    } , 1000);
    $(this).addClass('has');
});