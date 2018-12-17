(function($){
	window.cjax = {
		_op : {url:"404",dataType:"html",data:{}},
		_current:null,
		getCurrent:function(){
			return this._current;
		},
		getData : function(opts,successFn,errorFn){
			var op = $.extend({},this._op, opts);
			$.ajax({
				data : op['data'],
				url : op['url'],
				type : op['type']||'post',
				dataType : op['dataType']||'json',
				async: (op['async'] == undefined) || op['async'],
				contentType: op['contentType'] || "application/x-www-form-urlencoded; charset=utf-8", 
				success : function(data){
					if($.isFunction(successFn)){
						successFn(data);
					}
				},
				error : function(data){
					if($.isFunction(errorFn)){
						errorFn(data);
					}
					//Modal.alert(data.status+""+data.statusText);
					return false;
				}
			});
		},
		ccSubmit : function(opts,func){
			var op = $.extend({},this._op, opts);
			
		}
	}
	$.fn.extend({
		menu : function(){
			var that = this;
			that.click(function(event){
				if($(this).hasClass("dropdown-toggle")){
					return true;
				}
				event.preventDefault(); 
				var url = $(this).attr("url");
				if(isNotUrl(url)){
					return;
				}
				var getTimestamp = new Date().getTime();
				if(url.indexOf("?")>=0) {
					url = url + "&time=" + getTimestamp;
				}else{
					url = url + "?time=" + getTimestamp;
				}
				cjax.getData({url:url},function(data){
					$("#page_id").html(data);
					$("script[src='"+phUrl+"']").remove();
					$("script[src='"+sfUrl+"']").remove();
					var _placeholder=document.createElement("script");
					_placeholder.setAttribute("type","text/javascript");
					_placeholder.setAttribute("src",phUrl);
					document.body.appendChild(_placeholder);
					
					var _scrollFixed=document.createElement("script");
					_scrollFixed.setAttribute("type","text/javascript");
					_scrollFixed.setAttribute("src",sfUrl);
					document.body.appendChild(_scrollFixed);
				});
				$(".crumb").remove();
				$(".nav.nav-list").find("li.active").removeClass("active");
				setCrumb(this);
			});
			return that;
		}
	});
	
	function setCrumb(self){
		var $this = $(self);
		$this.parent().addClass("active");
		var sm ='<li class="active crumb">[name]</li>'.replace("\[name\]",$this.html());
		sm=sm.replace(/<b([\s\S])*b>/img,"");
		$(sm).insertAfter("#home");
		var isHasParent=$this.parent().parent().parent().children().eq(0).hasClass("dropdown-toggle");
		if(isHasParent){
			$this = $this.parent().parent().parent().children("a").get(0);
			arguments.callee($this);
		}
		return this;
	}
})(jQuery);
