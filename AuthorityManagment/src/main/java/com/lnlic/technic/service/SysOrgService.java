package com.lnlic.technic.service;

import com.lnlic.technic.domain.SysOrg;

import java.util.List;
import java.util.Map;

/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 2018-12-8 20:43
 * <br>@version: 1.0
 */
public interface SysOrgService {
    public List<SysOrg> getOrgList(SysOrg sysOrg);

    public SysOrg getSysOrgObj(Map<String, Object> params);

    public SysOrg getSysOrgObj2nd(SysOrg sysOrg);

    public boolean addSysOrg(SysOrg sysOrg);

    public boolean updateSysOrg(SysOrg sysOrg);
}
