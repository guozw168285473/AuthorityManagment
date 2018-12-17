package com.lnlic.technic.bo;

import org.apache.commons.lang.StringUtils;

/**
 * 电价考核BO
 * Created by lnlic on 2017/7/19.
 */
public class DjkhBO {

    //机组编号
    private String jzbh;
    //污染物因子类型
    private String wrwyzlx;
    //超标时间
    private String cbsj;
    //小时平均浓度值(mg/m3)
    private String xspjndz;
    //超标倍数
    private String cbbs;
    //相应考核电量(kWh)
    private String xykhdl;
    //环保电价扣减(元)
    private String hbdjkj;
    //超标时间格式化 用于排序
    private String cbsjgsh;
    //电厂名称
    private String dcmc;
    //合计
    private String hj;
    //备注
    private String bz;

    public String getJzbh() {
        return jzbh;
    }

    public void setJzbh(String jzbh) {
        this.jzbh = jzbh;
    }

    public String getWrwyzlx() {
        return wrwyzlx;
    }

    public void setWrwyzlx(String wrwyzlx) {
        this.wrwyzlx = wrwyzlx;
    }

    public String getCbsj() {
        return cbsj;
    }

    public void setCbsj(String cbsj) {
        this.cbsj = cbsj;
    }

    public String getXspjndz() {
        return xspjndz;
    }

    public void setXspjndz(String xspjndz) {
        this.xspjndz = xspjndz;
    }

    public String getCbbs() {
        return StringUtils.isNotEmpty(cbbs) && cbbs.indexOf(".") == 0 ? "0" + cbbs : cbbs;
    }

    public void setCbbs(String cbbs) {
        this.cbbs = cbbs;
    }

    public String getXykhdl() {
        return StringUtils.isNotEmpty(xykhdl) && xykhdl.indexOf(".") == 0 ? "0" + xykhdl : xykhdl;

    }

    public void setXykhdl(String xykhdl) {
        this.xykhdl = xykhdl;
    }

    public String getHbdjkj() {
        return StringUtils.isNotEmpty(hbdjkj) && hbdjkj.indexOf(".") == 0 ? "0" + hbdjkj : hbdjkj;

    }

    public void setHbdjkj(String hbdjkj) {
        this.hbdjkj = hbdjkj;
    }

    public String getCbsjgsh() {
        return cbsjgsh;
    }

    public void setCbsjgsh(String cbsjgsh) {
        this.cbsjgsh = cbsjgsh;
    }

    public String getDcmc() {
        return dcmc;
    }

    public void setDcmc(String dcmc) {
        this.dcmc = dcmc;
    }

    public String getHj() {
        return hj;
    }

    public void setHj(String hj) {
        this.hj = hj;
    }

    public String getBz() {
        return bz;
    }

    public void setBz(String bz) {
        this.bz = bz;
    }
}
