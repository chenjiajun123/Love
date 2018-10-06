
//我的订单开始
$(document).ready(function() {
	$('.my-order-content-main-middle a').click(function() {
		$(this).removeClass('toggle-2').addClass('toggle-1').siblings('a').addClass('toggle-2')

	})
	$('.my-order-content-main-middle a:nth-child(2)').click(function() {
		$('.list1').show()
		$('.list2').hide()
		$('.list3').hide()
	})
	$('.my-order-content-main-middle a:nth-child(3)').click(function() {
		$('.list2').show()
		$('.list1').hide()
		$('.list3').hide()
	})
	$('.my-order-content-main-middle a:nth-child(4)').click(function() {
		$('.list3').show()
		$('.list2').hide()
		$('.list1').hide()
	})
	$('.my-order-content-main-middle a:nth-child(1)').click(function() {
		$('.list1').show()
		$('.list2').show()
		$('.list3').show()
	})
})
//我的订单结束
//个人资料开始
$(document).ready(function() {
	var $dialog = $(".alert-1");
	var $mask = $(".zhezhao-1");

	//自动居中对话框
	function autoCenter(el) {
		var bodyW = $(window).width();
		var bodyH = $(window).height();
		var elW = el.width();
		var elH = el.height();
		$dialog.css({
			"left": (bodyW - elW) / 2 + 'px',
			"top": (bodyH - elH) / 2 + 'px'
		});
	};

	//点击弹出对话框
	$(".relative").click(function() {
		$dialog.css("display", "block");
		$mask.css("display", "block");
		autoCenter($dialog);
	});

	//禁止选中对话框内容
	if(document.attachEvent) { //ie的事件监听，拖拽div时禁止选中内容，firefox与chrome已在css中设置过-moz-user-select: none; -webkit-user-select: none;
		g('dialog').attachEvent('onselectstart', function() {
			return false;
		});
	}
	//声明需要用到的变量
	var mx = 0,
		my = 0; //鼠标x、y轴坐标（相对于left，top）
	var dx = 0,
		dy = 0; //对话框坐标（同上）
	var isDraging = false; //不可拖动

	//鼠标按下
	$(".title-1").mousedown(function(e) {
		e = e || window.event;
		mx = e.pageX; //点击时鼠标X坐标
		my = e.pageY; //点击时鼠标Y坐标
		dx = $dialog.offset().left;
		dy = $dialog.offset().top;
		isDraging = true; //标记对话框可拖动                
	});

	//鼠标移动更新窗口位置
	$(document).mousemove(function(e) {
		var e = e || window.event;
		var x = e.pageX; //移动时鼠标X坐标
		var y = e.pageY; //移动时鼠标Y坐标
		if(isDraging) { //判断对话框能否拖动
			var moveX = dx + x - mx; //移动后对话框新的left值
			var moveY = dy + y - my; //移动后对话框新的top值
			//设置拖动范围
			var pageW = $(window).width();
			var pageH = $(window).height();
			var dialogW = $dialog.width();
			var dialogH = $dialog.height();
			var maxX = pageW - dialogW; //X轴可拖动最大值
			var maxY = pageH - dialogH; //Y轴可拖动最大值
			moveX = Math.min(Math.max(0, moveX), maxX); //X轴可拖动范围
			moveY = Math.min(Math.max(0, moveY), maxY); //Y轴可拖动范围
			//重新设置对话框的left、top
			$dialog.css({
				"left": moveX + 'px',
				"top": moveY + 'px'
			});
		};
	});

	//鼠标离开
	$(".title-1").mouseup(function() {
		isDraging = false;
	});

	//点击关闭对话框
	$(".cancel").click(function() {
		$dialog.css("display", "none");
		$mask.css("display", "none");
	});
	$('.alert-1 .alert-1-main button').click(function() {
		$dialog.css("display", "none");
		$mask.css("display", "none");
	});

	//窗口大小改变时，对话框始终居中
	window.onresize = function() {
		autoCenter($dialog);
	};
	$('.radio').click(function(){
		$(this).addClass('background-img2').removeClass('background-img1').siblings('.radio1').removeClass('background-img2').addClass('background-img1')
	})
	$('.radio1').click(function(){
		$(this).addClass('background-img2').removeClass('background-img1').siblings('.radio').removeClass('background-img2').addClass('background-img1')
	})
});
//个人资料结束
//账户安全开始
$(document).ready(function() {
	$('input').focus(function(){
	m=$(this).val()
    $(this).val("")
	})
	$('input').blur(function(){
    $(this).val(m)
	})
	$('textarea').focus(function(){
	m=$(this).val()
    $(this).val("")
	})
	$('textarea').blur(function(){
    $(this).val(m)
	})
	var $dialog = $(".alert");
	var $mask = $(".zhezhao");

	//自动居中对话框
	function autoCenter(el) {
		var bodyW = $(window).width();
		var bodyH = $(window).height();
		var elW = el.width();
		var elH = el.height();
		$dialog.css({
			"left": (bodyW - elW) / 2 + 'px',
			"top": (bodyH - elH) / 2 + 'px'
		});
	};

	//点击弹出对话框
	$(".save-content .main .save-content-main .text-bottom .list1  .right").click(function() {
		$dialog.css("display", "block");
		$mask.css("display", "block");
		autoCenter($dialog);
	});

	//禁止选中对话框内容
	if(document.attachEvent) { //ie的事件监听，拖拽div时禁止选中内容，firefox与chrome已在css中设置过-moz-user-select: none; -webkit-user-select: none;
		g('dialog').attachEvent('onselectstart', function() {
			return false;
		});
	}
	//声明需要用到的变量
	var mx = 0,
		my = 0; //鼠标x、y轴坐标（相对于left，top）
	var dx = 0,
		dy = 0; //对话框坐标（同上）
	var isDraging = false; //不可拖动

	//鼠标按下
	$(".title").mousedown(function(e) {
		e = e || window.event;
		mx = e.pageX; //点击时鼠标X坐标
		my = e.pageY; //点击时鼠标Y坐标
		dx = $dialog.offset().left;
		dy = $dialog.offset().top;
		isDraging = true; //标记对话框可拖动                
	});

	//鼠标移动更新窗口位置
	$(document).mousemove(function(e) {
		var e = e || window.event;
		var x = e.pageX; //移动时鼠标X坐标
		var y = e.pageY; //移动时鼠标Y坐标
		if(isDraging) { //判断对话框能否拖动
			var moveX = dx + x - mx; //移动后对话框新的left值
			var moveY = dy + y - my; //移动后对话框新的top值
			//设置拖动范围
			var pageW = $(window).width();
			var pageH = $(window).height();
			var dialogW = $dialog.width();
			var dialogH = $dialog.height();
			var maxX = pageW - dialogW; //X轴可拖动最大值
			var maxY = pageH - dialogH; //Y轴可拖动最大值
			moveX = Math.min(Math.max(0, moveX), maxX); //X轴可拖动范围
			moveY = Math.min(Math.max(0, moveY), maxY); //Y轴可拖动范围
			//重新设置对话框的left、top
			$dialog.css({
				"left": moveX + 'px',
				"top": moveY + 'px'
			});
		};
	});

	//鼠标离开
	$(".title").mouseup(function() {
		isDraging = false;
	});

	//点击关闭对话框
	$(".cancel").click(function() {
		$dialog.css("display", "none");
		$mask.css("display", "none");
	});
	$('.alert .text form button:nth-child(2)').click(function() {
		$dialog.css("display", "none");
		$mask.css("display", "none");
	});

	//窗口大小改变时，对话框始终居中
	window.onresize = function() {
		autoCenter($dialog);
	};
});
$(document).ready(function() {
	var $dialog = $(".alert-2");
	var $mask = $(".zhezhao");

	//自动居中对话框
	function autoCenter(el) {
		var bodyW = $(window).width();
		var bodyH = $(window).height();
		var elW = el.width();
		var elH = el.height();
		$dialog.css({
			"left": (bodyW - elW) / 2 + 'px',
			"top": (bodyH - elH) / 2 + 'px'
		});
	};

	//点击弹出对话框
	$(".save-content .main .save-content-main .text-bottom .list2  .right").click(function() {
		$dialog.css("display", "block");
		$mask.css("display", "block");
		autoCenter($dialog);
	});

	//禁止选中对话框内容
	if(document.attachEvent) { //ie的事件监听，拖拽div时禁止选中内容，firefox与chrome已在css中设置过-moz-user-select: none; -webkit-user-select: none;
		g('dialog').attachEvent('onselectstart', function() {
			return false;
		});
	}
	//声明需要用到的变量
	var mx = 0,
		my = 0; //鼠标x、y轴坐标（相对于left，top）
	var dx = 0,
		dy = 0; //对话框坐标（同上）
	var isDraging = false; //不可拖动

	//鼠标按下
	$(".title-2").mousedown(function(e) {
		e = e || window.event;
		mx = e.pageX; //点击时鼠标X坐标
		my = e.pageY; //点击时鼠标Y坐标
		dx = $dialog.offset().left;
		dy = $dialog.offset().top;
		isDraging = true; //标记对话框可拖动                
	});

	//鼠标移动更新窗口位置
	$(document).mousemove(function(e) {
		var e = e || window.event;
		var x = e.pageX; //移动时鼠标X坐标
		var y = e.pageY; //移动时鼠标Y坐标
		if(isDraging) { //判断对话框能否拖动
			var moveX = dx + x - mx; //移动后对话框新的left值
			var moveY = dy + y - my; //移动后对话框新的top值
			//设置拖动范围
			var pageW = $(window).width();
			var pageH = $(window).height();
			var dialogW = $dialog.width();
			var dialogH = $dialog.height();
			var maxX = pageW - dialogW; //X轴可拖动最大值
			var maxY = pageH - dialogH; //Y轴可拖动最大值
			moveX = Math.min(Math.max(0, moveX), maxX); //X轴可拖动范围
			moveY = Math.min(Math.max(0, moveY), maxY); //Y轴可拖动范围
			//重新设置对话框的left、top
			$dialog.css({
				"left": moveX + 'px',
				"top": moveY + 'px'
			});
		};
	});

	//鼠标离开
	$(".title-2").mouseup(function() {
		isDraging = false;
	});

	//点击关闭对话框
	$(".cancel-2").click(function() {
		$dialog.css("display", "none");
		$mask.css("display", "none");
	});
	$('.alert .text form button:nth-child(2)').click(function() {
		$dialog.css("display", "none");
		$mask.css("display", "none");
	});

	//窗口大小改变时，对话框始终居中
	window.onresize = function() {
		autoCenter($dialog);
	};
});
//账户安全结束
//确认订单开始

