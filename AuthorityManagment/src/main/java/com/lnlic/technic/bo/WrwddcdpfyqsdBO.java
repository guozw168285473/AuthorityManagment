package com.lnlic.technic.bo;

import org.apache.commons.lang.StringUtils;

/**
 * 污染物达到超低排放要求时段
 * Created by lnlic_guozw on 2018/11/2.
 */
public class WrwddcdpfyqsdBO {

    private String dcmc;//电厂名称
    private String jzmc;//机组名称
    private String tysj;//投运时间总和（小时）
    private String dbsj;//达标时间总和（小时）
    private String dbl;//符合超低限制的时间比率
    private String dlzh;//相应超低电价补贴电量总和（万kWh）
    private String btdj;//超低电价补贴额
    private String dchjbt;//电厂合计补贴
    private String ordnum;//排序码


    public String getDcmc() {
        return dcmc;
    }

    public void setDcmc(String dcmc) {
        this.dcmc = dcmc;
    }

    public String getJzmc() {
        return jzmc;
    }

    public void setJzmc(String jzmc) {
        this.jzmc = jzmc;
    }

    public String getTysj() {
        return tysj;
    }

    public void setTysj(String tysj) {
        this.tysj = tysj;
    }

    public String getDbsj() {
        return dbsj;
    }

    public void setDbsj(String dbsj) {
        this.dbsj = dbsj;
    }

    public String getDbl() {
        return dbl;
    }

    public void setDbl(String dbl) {
        this.dbl = dbl;
    }

    public String getDlzh() {
        if (StringUtils.isEmpty(dlzh))
            dlzh = "0";
        return dlzh;
    }

    public void setDlzh(String dlzh) {
        this.dlzh = dlzh;
    }

    public String getBtdj() {
        if (StringUtils.isEmpty(btdj))
            btdj = "0";
        return btdj;
    }

    public void setBtdj(String btdj) {
        this.btdj = btdj;
    }

    public String getDchjbt() {
        if (StringUtils.isEmpty(dchjbt))
            dchjbt = "0";
        return dchjbt;
    }

    public void setDchjbt(String dchjbt) {
        this.dchjbt = dchjbt;
    }

    public String getOrdnum() {
        return ordnum;
    }

    public void setOrdnum(String ordnum) {
        this.ordnum = ordnum;
    }
}
