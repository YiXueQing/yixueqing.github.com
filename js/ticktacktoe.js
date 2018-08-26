/**
 * Created by 雪晴 on 2018/8/6.
 */
var cur , com;
var sum = Math.floor(Math.random()*9);
var arr = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];
var arr1 = [];//电脑
var arr2 = [];
var success = false;
$('.role').click(function(){
    var part = $(this).text();
    if(part == 'x'){
        $('.region').eq(sum).text('o');
        cur = 'o';
        com = 'o';
    }else{
        $('.region').eq(sum).text('x');
        cur = 'x';
        com = 'x';
    }
    for(var i = 0;i<arr.length;i++){
        if(arr[i] == sum){
            arr.splice(i , 1);
        }
    }
    $('.shade , .prompt').hide();

});

$('.region').click(function(){
    if($(this).text() == ''){
        var id = $(this).attr('data-id');
        for(var i = 0;i < arr.length;i++){
            if(arr[i] == id){
                arr.splice(i , 1);
            }
        }
        if(cur == 'x'){
            $(this).text('o');
        }else{
            $(this).text('x');
        }
        decide();
        if(!success){
            var sn = arr[Math.floor(Math.random()*arr.length)];
            for(var j = 0;j<arr.length;j++){
                if(arr[j] == sn){
                    $('.region').eq(sn).text(com);
                    arr.splice(j , 1);
                }
            }
            decide();
        }

    }
});

function rest(){
    success = false;
    if(com == 'x'){
        $('.region').eq(sum).text('x');
        cur = 'x';
    }else{
        $('.region').eq(sum).text('o');
        cur = 'o';
    }
    arr = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];
    for(var i = 0;i<arr.length;i++){
        if(arr[i] == sum){
            arr.splice(i , 1);
        }
    }
}

//判断是否有相同的
function decide(){
    var html1 = $('.region').eq(0).text();
    var html2 = $('.region').eq(1).text();
    var html3 = $('.region').eq(2).text();
    var html4 = $('.region').eq(3).text();
    var html5 = $('.region').eq(4).text();
    var html6 = $('.region').eq(5).text();
    var html7 = $('.region').eq(6).text();
    var html8 = $('.region').eq(7).text();
    var html9 = $('.region').eq(8).text();
    if(html1 === html2 && html2 === html3 && html1 !== ''){
        success = true;
        $('.across-top').css('display' , 'inline-block');
        setTimeout(function(){
            $('.across-top').css('display' , 'none');
            $('.region').text('');
            rest();
        } , 2000);
    }else if(html4 === html5 && html5 === html6 && html4 !== ''){
        success = true;
        $('.across-middle').css('display' , 'inline-block');
        setTimeout(function(){
            $('.across-middle').css('display' , 'none');
            $('.region').text('');
            rest();
        } , 2000);
    }else if(html7 === html8&& html8 === html9 && html7 !== ''){
        success = true;
        $('.across-bottom').css('display' , 'inline-block');
        setTimeout(function(){
            $('.across-bottom').css('display' , 'none');
            $('.region').text('');
            rest();
        } , 2000);
    }else if(html1 === html4 && html4 === html7 && html1 !== ''){
        success = true;
        $('.stand-left').css('display' , 'inline-block');
        setTimeout(function(){
            $('.stand-left').css('display' , 'none');
            $('.region').text('');
            rest();
        } , 2000);
    }else if(html2 === html5&& html5 === html8 && html2 !== ''){
        success = true;
        $('.stand-middle').css('display' , 'inline-block');
        setTimeout(function(){
            $('.stand-middle').css('display' , 'none');
            $('.region').text('');
            rest();
        } , 2000);
    }else if(html3 === html6 && html6 === html9 && html3 !== ''){
        success = true;
        $('.stand-right').css('display' , 'inline-block');
        setTimeout(function(){
            $('.stand-right').css('display' , 'none');
            $('.region').text('');
            rest();
        } , 2000);
    }else if(html3 === html5 && html5 === html7 && html3 !== ''){
        success = true;
        $('.line-right').css('display' , 'inline-block');
        setTimeout(function(){
            $('.line-right').css('display' , 'none');
            $('.region').text('');
            rest();
        } , 2000);
    }else if(html1 === html5 && html5 === html9 && html1 !== ''){
        success = true;
        $('.line-left').css('display' , 'inline-block');
        setTimeout(function(){
            $('.line-left').css('display' , 'none');
            $('.region').text('');
        } , 2000);
    }else if(arr.length === 0){
        success = true;
        $('.region').text('');
        rest();
    }
}



