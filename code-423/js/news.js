$(function () {

    // 给时间补0的函数
    function padZero(n) {
        if(n < 10) {
            return '0' + n
        }else{
            return n
        }
    }

    // 定义格式化时间的过滤器
    template.defaults.imports.dateFormat = function (dtStr) {
        var date = new Date(dtStr)
        var y = date.getFullYear()
        var m = padZero(date.getMonth() + 1)
        var d = padZero(date.getDate())

        var hh = padZero(date.getHours())
        var mm = padZero(date.getMinutes())
        var ss = padZero(date.getSeconds())

        return y + '-' + m + '-' + d + '-' + hh + ':' + mm + ':' + ss 
    }

    // 获取新闻列表的函数
    function getNewLsit() {
        $.get('http://www.liulongbin.top:3006/api/news',
        function (res) {
            if(res.status !== 200) {
                return alert('获取新闻列表数据失败！')
            }
            for (var i = 0; i < res.data.length; i++) {
                res.data[i].tags = res.data[i].tags.split(',')
            }
            console.log(res.data)
            var htmlStr = template('tpl-news', res)
            $('#news-list').html(htmlStr)
        })
    }

    getNewLsit()
})