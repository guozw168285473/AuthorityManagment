package com.lnlic.technic.txn.impl;

import com.lnlic.technic.dao.SysRoleDao;
import com.lnlic.technic.domain.SysRole;
import com.lnlic.technic.txn.SysRoleTxn;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * Created by lnlic_guozw on 2018/11/23.
 */
@Service
public class SysRoleTxnImpl implements SysRoleTxn {

    @Resource
    private SysRoleDao sysRoleDao;

    @Override
    public List<SysRole> getSysRoleList(Map<String, Object> params) {
        return sysRoleDao.getSysRoleList(params);
    }

    @Override
    public List<SysRole> getSysRoleList2nd() {
        return sysRoleDao.getSysRoleList2nd();
    }

    @Override
    public SysRole getSysRoleObj(SysRole sysRole) {
        return sysRoleDao.getSysRoleObj(sysRole);
    }

    @Override
    public boolean addSysRole(SysRole sysRole) {
        return sysRoleDao.addSysRole(sysRole);
    }

    @Override
    public boolean updateSysRqole(SysRole sysRole) {
        return sysRoleDao.updateSysRqole(sysRole);
    }

    @Override
    public List<Map<String, Object>> getRolePermsConfig(Map<String, Object> params) {
        return sysRoleDao.getRolePermsConfig(params);
    }

    @Override
    public boolean deletePermsConfig(Map<String, Object> params) {
        return sysRoleDao.deletePermsConfig(params);
    }
}
