package com.lnlic.technic.service.impl;

import com.lnlic.technic.domain.SysRole;
import com.lnlic.technic.service.SysRoleService;
import com.lnlic.technic.txn.SysMenuTxn;
import com.lnlic.technic.txn.SysRoleTxn;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.*;

/**
 * Created by lnlic_guozw on 2018/11/23.
 */
@Service
public class SysRoleServiceImpl implements SysRoleService {
    @Resource
    private SysRoleTxn sysRoleTxn;
    @Resource
    private SysMenuTxn sysMenuTxn;



    @Override
    public List<SysRole> getSysRoleList(Map<String, Object> params) {
        return sysRoleTxn.getSysRoleList(params);
    }

    @Override
    public List<SysRole> getSysRoleList2nd() {
        return sysRoleTxn.getSysRoleList2nd();
    }

    @Override
    public SysRole getSysRoleObj(SysRole sysRole) {
        return sysRoleTxn.getSysRoleObj(sysRole);
    }

    @Override
    public boolean addSysRole(SysRole sysRole) {
        sysRole.setRole_id(UUID.randomUUID().toString());
        sysRole.setDel_flag("0");
        sysRole.setRole_status("0");
        return sysRoleTxn.addSysRole(sysRole);
    }

    @Transactional
    @Override
    public boolean updateSysRole(SysRole sysRole) {
        boolean result = false;
        String role_ids = sysRole.getRole_id();
        if (StringUtils.isNotEmpty(role_ids)) { //用户id不为空的话，就是编辑 或 批量删除
            List<String> roleIdList = Arrays.asList(role_ids.split(","));
            for (String role_id : roleIdList) {
                sysRole.setRole_id(role_id);
                result = sysRoleTxn.updateSysRqole(sysRole);
                if (!result) {
                    break;
                }
            }
        } else {
            result = sysRoleTxn.updateSysRqole(sysRole);
        }
        return result;
    }

    @Override
    public List<Map<String, Object>> getRolePermsConfig(Map<String, Object> params) {
        return sysRoleTxn.getRolePermsConfig(params);
    }

    @Transactional
    @Override
    public boolean submitPermsConfig(String role_id, String menu_ids) {
        boolean result = false;
        Map<String, Object> params = new HashMap<>();
        params.put("role_id", role_id);
        if (StringUtils.isNotEmpty(menu_ids)) {

            //此处再次查询一下角色原有的权限，
            List<Map<String, Object>> rolePermsConfig = sysRoleTxn.getRolePermsConfig(params);
            // 如果角色没有配置权限的话，删除方法会返回false
            if (rolePermsConfig.size() > 0) {
                result = sysRoleTxn.deletePermsConfig(params);
            }
            if (rolePermsConfig.size() == 0 || result) { //先删除原先的配置
                List<String> menuIdList = Arrays.asList(menu_ids.split(","));
                for (String menu_id : menuIdList) {
                    params.put("menu_id", menu_id);
                    result = sysMenuTxn.addRoleMenu(params);
                    if (!result) {
                        break;
                    }
                }
            }
        }
        return result;
    }


}
