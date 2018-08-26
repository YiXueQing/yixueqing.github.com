/**
 * Created by 雪晴 on 2018/8/19.
 */

Vue.component('process-bar', {
    props: ['value' , 'name'],
    /*created: function() {
        console.log('created', this.$refs);
    },*/
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
                before.style.background = '#F6608A';

                before.style.transform = 'rotate(' + (number * 3.6) + 'deg)';
            } else {
                before.style.transform = 'rotate(0deg)';
                before.style.background = '#ffffff';

                after.style.transform = 'rotate(' + ((number - 50) * 3.6) + 'deg)';
            }

            //this.$refs.label.innerText = number + '%';
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

Vue.component('projects' , {
    props:['site'],
    template:'<a class="article" target="_blank" :href="site"><div class="skip"><div class="cue">这是一段描述</div></div></a>'
});




var substance = new Vue({
    el: '#container',
    data: {
        todos: [
            {src:'#Home' , text: '主页' },
            {src:'#About' , text: '关于' },
            {src:'#Skills' , text: '技能' },
            {src:'#Skills' ,text: '作品展示' },
            {src:'#Contact' ,text: '联系我' }
        ]
    }
});





