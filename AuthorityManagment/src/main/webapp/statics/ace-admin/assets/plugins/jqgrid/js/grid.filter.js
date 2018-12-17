(function(a){if(typeof define==="function"&&define.amd){define(["jquery","./grid.base","./grid.common"],a)}else{a(jQuery)}}(function(a){a.fn.jqFilter=function(b){if(typeof b==="string"){var d=a.fn.jqFilter[b];if(!d){throw ("jqFilter - No such method: "+b)}var c=a.makeArray(arguments).slice(1);return d.apply(this,c)}var e=a.extend(true,{filter:null,columns:[],sortStrategy:null,onChange:null,afterRedraw:null,checkValues:null,error:false,errmsg:"",errorcheck:true,showQuery:true,sopt:null,ops:[],operands:null,numopts:["eq","ne","lt","le","gt","ge","nu","nn","in","ni"],stropts:["eq","ne","bw","bn","ew","en","cn","nc","nu","nn","in","ni"],strarr:["text","string","blob"],groupOps:[{op:"AND",text:"AND"},{op:"OR",text:"OR"}],groupButton:true,ruleButtons:true,direction:"ltr"},a.jgrid.filter,b||{});return this.each(function(){if(this.filter){return}this.p=e;if(this.p.filter===null||this.p.filter===undefined){this.p.filter={groupOp:this.p.groupOps[0].op,rules:[],groups:[]}}if(this.p.sortStrategy!=null&&a.isFunction(this.p.sortStrategy)){this.p.columns.sort(this.p.sortStrategy)}var m,o=this.p.columns.length,h,n=/msie/i.test(navigator.userAgent)&&!window.opera;this.p.initFilter=a.extend(true,{},this.p.filter);if(!o){return}for(m=0;m<o;m++){h=this.p.columns[m];if(h.stype){h.inputtype=h.stype}else{if(!h.inputtype){h.inputtype="text"}}if(h.sorttype){h.searchtype=h.sorttype}else{if(!h.searchtype){h.searchtype="string"}}if(h.hidden===undefined){h.hidden=false}if(!h.label){h.label=h.name}if(h.index){h.name=h.index}if(!h.hasOwnProperty("searchoptions")){h.searchoptions={}}if(!h.hasOwnProperty("searchrules")){h.searchrules={}}}var l=function(){return a("#"+a.jgrid.jqID(e.id))[0]||null},f=l(),j=a.jgrid.styleUI[(f.p.styleUI||"jQueryUI")].filter,k=a.jgrid.styleUI[(f.p.styleUI||"jQueryUI")].common;if(this.p.showQuery){a(this).append("<table class='queryresult "+j.table_widget+"' style='display:block;max-width:440px;border:0px none;' dir='"+this.p.direction+"'><tbody><tr><td class='query'></td></tr></tbody></table>")}var g=function(s,p){var r=[true,""],i=l();if(a.isFunction(p.searchrules)){r=p.searchrules.call(i,s,p)}else{if(a.jgrid&&a.jgrid.checkValues){try{r=a.jgrid.checkValues.call(i,s,-1,p.searchrules,p.label)}catch(q){}}}if(r&&r.length&&r[0]===false){e.error=!r[0];e.errmsg=r[1]}};this.onchange=function(){this.p.error=false;this.p.errmsg="";return a.isFunction(this.p.onChange)?this.p.onChange.call(this,this.p):false};this.reDraw=function(){a("table.group:first",this).remove();var i=this.createTableForGroup(e.filter,null);a(this).append(i);if(a.isFunction(this.p.afterRedraw)){this.p.afterRedraw.call(this,this.p)}};this.createTableForGroup=function(r,x){var E=this,t;var A=a("<table class='group "+j.table_widget+" ui-search-table' style='border:0px none;'><tbody></tbody></table>"),p="left";if(this.p.direction==="rtl"){p="right";A.attr("dir","rtl")}if(x===null){A.append("<tr class='error' style='display:none;'><th colspan='5' class='"+k.error+"' align='"+p+"'></th></tr>")}var F=a("<tr></tr>");A.append(F);var D=a("<th colspan='5' align='"+p+"'></th>");F.append(D);if(this.p.ruleButtons===true){var s=a("<select class='opsel "+j.srSelect+"'></select>");D.append(s);var z="",y;for(t=0;t<e.groupOps.length;t++){y=r.groupOp===E.p.groupOps[t].op?" selected='selected'":"";z+="<option value='"+E.p.groupOps[t].op+"'"+y+">"+E.p.groupOps[t].text+"</option>"}s.append(z).bind("change",function(){r.groupOp=a(s).val();E.onchange()})}var v="<span></span>";if(this.p.groupButton){v=a("<input type='button' value='+ {}' title='Add subgroup' class='add-group "+k.button+"'/>");v.bind("click",function(){if(r.groups===undefined){r.groups=[]}r.groups.push({groupOp:e.groupOps[0].op,rules:[],groups:[]});E.reDraw();E.onchange();return false})}D.append(v);if(this.p.ruleButtons===true){var u=a("<input type='button' value='+' title='Add rule' class='add-rule ui-add "+k.button+"'/>"),q;u.bind("click",function(){if(r.rules===undefined){r.rules=[]}for(t=0;t<E.p.columns.length;t++){var J=(E.p.columns[t].search===undefined)?true:E.p.columns[t].search,i=(E.p.columns[t].hidden===true),H=(E.p.columns[t].searchoptions.searchhidden===true);if((H&&J)||(J&&!i)){q=E.p.columns[t];break}}var I;if(q.searchoptions.sopt){I=q.searchoptions.sopt}else{if(E.p.sopt){I=E.p.sopt}else{if(a.inArray(q.searchtype,E.p.strarr)!==-1){I=E.p.stropts}else{I=E.p.numopts}}}r.rules.push({field:q.name,op:I[0],data:""});E.reDraw();return false});D.append(u)}if(x!==null){var w=a("<input type='button' value='-' title='Delete group' class='delete-group "+k.button+"'/>");D.append(w);w.bind("click",function(){for(t=0;t<x.groups.length;t++){if(x.groups[t]===r){x.groups.splice(t,1);break}}E.reDraw();E.onchange();return false})}if(r.groups!==undefined){for(t=0;t<r.groups.length;t++){var G=a("<tr></tr>");A.append(G);var B=a("<td class='first'></td>");G.append(B);var C=a("<td colspan='4'></td>");C.append(this.createTableForGroup(r.groups[t],r));G.append(C)}}if(r.groupOp===undefined){r.groupOp=E.p.groupOps[0].op}if(r.rules!==undefined){for(t=0;t<r.rules.length;t++){A.append(this.createTableRowForRule(r.rules[t],r))}}return A};this.createTableRowForRule=function(z,s){var L=this,p=l(),M=a("<tr></tr>"),u,y,N,r,K="",J;M.append("<td class='first'></td>");var F=a("<td class='columns'></td>");M.append(F);var E=a("<select class='"+j.srSelect+"'></select>"),w,q=[];F.append(E);E.bind("change",function(){z.field=a(E).val();N=a(this).parents("tr:first");a(".data",N).empty();for(u=0;u<L.p.columns.length;u++){if(L.p.columns[u].name===z.field){r=L.p.columns[u];break}}if(!r){return}r.searchoptions.id=a.jgrid.randId();r.searchoptions.name=z.field;r.searchoptions.oper="filter";if(n&&r.inputtype==="text"){if(!r.searchoptions.size){r.searchoptions.size=10}}var i=a.jgrid.createEl.call(p,r.inputtype,r.searchoptions,"",true,L.p.ajaxSelectOptions||{},true);a(i).addClass("input-elm "+j.srInput);if(r.searchoptions.sopt){y=r.searchoptions.sopt}else{if(L.p.sopt){y=L.p.sopt}else{if(a.inArray(r.searchtype,L.p.strarr)!==-1){y=L.p.stropts}else{y=L.p.numopts}}}var O="",P=0;q=[];a.each(L.p.ops,function(){q.push(this.oper)});for(u=0;u<y.length;u++){w=a.inArray(y[u],q);if(w!==-1){if(P===0){z.op=L.p.ops[w].oper}O+="<option value='"+L.p.ops[w].oper+"'>"+L.p.ops[w].text+"</option>";P++}}a(".selectopts",N).empty().append(O);a(".selectopts",N)[0].selectedIndex=0;if(a.jgrid.msie&&a.jgrid.msiever()<9){var Q=parseInt(a("select.selectopts",N)[0].offsetWidth,10)+1;a(".selectopts",N).width(Q);a(".selectopts",N).css("width","auto")}a(".data",N).append(i);a.jgrid.bindEv.call(p,i,r.searchoptions);a(".input-elm",N).bind("change",function(R){var S=R.target;z.data=S.nodeName.toUpperCase()==="SPAN"&&r.searchoptions&&a.isFunction(r.searchoptions.custom_value)?r.searchoptions.custom_value.call(p,a(S).children(".customelement:first"),"get"):S.value;L.onchange()});setTimeout(function(){z.data=a(i).val();L.onchange()},0)});var x=0;for(u=0;u<L.p.columns.length;u++){var I=(L.p.columns[u].search===undefined)?true:L.p.columns[u].search,t=(L.p.columns[u].hidden===true),v=(L.p.columns[u].searchoptions.searchhidden===true);if((v&&I)||(I&&!t)){J="";if(z.field===L.p.columns[u].name){J=" selected='selected'";x=u}K+="<option value='"+L.p.columns[u].name+"'"+J+">"+L.p.columns[u].label+"</option>"}}E.append(K);var H=a("<td class='operators'></td>");M.append(H);r=e.columns[x];r.searchoptions.id=a.jgrid.randId();if(n&&r.inputtype==="text"){if(!r.searchoptions.size){r.searchoptions.size=10}}r.searchoptions.name=z.field;r.searchoptions.oper="filter";var A=a.jgrid.createEl.call(p,r.inputtype,r.searchoptions,z.data,true,L.p.ajaxSelectOptions||{},true);if(z.op==="nu"||z.op==="nn"){a(A).attr("readonly","true");a(A).attr("disabled","true")}var G=a("<select class='selectopts "+j.srSelect+"'></select>");H.append(G);G.bind("change",function(){z.op=a(G).val();N=a(this).parents("tr:first");var i=a(".input-elm",N)[0];if(z.op==="nu"||z.op==="nn"){z.data="";if(i.tagName.toUpperCase()!=="SELECT"){i.value=""}i.setAttribute("readonly","true");i.setAttribute("disabled","true")}else{if(i.tagName.toUpperCase()==="SELECT"){z.data=i.value}i.removeAttribute("readonly");i.removeAttribute("disabled")}L.onchange()});if(r.searchoptions.sopt){y=r.searchoptions.sopt}else{if(L.p.sopt){y=L.p.sopt}else{if(a.inArray(r.searchtype,L.p.strarr)!==-1){y=L.p.stropts}else{y=L.p.numopts}}}K="";a.each(L.p.ops,function(){q.push(this.oper)});for(u=0;u<y.length;u++){w=a.inArray(y[u],q);if(w!==-1){J=z.op===L.p.ops[w].oper?" selected='selected'":"";K+="<option value='"+L.p.ops[w].oper+"'"+J+">"+L.p.ops[w].text+"</option>"}}G.append(K);var B=a("<td class='data'></td>");M.append(B);B.append(A);a.jgrid.bindEv.call(p,A,r.searchoptions);a(A).addClass("input-elm "+j.srInput).bind("change",function(){z.data=r.inputtype==="custom"?r.searchoptions.custom_value.call(p,a(this).children(".customelement:first"),"get"):a(this).val();L.onchange()});var D=a("<td></td>");M.append(D);if(this.p.ruleButtons===true){var C=a("<input type='button' value='-' title='Delete rule' class='delete-rule ui-del "+k.button+"'/>");D.append(C);C.bind("click",function(){for(u=0;u<s.rules.length;u++){if(s.rules[u]===z){s.rules.splice(u,1);break}}L.reDraw();L.onchange();return false})}return M};this.getStringForGroup=function(q){var t="(",r;if(q.groups!==undefined){for(r=0;r<q.groups.length;r++){if(t.length>1){t+=" "+q.groupOp+" "}try{t+=this.getStringForGroup(q.groups[r])}catch(p){alert(p)}}}if(q.rules!==undefined){try{for(r=0;r<q.rules.length;r++){if(t.length>1){t+=" "+q.groupOp+" "}t+=this.getStringForRule(q.rules[r])}}catch(i){alert(i)}}t+=")";if(t==="()"){return""}return t};this.getStringForRule=function(v){var t="",s="",q,p,u,w,r=["int","integer","float","number","currency"];for(q=0;q<this.p.ops.length;q++){if(this.p.ops[q].oper===v.op){t=this.p.operands.hasOwnProperty(v.op)?this.p.operands[v.op]:"";s=this.p.ops[q].oper;break}}for(q=0;q<this.p.columns.length;q++){if(this.p.columns[q].name===v.field){p=this.p.columns[q];break}}if(p===undefined){return""}w=v.data;if(s==="bw"||s==="bn"){w=w+"%"}if(s==="ew"||s==="en"){w="%"+w}if(s==="cn"||s==="nc"){w="%"+w+"%"}if(s==="in"||s==="ni"){w=" ("+w+")"}if(e.errorcheck){g(v.data,p)}if(a.inArray(p.searchtype,r)!==-1||s==="nn"||s==="nu"){u=v.field+" "+t+" "+w}else{u=v.field+" "+t+' "'+w+'"'}return u};this.resetFilter=function(){this.p.filter=a.extend(true,{},this.p.initFilter);this.reDraw();this.onchange()};this.hideError=function(){a("th."+k.error,this).html("");a("tr.error",this).hide()};this.showError=function(){a("th."+k.error,this).html(this.p.errmsg);a("tr.error",this).show()};this.toUserFriendlyString=function(){return this.getStringForGroup(e.filter)};this.toString=function(){var q=this;function p(t){if(q.p.errorcheck){var s,r;for(s=0;s<q.p.columns.length;s++){if(q.p.columns[s].name===t.field){r=q.p.columns[s];break}}if(r){g(t.data,r)}}return t.op+"(item."+t.field+",'"+t.data+"')"}function i(r){var u="(",t;if(r.groups!==undefined){for(t=0;t<r.groups.length;t++){if(u.length>1){if(r.groupOp==="OR"){u+=" || "}else{u+=" && "}}u+=i(r.groups[t])}}if(r.rules!==undefined){for(t=0;t<r.rules.length;t++){if(u.length>1){if(r.groupOp==="OR"){u+=" || "}else{u+=" && "}}u+=p(r.rules[t])}}u+=")";if(u==="()"){return""}return u}return i(this.p.filter)};this.reDraw();if(this.p.showQuery){this.onchange()}this.filter=true})};a.extend(a.fn.jqFilter,{toSQLString:function(){var b="";this.each(function(){b=this.toUserFriendlyString()});return b},filterData:function(){var b;this.each(function(){b=this.p.filter});return b},getParameter:function(b){if(b!==undefined){if(this.p.hasOwnProperty(b)){return this.p[b]}}return this.p},resetFilter:function(){return this.each(function(){this.resetFilter()})},addFilter:function(b){if(typeof b==="string"){b=a.jgrid.parse(b)}this.each(function(){this.p.filter=b;this.reDraw();this.onchange()})}});a.jgrid.extend({filterToolbar:function(b){var c=a.jgrid.getRegional(this[0],"search");b=a.extend({autosearch:true,autosearchDelay:500,searchOnEnter:true,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,searchurl:"",stringResult:false,groupOp:"AND",defaultSearch:"bw",searchOperators:false,resetIcon:"x",operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^","in":"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#"}},c,b||{});return this.each(function(){var d=this;if(d.p.filterToolbar){return}if(!a(d).data("filterToolbar")){a(d).data("filterToolbar",b)}if(d.p.force_regional){b=a.extend(b,c)}var g=a.jgrid.styleUI[(d.p.styleUI||"jQueryUI")].filter,i=a.jgrid.styleUI[(d.p.styleUI||"jQueryUI")].common,e=a.jgrid.styleUI[(d.p.styleUI||"jQueryUI")].base,o=function(){var x={},r=0,A,s,z={},y;a.each(d.p.colModel,function(){var v=a("#gs_"+d.p.idPrefix+a.jgrid.jqID(this.name),(this.frozen===true&&d.p.frozenColumns===true)?d.grid.fhDiv:d.grid.hDiv);s=this.index||this.name;if(b.searchOperators){y=v.parent().prev().children("a").attr("soper")||b.defaultSearch}else{y=(this.searchoptions&&this.searchoptions.sopt)?this.searchoptions.sopt[0]:this.stype==="select"?"eq":b.defaultSearch}A=this.stype==="custom"&&a.isFunction(this.searchoptions.custom_value)&&v.length>0&&v[0].nodeName.toUpperCase()==="SPAN"?this.searchoptions.custom_value.call(d,v.children(".customelement:first"),"get"):v.val();if(A||y==="nu"||y==="nn"){x[s]=A;z[s]=y;r++}else{try{delete d.p.postData[s]}catch(B){}}});var w=r>0?true:false;if(b.stringResult===true||d.p.datatype==="local"||b.searchOperators===true){var t='{"groupOp":"'+b.groupOp+'","rules":[';var q=0;a.each(x,function(v,B){if(q>0){t+=","}t+='{"field":"'+v+'",';t+='"op":"'+z[v]+'",';B+="";t+='"data":"'+B.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}';q++});t+="]}";a.extend(d.p.postData,{filters:t});a.each(["searchField","searchString","searchOper"],function(v,B){if(d.p.postData.hasOwnProperty(B)){delete d.p.postData[B]}})}else{a.extend(d.p.postData,x)}var u;if(d.p.searchurl){u=d.p.url;a(d).jqGrid("setGridParam",{url:d.p.searchurl})}var p=a(d).triggerHandler("jqGridToolbarBeforeSearch")==="stop"?true:false;if(!p&&a.isFunction(b.beforeSearch)){p=b.beforeSearch.call(d)}if(!p){a(d).jqGrid("setGridParam",{search:w}).trigger("reloadGrid",[{page:1}])}if(u){a(d).jqGrid("setGridParam",{url:u})}a(d).triggerHandler("jqGridToolbarAfterSearch");if(a.isFunction(b.afterSearch)){b.afterSearch.call(d)}},h=function(x){var w={},r=0,s;x=(typeof x!=="boolean")?true:x;a.each(d.p.colModel,function(){var B,z=a("#gs_"+d.p.idPrefix+a.jgrid.jqID(this.name),(this.frozen===true&&d.p.frozenColumns===true)?d.grid.fhDiv:d.grid.hDiv);if(this.searchoptions&&this.searchoptions.defaultValue!==undefined){B=this.searchoptions.defaultValue}s=this.index||this.name;switch(this.stype){case"select":z.find("option").each(function(y){if(y===0){this.selected=true}if(a(this).val()===B){this.selected=true;return false}});if(B!==undefined){w[s]=B;r++}else{try{delete d.p.postData[s]}catch(A){}}break;case"text":z.val(B||"");if(B!==undefined){w[s]=B;r++}else{try{delete d.p.postData[s]}catch(C){}}break;case"custom":if(a.isFunction(this.searchoptions.custom_value)&&z.length>0&&z[0].nodeName.toUpperCase()==="SPAN"){this.searchoptions.custom_value.call(d,z.children(".customelement:first"),"set",B||"")}break}});var v=r>0?true:false;d.p.resetsearch=true;if(b.stringResult===true||d.p.datatype==="local"){var t='{"groupOp":"'+b.groupOp+'","rules":[';var q=0;a.each(w,function(y,z){if(q>0){t+=","}t+='{"field":"'+y+'",';t+='"op":"eq",';z+="";t+='"data":"'+z.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}';q++});t+="]}";a.extend(d.p.postData,{filters:t});a.each(["searchField","searchString","searchOper"],function(y,z){if(d.p.postData.hasOwnProperty(z)){delete d.p.postData[z]}})}else{a.extend(d.p.postData,w)}var u;if(d.p.searchurl){u=d.p.url;a(d).jqGrid("setGridParam",{url:d.p.searchurl})}var p=a(d).triggerHandler("jqGridToolbarBeforeClear")==="stop"?true:false;if(!p&&a.isFunction(b.beforeClear)){p=b.beforeClear.call(d)}if(!p){if(x){a(d).jqGrid("setGridParam",{search:v}).trigger("reloadGrid",[{page:1}])}}if(u){a(d).jqGrid("setGridParam",{url:u})}a(d).triggerHandler("jqGridToolbarAfterClear");if(a.isFunction(b.afterClear)){b.afterClear()}},m=function(){var p=a("tr.ui-search-toolbar",d.grid.hDiv),q=d.p.frozenColumns===true?a("tr.ui-search-toolbar",d.grid.fhDiv):false;if(p.css("display")==="none"){p.show();if(q){q.show()}}else{p.hide();if(q){q.hide()}}},f=function(r,v,C){a("#sopt_menu").remove();v=parseInt(v,10);C=parseInt(C,10)+18;var s=a(".ui-jqgrid-view").css("font-size")||"11px";var B='<ul id="sopt_menu" class="ui-search-menu modal-content" role="menu" tabindex="0" style="font-size:'+s+";left:"+v+"px;top:"+C+'px;">',A=a(r).attr("soper"),z,p=[],u;var t=0,x=a(r).attr("colname"),w=d.p.colModel.length;while(t<w){if(d.p.colModel[t].name===x){break}t++}var q=d.p.colModel[t],y=a.extend({},q.searchoptions);if(!y.sopt){y.sopt=[];y.sopt[0]=q.stype==="select"?"eq":b.defaultSearch}a.each(b.odata,function(){p.push(this.oper)});for(t=0;t<y.sopt.length;t++){u=a.inArray(y.sopt[t],p);if(u!==-1){z=A===b.odata[u].oper?i.highlight:"";B+='<li class="ui-menu-item '+z+'" role="presentation"><a class="'+i.cornerall+' g-menu-item" tabindex="0" role="menuitem" value="'+b.odata[u].oper+'" oper="'+b.operands[b.odata[u].oper]+'"><table class="ui-common-table"><tr><td width="25px">'+b.operands[b.odata[u].oper]+"</td><td>"+b.odata[u].text+"</td></tr></table></a></li>"}}B+="</ul>";a("body").append(B);a("#sopt_menu").addClass("ui-menu "+g.menu_widget);a("#sopt_menu > li > a").hover(function(){a(this).addClass(i.hover)},function(){a(this).removeClass(i.hover)}).click(function(){var F=a(this).attr("value"),E=a(this).attr("oper");a(d).triggerHandler("jqGridToolbarSelectOper",[F,E,r]);a("#sopt_menu").hide();a(r).text(E).attr("soper",F);if(b.autosearch===true){var D=a(r).parent().next().children()[0];if(a(D).val()||F==="nu"||F==="nn"){o()}}})};var n=a("<tr class='ui-search-toolbar' role='row'></tr>"),l,k,j;if(b.restoreFromFilters){j=d.p.postData.filters;if(j){if(typeof j==="string"){j=a.jgrid.parse(j)}k=j.rules.length?j.rules:false}}a.each(d.p.colModel,function(p){var q=this,A,x="",B="=",z,u,C,r,s,t,w,E=a("<th role='columnheader' class='"+e.headerBox+" ui-th-"+d.p.direction+"' id='gsh_"+d.p.id+"_"+q.name+"' ></th>"),F=a("<div></div>"),D=a("<table class='ui-search-table' cellspacing='0'><tr><td class='ui-search-oper' headers=''></td><td class='ui-search-input' headers=''></td><td class='ui-search-clear' headers=''></td></tr></table>");if(this.hidden===true){a(E).css("display","none")}this.search=this.search===false?false:true;if(this.stype===undefined){this.stype="text"}A=a.extend({},this.searchoptions||{},{name:q.index||q.name,id:"gs_"+d.p.idPrefix+q.name,oper:"search"});if(this.search){if(b.restoreFromFilters&&k){w=false;for(var v=0;v<k.length;v++){if(k[v].field){var y=q.index||q.name;if(y===k[v].field){w=k[v];break}}}}if(b.searchOperators){z=(A.sopt)?A.sopt[0]:q.stype==="select"?"eq":b.defaultSearch;if(b.restoreFromFilters&&w){z=w.op}for(u=0;u<b.odata.length;u++){if(b.odata[u].oper===z){B=b.operands[z]||"";break}}C=A.searchtitle!=null?A.searchtitle:b.operandTitle;x="<a title='"+C+"' style='padding-right: 0.5em;' soper='"+z+"' class='soptclass' colname='"+this.name+"'>"+B+"</a>"}a("td:eq(0)",D).attr("colindex",p).append(x);if(A.clearSearch===undefined){A.clearSearch=true}if(A.clearSearch){r=b.resetTitle||"Clear Search Value";a("td:eq(2)",D).append("<a title='"+r+"' style='padding-right: 0.3em;padding-left: 0.3em;' class='clearsearchclass'>"+b.resetIcon+"</a>")}else{a("td:eq(2)",D).hide()}if(this.surl){A.dataUrl=this.surl}s="";if(A.defaultValue){s=a.isFunction(A.defaultValue)?A.defaultValue.call(d):A.defaultValue}if(b.restoreFromFilters&&w){s=w.data}t=a.jgrid.createEl.call(d,this.stype,A,s,false,a.extend({},a.jgrid.ajaxOptions,d.p.ajaxSelectOptions||{}));a(t).addClass(g.srInput);a("td:eq(1)",D).append(t);a(F).append(D);if(A.dataEvents==null){A.dataEvents=[]}switch(this.stype){case"select":if(b.autosearch===true){A.dataEvents.push({type:"change",fn:function(){o();return false}})}break;case"text":if(b.autosearch===true){if(b.searchOnEnter){A.dataEvents.push({type:"keypress",fn:function(G){var H=G.charCode||G.keyCode||0;if(H===13){o();return false}return this}})}else{A.dataEvents.push({type:"keydown",fn:function(G){var H=G.which;switch(H){case 13:return false;case 9:case 16:case 37:case 38:case 39:case 40:case 27:break;default:if(l){clearTimeout(l)}l=setTimeout(function(){o()},b.autosearchDelay)}}})}}break}a.jgrid.bindEv.call(d,t,A)}a(E).append(F);a(n).append(E);if(!b.searchOperators){a("td:eq(0)",D).hide()}});a("table thead",d.grid.hDiv).append(n);if(b.searchOperators){a(".soptclass",n).click(function(p){var r=a(this).offset(),q=(r.left),s=(r.top);f(this,q,s);p.stopPropagation()});a("body").on("click",function(p){if(p.target.className!=="soptclass"){a("#sopt_menu").hide()}})}a(".clearsearchclass",n).click(function(){var r=a(this).parents("tr:first"),p=parseInt(a("td.ui-search-oper",r).attr("colindex"),10),s=a.extend({},d.p.colModel[p].searchoptions||{}),q=s.defaultValue?s.defaultValue:"";if(d.p.colModel[p].stype==="select"){if(q){a("td.ui-search-input select",r).val(q)}else{a("td.ui-search-input select",r)[0].selectedIndex=0}}else{a("td.ui-search-input input",r).val(q)}if(b.autosearch===true){o()}});this.p.filterToolbar=true;this.triggerToolbar=o;this.clearToolbar=h;this.toggleToolbar=m})},destroyFilterToolbar:function(){return this.each(function(){if(!this.p.filterToolbar){return}this.triggerToolbar=null;this.clearToolbar=null;this.toggleToolbar=null;this.p.filterToolbar=false;a(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove()})},searchGrid:function(b){var c=a.jgrid.getRegional(this[0],"search");b=a.extend(true,{recreateFilter:false,drag:true,sField:"searchField",sValue:"searchString",sOper:"searchOper",sFilter:"filters",loadDefaults:true,beforeShowSearch:null,afterShowSearch:null,onInitializeSearch:null,afterRedraw:null,afterChange:null,sortStrategy:null,closeAfterSearch:false,closeAfterReset:false,closeOnEscape:false,searchOnEnter:false,multipleSearch:false,multipleGroup:false,top:0,left:0,jqModal:true,modal:false,resize:true,width:450,height:"auto",dataheight:"auto",showQuery:false,errorcheck:true,sopt:null,stringResult:undefined,onClose:null,onSearch:null,onReset:null,toTop:true,overlay:30,columns:[],tmplNames:null,tmplFilters:null,tmplLabel:" Template: ",showOnLoad:false,layer:null,operands:{eq:"=",ne:"<>",lt:"<",le:"<=",gt:">",ge:">=",bw:"LIKE",bn:"NOT LIKE","in":"IN",ni:"NOT IN",ew:"LIKE",en:"NOT LIKE",cn:"LIKE",nc:"NOT LIKE",nu:"IS NULL",nn:"ISNOT NULL"}},c,b||{});return this.each(function(){var d=this;if(!d.grid){return}var r="fbox_"+d.p.id,y=true,w=true,v={themodal:"searchmod"+r,modalhead:"searchhd"+r,modalcontent:"searchcnt"+r,scrollelm:r},q=d.p.postData[b.sFilter],t,k=a.jgrid.styleUI[(d.p.styleUI||"jQueryUI")].filter,p=a.jgrid.styleUI[(d.p.styleUI||"jQueryUI")].common;b.styleUI=d.p.styleUI;if(typeof q==="string"){q=a.jgrid.parse(q)}if(b.recreateFilter===true){a("#"+a.jgrid.jqID(v.themodal)).remove()}function x(A){y=a(d).triggerHandler("jqGridFilterBeforeShow",[A]);if(y===undefined){y=true}if(y&&a.isFunction(b.beforeShowSearch)){y=b.beforeShowSearch.call(d,A)}if(y){a.jgrid.viewModal("#"+a.jgrid.jqID(v.themodal),{gbox:"#gbox_"+a.jgrid.jqID(r),jqm:b.jqModal,modal:b.modal,overlay:b.overlay,toTop:b.toTop});a(d).triggerHandler("jqGridFilterAfterShow",[A]);if(a.isFunction(b.afterShowSearch)){b.afterShowSearch.call(d,A)}}}if(a("#"+a.jgrid.jqID(v.themodal))[0]!==undefined){x(a("#fbox_"+a.jgrid.jqID(d.p.id)))}else{var s=a("<div><div id='"+r+"' class='searchFilter' style='overflow:auto'></div></div>").insertBefore("#gview_"+a.jgrid.jqID(d.p.id)),e="left",j="";if(d.p.direction==="rtl"){e="right";j=" style='text-align:left'";s.attr("dir","rtl")}var o=a.extend([],d.p.colModel),h="<a id='"+r+"_search' class='fm-button "+p.button+" fm-button-icon-right ui-search'><span class='"+p.icon_base+" "+k.icon_search+"'></span>"+b.Find+"</a>",f="<a id='"+r+"_reset' class='fm-button "+p.button+" fm-button-icon-left ui-reset'><span class='"+p.icon_base+" "+k.icon_reset+"'></span>"+b.Reset+"</a>",g="",z="",n,u=false,i,l=-1;if(b.showQuery){g="<a id='"+r+"_query' class='fm-button "+p.button+" fm-button-icon-left'><span class='"+p.icon_base+" "+k.icon_query+"'></span>Query</a>"}if(!b.columns.length){a.each(o,function(B,D){if(!D.label){D.label=d.p.colNames[B]}if(!u){var E=(D.search===undefined)?true:D.search,A=(D.hidden===true),C=(D.searchoptions&&D.searchoptions.searchhidden===true);if((C&&E)||(E&&!A)){u=true;n=D.index||D.name;l=B}}})}else{o=b.columns;l=0;n=o[0].index||o[0].name}if((!q&&n)||b.multipleSearch===false){var m="eq";if(l>=0&&o[l].searchoptions&&o[l].searchoptions.sopt){m=o[l].searchoptions.sopt[0]}else{if(b.sopt&&b.sopt.length){m=b.sopt[0]}}q={groupOp:"AND",rules:[{field:n,op:m,data:""}]}}u=false;if(b.tmplNames&&b.tmplNames.length){u=true;z="<tr><td class='ui-search-label'>"+b.tmplLabel+"</td>";z+="<td><select class='ui-template "+k.srSelect+"'>";z+="<option value='default'>Default</option>";a.each(b.tmplNames,function(A,B){z+="<option value='"+A+"'>"+B+"</option>"});z+="</select></td></tr>"}i="<table class='EditTable' style='border:0px none;margin-top:5px' id='"+r+"_2'><tbody><tr><td colspan='2'><hr class='"+p.content+"' style='margin:1px'/></td></tr>"+z+"<tr><td class='EditButton' style='text-align:"+e+"'>"+f+"</td><td class='EditButton' "+j+">"+g+h+"</td></tr></tbody></table>";r=a.jgrid.jqID(r);a("#"+r).jqFilter({columns:o,sortStrategy:b.sortStrategy,filter:b.loadDefaults?q:null,showQuery:b.showQuery,errorcheck:b.errorcheck,sopt:b.sopt,groupButton:b.multipleGroup,ruleButtons:b.multipleSearch,afterRedraw:b.afterRedraw,ops:b.odata,operands:b.operands,ajaxSelectOptions:d.p.ajaxSelectOptions,groupOps:b.groupOps,onChange:function(){if(this.p.showQuery){a(".query",this).html(this.toUserFriendlyString())}if(a.isFunction(b.afterChange)){b.afterChange.call(d,a("#"+r),b)}},direction:d.p.direction,id:d.p.id});s.append(i);if(u&&b.tmplFilters&&b.tmplFilters.length){a(".ui-template",s).bind("change",function(){var A=a(this).val();if(A==="default"){a("#"+r).jqFilter("addFilter",q)}else{a("#"+r).jqFilter("addFilter",b.tmplFilters[parseInt(A,10)])}return false})}if(b.multipleGroup===true){b.multipleSearch=true}a(d).triggerHandler("jqGridFilterInitialize",[a("#"+r)]);if(a.isFunction(b.onInitializeSearch)){b.onInitializeSearch.call(d,a("#"+r))}b.gbox="#gbox_"+r;if(b.layer){a.jgrid.createModal(v,s,b,"#gview_"+a.jgrid.jqID(d.p.id),a("#gbox_"+a.jgrid.jqID(d.p.id))[0],"#"+a.jgrid.jqID(b.layer),{position:"relative"})}else{a.jgrid.createModal(v,s,b,"#gview_"+a.jgrid.jqID(d.p.id),a("#gbox_"+a.jgrid.jqID(d.p.id))[0])}if(b.searchOnEnter||b.closeOnEscape){a("#"+a.jgrid.jqID(v.themodal)).keydown(function(B){var A=a(B.target);if(b.searchOnEnter&&B.which===13&&!A.hasClass("add-group")&&!A.hasClass("add-rule")&&!A.hasClass("delete-group")&&!A.hasClass("delete-rule")&&(!A.hasClass("fm-button")||!A.is("[id$=_query]"))){a("#"+r+"_search").click();return false}if(b.closeOnEscape&&B.which===27){a("#"+a.jgrid.jqID(v.modalhead)).find(".ui-jqdialog-titlebar-close").click();return false}})}if(g){a("#"+r+"_query").bind("click",function(){a(".queryresult",s).toggle();return false})}if(b.stringResult===undefined){b.stringResult=b.multipleSearch}a("#"+r+"_search").bind("click",function(){var D={},C,B;t=a("#"+r);t.find(".input-elm:focus").change();B=t.jqFilter("filterData");if(b.errorcheck){t[0].hideError();if(!b.showQuery){t.jqFilter("toSQLString")}if(t[0].p.error){t[0].showError();return false}}if(b.stringResult){try{C=JSON.stringify(B)}catch(A){}if(typeof C==="string"){D[b.sFilter]=C;a.each([b.sField,b.sValue,b.sOper],function(){D[this]=""})}}else{if(b.multipleSearch){D[b.sFilter]=B;a.each([b.sField,b.sValue,b.sOper],function(){D[this]=""})}else{D[b.sField]=B.rules[0].field;D[b.sValue]=B.rules[0].data;D[b.sOper]=B.rules[0].op;D[b.sFilter]=""}}d.p.search=true;a.extend(d.p.postData,D);w=a(d).triggerHandler("jqGridFilterSearch");if(w===undefined){w=true}if(w&&a.isFunction(b.onSearch)){w=b.onSearch.call(d,d.p.filters)}if(w!==false){a(d).trigger("reloadGrid",[{page:1}])}if(b.closeAfterSearch){a.jgrid.hideModal("#"+a.jgrid.jqID(v.themodal),{gb:"#gbox_"+a.jgrid.jqID(d.p.id),jqm:b.jqModal,onClose:b.onClose})}return false});a("#"+r+"_reset").bind("click",function(){var B={},A=a("#"+r);d.p.search=false;d.p.resetsearch=true;if(b.multipleSearch===false){B[b.sField]=B[b.sValue]=B[b.sOper]=""}else{B[b.sFilter]=""}A[0].resetFilter();if(u){a(".ui-template",s).val("default")}a.extend(d.p.postData,B);w=a(d).triggerHandler("jqGridFilterReset");if(w===undefined){w=true}if(w&&a.isFunction(b.onReset)){w=b.onReset.call(d)}if(w!==false){a(d).trigger("reloadGrid",[{page:1}])}if(b.closeAfterReset){a.jgrid.hideModal("#"+a.jgrid.jqID(v.themodal),{gb:"#gbox_"+a.jgrid.jqID(d.p.id),jqm:b.jqModal,onClose:b.onClose})}return false});x(a("#"+r));a(".fm-button:not(."+p.disabled+")",s).hover(function(){a(this).addClass(p.hover)},function(){a(this).removeClass(p.hover)})}})}})}));