/**
 * Created by 雪晴 on 2018/7/27.
 */

$(".icon").click(function(){
    $(".icon").css("display" , "none");
    $(".hunt").css("display" , 'block');
});

$(".close-btn").click(function(){
    $(".hunt").css("display" , 'none');
    $(".icon").css("display" , "inline-block");
    $('.result').html('');
    $('.search-box').val('');
});


$(".search-box").bind("keydown",function(e){
    var theEvent = e || window.event;

    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;

    if (code == 13) {
        var tip = $('.search-box').val();
        $.ajax({
            url : 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + tip,
            type : 'get',
            dataType : 'jsonp',
            success:function(data){
                var html = '';
                console.log(data);
                for(var i in data.query.pages){
                    html += '<a class="article" target="_blank" href="https://en.wikipedia.org/?curid=' + i + '">'+
                        '<p class="title">'+ data.query.pages[i].title + '</p>'+
                        '<p class="tip">'+ data.query.pages[i].extract + '</p>'+
                        '</a>'
                }
                $('.result').html(html);

            }
        });

    }

});

