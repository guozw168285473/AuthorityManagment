package com.lnlic.technic.txn.impl;

import com.lnlic.technic.dao.SysMenuDao;
import com.lnlic.technic.domain.SysMenu;
import com.lnlic.technic.txn.SysMenuTxn;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * Created by lnlic_guozw on 2018/11/23.
 */
@Service
public class SysMenuTxnImpl implements SysMenuTxn {

    @Resource
    private SysMenuDao sysMenuDao;

    @Override
    public List<SysMenu> getMenuList(Map<String, Object> params) {
        return sysMenuDao.getMenuList(params);
    }

    @Override
    public List<SysMenu> getMenuList2nd(SysMenu sysMenu) {
        return sysMenuDao.getMenuList2nd(sysMenu);
    }

    @Override
    public boolean updateSysMenu(SysMenu sysMenu) {
        return sysMenuDao.updateSysMenu(sysMenu);
    }

    @Override
    public boolean addSysMenu(SysMenu sysMenu) {
        return sysMenuDao.addSysMenu(sysMenu);
    }

    @Override
    public boolean addRoleMenu(Map<String, Object> roleMenuMap) {
        return sysMenuDao.addRoleMenu(roleMenuMap);
    }

    @Override
    public SysMenu getSysMenuObj(SysMenu sysMenu) {
        return sysMenuDao.getSysMenuObj(sysMenu);
    }

}
