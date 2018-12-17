package com.lnlic.technic.controller;

import com.alibaba.fastjson.JSON;
import com.lnlic.technic.constant.EnumConstant;
import com.lnlic.technic.domain.SysMenu;
import com.lnlic.technic.domain.SysOrg;
import com.lnlic.technic.domain.SysUser;
import com.lnlic.technic.service.SysMenuService;
import com.lnlic.technic.service.SysOrgService;
import com.lnlic.technic.utils.ShiroUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 2018-11-10 15:17
 * <br>@version: 1.0
 */
@Controller
@RequestMapping(value = "/")
public class IndexAction {

    @Resource
    private SysMenuService sysMenuService;
    @Resource
    private SysOrgService sysOrgService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView indexPage() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/index");
        SysUser sysUser = ShiroUtils.getSysUser();
        mv.addObject("sysUser", sysUser);
        Map<String, Object> params = new HashMap<>();
        params.put("user_id", sysUser.getUser_id());
        SysOrg sysOrg = sysOrgService.getSysOrgObj(params);
        mv.addObject("sysOrg", sysOrg);

        params.clear();
        params.put("username", sysUser.getUsername());
        //首页菜单 排除按钮级别的
        params.put("menu_type_list", Arrays.asList(EnumConstant.MenuType.DIRECTORY.getValue(), EnumConstant.MenuType.MENU.getValue()));
        List<SysMenu> menuList = sysMenuService.getMenuList(params);
        mv.addObject("menuList", JSON.toJSONString(menuList));
        return mv;
    }
}
