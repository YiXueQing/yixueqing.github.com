var y = '';
var text = '';
var data = [
    {
        h:10,
        text:'富强',
        r:100
    },
    {
        h:48,
        text:'自由',
        r:10
    },
    {
        h:85,
        text:'民主',
        r:50
    },
    {
        h:85,
        text:'法治',
        r:110
    },
    {
        h:105,
        text:'平等平等平等',
        r:180
    }
]
var html = '';
function time(){
    var timer = setInterval(function(){
        var sum = $('.words').length;
        $('.words').each(function(){
            var a = parseInt($(this).css('right'));
            var pwidth = $('#barrage-warp').width();
            if(a <= pwidth){
                a+=5;
                $(this).css('right' , a+"px");
            }else{
                $(this).remove();
                data.pop();

            }
        })
    },50)
}
function createBarrage(){
    for(var i = 0;i<data.length;i++){
        var high = data[i].h;
        var word = data[i].text;
        var right = data[i].r;
        html = "<div id='words' data-id='"+i+"' class='words'style='top:"+high+"px;right:"+right+"px;'>"+word+"</div>";
        $("#barrage-warp").append(html);
    }
    time();

}

createBarrage();

$(".del-btn").click(function(){
    $("#barrage-warp").html("");
});

$(".send-btn").click(function(){
    var word = $(".entry").val();
    if(word != ""){
        var high = parseInt(Math.random()*300+1);
        var html = "<div id='words' class='words'style='top:"+high+"px;right:10px;'>"+word+"</div>";
        $("#barrage-warp").append(html);
        $(".entry").val('');
    }else{
        alert("发送内容不能为空");
    }
})
