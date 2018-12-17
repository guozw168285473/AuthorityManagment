/**
 * @author table工厂
 */
var Cctable = (function($){
	var Cctable = function(){
		this.opts = arguments[0];
		this.initOpts.call(this);
	}
	Cctable.prototype.setColumns = function(columns){
		if(! columns instanceof Array){
			throw "请传入数组";
		}
		this.columns = columns;
	}
	Cctable.prototype.setTableDestroy = function(destroy){
		this.opts.destroy = destroy;
	}
	Cctable.prototype.setTableId = function(tableId){
		this.opts.idTable = tableId;
	}
	Cctable.prototype.setUrl = function(url){
		this.url = url;
	}
	Cctable.prototype.setUploadUrl = function(url){
		this.uploadUrl = url;
	}
	Cctable.prototype.setDetailUrl = function(url){
		this.detailUrl = url;
	}
	Cctable.prototype.setAddUrl = function(url){
		this.addUrl = url;
	}
	Cctable.prototype.setEditUrl = function(url){
		this.editUrl = url;
	}
	Cctable.prototype.setDeleteUrl = function(url){
		this.deleteUrl = url;
	}
	Cctable.prototype.setPrimary = function(primary){
		this.primary = primary;
	}
	Cctable.prototype.setSidePagination = function(sidePagination){
		this.opts.sidePagination = sidePagination;
	}
	Cctable.prototype.setContextMenu = function(contextMenu){
		this.opts.contextMenu = contextMenu;
	}
	Cctable.prototype.setCustomSearch = function(customSearch){
		this.opts.customSearch = customSearch;
	}
	Cctable.prototype.setCustomSearchText = function(customSearchText){
		this.opts.customSearchText = customSearchText;
	}
	Cctable.prototype.setAdvancedSearch = function(advancedSearch){
		this.opts.advancedSearch = advancedSearch;
	}
	Cctable.prototype.setQueryParams = function(queryParams){
		this.opts.queryParams = queryParams;
	}
	
	Cctable.prototype.setPageSize = function(pageSize){
		this.opts.pageSize= pageSize;
	}
	
	Cctable.prototype.setPagination = function(pagination){
		this.opts.pagination = pagination;
	}
	
	Cctable.prototype.setShowRefresh = function(showRefresh){
		this.opts.showRefresh = showRefresh;
	}

	Cctable.prototype.setSearch = function(search){
		this.opts.search = search;
	}
	
	Cctable.prototype.setToolbar = function(toolbar){
		this.opts.toolbar = toolbar;
	}
	
	Cctable.prototype.setAdvancedSearchClickName = function(advancedSearchClickName){
		this.opts.advancedSearchClickName = advancedSearchClickName;
	}
	
	Cctable.prototype.setShowColumns = function(showColumns){
		this.opts.showColumns = showColumns;
	}
	
	Cctable.prototype.setShowToggle = function(showToggle){
		this.opts.showToggle = showToggle;
	}
	
	Cctable.prototype.setAdvancedSearchClickParam = function(advancedSearchClickParam){
		this.opts.advancedSearchClickParam = advancedSearchClickParam;
	}
	
	Cctable.prototype.setClickRow = function(clickRow){
		this.opts.clickRow = clickRow;
	}
	
	Cctable.prototype.setOnClickRow = function(onClickRow){
		this.opts.onClickRow = onClickRow;
	}
	
	Cctable.prototype.setClickCell = function(clickCell){
		this.opts.clickCell = clickCell;
	}
	
	Cctable.prototype.setShowPaginationSwitch = function(showPaginationSwitch){
		this.opts.showPaginationSwitch = showPaginationSwitch;
	}
	
	Cctable.prototype.setClickToSelect = function(clickToSelect){
		this.opts.clickToSelect = clickToSelect;
	}
	
	Cctable.prototype.setStriped = function(bool){
		this.opts.striped = bool;
	}
	
	//数据加载成功后执行该函数
	Cctable.prototype.setLoadSuccess = function(fn){
		this.opts.onLoadSuccess = fn;
	}
	
	Cctable.prototype.initOpts = function(){
		var that = this;
		that.opts = $.extend(true,{
			idTable : "tableInfo_id",// 表格id
			advancedSearch : false,// 是否显现高级搜索按钮
			customSearch : true,// 是否显现自定义搜索按钮(文本框id：tbxCustomSearch_+idTable,隐藏域id:hfCustomSearch_+idTable)
			customSearchText : '请输入搜索内容',// 自定义文本框说明文本
			clickToSelect : true,// 是否启用点击选中行
			destroy : false,// 是否销毁table
			dataType : 'json',// 从服务器返回的数据类型
			dataField: 'rows',// 接受数据集合的json的key值
			detailView : false,// 是否显示父子表
			method : 'post',// 请求方式(get or post)
			contentType: 'application/x-www-form-urlencoded',
			pageSize : 10,// 每页显示行数
			pagination : true,// 是否显示分页
			/*
			 * paginationFirstText : '首页',// “首页”按钮文本 paginationLastText : '尾页',// “尾页”按钮文本 paginationPreText : '上一页',// “上一页”按钮文本 paginationNextText : '下一页',// “下一页”按钮文本
			 */
			queryParamsType: 'limit', // limit 或 undefined（我们只采用limit）
			queryParams: function (params) {
	            return params;
	        },
			showPaginationSwitch : false,// 是否显示分页信息按钮
			showColumns : true,// 是否显示自定义列按钮
			showRefresh : true,// 是否显示刷新按钮
			showToggle : true,// 是否显示切换按钮
			showExport : false,// 是否显示导出按钮
			striped : true,// 是否显示行间隔色
			search : false,// 是否显示搜索功能
			sidePagination : 'server', // 分页方式：client客户端分页，server服务端分页
			toolbar : '#toolbar',// 工具按钮容器,
			advancedSearchClickName:'advSearchClick',
			advancedSearchClickParam:'',
			clickRow:false,
			onClickRow: function(row, $el) {
				return;
			},
			exportOptions : {
				tableName : 'table',
		    	ignoreColumn : [0]
			},
		    contextMenu: '',// 默认不带右键选项，选项div id：#context-menu
		    contextMenuShow : {
		    	add:false,
		    	del:false,
		    	edit:false
		    },
            onContextMenuItem: function(row, $el){
		        if($el.data("item") == "add"){
		        	that.add();
		        }
	            if($el.data("item") == "edit"){
	            	that.edit(row[that.primary]?row[that.primary]:row[1]);
	            }
	            if($el.data("item") == "del"){
	            	that.batchdelete(row[that.primary]?row[that.primary]:row[1]);
	            }
	        },
		},that.opts);
	}
	Cctable.prototype.initTable = function(){
		 // 删除页面的DIV
	    $("#"+this.opts.idForm ).remove();
		var that = this;
		if(!this.url){
			throw "请传入url";
		}
		if(!this.columns){
			throw "请传入列头";
		}
		if(this.opts.destroy){
			$("#"+this.opts.idTable).bootstrapTable('destroy');
		}
		$('#'+this.opts.idTable).bootstrapTable({
			method : this.opts.method,
			contentType: this.opts.contentType,
			addUrl : this.addUrl,
			uploadUrl : this.uploadUrl,
			advancedSearch : this.opts.advancedSearch,
			customSearch : this.opts.customSearch,
			customSearchText : this.opts.customSearchText,
			contextMenu : this.opts.contextMenu,
		    contextMenuShow : this.opts.contextMenuShow,
			columns: this.columns,
		    clickToSelect : this.opts.clickToSelect,
		    deleteUrl : this.deleteUrl,
		    dataField : this.opts.dataField,
		    detailView : this.opts.detailView,
		    detailFormatter : this.opts.detailFormatter,
		    editurl : this.editUrl,
		    exportOptions : this.opts.exportOptions,
		    height : this.opts.height,
		    idTable : this.opts.idTable,
		    onContextMenuItem : this.opts.onContextMenuItem,
		    pageSize : this.opts.pageSize,
		    pagination : this.opts.pagination,
		    /*
			 * paginationFirstText : this.opts.paginationFirstText, paginationLastText : this.opts.paginationLastText, paginationPreText : this.opts.paginationPreText, paginationNextText :
			 * this.opts.paginationNextText,
			 */
			queryParamsType : this.opts.queryParamsType,
			queryParams: this.opts.queryParams,
		    search : this.opts.search,
		    striped : this.opts.striped,
		    showRefresh : this.opts.showRefresh,
		    showPaginationSwitch : this.opts.showPaginationSwitch,
		    showExport:this.opts.showExport,
		    showToggle : this.opts.showToggle,
		    sidePagination : this.opts.sidePagination,
		    toolbar : this.opts.toolbar,
		    url: this.url ,
		    actionForm: this.url,
		    advancedSearchClickName : this.opts.advancedSearchClickName,
		    showColumns : false,//this.opts.showColumns,按需求该项隐藏
		    showToggle : this.opts.showToggle,
		    advancedSearchClickParam: this.opts.advancedSearchClickParam,
		    clickRow : this.opts.clickRow,
		    onClickRow: function (row, $el) {
		    	if(this.clickRow){
		    		that.opts.onClickRow(row,$el);
		    	}
		    },
		    onClickCell:this.opts.clickCell,
	        onLoadSuccess:this.opts.onLoadSuccess
		});
	    $(window).resize(function () {
	        $('#'+that.opts.idTable).bootstrapTable('resetView');
	    });
	    
	    // 如果存在search 方法搜索时触发
	    if (typeof search == 'function') {
/*	    	$("#tbxCustomSearch_"+that.opts.idTable).keydown(function(){
				if (window.event.keyCode == 13) {
					search($("#tbxCustomSearch_"+that.opts.idTable).val());
				}
			});*/
			$("#btnCustomSearch_"+that.opts.idTable).click(function() {
					 search($("#tbxCustomSearch_"+that.opts.idTable).val());
			});
	    }
	}
	// 上传
	Cctable.prototype.upload = function(){
	  Modal.dialogShow(this.uploadUrl,this.idTable,"upload").on(function(id){
		 if(id){}// 保存回调
   	  });
	}
	// 详细
	Cctable.prototype.detail = function(width,height,modelId){
		var items = this.getIdSelections();
		// (id?(items=[],items.push(id)):null);
		if (items.length!=1){
			ModalDialog.alert("请选择一条数据");
			return;
		}
		url=this.detailUrl+"/"+items[0];
		if(checkEmpty(width)){
			width="60%";
		}
		ModalDialog.show_close(url, "<i class='fa fa-exclamation-circle'></i>&nbsp;详细信息", width,height,modelId).on(function(id) {
		});
	}
	// 添加
	Cctable.prototype.add = function(){
	  Modal.dialogShow(this.addUrl,this.idTable).on(function(id){
		 if(id){}// 保存回调
   	  });
	}
	// 修改
	Cctable.prototype.edit = function(id){
		var items = this.getIdSelections();
		(id?(items=[],items.push(id)):null);
		if (items.length!=1?Modal.alert("请选择一条数据"):null){
			return;
		}
		Modal.dialogShow(this.editUrl+ "/" + items[0],this.idTable).on(function(id){
			 if(id){}// 修改回调
		});
	}
	// 删除
	Cctable.prototype.batchdelete = function(id){
		var that = this;
		if(!that.deleteUrl){
			throw "请传入删除url";
		}
		var items = this.getIdSelections();
		(id?(items = [],items.push(id)):null);
		if (items.length<1?ModalDialog.alert("请至少选择一条数据"):null){
			return;
		}
		ModalDialog.confirm('确定删除吗?').on(function(result){
			if(result){
				$.ajax({
		    		url : that.deleteUrl,
		    		async : true,// 异步连续弹出框错误！！
		    		type : "post",
		    		traditional:true,
		    		data : {items : items},
		    		cache : false,
		    		dataType : "json",
		    		success : function(data){
		    			$("#"+that.opts.idTable).bootstrapTable("refresh");
		    			ModalDialog.alert(data.msg,that.opts.idTable);
		    		}
		    	});
			}
		});
	}
	
	// 预览
	Cctable.prototype.preview = function(url,w,h){
		ModalDialog.show_noButton(url, "<i class='fa fa-camera'></i>&nbsp;预览",w,h).on(function(id) {});
	}
	
	Cctable.prototype.getIdSelections = function(){
		var that = this;
		return $.map($("#"+this.opts.idTable).bootstrapTable('getSelections'), function (row) {
			 return (row[that.primary]?row[that.primary]:row[1]);
		});
	} 
	
	Cctable.prototype.getSelections = function(){
		return $("#"+this.opts.idTable).bootstrapTable('getSelections');
	} 
	
	Cctable.prototype.closeToolBar = function(){
		this.setShowRefresh(false);
		this.setCustomSearch(false);
		this.setShowColumns(false);
		this.setShowToggle(false);
	} 
	
	return function(){
		return new Cctable(Array.prototype.slice.call(arguments, 0,1)[0]);
	}
	
})(jQuery);