package com.lnlic.technic.service.impl;

import com.lnlic.common.util.context.PageBean;
import com.lnlic.common.web.context.ReadAblePropertyPlaceholderConfigurer;
import com.lnlic.technic.domain.SysUser;
import com.lnlic.technic.service.SysUserService;
import com.lnlic.technic.txn.SysUserTxn;
import com.lnlic.technic.utils.CommonUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.*;

/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 2018-11-16 21:50
 * <br>@version: 1.0
 */
@Service
public class SysUserServiceImpl implements SysUserService {

    @Resource
    private SysUserTxn sysUserTxn;

    @Override
    public PageBean<SysUser> getSysUserListPage(PageBean<SysUser> pageRequest, Map<String, Object> params) {
        return sysUserTxn.getSysUserListPage(pageRequest, params);
    }

    @Override
    public SysUser getSysUserObj(SysUser sysUser) {
        return sysUserTxn.getSysUserObj(sysUser);
    }

    @Transactional
    @Override
    public boolean updateSysUser(SysUser sysUser) {
        boolean result = false;
        String user_ids = sysUser.getUser_id();
        if (StringUtils.isNotEmpty(user_ids)) { //用户id不为空的话，就是编辑 或 批量删除
            List<String> userIdList = Arrays.asList(user_ids.split(","));
            for (String user_id : userIdList) {
                sysUser.setUser_id(user_id);
                result = sysUserTxn.updateSysUser(sysUser);
                if (!result) {
                    break;
                }
            }
        } else {
            result = sysUserTxn.updateSysUser(sysUser);
        }
        return result;
    }

    @Transactional
    @Override
    public boolean addSysUser(SysUser sysUser) {
        boolean result = false;
        String uuid = UUID.randomUUID().toString();
        sysUser.setUser_id(uuid);
        String defaultPassword = (String) ReadAblePropertyPlaceholderConfigurer.getContextProperty("sys.default.pwd");
        sysUser.setPassword(CommonUtils.MD5(defaultPassword, sysUser.getUsername()));//MD5盐加密，以用户名作为盐值

        result = sysUserTxn.addSysUser(sysUser);
        if (result) {
            Map<String, Object> params = new HashMap<>();
            params.put("user_id", uuid);
            params.put("org_id", sysUser.getOrg_id());
            result = sysUserTxn.addOrgUser(params);
        }
        return result;
    }

}
