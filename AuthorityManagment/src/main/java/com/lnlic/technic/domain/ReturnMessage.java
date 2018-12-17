package com.lnlic.technic.domain;

/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 17-2-14 上午11:30
 * <br>@version: 1.0
 */
public class ReturnMessage {

    private boolean result;
    private String msg;

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public boolean getResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }
}
