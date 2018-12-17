package com.lnlic.technic.service;

import com.lnlic.technic.domain.SysMenu;

import java.util.List;
import java.util.Map;

/**
 * Created by lnlic_guozw on 2018/11/23.
 */
public interface SysMenuService {

    public List<SysMenu> getMenuList(Map<String, Object> params);

    public List<SysMenu> getMenuList2nd(SysMenu sysMenu);

    public boolean updateSysMenu(SysMenu sysMenu);

    public boolean addSysMenu(SysMenu sysMenu);

    public SysMenu getSysMenuObj(SysMenu sysMenu);

}
