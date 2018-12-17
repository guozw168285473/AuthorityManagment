$(function() {
	if ($.fn.modal) {
		$.fn.modal.defaults.spinner = $.fn.modalmanager.defaults.spinner = '<div class="loading-spinner" style="width: 200px; margin-left: -100px;">' +
			'<div class="progress progress-striped active">' +
			'<div class="progress-bar" style="width: 100%;"></div>' +
			'</div>' +
			'</div>';

		$.fn.modalmanager.defaults.resize = true;
	}

	window.ModalDialog = function() {
		var _tplHtml = '<div class="modal fade" id="[Id]" data-backdrop="static">' +
			'<div class="modal-header">' +
			'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' +
			'<h5 class="modal-title"><i class="icon-exclamation-sign"></i> [Title]</h5>' +
			'</div>' +
			'<div class="modal-body small">' +
			'<p>[Message]</p>' +
			'</div>' +
			'<div class="modal-footer" >' +
			'<button type="button" class="btn btn-primary ok" data-dismiss="modal">[BtnOk]</button>' +
			'<button type="button" class="btn btn-default cancel" data-dismiss="modal">[BtnCancel]</button>' +
			'</div>' +
			'</div>';

		var _tplLoadHtml_close = '<div class="modal fade" id="[Id]"  data-backdrop="static">' +
		'<div class="modal-header">' +
		'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' +
		'<h5 class="modal-title">[Title]</h5>' +
		'</div>' +
		'<div class="modal-body " >' +
		'<div class="row" id = "bodyContext" ></div>'+
		'</div>' +
		'<div class="modal-footer" >' +
		'<button type="button" class="btn btn-default cancel" data-dismiss="modal">[BtnClose]</button>' +
		'</div>' +
		'</div>';
		
		 
		var _tplshowHtml = '<div class="modal fade" id="[Id]"  data-backdrop="static">' +
		'<div class="modal-header">' +
		'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' +
		'<h5 class="modal-title">[Title]</h5>' +
		'</div>' +
		'<div class="modal-body " >' +
		'<div class="row" id = "bodyContext" ></div>'+
		'</div>' +
		'<div class="modal-footer" >' +
		'<button type="button" class="btn btn-primary ok" onclick="confirm(this)" data-dismiss="modal">[BtnOk]</button>' +
		'<button type="button" class="btn btn-default cancel" data-dismiss="modal">[BtnCancel]</button>' +
		'</div>' +
		'</div>';
		
		var _tplshowHtml2 = '<div class="modal fade" id="[Id]"  data-backdrop="static">' +
		'<div class="modal-header">' +
		'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' +
		'<h5 class="modal-title">[Title]</h5>' +
		'</div>' +
		'<div class="modal-body " >' +
		'<div class="row" id = "bodyContext" ></div>'+
		'</div>' +
		'<div class="modal-footer" >' +
		'<button type="button" class="btn btn-primary ok"  onclick="confirm(\'[type]\')">[BtnOk]</button>' +
		'<button type="button" class="btn btn-default cancel" data-dismiss="modal">[BtnCancel]</button>' +
		'</div>' +
		'</div>';
		
		var _tplshowHtml_noButton = '<div class="modal fade" id="[Id]" data-backdrop="static">' +
		'<div class="modal-header">' +
		'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' +
		'<h5 class="modal-title">[Title]</h5>' +
		'</div>' +
		'<div class="modal-body " >' +
		'<div class="row" id = "bodyContext" ></div>'+
		'</div>' +
		'</div>';
		
		var _tpl_iframe = '<div class="modal fade" id="[Id]" data-backdrop="static">' +
		'<div class="modal-header">' +
		'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' +
		'<h5 class="modal-title">[Title]</h5>' +
		'</div>' +
		'<div class="modal-body " >' +
		'<iframe src="[Url]" width="100%" height="100%"></iframe>'+
		'</div>' +
		'<div class="modal-footer" >' +
		'<button type="button" class="btn btn-primary ok" data-dismiss="modal">[BtnOk]</button>' +
		'<button type="button" class="btn btn-default cancel" data-dismiss="modal">[BtnClose]</button>' +
		'</div>' +
		'</div>';
		
		var _tplshowHtml_verify = '<div class="modal fade" id="[Id]" data-backdrop="static">' +
		'<div class="modal-header">' +
		'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' +
		'<h5 class="modal-title">[Title]</h5>' +
		'</div>' +
		'<div class="modal-body " >' +
		'<div class="row" id = "bodyContext" ></div>'+
		'</div>' +
		'<div class="modal-footer" >' +
		'<button type="button" class="btn btn-primary ok" data-dismiss="modal">[BtnOk]</button>' +
		'<button type="button" class="btn btn-default cancel" data-dismiss="modal">[BtnCancel]</button>' +
		'</div>' +
		'</div>';
		
		var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm');

		var _alert = function(msg) {
			var options = {
				msg : msg
			};
			var id = _dialog(options);
			var modal = $('#' + id);
			modal.find('.ok').removeClass('btn-success').addClass('btn-primary');
			modal.find('.cancel').hide();

			return {
				id : id,
				on : function(callback) {
					if (callback && callback instanceof Function) {
						modal.find('.ok').click(function() {
							callback(true);
						});
					}
				},
				hide : function(callback) {
					if (callback && callback instanceof Function) {
						modal.on('hide.bs.modal', function(e) {
							callback(e);
						});
					}
				}
			};
		};

		var _confirm = function(msg) {
			var options = {
				msg : msg
			};
			var id = _dialog(options);
			var modal = $('#' + id);
//			modal.find('.ok').removeClass('btn-primary').addClass('btn-success');
			modal.find('.cancel').show();

			return {
				id : id,
				on : function(callback) {
					if (callback && callback instanceof Function) {
						modal.find('.ok').click(function() {
							callback(true);
						});
						modal.find('.cancel').click(function() {
							callback(false);
						});
					}
				},
				hide : function(callback) {
					if (callback && callback instanceof Function) {
						modal.on('hide.bs.modal', function(e) {
							callback(e);
						});
					}
				}
			};
		};

		
		var _show = function(url,title,width,height,data) {
			var ops = {
				url : url,
				title : title,
				width : width,
				height : height,
				btnok : "确定",
				btncl : "取消"
			};
			var modalId = _getId();
			var html = _tplshowHtml.replace(reg, function(node, key) {
				return {
					Id : modalId,
					Title : ops.title,
					Url : ops.url,
					Height : ops.height,
					BtnOk : ops.btnok,
					BtnCancel : ops.btncl,
					width : ops.width
				}[key];
			});

			$('body').append(html);
			var modal = $('#'+modalId).modal({
				width : ops.width,
				height : ops.height
			});
			cjax.getData({url:url},function(data){
				var _data=data;
				var _index=_data.indexOf(encodeURIComponent("您无权访问"));
                if(_index>0){
					$(".modal-backdrop").remove();
					$(".modal-scrollable").remove();
                	_data=_data.replace("<script language=javascript>","");
                	_data=_data.replace("<\/script>","");
                	eval(_data);
                }else{
                	modal.find(".modal-body").find("#bodyContext").html(data);
                }
			});
			
			$('#'+modalId).on('hide.bs.modal', function(e) {
				$('#'+modalId).parents('.modal-scrollable').next().remove();
				$('#'+modalId).parents('.modal-scrollable').remove();
				$('body').modalmanager('toggleModalOpen');
				$("body").removeClass("modal-open").removeClass("page-overflow");
			});
			
			 return {
	    		 on : function(callback){
	    			if(callback && callback instanceof Function){
	    				 modal.find('.ok').click(function () { callback(modalId) });
	    			} 
	    		 }
	    	 }
		}
		
		var _show2 = function(url,title,width,height,type) {
			var ops = {
				url : url,
				title : title,
				width : width,
				height : height,
				btnok : "确定",
				btncl : "取消",
				type:type
			};
			var modalId = _getId();
			var html = _tplshowHtml2.replace(reg, function(node, key) {
				return {
					Id : modalId,
					Title : ops.title,
					Url : ops.url,
					Height : ops.height,
					BtnOk : ops.btnok,
					BtnCancel : ops.btncl,
					width : ops.width,
					type : type
				}[key];
			});

			$('body').append(html);
			var modal = $('#' + modalId).modal({
				width : ops.width,
				height : ops.height
			});
			
			cjax.getData({url:url},function(data){
				modal.find(".modal-body").find("#bodyContext").html(data);
			});
			
			$('#'+modalId).on('hide.bs.modal', function(e) {
				$('#'+modalId).parents('.modal-scrollable').next().remove();
				$('#'+modalId).parent('.modal-scrollable').remove();
				$('body').modalmanager('toggleModalOpen');
				$("body").removeClass("modal-open").removeClass("page-overflow");
			});
			
			 return {
	    		 on : function(callback){
	    			if(callback && callback instanceof Function){
	    				 modal.find('.ok').click(function () { callback(modalId) });
	    			} 
	    		 }
	    	 }
		}
		
		var _showDialog = function(url,title,width,height,data) {
			var ops = {
				url : url,
				title : title,
				width : width,
				height : height,
				btnok : "确定",
				btncl : "取消"
			};
			var modalId = _getId();
			var html = _tplshowHtml_verify.replace(reg, function(node, key) {
				return {
					Id : modalId,
					Title : ops.title,
					Url : ops.url,
					Height : ops.height,
					BtnOk : ops.btnok,
					BtnCancel : ops.btncl,
					width : ops.width
				}[key];
			});

			$('body').append(html);
			var modal = $('#' + modalId).modal({
				width : ops.width,
				height : ops.height
			});
			
			cjax.getData({url:url,data:data},function(data){
				modal.find(".modal-body").find("#bodyContext").html(data);
			});
			
			$('#'+modalId).on('hide.bs.modal', function(e) {
				$('#'+modalId).parents('.modal-scrollable').next().remove();
				$('#'+modalId).parents('.modal-scrollable').remove();
				$('body').modalmanager('toggleModalOpen');
				$("body").removeClass("modal-open").removeClass("page-overflow");
			});
			
			 return {
	    		 on : function(callback){
	    			if(callback && callback instanceof Function){
	    				 modal.find('.ok').click(function () {
	    					 confirm();
	    					 callback(modalId) 
	    				 });
	    			} 
	    		 },
	    		 validate:function(e){
	    		 	var formName=e||".form-validation";
	    		 	
	    		 	$(".modal-footer button:not(.cancel)").click(function(){
						var isValid =$('#'+modalId).find(formName).valid();
						if (!isValid) {
							$(this).attr("data-dismiss","");
	    		 			if($("#myTab>li").length>1){
	    		 				$("#myTab>li").removeClass("active");
	    		 				$("#myTab>li").eq(0).addClass("active");
	    		 				$("#myTabContent>.tab-pane").removeClass("active");
	    		 				$("#myTabContent>.tab-pane").eq(0).removeClass("fade").addClass("active");
	    		 			}
							return;
						}
						
	    		 		if(typeof preConfirm=="function"){
	    		 			var t=preConfirm('#'+modalId);
	    		 			if(!t){
	    		 				$(this).attr("data-dismiss","");
	    		 				return;
	    		 			}
	    		 		}				
						
						
						$(this).attr("data-dismiss","modal");
						confirm();
	    		 	});
	    		 }
	    	 }
		}
		
		var _show_close = function(url,title,width,height,modalId,data) {
			var ops = {
				url : url,
				title : title,
				width : width,
				height : height,
				BtnClose : "关闭"
			};
			var modalId = checkEmpty(modalId) ? _getId() : modalId;
			var html = _tplLoadHtml_close.replace(reg, function(node, key) {
				return {
					Id : modalId,
					Title : ops.title,
					Url : ops.url,
					Height : ops.height,
					BtnClose : ops.BtnClose
				}[key];
			});

			$('body').append(html);
			var modal = $('#' + modalId).modal({
				width : ops.width,
				height : ops.height
			});
			
			cjax.getData({url:url,data:data},function(data){
				modal.find(".modal-body").find("#bodyContext").html(data);
			});

			$('#'+modalId).on('hide.bs.modal', function(e) {
				$('#'+modalId).parents('.modal-scrollable').next().remove();
				$('#'+modalId).parents('.modal-scrollable').remove();
				$('body').modalmanager('toggleModalOpen');
				$("body").removeClass("modal-open").removeClass("page-overflow");
			});
			
			 return {
	    		 on : function(callback){
	    			if(callback && callback instanceof Function){
	    				 modal.find('.cancel').click(function () { callback(modalId) });
	    			} 
	    		 },
	    		 fn:function(callback){
	    			 if(callback && callback instanceof Function){
	    				 callback(modalId);
	    			 }
	    			 
	    		 }
	    	 }
		}
		
		var _show_noButton = function(url,title,width,height,data) {
			var ops = {
				url : url,
				title : title,
				width : width,
				height : height,
				BtnClose : "关闭"
			};
			var modalId = _getId();
			var html = _tplshowHtml_noButton.replace(reg, function(node, key) {
				return {
					Id : modalId,
					Title : ops.title,
					Url : ops.url,
					Height : ops.height,
					BtnClose : ops.BtnClose
				}[key];
			});

			$('body').append(html);
			var modal = $('#' + modalId).modal({
				width : ops.width,
				height : ops.height
			});
			
			if(url!=""){
				cjax.getData({url:url,data:data},function(data){
					modal.find(".modal-body").find("#bodyContext").html(data);
				});
			}

			$('#'+modalId).on('hide.bs.modal', function(e) {
				$('#'+modalId).parents('.modal-scrollable').next().remove();
				$('#'+modalId).parents('.modal-scrollable').remove();
				$('body').modalmanager('toggleModalOpen');
				$("body").removeClass("modal-open").removeClass("page-overflow");
			});
			
			 return {
	    		 on : function(callback){
	    			if(callback && callback instanceof Function){
	    				 modal.find('.ok').click(function () { callback(modalId) });
	    			} 
	    		 },
	    		 validate:function(e){
	    			 var formName=e||".form-validation";
    		 		 $(".modal-footer button:not(.cancel)").click(function(){
    		 			 var isValid = $(formName).valid();
						 if (!isValid) {
							 $(this).attr("data-dismiss","");
							 return;
						 }
						 $(this).attr("data-dismiss","modal");
						 confirm();
	    		 	 });
	    		 },
	    		 fn:function(callback){
	    			if(callback && callback instanceof Function){
	    				callback(modalId);
	    			} 
	    		 }
	    	 }
		}
		
		var _getId = function() {
			var date = new Date();
			return 'mdl' + date.valueOf();
		}

		var _dialog = function(options) {
			var ops = {
				msg : "提示内容",
				title : "操作提示",
				btnok : "确定",
				btncl : "取消",
				width : 400,
				auto : false
			};

			$.extend(ops, options);

			var modalId = _getId();

			var html = _tplHtml.replace(reg, function(node, key) {
				return {
					Id : modalId,
					Title : ops.title,
					Message : ops.msg,
					BtnOk : ops.btnok,
					BtnCancel : ops.btncl
				}[key];
			});

			$('body').append(html);
			$('#' + modalId).modal({
				width : ops.width,
				backdrop : 'static'
			});

			$('#'+modalId).on('hide.bs.modal', function(e) {
				$('#'+modalId).parents('.modal-scrollable').next().remove();
				$('#'+modalId).parents('.modal-scrollable').remove();
				$('body').modalmanager('toggleModalOpen');
				$("body").removeClass("modal-open").removeClass("page-overflow");
			});

			return modalId;
		}

		var _cancelCheckbox = function() {
			//设置取消样式
			$(".datagrid-header-check .checker").find("span").attr("class", ""); //取消头部第一个checkbox的样式
			$(".datagrid-cell-check .checker").find("span").attr("class", ""); //取消列表选中checkbox的样式
			$(".datagrid-btable").find("tr").attr("class", "datagrid-row"); //取消选中行的样式
			$(":checkbox:checked").attr("checked", false); //取消所有选中状态
		};
		
		var _iframe = function(url,title,width,height) {
			var ops = {
				url : url,
				title : title,
				width : width,
				height : height,
				btnok : "确定",
				BtnClose : "关闭"
			};
			var modalId = _getId();
			var html = _tpl_iframe.replace(reg, function(node, key) {
				return {
					Id : modalId,
					Title : ops.title,
					Url : ops.url,
					Height : ops.height,
					BtnOk : ops.btnok,
					BtnClose : ops.BtnClose
				}[key];
			});

			$('body').append(html);
			var modal = $('#' + modalId).modal({
				width : ops.width,
				height : ops.height
			});
			
			$('#'+modalId).on('hide.bs.modal', function(e) {
				$('#'+modalId).parents('.modal-scrollable').next().remove();
				$('#'+modalId).parents('.modal-scrollable').remove();
				$('body').modalmanager('toggleModalOpen');
				$("body").removeClass("modal-open").removeClass("page-overflow");
			});
			
			 return {
	    		 on : function(callback){
	    			if(callback && callback instanceof Function){
	    				 modal.find('.cancel').click(function () { callback(modalId) });
	    			} 
	    		 }
	    	 }
		}

		return {
			alert : _alert,
			confirm : _confirm,
			show : _show,
			show2 : _show2,
			//cancelcheck : _cancelCheckbox,
			show_close : _show_close,
			show_noButton : _show_noButton,
			//iframe:_iframe,
			showDialog:_showDialog,
			loading : function() {
				$('body').modalmanager('loading');
			},
			removeLoading : function() {
				$('body').modalmanager('removeLoading');
			}
		}

	}();
});