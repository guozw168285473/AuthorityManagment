package com.lnlic.technic.domain;

/**
 * [菜单SYS_MENU]
 * <br>@author: guozw
 * <br>@date: 2018-11-17 21:19
 * <br>@version: 1.0
 */
public class SysMenu {

    private String menu_id;
    private String menu_name;
    private String parent_id;
    private String order_num;
    private String url_addr;
    private String menu_type;
    private String menu_status;
    private String perms;//权限标识符
    private String menu_icon;
    private String create_time;
    private String update_time;
    private String remark;
    private String parent_menu_name;

    private String checkArr;//layui dtree 树多选框需要的字段 0-未选中 1-选中

    public String getCheckArr() {
        return checkArr;
    }

    public void setCheckArr(String checkArr) {
        this.checkArr = checkArr;
    }


    public String getParent_menu_name() {
        return parent_menu_name;
    }

    public void setParent_menu_name(String parent_menu_name) {
        this.parent_menu_name = parent_menu_name;
    }

    public String getCreate_time() {
        return create_time;
    }

    public void setCreate_time(String create_time) {
        this.create_time = create_time;
    }

    public String getMenu_icon() {
        return menu_icon;
    }

    public void setMenu_icon(String menu_icon) {
        this.menu_icon = menu_icon;
    }

    public String getMenu_id() {
        return menu_id;
    }

    public void setMenu_id(String menu_id) {
        this.menu_id = menu_id;
    }

    public String getMenu_name() {
        return menu_name;
    }

    public void setMenu_name(String menu_name) {
        this.menu_name = menu_name;
    }

    public String getMenu_status() {
        return menu_status;
    }

    public void setMenu_status(String menu_status) {
        this.menu_status = menu_status;
    }

    public String getMenu_type() {
        return menu_type;
    }

    public void setMenu_type(String menu_type) {
        this.menu_type = menu_type;
    }

    public String getOrder_num() {
        return order_num;
    }

    public void setOrder_num(String order_num) {
        this.order_num = order_num;
    }

    public String getParent_id() {
        return parent_id;
    }

    public void setParent_id(String parent_id) {
        this.parent_id = parent_id;
    }

    public String getPerms() {
        return perms;
    }

    public void setPerms(String perms) {
        this.perms = perms;
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

    public String getUrl_addr() {
        return url_addr;
    }

    public void setUrl_addr(String url_addr) {
        this.url_addr = url_addr;
    }
}
