package com.lnlic.technic.shiro;

import com.lnlic.technic.domain.SysMenu;
import com.lnlic.technic.domain.SysRole;
import com.lnlic.technic.domain.SysUser;
import com.lnlic.technic.service.SysMenuService;
import com.lnlic.technic.service.SysRoleService;
import com.lnlic.technic.service.SysUserService;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;

import javax.annotation.Resource;
import java.util.*;

/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 2018-11-14 21:03
 * <br>@version: 1.0
 */
public class SysUserRealm extends AuthorizingRealm {

    @Resource
    private SysUserService sysUserService;
    @Resource
    private SysMenuService sysMenuService;
    @Resource
    private SysRoleService sysRoleService;

    /**
     * 用户授权
     * @param principalCollection
     * @return
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        SimpleAuthorizationInfo auth = new SimpleAuthorizationInfo();
        Set<String> roleSet = new HashSet<>();//角色集合
        Set<String> permsSet = new HashSet<>();//权限集合
        String username = (String) principalCollection.getPrimaryPrincipal();

        Map<String, Object> params = new HashMap<>();
        params.put("username", username);
        List<SysRole> roleList = sysRoleService.getSysRoleList(params);
        List<SysMenu> menuList = sysMenuService.getMenuList(params);
        for (SysRole sysRole : roleList) {
            String roleTag = sysRole.getRole_name();
            if (StringUtils.isNotEmpty(roleTag)) roleSet.add(roleTag);
        }
        for (SysMenu sysMenu : menuList) {
            String perms = sysMenu.getPerms();//权限标识
            if (StringUtils.isNotEmpty(perms)) permsSet.add(perms);
        }
        auth.setRoles(roleSet);
        auth.setStringPermissions(permsSet);
        return auth;
    }

    /**
     * 登录认证
     *
     * @param authenticationToken
     * @return
     * @throws AuthenticationException
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;

        SysUser sysUser = new SysUser();
        String username = token.getUsername();
        sysUser.setUsername(username);
//        String password = new String(token.getPassword());
        sysUser = sysUserService.getSysUserObj(sysUser);
        if (sysUser != null) {
            if ("1".equals(sysUser.getUser_status())) { //如果未启用
                throw new LockedAccountException();
            }
            ByteSource salt = ByteSource.Util.bytes(username);//以账号作为盐值
            SimpleAuthenticationInfo simpleAuthenticationInfo = new SimpleAuthenticationInfo(sysUser.getUsername(), sysUser.getPassword(), salt, sysUser.getRealName());
            return simpleAuthenticationInfo;
        } else {
            // 如果没有查询到，抛出一个异常
            throw new AuthenticationException();
        }
    }
}
