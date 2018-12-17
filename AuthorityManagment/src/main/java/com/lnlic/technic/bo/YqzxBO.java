package com.lnlic.technic.bo;

/**
 * 烟气在线BO
 * Created by lnlic on 2017/7/18.
 */
public class YqzxBO {

    //主键
    private String id;
    //时间
    private String sj;
    //电厂名称
    private String dcmc;
    //机组名称
    private String jzmc;
    //二氧化硫浓度
    private String eyhlnd;
    //烟尘浓度
    private String ycnd;
    //氮氧化物浓度
    private String dyhwnd;
    //含氧量
    private String hyl;
    //发电电量
    private String fddl;
    //二氧化硫浓度_实际=二氧化硫浓度*15%/（21%-氧量）
    private String eyhlnd_sj;
    //烟尘浓度_实际=烟尘浓度*15%/（21%-氧量）
    private String ycnd_sj;
    //氮氧化物浓度_实际=氮氧化物浓度*15%/（21%-氧量）
    private String dyhwnd_sj;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSj() {
        return sj;
    }

    public void setSj(String sj) {
        this.sj = sj;
    }

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

    public String getEyhlnd() {
        return eyhlnd;
    }

    public void setEyhlnd(String eyhlnd) {
        this.eyhlnd = eyhlnd;
    }

    public String getYcnd() {
        return ycnd;
    }

    public void setYcnd(String ycnd) {
        this.ycnd = ycnd;
    }

    public String getDyhwnd() {
        return dyhwnd;
    }

    public void setDyhwnd(String dyhwnd) {
        this.dyhwnd = dyhwnd;
    }

    public String getHyl() {
        return hyl;
    }

    public void setHyl(String hyl) {
        this.hyl = hyl;
    }

    public String getFddl() {
        return fddl;
    }

    public void setFddl(String fddl) {
        this.fddl = fddl;
    }

    public String getEyhlnd_sj() {
        return eyhlnd_sj;
    }

    public void setEyhlnd_sj(String eyhlnd_sj) {
        this.eyhlnd_sj = eyhlnd_sj;
    }

    public String getYcnd_sj() {
        return ycnd_sj;
    }

    public void setYcnd_sj(String ycnd_sj) {
        this.ycnd_sj = ycnd_sj;
    }

    public String getDyhwnd_sj() {
        return dyhwnd_sj;
    }

    public void setDyhwnd_sj(String dyhwnd_sj) {
        this.dyhwnd_sj = dyhwnd_sj;
    }
}
