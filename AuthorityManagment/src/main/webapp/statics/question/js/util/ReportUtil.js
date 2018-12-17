/**
 * 报表用工具类
 */
var ReportUtil = {};

/*
 * 从href获得参数
 *
 *     sHref: http://www.xxxxx.com/arg.html?arg1=value1&arg2=value2....
 *  sArgName: argN
 *    return: the value of argN : valueN
 */
ReportUtil.getArgFromHref = function(sHref, sArgName) {
    var args = sHref.split("?");
    var argVal = "";

    if(args[0] == sHref) {
        return argVal; // 无参数
    }
    var str = args[1];
    args = str.split("&");

    for(var i = 0; i < args.length; i ++) {
        str = args[i];
        var arg = str.split("=");
        if(arg.length <= 1) continue;
        if(arg[0] == sArgName) argVal = arg[1];
    }

    return argVal;
}

/**
 * 根据传入的报表ID取得报表数据并显示
 * 页面中报表元素需满足以下条件：
 *    包含reportid属性。
 *    包含reporttype属性。取值范围 chart | table
 *    包含modelid属性。取值即报表定义时的modelid
 *
 * @param reportid 报表ID，null时处理页面上所有存在的报表对象，传入时只处理相应的报表
 * @param url  报表处理action：http://ip:port/webappName/customreporting/getReportOptionData
 * @param params  报表传入后台参数
 * @param callback  回调方法
 */
ReportUtil.bindingReport = function(reportid, url, params, callback) {
    var callbackParam = {};

    if (!reportid) {
        return;
    }
    $("div[reportid='" + reportid + "'][reporttype='chart']").each(function(index, reportObj) {
        var chart = echarts.init(reportObj);
        callbackParam[$(this).attr("modelid")] = chart;
        chart.showLoading();
    });
    $("table[reportid='" + reportid + "'][reporttype='table']").each(function(index, reportObj) {
        callbackParam[$(this).attr("modelid")] = $(reportObj);
    });

    var postData = {"reportid":reportid, "params":params};
    $.ajax({
        url: url,
        type: 'POST',
        data: postData,
        dataType: 'json',
        async: true,
        timeout: 5000,
        error: function(res){
            $.each(callbackParam, function(modelid, reportObj) {
                if ($("[modelid='" + modelid + "'][reporttype]").attr("reporttype") == "chart") {
                    reportObj.hideLoading();
                }
            });
            ModalDialog.alert("报表浏览超时，请联系管理员！");
        },
        success: function(res){
            $.each(callbackParam, function(modelid, reportObj) {
                if ($("[modelid='" + modelid + "'][reporttype]").attr("reporttype") == "chart") {
                    reportObj.hideLoading();
                }
            });

            var dataJSON = (new Function("return " + res.optionStr))();
            var errMsg = ""; // 错误消息
            $.each(callbackParam, function(modelid, reportObj) {
                if ($("[modelid='" + modelid + "'][reporttype]").attr("reporttype") == "chart") {
                    if (dataJSON[modelid].isSuccess) {
                        if (dataJSON[modelid].hasData) {
                            reportObj.setOption((new Function("return " + dataJSON[modelid].option))());
                        } else {
                            reportObj.showLoading({
                                text : '没有满足条件的数据',
                                effect : 'bubble',
                                effectOption : {
                                    effect: {
                                        n: 0,
                                        timeInterval: 0
                                    }
                                },
                                textStyle : {
                                    fontSize : 30
                                }
                            });
                        }
                    } else {
                    	if (!dataJSON[modelid].errMsg) {
                    		dataJSON[modelid].errMsg = "未知错误";
                    	}
                        errMsg = errMsg + dataJSON[modelid].errMsg + "<br/>";
                        reportObj.showLoading({
                            text : dataJSON[modelid].errMsg,
                            effect : 'bubble',
                            effectOption : {
                                effect: {
                                    n: 0,
                                    timeInterval: 0
                                }
                            },
                            textStyle : {
                                fontSize : 14
                            }
                        });
                    }
                } else if ($("[modelid='" + modelid + "'][reporttype]").attr("reporttype") == "table") {
                    if (dataJSON[modelid].isSuccess) {
                        if (checkEmpty($(reportObj).attr("id"))) {
                            $(reportObj).attr("id", modelid);
                        }
                        if ($(reportObj).attr("inited")) {
                            var newTable = $("<table></table>").attr("id", $(reportObj).attr("id")).attr("reportid", reportid).attr("modelid", modelid).attr("reporttype", "table");;
                            newTable.appendTo($("#gbox_" + $(reportObj).attr("id")).parent());
                            $("#gbox_" + $(reportObj).attr("id")).remove();
                            callbackParam[modelid] = newTable;
                            reportObj = newTable;
                        }
                        $(reportObj).jqGrid(dataJSON[modelid].option);
                        $(reportObj).attr("inited",true);
                        $(reportObj)[0].addJSONData(dataJSON[modelid].data);
                    } else {
                        if ($(reportObj).attr("inited")) {
                            var newTable = $("<table></table>").attr("id", $(reportObj).attr("id")).attr("reportid", reportid).attr("modelid", modelid).attr("reporttype", "table");;
                            newTable.appendTo($("#gbox_" + $(reportObj).attr("id")).parent());
                            $("#gbox_" + $(reportObj).attr("id")).remove();
                            callbackParam[modelid] = newTable;
                            reportObj = newTable;
                        }
                        if (!dataJSON[modelid].errMsg) {
                    		dataJSON[modelid].errMsg = "未知错误";
                    	}
                        $(reportObj).html("<label class=\"f20\">ID为【" + modelid + "】的表格模型生成失败：" + dataJSON[modelid].errMsg + "</label>");
                    }
                } else {
                    ModalDialog.alert("ID为【" + $(reportObj).attr("reportid") + "】的报表报表类型错误：" + $(reportObj).attr("reporttype"));
                }
            });

            if (!checkEmpty(errMsg)) {
                ModalDialog.alert(errMsg);
            }

            if (callback != null) {
                callback(callbackParam, dataJSON);
            }
        }
    });
}
