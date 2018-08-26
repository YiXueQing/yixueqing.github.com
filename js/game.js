/**
 * Created by 雪晴 on 2018/8/7.
 */

// 当前关卡数据
var currentData = [];
// 当前关卡运行数据
var tempData = [];
// 定义显示方块定时器
var showTimer = null;
// 定义闪烁方块定时器
var vagueTimer = null;
var nextTimer = null;
var falseTimer = null;
// 是否是严格模式
var strict = false;

function startPass(number) {
    if(number == 21) alert('游戏胜利');
    // 如果未通关直接退出
    if (tempData.length > 0) return;

    // 显示游戏阅读模式
    $('.motif').text('Watch!');

    // 清空上次关卡数据
    currentData = [];
    tempData = [];
    $('.sum').text(number < 10 ? '0' + number : number);

    for (var i = 0; i < number; i++) {
        var index = Math.floor(Math.random() * 4);
        currentData.push(index);
    }
    tempData = currentData.concat();
    displayPass(currentData.concat());
}

// 显示游戏关卡
function displayPass(arr) {
    if (arr.length > 0) {
        $('.casket .cell').removeClass('enabled');
        var index = arr.shift();

        // 闪烁游戏方块
        playSound('https://www.freecodecamp.cn/images/simonSound1.mp3');
        $('.cell[data-id="' + index + '"]').css('filter', 'brightness(2)');

        vagueTimer = setTimeout(function () {
            $('.cell[data-id="' + index + '"]').css('filter', '');
        }, 500);

        showTimer = setTimeout(function () {
            displayPass(arr);
        }, 1000);
    } else {
        $('.casket .cell').addClass('enabled');
        $('.motif').text('Ready Go!');
    }
}

// 开始关卡
function playPass(value) {
    var data = tempData.shift();
    if (data === value) {
        // 通关成功，下一关
        if (tempData.length === 0) {
            nextTimer = setTimeout(function(){
                startPass(currentData.length + 1);
            } , 1000)

        }
    } else {
        // 如果为严格模式，则重新开始
        if (strict) {
            reset();
            startPass(1);
        } else {
            $('.sum').text('!!');
            playSound('https://www.freecodecamp.cn/images/simonSound3.mp3');
            var count = currentData.length;
            falseTimer = setTimeout(function(){
                $('.sum').text(count < 10 ? '0' + count : count);
                // 通关失败，还原 tempData
                tempData = currentData.concat();
                // 通关失败，重复此关
                displayPass(currentData.concat());
            } , 1000)


        }
    }
}

//播放声音
function playSound(src){
    var dom = document.createElement('audio');
    dom.src = src;
    dom.autoplay = 'autoplay';
}

// 重置游戏
function reset() {
    // 还原所有数据回到第一关
    currentData = [];
    tempData = [];
    clearTimeout(vagueTimer);
    clearTimeout(showTimer);
    clearTimeout(nextTimer);
    clearTimeout(falseTimer);
}

// 初始化
function init() {
    // 绑定开始按钮事件
    $('#start_btn').click(function () {
        reset();
        startPass(1);
    });

    //绑定严格模式按钮
    $('#strict_btn').click(function(){
        strict = $(this).hasClass('strict');
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    });

    // 游戏方块点击事件
    $('.casket .cell').click(function () {
        // 判断当前是否可以进行游戏了
        if (!$(this).hasClass('enabled')) return;

        var id = Number($(this).attr('data-id'));
        playPass(id);
        playSound('https://www.freecodecamp.cn/images/simonSound1.mp3');
    });
}

init();




