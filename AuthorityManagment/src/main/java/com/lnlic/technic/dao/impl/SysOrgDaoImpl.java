package com.lnlic.technic.dao.impl;

import com.lnlic.common.util.dao.BaseDao;
import com.lnlic.technic.dao.SysOrgDao;
import com.lnlic.technic.domain.SysOrg;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 2018-12-8 20:45
 * <br>@version: 1.0
 */
@Repository
public class SysOrgDaoImpl extends BaseDao implements SysOrgDao {

    private static final String _NAMESPACE_ = SysOrgDao.class.getName() + ".";

    @Override
    public List<SysOrg> getOrgList(SysOrg sysOrg) {
        return queryForList(_NAMESPACE_ + "getSysOrgList", sysOrg);
    }

    @Override
    public SysOrg getSysOrgObj(Map<String, Object> params) {
        return (SysOrg) queryForObject(_NAMESPACE_ + "getSysOrgObj", params);
    }

    @Override
    public SysOrg getSysOrgObj2nd(SysOrg sysOrg) {
        return (SysOrg) queryForObject(_NAMESPACE_ + "getSysOrgObj2nd", sysOrg);
    }

    @Override
    public boolean addSysOrg(SysOrg sysOrg) {
        return insert(_NAMESPACE_ + "addSysOrg", sysOrg);
    }

    @Override
    public boolean updateSysOrg(SysOrg sysOrg) {
        return update(_NAMESPACE_ + "updateSysOrg", sysOrg);
    }
}
