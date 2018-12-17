package com.lnlic.technic.utils;

import com.lnlic.technic.domain.SysUser;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;

/**
 * [Shiro工具类]
 * <br>@author: guozw
 * <br>@date: 2018-11-19 22:20
 * <br>@version: 1.0
 */
public class ShiroUtils {

    /**
     * 获取主体
     * @return
     */
    public static Subject getSubject() {
        return SecurityUtils.getSubject();
    }

    /**
     * 设置session
     * @return
     */
    public static void setSession(SysUser sysUser) {
        getSession().setAttribute("sysUser", sysUser);
    }

    /**
     * 获取session
     * @return
     */
    public static Session getSession() {
        return getSubject().getSession();
    }

    /**
     * 获取当前登录用户
     * @return
     */
    public static SysUser getSysUser() {
        return (SysUser) getSession().getAttribute("sysUser");
    }

}
