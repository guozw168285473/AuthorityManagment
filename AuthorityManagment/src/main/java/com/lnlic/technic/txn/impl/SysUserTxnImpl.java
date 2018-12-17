package com.lnlic.technic.txn.impl;

import com.lnlic.common.util.context.PageBean;
import com.lnlic.technic.dao.SysUserDao;
import com.lnlic.technic.domain.SysUser;
import com.lnlic.technic.txn.SysUserTxn;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Map;

/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 2018-11-16 23:25
 * <br>@version: 1.0
 */
@Service
public class SysUserTxnImpl implements SysUserTxn {
    @Resource
    private SysUserDao sysUserDao;

    @Override
    public PageBean<SysUser> getSysUserListPage(PageBean<SysUser> pageRequest, Map<String, Object> params) {
        return sysUserDao.getSysUserListPage(pageRequest, params);
    }

    @Override
    public SysUser getSysUserObj(SysUser sysUser) {
        return sysUserDao.getSysUserObj(sysUser);
    }

    @Override
    public boolean updateSysUser(SysUser sysUser) {
        return sysUserDao.updateSysUser(sysUser);
    }

    @Override
    public boolean addSysUser(SysUser sysUser) {
        return sysUserDao.addSysUser(sysUser);
    }

    @Override
    public boolean addOrgUser(Map<String, Object> params) {
        return sysUserDao.addOrgUser(params);
    }

}
