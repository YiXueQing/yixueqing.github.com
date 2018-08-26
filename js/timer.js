/**
 * Created by 雪晴 on 2018/8/5.
 */
var breakLength = 5;
var session = 25;
var flag = 1;
$('#rest .left').click(function () {
    breakLength--;
    if (breakLength < 1) {
        breakLength = 1;
    }
    $('#rest span').html(breakLength);
    if($('.chunk').css('background-color') == 'rgb(255, 0, 0)'){
        clearInterval(timer);
        breaks = true;
        var second = parseInt($('#rest span').html()) * 60;
        startCountdown(second, second);
        $('.chunk').css('background-color' , 'red');
        $('.tip').html('Breaks!');
    }
});

$('#rest .right').click(function () {
    breakLength++;
    $('#rest span').html(breakLength);
    if($('.chunk').css('background-color') == 'rgb(255, 0, 0)'){
        clearInterval(timer);
        breaks = true;
        var second = parseInt($('#rest span').html()) * 60;
        startCountdown(second, second);
        $('.chunk').css('background-color' , 'red');
        $('.tip').html('Breaks!');
    }
});

$('#work .left').click(function () {
    session--;
    if (session < 1) {
        session = 1;
    }
    $('#work span').html(session);

    if($('.chunk').css('background-color') == 'rgb(153, 204, 0)'){
        changeWorkTime();
    }

});

$('#work .right').click(function () {
    session++;
    $('#work span').html(session);
    if($('.chunk').css('background-color') == 'rgb(153, 204, 0)'){
        changeWorkTime();
    }
});

function changeBreakTime(){

}

function changeWorkTime(){
    clearInterval(timer);
    running = true;
    var second = parseInt($('#work span').html()) * 60;
    startCountdown(second, second);
    $('.chunk').css('background-color' , '#99CC00');
    $('.tip').html('Session');
}

function getDateString(num) {
    num = Math.floor(num);
    return num > 9 ? num : '0' + num;
}

function calcTime(second) {
    var minute = second / 60;

    var h = Math.floor(minute / 60);
    var m = minute % 60;
    var s = second % 60;

    return (h > 0 ? h + ':' : '') + getDateString(m) + ':' + getDateString(s);
}

var timer = null, running = false, breaks = false, currentTime = 0;
function startCountdown(time, startTime) {
    if (time >= 0) {
        currentTime = time;
        $('.countDown .time').html(calcTime(time));
        $('.countDown .chunk').css('height', (100 - Math.floor(time / startTime * 100)) + '%');

        timer = setTimeout(function () {
            startCountdown(time - 1, startTime);
        }, 100);


    }else{
        if(breaks){
            breaks = false;
            clearInterval(timer);
            running = true;
            var second = parseInt($('#work span').html()) * 60;
            currentTime = currentTime > 0 ? currentTime : second;
            startCountdown(currentTime, second);
            $('.chunk').css('background-color' , '#99CC00');
            $('.tip').html('Session');
        }else{
            breaks = true;
            var second = parseInt($('#rest span').html()) * 60;
            currentTime = currentTime > 0 ? currentTime : second;
            startCountdown(currentTime, second);
            $('.chunk').css('background-color' , 'red');
            $('.tip').html('Breaks!');
        }



    }
}

$('.countDown').click(function () {
    if(running){
        running = false;
        clearInterval(timer);
    } else {
        running = true;
        var second = parseInt($('#work span').html()) * 60;
        currentTime = currentTime > 0 ? currentTime : second;
        startCountdown(currentTime, second);
    }
});

