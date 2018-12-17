package com.lnlic.technic.txn.impl;

import com.lnlic.technic.dao.SysOrgDao;
import com.lnlic.technic.domain.SysOrg;
import com.lnlic.technic.txn.SysOrgTxn;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 2018-12-8 20:44
 * <br>@version: 1.0
 */
@Service
public class SysOrgTxnImpl implements SysOrgTxn {

    @Resource
    private SysOrgDao sysOrgDao;

    @Override
    public List<SysOrg> getOrgList(SysOrg sysOrg) {
        return sysOrgDao.getOrgList(sysOrg);
    }

    @Override
    public SysOrg getSysOrgObj(Map<String, Object> params) {
        return sysOrgDao.getSysOrgObj(params);
    }

    @Override
    public SysOrg getSysOrgObj2nd(SysOrg sysOrg) {
        return sysOrgDao.getSysOrgObj2nd(sysOrg);
    }

    @Override
    public boolean addSysOrg(SysOrg sysOrg) {
        return sysOrgDao.addSysOrg(sysOrg);
    }

    @Override
    public boolean updateSysOrg(SysOrg sysOrg) {
        return sysOrgDao.updateSysOrg(sysOrg);
    }
}
