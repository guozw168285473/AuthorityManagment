package com.lnlic.technic.dao.impl;

import com.lnlic.common.util.context.PageBean;
import com.lnlic.common.util.dao.BaseDao;
import com.lnlic.technic.dao.SysUserDao;
import com.lnlic.technic.domain.SysUser;
import org.springframework.stereotype.Repository;

import java.util.Map;

/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 2018-11-16 23:26
 * <br>@version: 1.0
 */
@Repository
public class SysUserDaoImpl extends BaseDao implements SysUserDao {

    public static final String _NAMESPACE_ = SysUserDao.class.getName() + ".";

    @Override
    public PageBean<SysUser> getSysUserListPage(PageBean<SysUser> pageRequest, Map<String, Object> params) {
        return pageQuery(_NAMESPACE_ + "getUserList", _NAMESPACE_ + "getUserListCount", pageRequest, params);
    }

    @Override
    public SysUser getSysUserObj(SysUser sysUser) {
        return (SysUser) queryForObject(_NAMESPACE_ + "getSysUserObj", sysUser);
    }

    @Override
    public boolean updateSysUser(SysUser sysUser) {
        return update(_NAMESPACE_ + "updateSysUser", sysUser);
    }

    @Override
    public boolean addSysUser(SysUser sysUser) {
        return insert(_NAMESPACE_ + "addSysUser", sysUser);
    }

    @Override
    public boolean addOrgUser(Map<String, Object> params) {
        return insert(_NAMESPACE_ + "addOrgUser", params);
    }

}