$(document).ready(function() {
	
	$('.confirm-content .main .confirm-content-main .confirm-content-main-top ul li:nth-child(2) a').click(function() {
		$('.confirm-content .main .confirm-content-main .confirm-content-main-top form').show()

	})
	$('.address-content .main .address-content-main .bottom form button').click(function() {
		$('.confirm-content .main .confirm-content-main .confirm-content-main-top form button').hide()

	})
	$('.confirm-content .main .confirm-content-main .confirm-content-main-top ul li').mousemove(function(){
	$(this).addClass('background-img').css('border','none').siblings('li').css('border','block');
	})
	$('.confirm-content .main .confirm-content-main .confirm-content-main-top ul li').mouseout(function(){
	$(this).removeClass('background-img').css('border','solid 1px #E6E6E6')
	})
	
})
//确认订单结束
//解决方案开始


//解决方案结束
//我的评价开始
$(document).ready(function() {
	$('.wait').click(function() {
		$(this).addClass('toggle-1').removeClass('toggle-2')
		$('.already').toggleClass('toggle-2');
		$('.wait-assess table').show()
		$('.already-assess').hide();

	})
	$('.already').click(function() {
		$(this).addClass('toggle-1').removeClass('toggle-2')
		$('.wait').toggleClass('toggle-2');
		$('.wait-assess table').hide()
		$('.already-assess').show();

	})
})

