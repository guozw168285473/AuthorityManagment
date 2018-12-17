function ajaxPostJson(url, postData, callBack, async) {
	if (async === undefined) {
		async = false; // 默认同步方式
	}
	try {
		jQuery.ajax({
			type : 'post',
			dataType : "json",
			url : url,
			timeout : 30000,
			data : postData,
			cache : false,
			async : async,
			contentType : "application/x-www-form-urlencoded; charset=utf-8",
			success : function(data) {
				callBack(data);
			},
			error : function(data) {
				var result = data.responseText;
				if(result!=undefined){
					result = result.substr(result.indexOf('decodeURIComponent')+20,result.indexOf('));')-56);
					if(result!=''){
						alert(decodeURIComponent(result));
					}
				}
			}
		});
	} catch (e) {

	}
}

function ajaxPostJsonForIndex(url, postData, callBack, async) {
	if (async === undefined) {
		async = false; // 默认同步方式
	}
	try {
		jQuery.ajax({
			type : 'post',
			dataType : "json",
			url : url,
			data : postData,
			cache : false,
			async : async,
			contentType : "application/x-www-form-urlencoded; charset=utf-8",
			success : function(data) {
				callBack(true, data);
			},
			error : function(data) {
				var result = data.responseText;
				if(result!=undefined){
					result = result.substr(result.indexOf('decodeURIComponent')+20,result.indexOf('));')-56);
					if(result!=''){
						callBack(false, decodeURIComponent(result));
					}
				}
			}
		});
	} catch (e) {

	}
}

function checkUndefined(value) {
	return typeof (value) == "undefined" ? true : false;
}

function checkNull(value) {
	return value == null ? true : false;
}

function checkEmpty(value) {
	var result = false;
	if (checkUndefined(value) || checkNull(value) || value == "") {
		result = true;
	}
	return result;
}

function changeNullToEmpty(value) {
	if (checkEmpty(value)) {
		value = "";
	}
	return value;
}

function formatTimeStamp(date) {
	var result = "";
	if (!checkEmpty(date)) {
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		m = m < 10 ? '0' + m : m;
		var d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		result = y + '-' + m + '-' + d;
	}
	return result;
}

function formatTimeStamp2nd(date) {
	var result = "";
	if (!checkEmpty(date)) {
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		m = m < 10 ? '0' + m : m;
		var d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		var h = date.getHours();
		h = h < 10 ? ('0' + h) : h;
		var mm = date.getMinutes();
		mm = mm < 10 ? ('0' + mm) : mm;
		var s = date.getSeconds();
		s = s < 10 ? ('0' + s) : s;
		result = y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s;
	}
	return result;
}

function parseToDate(dateStr) {
	var result;
	if (!checkEmpty(dateStr)) {
		try {
			result = new Date(dateStr.replace(/-/g, "/"));
		} catch (e) {
			alert("传入文本不是日期格式：" + dateStr);
			return;
		}
	}
	return result;
}

function convertTableParam(obj) {
	var param = {};
	$.each(obj, function() {
		param[this.name] = this.value;
	});
	return param;
}

$.fn.serializeJson = function() {
	var serializeObj = {}; // 目标对象
	var array = this.serializeArray(); // 转换数组格式
	$(array).each(function() { // 遍历数组的每个元素 {name : xx , value : xxx}
		if (serializeObj[this.name]) { // 判断对象中是否已经存在 name，如果存在name
			if ($.isArray(serializeObj[this.name])) {
				serializeObj[this.name].push(this.value); // 追加一个值 hobby
			} else {
				// 将元素变为 数组 ，hobby : ['音乐','体育']
				serializeObj[this.name] = [ serializeObj[this.name], this.value ];
			}
		} else {
			serializeObj[this.name] = this.value; // 如果元素name不存在，添加一个属性 name:value
		}
	});
	return serializeObj;
};

function initMainPage(url,uri,customUri){//uri为左侧菜单的对应路径链接,customUri自定义路径 参数存在则采用该值 
	cjax.getData({
		url : url
	}, function(data) {
		$("#page_id").html(data);
		var el=document.createElement("script");
		el.setAttribute("type","text/javascript");
		el.setAttribute("src",phUrl);
		document.body.appendChild(el);
	});
	homeSetCrumb(this,uri,customUri)
}

function homeSetCrumb(self,uri,customUri){
	var $this = $(self);
	var $val=$("#sidebar").find('[url="'+uri+'"]').html();
	var $parents;
	var $arr=[];
	if(!!customUri){
		$("#home").after("<li class='active crumb'>"+customUri+"</li>");
	}else{
		if(!!$val){
			var sm ='<li class="active crumb">[name]</li>'.replace("\[name\]",$val);
			sm=sm.replace(/<b([\s\S])*b>/img,"");
			$(sm).insertAfter("#home");
			$parents=$('#sidebar').find('[url="'+uri+'"]').parent().parents("li").children("a");
			if(!!$parents){
				var _str=$parents.html().replace(/<b([\s\S])*b>/img,"");
				$("#home").after("<li class='active crumb'>"+_str+"</li>");
				_str='';
			}
	/*		for(var i=0;i<$parents.length;i++ ){
				$arr.unshift('<li class="active crumb">'+$parents.eq(i).html()+'</li>');
			}*/
//			$($arr.join()).replace(/<b([\s\S])*b>/img,"").insertAfter("#home");
		}		
	}

}

// 将number格式化为小数位数为length的数据，如 formatDecimal(0.3,2) = 0.30,formatDecimal(1,2) = 1.00
function formatDecimal(number, length) {    
    var f = parseFloat(number);    
    if (isNaN(f)) {    
        return false;    
    }    
    var f = Math.round(number*100)/100;    
    var s = f.toString();    
    var rs = s.indexOf('.');    
    if (rs < 0) {    
        rs = s.length;    
        s += '.';    
    }    
    while (s.length <= rs + length) {    
        s += '0';    
    }    
    return s;    
}

function fomatFloat(src,pos){       
    return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos);       
}  

function findColumnName(columnWithTableName){
	if (checkEmpty(columnWithTableName) || columnWithTableName.indexOf(".") < 0) {
		return columnWithTableName;
	}
	
    return columnWithTableName.split(".")[1];       
}   
