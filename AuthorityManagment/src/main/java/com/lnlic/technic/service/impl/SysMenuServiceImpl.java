package com.lnlic.technic.service.impl;

import com.lnlic.common.web.context.ReadAblePropertyPlaceholderConfigurer;
import com.lnlic.technic.domain.SysMenu;
import com.lnlic.technic.service.SysMenuService;
import com.lnlic.technic.txn.SysMenuTxn;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * Created by lnlic_guozw on 2018/11/23.
 */
@Service
public class SysMenuServiceImpl implements SysMenuService {

    @Resource
    private SysMenuTxn sysMenuTxn;

    @Override
    public List<SysMenu> getMenuList(Map<String, Object> params) {
        return sysMenuTxn.getMenuList(params);
    }

    @Override
    public List<SysMenu> getMenuList2nd(SysMenu sysMenu) {
        return sysMenuTxn.getMenuList2nd(sysMenu);
    }

    @Override
    public boolean updateSysMenu(SysMenu sysMenu) {
        return sysMenuTxn.updateSysMenu(sysMenu);
    }

    @Transactional
    @Override
    public boolean addSysMenu(SysMenu sysMenu) {
        String adminRoleId = (String) ReadAblePropertyPlaceholderConfigurer.getContextProperty("sys.admin.roleId");
        String uuid = UUID.randomUUID().toString();
        sysMenu.setMenu_id(uuid);
        boolean result = sysMenuTxn.addSysMenu(sysMenu);
        if (result) {
            Map<String, Object> roleMenuMap = new HashMap<>();
            roleMenuMap.put("role_id", adminRoleId);
            roleMenuMap.put("menu_id", uuid);
            result = sysMenuTxn.addRoleMenu(roleMenuMap);
        }
        return result;
    }

    @Override
    public SysMenu getSysMenuObj(SysMenu sysMenu) {
        return sysMenuTxn.getSysMenuObj(sysMenu);
    }

}
