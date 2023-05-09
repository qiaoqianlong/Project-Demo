function getCommentList() {
    $.ajax({
        methods: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        data: {},
        success: function(res) {
            if(res.status !== 200) return alert('获取数据失败！')
            // console.log('获取数据成功！')
            var rows = []
            $.each(res.data, function(i, item) {
                var str = '<ul class="list-group" id="cmt-list"><li class="list-group-item"><span class="badge" style="background-color: orange;">评论时间：'+ item.time +'</span><span class="badge" style="background-color: aqua;">评论人：'+ item.username +'</span>'+ item.content +'</li></ul>'
                rows.push(str)
            })
            $('#cmt-list').empty().append(rows.join(''))
        }
    })
}

getCommentList()

$(function () {
    $('#formAddCmt').submit(function (e) {
      e.preventDefault()
      var data = $(this).serialize()
      $.post('http://www.liulongbin.top:3006/api/addcmt', data, function(res){
        if(res.status !== 201) {
            alert('发表评论失败')   
        }
        getCommentList()
        $('#formAddCmt')[0].reset()
      })
    })
  })
