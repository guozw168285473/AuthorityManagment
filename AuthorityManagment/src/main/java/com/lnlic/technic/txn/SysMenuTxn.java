package com.lnlic.technic.txn;

import com.lnlic.technic.domain.SysMenu;

import java.util.List;
import java.util.Map;

/**
 * Created by lnlic_guozw on 2018/11/23.
 */
public interface SysMenuTxn {
    public List<SysMenu> getMenuList(Map<String, Object> params);

    public List<SysMenu> getMenuList2nd(SysMenu sysMenu);

    public boolean updateSysMenu(SysMenu sysMenu);

    public boolean addSysMenu(SysMenu sysMenu);

    public boolean addRoleMenu(Map<String, Object> roleMenuMap);

    public SysMenu getSysMenuObj(SysMenu sysMenu);

}
