$.ajax({
    type:"GET",
    url:"https://v.juhe.cn/weather/index",
    dataType:"jsonp",
    data:{
        cityname : '北京',
        dtype: 'json',
        format : 2,
        key : '08a4187feef537e9c526cfbba92df9db'
    },
    success:function(data){
        console.log(data);
        if(data.resultcode == 200){
            var html = '';
            html += '<p>今天天气：'+ data.result.today.weather + '</p>'+
                '<p>湿度：'+ data.result.sk.humidity + '</p>'+
                '<p>穿衣指数：'+ data.result.today.dressing_index + '</p>'+
                '<p>洗车指数：'+ data.result.today.wash_index + '</p>'+
                '<p>旅行指数：'+ data.result.today.travel_index + '</p>'+
                '<p>锻炼指数：'+ data.result.today.exercise_index + '</p>'+
                '<p>紫外线指数：'+ data.result.today.uv_index + '</p>';
            $('.describe').html(html);

            var html1 = '';
            for(var i = 0;i<data.result.future.length;i++){
                html1 += '<div class="casket">'+
                    '<p class="depict">'+ data.result.future[i].week + '</p>'+
                    '<p class="depict">'+ data.result.future[i].temperature + '</p>'+
                    '<p class="depict">'+ data.result.future[i].weather + '</p>'+
                    '<p class="depict">'+ data.result.future[i].wind + '</p>'+
                    '</div>';
            }
            $('.future').html(html1);

        }
    }
});
