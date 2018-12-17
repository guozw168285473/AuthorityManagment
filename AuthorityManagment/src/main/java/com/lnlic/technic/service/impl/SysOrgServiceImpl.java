package com.lnlic.technic.service.impl;

import com.lnlic.technic.domain.SysOrg;
import com.lnlic.technic.service.SysOrgService;
import com.lnlic.technic.txn.SysOrgTxn;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 2018-12-8 20:43
 * <br>@version: 1.0
 */
@Service
public class SysOrgServiceImpl implements SysOrgService {

    @Resource
    private SysOrgTxn sysOrgTxn;

    @Override
    public List<SysOrg> getOrgList(SysOrg sysOrg) {
        return sysOrgTxn.getOrgList(sysOrg);
    }

    @Override
    public SysOrg getSysOrgObj(Map<String, Object> params) {
        return sysOrgTxn.getSysOrgObj(params);
    }

    @Override
    public SysOrg getSysOrgObj2nd(SysOrg sysOrg) {
        return sysOrgTxn.getSysOrgObj2nd(sysOrg);
    }

    @Override
    public boolean addSysOrg(SysOrg sysOrg) {
        sysOrg.setOrg_id(UUID.randomUUID().toString());
        sysOrg.setDel_flag("0");
        sysOrg.setOrg_status("0");
        return sysOrgTxn.addSysOrg(sysOrg);
    }

    @Override
    public boolean updateSysOrg(SysOrg sysOrg) {
        return sysOrgTxn.updateSysOrg(sysOrg);
    }
}