//我的评价结束
//广告开始
//topnav-others开始
$(document).ready(function() {
	$('.topnav-others .main .javascript').click(function() {
		$('.topnav-others .main .javascript .tab-pic').toggle()
		
	})

	$('.topnav-others .main .javascript .tab-pic p').mouseenter(function() {
		$(this).css('background-color', '#F8F8F8').siblings('p').css('background-color', '#fff')
	})
	
})
//topnav-others结束
//购物车开始
$(document).ready(function() {
	//加的效果
	$(".add").click(function() {
		var n = $(this).prev().val();
		var num = parseInt(n) + 1;
		if(num == 0) {
			return;
		}
		$(this).prev().val(num);
		$(this).parents('tr').find('.xiaoji').text((num * 158) + '元')
		var sum_money = 0
		$('.table-list2 tbody th:first-child input:checked').each(function() {

			var num_money = parseInt($(this).parents().find('.num').val());
			sum_money += num_money * 158;
		})

		$('.price p:last-child span:nth-child(2)').text(sum_money)
	});
	//减的效果
	$(".jian").click(function() {
		var n = $(this).next().val();
		var num = parseInt(n) - 1;
		if(num == 0) {
			return
		}
		$(this).next().val(num);
		$(this).parents('tr').find('.xiaoji').text((num * 158) + '元')
		var sum_money = 0
		$('.table-list2 tbody th:first-child input:checked').each(function() {

			var num_money = parseInt($(this).parents().find('.num').val());
			sum_money += num_money * 158;
		})

		$('.price p:last-child span:nth-child(2)').text(sum_money)
	})
	//全选和反选
	
	
	$('.table-list2 thead th:first-child input').click(function() {
		var isChecked = false;
		isChecked = !isChecked;
		if(isChecked) {
			$('.table-list2 tbody th:first-child input').prop("checked", true)
			$(this).addClass('background-img3');
		$('.table-list2 tbody th:first-child input').addClass('background-img3')
		} else {
			$('.table-list2 tbody th:first-child input').removeProp("checked")
			$('.table-list2 thead th:first-child input').removeProp("checked").removeClass('background-img3').addClass('background-img4')
		$('.table-list2 tbody th:first-child input').removeClass('background-img3').addClass('background-img4')
		}
		
		var sum = 0;
		$('.table-list2 tbody th:first-child input:checked').each(function() {

			var num_1 = parseInt($(this).parents().find('.num').val());
			sum += num_1 * 158;
		})
		$('.price p:last-child span:nth-child(2)').text(sum)

		var all = $('.table-list2 tbody th:first-child input:checked').length
		$('.price p:nth-child(2) span:last-child').text(all);
		$('.table-list2 tbody th:first-child input:checked').parent().find('text').val();
	})
	//全选和反选结束
	//计算总共几件商品
	var count = $('.table-list2 tbody').length
	$('.price p:nth-child(2) span:first-child').text(count)
	//计算总共几件商品结束
	//点击删除商品
	$('.table-list2 tbody th:last-child span').click(function() {
		$(this).parents('tbody').detach();
		var val = $('.table-list2 tbody').length;
		$('.price p:nth-child(2) span:first-child').text(val)
		$('.price p span:last-child').text($('.table-list2 tbody th:first-child input:checked').length);
		var sum_money = 0
		$('.table-list2 tbody th:first-child input:checked').each(function() {

			var num_money = parseInt($(this).parents().find('.num').val());
			sum_money += num_money * 158;
		})

		$('.price p:last-child span:nth-child(2)').text(sum_money)
	})
	//点击删除商品结束
	//点击单件商品计算金额
	$('.table-list2 tbody th:first-child input[type="checkbox"]').click(function(e) {
		var isChecked1 = false;
		isChecked = !isChecked;
		if(isChecked1){
			$(this).removeClass('background-img4').addClass('background-img3')
		}else{
			$(this).removeClass('background-img3').addClass('background-img4')
		}
		var choice = $('.table-list2 tbody th:first-child input:checked').length;
		$('.price p span:last-child').text(choice);
		var sum_money = 0
		$('.table-list2 tbody th:first-child input:checked').each(function() {

			var num_money = parseInt($(this).parents().find('.num').val());
			sum_money += num_money * 158;
		})

		$('.price p:last-child span:nth-child(2)').text(sum_money)
	});
	//点击单件商品结算金额
	//全选情况下一个checkbox没有被选中
	
	//全选情况下一个checkbox没有被选中结束
	
})

   

//购物车结束
//
//订单倒计时效果
   var intDiff = parseInt(839); //倒计时总秒数量

    function timer(intDiff) {
        window.setInterval(function() {
            var day = 0,
                hour = 0,
                minute = 0,
                second = 0; //时间默认值     
            if (intDiff > 0) {
                day = 0
                hour =0
                minute = Math.floor(intDiff / 60);
                second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            $('.order-content .main .order-content-top .text-top .text-left p span').html('<s id="h"></s>' + hour + '时'+'<s></s>' + minute + '分'+'<s></s>' + second + '秒');
         
            intDiff--;
        }, 1000);
    }

    $(function() {
        timer(intDiff);
    });
//订单倒计时效果结束
//写评价星星评分开始
$(document).ready(function(){
$('.star').click(function(){
$('.star').removeClass('background-img5');
var index = $(this).index();
$('.star').each(function(i){
if(i < index) $(this).addClass('background-img5');
});
var o=$('.background-img5').size()

if(o<=2){
	$('.grade span').text("差")
}
else if(o<=4&&o>2){
	$('.grade span').text("中")
}
else{ 
	$('.grade span').text("好")
}
});


})
//写评价星星评分结束