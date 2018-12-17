package com.lnlic.technic.txn;

import com.lnlic.technic.domain.SysRole;

import java.util.List;
import java.util.Map;

/**
 * Created by lnlic_guozw on 2018/11/23.
 */
public interface SysRoleTxn {
    public List<SysRole> getSysRoleList(Map<String, Object> params);

    public List<SysRole> getSysRoleList2nd();

    public SysRole getSysRoleObj(SysRole sysRole);

    public boolean addSysRole(SysRole sysRole);

    public boolean updateSysRqole(SysRole sysRole);

    public List<Map<String,Object>> getRolePermsConfig(Map<String, Object> params);

    public boolean deletePermsConfig(Map<String, Object> params);
}
