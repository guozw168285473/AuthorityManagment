package com.lnlic.technic.bo;

import org.apache.commons.lang.StringUtils;

/**
 * 污染物超标时段
 * Created by lnlic_guozw on 2018/11/2.
 */
public class WrwcbsdBO {

    private String dcmc;//电厂名称
    private String jzmc;//机组名称
    private String wrwyz;//污染物因子
    private String tysj;//投运时间（小时）
    private String cbsj;//超标时间（小时）
    private String tyl;//投运率
    private String khdl;//考核电量（万kWh）
    private String hbdjkj;//环保电价扣减（万元）
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

    public String getWrwyz() {
        return wrwyz;
    }

    public void setWrwyz(String wrwyz) {
        this.wrwyz = wrwyz;
    }

    public String getTysj() {
        return tysj;
    }

    public void setTysj(String tysj) {
        this.tysj = tysj;
    }

    public String getCbsj() {
        return cbsj;
    }

    public void setCbsj(String cbsj) {
        this.cbsj = cbsj;
    }

    public String getTyl() {
        return tyl;
    }

    public void setTyl(String tyl) {
        this.tyl = tyl;
    }

    public String getKhdl() {
        if (StringUtils.isEmpty(khdl))
            khdl = "0";
        return khdl;
    }

    public void setKhdl(String khdl) {
        this.khdl = khdl;
    }

    public String getHbdjkj() {
        if (StringUtils.isEmpty(hbdjkj))
            hbdjkj = "0";
        return hbdjkj;
    }

    public void setHbdjkj(String hbdjkj) {
        this.hbdjkj = hbdjkj;
    }

    public String getOrdnum() {
        return ordnum;
    }

    public void setOrdnum(String ordnum) {
        this.ordnum = ordnum;
    }
}
