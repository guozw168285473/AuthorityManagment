package com.lnlic.technic.dao.impl;

import com.lnlic.common.util.dao.BaseDao;
import com.lnlic.technic.dao.SysMenuDao;
import com.lnlic.technic.domain.SysMenu;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by lnlic_guozw on 2018/11/23.
 */
@Repository
public class SysMenuDaoImpl extends BaseDao implements SysMenuDao {

    public static final String _NAMESPACE_ = SysMenuDao.class.getName() + ".";

    @Override
    public List<SysMenu> getMenuList(Map<String, Object> params) {
        return queryForList(_NAMESPACE_ + "getMenuList", params);
    }

    @Override
    public List<SysMenu> getMenuList2nd(SysMenu sysMenu) {
        return queryForList(_NAMESPACE_ + "getMenuList2nd", sysMenu);
    }

    @Override
    public boolean updateSysMenu(SysMenu sysMenu) {
        return update(_NAMESPACE_ + "updateSysMenu", sysMenu);
    }

    @Override
    public boolean addSysMenu(SysMenu sysMenu) {
        return insert(_NAMESPACE_ + "addSysMenu", sysMenu);
    }

    @Override
    public boolean addRoleMenu(Map<String, Object> roleMenuMap) {
        return insert(_NAMESPACE_ + "addRoleMenu", roleMenuMap);
    }

    @Override
    public SysMenu getSysMenuObj(SysMenu sysMenu) {
        return (SysMenu) queryForObject(_NAMESPACE_ + "getSysMenuObj", sysMenu);
    }

}
