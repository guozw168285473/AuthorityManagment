package com.lnlic.technic.dao.impl;

import com.lnlic.common.util.dao.BaseDao;
import com.lnlic.technic.dao.SysRoleDao;
import com.lnlic.technic.domain.SysRole;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by lnlic_guozw on 2018/11/23.
 */
@Repository
public class SysRoleDaoImpl extends BaseDao implements SysRoleDao {

    public static final String _NAMESPACE_ = SysRoleDao.class.getName() + ".";

    @Override
    public List<SysRole> getSysRoleList(Map<String, Object> params) {
        return queryForList(_NAMESPACE_ + "getSysRoleList", params);
    }

    @Override
    public List<SysRole> getSysRoleList2nd() {
        return queryForList(_NAMESPACE_ + "getSysRoleList2nd");
    }

    @Override
    public SysRole getSysRoleObj(SysRole sysRole) {
        return (SysRole) queryForObject(_NAMESPACE_ + "getSysRoleObj", sysRole);
    }

    @Override
    public boolean addSysRole(SysRole sysRole) {
        return insert(_NAMESPACE_ + "addSysRole", sysRole);
    }

    @Override
    public boolean updateSysRqole(SysRole sysRole) {
        return update(_NAMESPACE_ + "updateSysRole", sysRole);
    }

    @Override
    public List<Map<String, Object>> getRolePermsConfig(Map<String, Object> params) {
        return queryForList(_NAMESPACE_ + "getRolePermsConfig", params);
    }

    @Override
    public boolean deletePermsConfig(Map<String, Object> params) {
        return delete(_NAMESPACE_ + "deletePermsConfig", params);
    }
}
