package com.lnlic.technic.bo;

import org.apache.commons.lang.StringUtils;

/**
 * 电价补贴BO
 * Created by lnlic on 2017/7/19.
 */
public class DjbtBO {

    //机组编号
    private String jzbh;
    //达标时间
    private String dbsj;
    //SO2小时平均浓度值 mg/m3）
    private String so2xspjndz;
    //NOx小时平均浓度值 mg/m3）
    private String noxxspjndz;
    //烟尘小时平均浓度值 （mg/m3）
    private String ycxspjndz;
    //相应电量(kw·h)
    private String xydl;
    //超低电价补贴额(元)
    private String cddjbte;
    //达标时间格式化  用于排序
    private String dbsjgsh;
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

    public String getDbsj() {
        return dbsj;
    }

    public void setDbsj(String dbsj) {
        this.dbsj = dbsj;
    }

    public String getSo2xspjndz() {
        return so2xspjndz;
    }

    public void setSo2xspjndz(String so2xspjndz) {
        this.so2xspjndz = so2xspjndz;
    }

    public String getNoxxspjndz() {
        return noxxspjndz;
    }

    public void setNoxxspjndz(String noxxspjndz) {
        this.noxxspjndz = noxxspjndz;
    }

    public String getYcxspjndz() {
        return ycxspjndz;
    }

    public void setYcxspjndz(String ycxspjndz) {
        this.ycxspjndz = ycxspjndz;
    }

    public String getXydl() {
        return xydl;
    }

    public void setXydl(String xydl) {
        this.xydl = xydl;
    }

    public String getCddjbte() {
        return StringUtils.isNotEmpty(cddjbte) && cddjbte.indexOf(".") == 0 ? "0" + cddjbte : cddjbte;
    }

    public void setCddjbte(String cddjbte) {
        this.cddjbte = cddjbte;
    }

    public String getDbsjgsh() {
        return dbsjgsh;
    }

    public void setDbsjgsh(String dbsjgsh) {
        this.dbsjgsh = dbsjgsh;
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
