$(function() {
	Mock.mock('collect.json', {
		'collect|9': [{
			title: '@ctitle(12)',
			color: '@cname',
			"price|+1": 202,
			"id|+1": 1
		}]
	});
	$.ajax({
		type: "get",
		url: "collect.json",
		async: true,
		success: function(data) {
			var idata = JSON.parse(data);
			$.each(idata.collect, function(i, item) {
				$('.list').append("<li data-id="+i+">" + "<img src='../image/Pcsite/l-icon_03.png'>" + "<p>" + item.title + "<span>" + item.color + "</span>" + "</p>" + "<p>" + item.price + "元" + "</p>" + "<a>删除</a>" + "</li>")
				
			})
			$('.list li a').click(function() {
				$(this).parent("li").remove()
			})
		}
	});
})