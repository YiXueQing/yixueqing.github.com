/**
 * Created by 雪晴 on 2018/8/19.
 */

(function () {
    // 注册 process-bar 组件
    Vue.component('process-bar', {
        props: ['value' , 'name'],
        mounted: function () {
            this.setProcess(this.value);
        },
        methods: {
            setProcess: function(number) {
                var after = this.$refs.after;
                var before = this.$refs.before;

                if (number <= 50) {
                    after.style.transform = 'rotate(0deg)';
                    after.style.transform = 'rotate(0deg)';
                    before.style.background = '#ffffff';

                    before.style.transform = 'rotate(' + (number * 3.6) + 'deg)';
                } else {
                    before.style.transform = 'rotate(0deg)';
                    before.style.background = '#F6608A';

                    after.style.transform = 'rotate(' + ((number - 50) * 3.6) + 'deg)';
                }
            }
        },

        template: '<div class="content">'+
        '<div class="progress-wrap">' +
        '<div class="left-bar" ref="after"></div>' +
        '<div class="right-bar" ref="before"></div>' +
        '<div class="center-bar" ref="label">{{ value }}%</div>' +
        '</div>'+
        '<div class="word">{{ name }}</div>'+
        '</div>'
    });

    Vue.component('project-bar' , {
        props:['site'],
        template:'<a class="project-bar" target="_blank" :href="site"></a>'
    });

    var app = new Vue({
        el: '#app',
        data: { },

        mounted: function () {
            //this.setProcess(this.value);
        },

        methods: {
            changeMenu: function (e) {
                var dom = e.target;
                var index = parseInt(dom.getAttribute('data-index'));
                $(this.$el).animate({scrollTop: index * window.innerHeight}, 500);
            }
        }
    });
})();

$('.submit-btn').click(function(){
    var value = $('.import').val();
    window.open('http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=pZSWkZ2UnZaWnZHl1NSLxsrI&subject=' + value);
});


