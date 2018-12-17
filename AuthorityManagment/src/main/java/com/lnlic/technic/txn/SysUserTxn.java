package com.lnlic.technic.txn;

import com.lnlic.common.util.context.PageBean;
import com.lnlic.technic.domain.SysUser;

import java.util.Map;

/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 2018-11-16 23:24
 * <br>@version: 1.0
 */
public interface SysUserTxn {

    public PageBean<SysUser> getSysUserListPage(PageBean<SysUser> pageRequest, Map<String, Object> params);

    public SysUser getSysUserObj(SysUser sysUser);

    public boolean updateSysUser(SysUser sysUser);

    public boolean addSysUser(SysUser sysUser);

    public boolean addOrgUser(Map<String, Object> params);
}
