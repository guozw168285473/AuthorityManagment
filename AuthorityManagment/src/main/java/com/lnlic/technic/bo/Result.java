package com.lnlic.technic.bo;

/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 2018-11-17 15:22
 * <br>@version: 1.0
 */
public class Result {

    private Integer code;
    private String msg;
    private Object data;
    private boolean flag;

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public boolean getFlag() {
        return flag;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
