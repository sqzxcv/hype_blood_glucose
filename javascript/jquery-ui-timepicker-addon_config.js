	<!-- 日历设置开始 -->
	<link type="text/css" href="http://code.jquery.com/ui/1.9.1/themes/smoothness/jquery-ui.css" rel="stylesheet" />
    <link href="http://cdn.staticfile.org/jquery-ui-timepicker-addon/1.6.3/jquery-ui-timepicker-addon.css" type="text/css" />
    <script type="text/javascript" src="http://code.jquery.com/ui/1.9.1/jquery-ui.min.js"></script>
    <script type="text/javascript" src="http://cdn.staticfile.org/jquery-ui-timepicker-addon/1.6.3/jquery-ui-timepicker-addon.js"></script>
    <script type="text/javascript" src="https://cdn.staticfile.org/jquery-ui-timepicker-addon/1.6.3/i18n/jquery-ui-timepicker-zh-CN.js"></script>

    
    <script>
    
    /* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Cloudream (cloudream@gmail.com). */
jQuery(function ($) {
    $.datepicker.regional['zh-CN'] = {
        closeText: '关闭',
        prevText: '&#x3c;上月',
        nextText: '下月&#x3e;',
        currentText: '今天',
        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthNamesShort: ['一', '二', '三', '四', '五', '六',
                '七', '八', '九', '十', '十一', '十二'],
        dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        weekHeader: '周',
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '年'
    };
    $.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});
    
	//在场景加载完成后，立刻显示日历空间
  function hypeDocumentLoadCallback(hypeDocument, element, event) {
    
    	var div = hypeDocument.getElementById("testtt");
		div.innerHTML='<input id="time" type="text" />';
		jQuery(function () {
		    // 时间设置
		  $("#time").datetimepicker({
		        timeFormat: "HH:mm tt",
		        dateFormat: "yy-mm-dd"
		  });
	});	
    return true;
  }

  if("HYPE_eventListeners" in window === false) {
    window.HYPE_eventListeners = Array();
  }
  
  window.HYPE_eventListeners.push({"type":"HypeSceneLoad", "callback":hypeDocumentLoadCallback});
  
  

 </script>
 
 <style type="text/css">
 .demo-description {
	clear: both;
	padding: 12px;
	font-size: 1.3em;
	line-height: 1.4em;
}

.ui-draggable, .ui-droppable {
	background-position: top;
}

table {
	font-size: 1em;
}

body {
	font-size: 62.5%;
	font-family: "Trebuchet MS", "Arial", "Helvetica", "Verdana", "sans-serif";
}

 </style>
 
 <!-- 日历设置结束 -->