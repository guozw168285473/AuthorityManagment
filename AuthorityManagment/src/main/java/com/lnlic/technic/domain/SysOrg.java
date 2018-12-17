package com.lnlic.technic.domain;

/**
 * [部门表 sys_org]
 * <br>@author: guozw
 * <br>@date: 2018-12-8 20:36
 * <br>@version: 1.0
 */
public class SysOrg {

    private String org_id;
    private String parent_org_id;
    private String parent_org_name;
    private String org_name;
    private String order_num;
    private String create_time;
    private String update_time;
    private String remark;
    private String del_flag;
    private String org_status;
    private String fzr;//负责人
    private String lxdh;//联系电话
    private String email;

    public String getParent_org_name() {
        return parent_org_name;
    }

    public void setParent_org_name(String parent_org_name) {
        this.parent_org_name = parent_org_name;
    }

    public String getCreate_time() {
        return create_time;
    }

    public void setCreate_time(String create_time) {
        this.create_time = create_time;
    }

    public String getDel_flag() {
        return del_flag;
    }

    public void setDel_flag(String del_flag) {
        this.del_flag = del_flag;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFzr() {
        return fzr;
    }

    public void setFzr(String fzr) {
        this.fzr = fzr;
    }

    public String getLxdh() {
        return lxdh;
    }

    public void setLxdh(String lxdh) {
        this.lxdh = lxdh;
    }

    public String getOrder_num() {
        return order_num;
    }

    public void setOrder_num(String order_num) {
        this.order_num = order_num;
    }

    public String getOrg_id() {
        return org_id;
    }

    public void setOrg_id(String org_id) {
        this.org_id = org_id;
    }

    public String getOrg_name() {
        return org_name;
    }

    public void setOrg_name(String org_name) {
        this.org_name = org_name;
    }

    public String getOrg_status() {
        return org_status;
    }

    public void setOrg_status(String org_status) {
        this.org_status = org_status;
    }

    public String getParent_org_id() {
        return parent_org_id;
    }

    public void setParent_org_id(String parent_org_id) {
        this.parent_org_id = parent_org_id;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(String update_time) {
        this.update_time = update_time;
    }
}
