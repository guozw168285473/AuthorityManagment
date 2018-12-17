/*******************************************************************************
 * File Name： utilCMD.js Description： shiyh@lnlic.com Change log
 ******************************************************************************/
define(function(require, exports, module) {

	exports.ajaxPostJson = function(url, postData, callBack) {
		try {
			jQuery.ajax({
				type : 'post',
				dataType : "json",
				url : url,
				data : postData,
				cache : false,
				async : false,
				success : function(data) {
					callBack(data);
				},
				error : function(data) {
				}
			});
		} catch (e) {

		}
	}

	exports.checkUndefined = function(value) {
		var result = false;
		if (typeof (value) == "undefined") {
			result = true;
		}
		return result;
	}

	exports.formatTimeStamp = function(date) {
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		m = m < 10 ? '0' + m : m;
		var d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		return y + '-' + m + '-' + d;
	}

});