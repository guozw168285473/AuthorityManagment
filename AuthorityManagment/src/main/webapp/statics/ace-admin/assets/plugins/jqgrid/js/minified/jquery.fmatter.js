!function(b){"function"==typeof define&&define.amd?define(["jquery","./grid.base"],b):b(jQuery)}(function(b){b.fmatter={},b.extend(b.fmatter,{isBoolean:function(c){return"boolean"==typeof c},isObject:function(a){return a&&("object"==typeof a||b.isFunction(a))||!1},isString:function(c){return"string"==typeof c},isNumber:function(c){return"number"==typeof c&&isFinite(c)},isValue:function(c){return this.isObject(c)||this.isString(c)||this.isNumber(c)||this.isBoolean(c)},isEmpty:function(a){return !this.isString(a)&&this.isValue(a)?!1:this.isValue(a)?(a=b.trim(a).replace(/\&nbsp\;/gi,"").replace(/\&#160\;/gi,""),""===a):!0}}),b.fn.fmatter=function(a,i,j,k,l){var m=i;j=b.extend({},b.jgrid.getRegional(this,"formatter"),j);try{m=b.fn.fmatter[a].call(this,i,j,k,l)}catch(n){}return m},b.fmatter.util={NumberFormat:function(a,n){if(b.fmatter.isNumber(a)||(a*=1),b.fmatter.isNumber(a)){var o,p=0>a,q=String(a),r=n.decimalSeparator||".";if(b.fmatter.isNumber(n.decimalPlaces)){var s=n.decimalPlaces,t=Math.pow(10,s);if(q=String(Math.round(a*t)/t),o=q.lastIndexOf("."),s>0){for(0>o?(q+=r,o=q.length-1):"."!==r&&(q=q.replace(".",r));q.length-1-o<s;){q+="0"}}}if(n.thousandsSeparator){var u=n.thousandsSeparator;o=q.lastIndexOf(r),o=o>-1?o:q.length;var v,w=q.substring(o),x=-1;for(v=o;v>0;v--){x++,x%3===0&&v!==o&&(!p||v>1)&&(w=u+w),w=q.charAt(v-1)+w}q=w}return q=n.prefix?n.prefix+q:q,q=n.suffix?q+n.suffix:q}return a}},b.fn.fmatter.defaultFormat=function(a,d){return b.fmatter.isValue(a)&&""!==a?a:d.defaultValue||"&#160;"},b.fn.fmatter.email=function(a,d){return b.fmatter.isEmpty(a)?b.fn.fmatter.defaultFormat(a,d):'<a href="mailto:'+a+'">'+a+"</a>"},b.fn.fmatter.checkbox=function(a,g){var h,i=b.extend({},g.checkbox);void 0!==g.colModel&&void 0!==g.colModel.formatoptions&&(i=b.extend({},i,g.colModel.formatoptions)),h=i.disabled===!0?'disabled="disabled"':"",(b.fmatter.isEmpty(a)||void 0===a)&&(a=b.fn.fmatter.defaultFormat(a,i)),a=String(a),a=(a+"").toLowerCase();var j=a.search(/(false|f|0|no|n|off|undefined)/i)<0?" checked='checked' ":"";return'<input type="checkbox" '+j+' value="'+a+'" offval="no" '+h+"/>"},b.fn.fmatter.link=function(a,f){var g={target:f.target},h="";return void 0!==f.colModel&&void 0!==f.colModel.formatoptions&&(g=b.extend({},g,f.colModel.formatoptions)),g.target&&(h="target="+g.target),b.fmatter.isEmpty(a)?b.fn.fmatter.defaultFormat(a,f):"<a "+h+' href="'+a+'">'+a+"</a>"},b.fn.fmatter.showlink=function(a,g){var h,i={baseLinkUrl:g.baseLinkUrl,showAction:g.showAction,addParam:g.addParam||"",target:g.target,idName:g.idName},j="";return void 0!==g.colModel&&void 0!==g.colModel.formatoptions&&(i=b.extend({},i,g.colModel.formatoptions)),i.target&&(j="target="+i.target),h=i.baseLinkUrl+i.showAction+"?"+i.idName+"="+g.rowId+i.addParam,b.fmatter.isString(a)||b.fmatter.isNumber(a)?"<a "+j+' href="'+h+'">'+a+"</a>":b.fn.fmatter.defaultFormat(a,g)},b.fn.fmatter.integer=function(a,e){var f=b.extend({},e.integer);return void 0!==e.colModel&&void 0!==e.colModel.formatoptions&&(f=b.extend({},f,e.colModel.formatoptions)),b.fmatter.isEmpty(a)?f.defaultValue:b.fmatter.util.NumberFormat(a,f)},b.fn.fmatter.number=function(a,e){var f=b.extend({},e.number);return void 0!==e.colModel&&void 0!==e.colModel.formatoptions&&(f=b.extend({},f,e.colModel.formatoptions)),b.fmatter.isEmpty(a)?f.defaultValue:b.fmatter.util.NumberFormat(a,f)},b.fn.fmatter.currency=function(a,e){var f=b.extend({},e.currency);return void 0!==e.colModel&&void 0!==e.colModel.formatoptions&&(f=b.extend({},f,e.colModel.formatoptions)),b.fmatter.isEmpty(a)?f.defaultValue:b.fmatter.util.NumberFormat(a,f)},b.fn.fmatter.date=function(a,g,h,i){var j=b.extend({},g.date);return void 0!==g.colModel&&void 0!==g.colModel.formatoptions&&(j=b.extend({},j,g.colModel.formatoptions)),j.reformatAfterEdit||"edit"!==i?b.fmatter.isEmpty(a)?b.fn.fmatter.defaultFormat(a,g):b.jgrid.parseDate.call(this,j.srcformat,a,j.newformat,j):b.fn.fmatter.defaultFormat(a,g)},b.fn.fmatter.select=function(a,n){a=String(a);var o,p,q=!1,r=[];if(void 0!==n.colModel.formatoptions?(q=n.colModel.formatoptions.value,o=void 0===n.colModel.formatoptions.separator?":":n.colModel.formatoptions.separator,p=void 0===n.colModel.formatoptions.delimiter?";":n.colModel.formatoptions.delimiter):void 0!==n.colModel.editoptions&&(q=n.colModel.editoptions.value,o=void 0===n.colModel.editoptions.separator?":":n.colModel.editoptions.separator,p=void 0===n.colModel.editoptions.delimiter?";":n.colModel.editoptions.delimiter),q){var s,t=(null!=n.colModel.editoptions&&n.colModel.editoptions.multiple===!0)==!0?!0:!1,u=[];if(t&&(u=a.split(","),u=b.map(u,function(c){return b.trim(c)})),b.fmatter.isString(q)){var v,w=q.split(p),x=0;for(v=0;v<w.length;v++){if(s=w[v].split(o),s.length>2&&(s[1]=b.map(s,function(c,d){return d>0?c:void 0}).join(o)),t){b.inArray(s[0],u)>-1&&(r[x]=s[1],x++)}else{if(b.trim(s[0])===b.trim(a)){r[0]=s[1];break}}}}else{b.fmatter.isObject(q)&&(t?r=b.map(u,function(c){return q[c]}):r[0]=q[a]||"")}}return a=r.join(", "),""===a?b.fn.fmatter.defaultFormat(a,n):a},b.fn.fmatter.rowactions=function(a){var o=b(this).closest("tr.jqgrow"),p=o.attr("id"),q=b(this).closest("table.ui-jqgrid-btable").attr("id").replace(/_frozen([^_]*)$/,"$1"),r=b("#"+q),s=r[0],t=s.p,u=t.colModel[b.jgrid.getCellIndex(this)],v=u.frozen?b("tr#"+p+" td:eq("+b.jgrid.getCellIndex(this)+") > div",r):b(this).parent(),w={extraparam:{}},x=function(d,e){b.isFunction(w.afterSave)&&w.afterSave.call(s,d,e),v.find("div.ui-inline-edit,div.ui-inline-del").show(),v.find("div.ui-inline-save,div.ui-inline-cancel").hide()},y=function(c){b.isFunction(w.afterRestore)&&w.afterRestore.call(s,c),v.find("div.ui-inline-edit,div.ui-inline-del").show(),v.find("div.ui-inline-save,div.ui-inline-cancel").hide()};void 0!==u.formatoptions&&(w=b.extend(w,u.formatoptions)),void 0!==t.editOptions&&(w.editOptions=t.editOptions),void 0!==t.delOptions&&(w.delOptions=t.delOptions),o.hasClass("jqgrid-new-row")&&(w.extraparam[t.prmNames.oper]=t.prmNames.addoper);var z={keys:w.keys,oneditfunc:w.onEdit,successfunc:w.onSuccess,url:w.url,extraparam:w.extraparam,aftersavefunc:x,errorfunc:w.onError,afterrestorefunc:y,restoreAfterError:w.restoreAfterError,mtype:w.mtype};switch(a){case"edit":r.jqGrid("editRow",p,z),v.find("div.ui-inline-edit,div.ui-inline-del").hide(),v.find("div.ui-inline-save,div.ui-inline-cancel").show(),r.triggerHandler("jqGridAfterGridComplete");break;case"save":r.jqGrid("saveRow",p,z)&&(v.find("div.ui-inline-edit,div.ui-inline-del").show(),v.find("div.ui-inline-save,div.ui-inline-cancel").hide(),r.triggerHandler("jqGridAfterGridComplete"));break;case"cancel":r.jqGrid("restoreRow",p,y),v.find("div.ui-inline-edit,div.ui-inline-del").show(),v.find("div.ui-inline-save,div.ui-inline-cancel").hide(),r.triggerHandler("jqGridAfterGridComplete");break;case"del":r.jqGrid("delGridRow",p,w.delOptions);break;case"formedit":r.jqGrid("setSelection",p),r.jqGrid("editGridRow",p,w.editOptions)}},b.fn.fmatter.actions=function(a,l){var m,n={keys:!1,editbutton:!0,delbutton:!0,editformbutton:!1},o=l.rowId,p="",q=b.jgrid.getRegional(this,"nav"),r=b.jgrid.styleUI[l.styleUI||"jQueryUI"].fmatter,s=b.jgrid.styleUI[l.styleUI||"jQueryUI"].common;if(void 0!==l.colModel.formatoptions&&(n=b.extend(n,l.colModel.formatoptions)),void 0===o||b.fmatter.isEmpty(o)){return""}var t="onmouseover=jQuery(this).addClass('"+s.hover+"'); onmouseout=jQuery(this).removeClass('"+s.hover+"');  ";return n.editformbutton?(m="id='jEditButton_"+o+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'formedit'); "+t,p+="<div title='"+q.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+m+"><span class='"+s.icon_base+" "+r.icon_edit+"'></span></div>"):n.editbutton&&(m="id='jEditButton_"+o+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'edit'); "+t,p+="<div title='"+q.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+m+"><span class='"+s.icon_base+" "+r.icon_edit+"'></span></div>"),n.delbutton&&(m="id='jDeleteButton_"+o+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'del'); "+t,p+="<div title='"+q.deltitle+"' style='float:left;' class='ui-pg-div ui-inline-del' "+m+"><span class='"+s.icon_base+" "+r.icon_del+"'></span></div>"),m="id='jSaveButton_"+o+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'save'); "+t,p+="<div title='"+q.savetitle+"' style='float:left;display:none' class='ui-pg-div ui-inline-save' "+m+"><span class='"+s.icon_base+" "+r.icon_save+"'></span></div>",m="id='jCancelButton_"+o+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'cancel'); "+t,p+="<div title='"+q.canceltitle+"' style='float:left;display:none;' class='ui-pg-div ui-inline-cancel' "+m+"><span class='"+s.icon_base+" "+r.icon_cancel+"'></span></div>","<div style='margin-left:8px;'>"+p+"</div>"},b.unformat=function(a,o,p,q){var r,s,t=o.colModel.formatter,u=o.colModel.formatoptions||{},v=/([\.\*\_\'\(\)\{\}\+\?\\])/g,w=o.colModel.unformat||b.fn.fmatter[t]&&b.fn.fmatter[t].unformat;if(void 0!==w&&b.isFunction(w)){r=w.call(this,b(a).text(),o,a)}else{if(void 0!==t&&b.fmatter.isString(t)){var x,y=b.jgrid.getRegional(this,"formatter")||{};switch(t){case"integer":u=b.extend({},y.integer,u),s=u.thousandsSeparator.replace(v,"\\$1"),x=new RegExp(s,"g"),r=b(a).text().replace(x,"");break;case"number":u=b.extend({},y.number,u),s=u.thousandsSeparator.replace(v,"\\$1"),x=new RegExp(s,"g"),r=b(a).text().replace(x,"").replace(u.decimalSeparator,".");break;case"currency":u=b.extend({},y.currency,u),s=u.thousandsSeparator.replace(v,"\\$1"),x=new RegExp(s,"g"),r=b(a).text(),u.prefix&&u.prefix.length&&(r=r.substr(u.prefix.length)),u.suffix&&u.suffix.length&&(r=r.substr(0,r.length-u.suffix.length)),r=r.replace(x,"").replace(u.decimalSeparator,".");break;case"checkbox":var z=o.colModel.editoptions?o.colModel.editoptions.value.split(":"):["Yes","No"];r=b("input",a).is(":checked")?z[0]:z[1];break;case"select":r=b.unformat.select(a,o,p,q);break;case"actions":return"";default:r=b(a).text()}}}return void 0!==r?r:q===!0?b(a).text():b.jgrid.htmlDecode(b(a).html())},b.unformat.select=function(a,r,s,t){var u=[],v=b(a).text();if(t===!0){return v}var w=b.extend({},void 0!==r.colModel.formatoptions?r.colModel.formatoptions:r.colModel.editoptions),x=void 0===w.separator?":":w.separator,y=void 0===w.delimiter?";":w.delimiter;if(w.value){var z,A=w.value,B=w.multiple===!0?!0:!1,C=[];if(B&&(C=v.split(","),C=b.map(C,function(c){return b.trim(c)})),b.fmatter.isString(A)){var D,E=A.split(y),F=0;for(D=0;D<E.length;D++){if(z=E[D].split(x),z.length>2&&(z[1]=b.map(z,function(c,d){return d>0?c:void 0}).join(x)),B){b.inArray(b.trim(z[1]),C)>-1&&(u[F]=z[0],F++)}else{if(b.trim(z[1])===b.trim(v)){u[0]=z[0];break}}}}else{(b.fmatter.isObject(A)||b.isArray(A))&&(B||(C[0]=v),u=b.map(C,function(d){var e;return b.each(A,function(c,f){return f===d?(e=c,!1):void 0}),void 0!==e?e:void 0}))}return u.join(", ")}return v||""},b.unformat.date=function(a,e){var f=b.jgrid.getRegional(this,"formatter.date")||{};return void 0!==e.formatoptions&&(f=b.extend({},f,e.formatoptions)),b.fmatter.isEmpty(a)?b.fn.fmatter.defaultFormat(a,e):b.jgrid.parseDate.call(this,f.newformat,a,f.srcformat,f)}});