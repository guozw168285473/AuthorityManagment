package com.lnlic.technic.controller;

import com.lnlic.technic.bo.Result;
import com.lnlic.technic.constant.CommonConstant;
import com.lnlic.technic.domain.SysMenu;
import com.lnlic.technic.domain.SysRole;
import com.lnlic.technic.service.SysMenuService;
import com.lnlic.technic.service.SysRoleService;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 角色相关
 * Created by lnlic_guozw on 2018/11/23.
 */
@Controller
public class SysRoleController {

    //region 类相关
    @Resource
    private SysRoleService sysRoleService;
    @Resource
    private SysMenuService sysMenuService;

    //endregion


    //region 页面跳转相关

    /**
     * 跳转到角色列表页
     * 需要admin角色
     * @return
     */
    @RequiresRoles("admin")
    @RequestMapping(value = "/sysrole/sysrolelist", method = RequestMethod.GET)
    public String sysroleList() {
        return "/sysrole/sysrolelist";
    }

    @RequiresRoles("admin")
    @RequestMapping(value = "/sysrole/edit", method = RequestMethod.GET)
    public ModelAndView edit(SysRole sysRole) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/sysrole/edit");
        if (sysRole != null && StringUtils.isNotEmpty(sysRole.getRole_id())) {
            sysRole = sysRoleService.getSysRoleObj(sysRole);
            mv.addObject("sysrole", sysRole);
        }
        return mv;
    }

    /**
     * 跳转到角色权限配置页
     * 需要admin角色
     * @return
     */
    @RequiresRoles("admin")
    @RequestMapping(value = "/sysrole/permsconfig", method = RequestMethod.GET)
    public String permsConfig() {
        return "/sysrole/permsconfig";
    }

    //endregion


    //region 获取页面所需数据相关
    /**
     * 获取角色列表  使用layui table
     * @param model
     * @return
     */

    @RequestMapping(value = "/sysrole/getsysrolelist", method = RequestMethod.POST)
    @ResponseBody
    public Model getsysrolelist(Model model) {
        List<SysRole> sysRoleList = sysRoleService.getSysRoleList2nd();
        model.addAttribute("rows", sysRoleList);
        model.addAttribute("code", CommonConstant.LAYUI_TABLE_STATUS_CODE);
        return model;

    }

    @RequestMapping(value = "/sysrole/updatesysrole", method = RequestMethod.POST)
    @ResponseBody
    public Result updateSysRole(SysRole sysRole) {
        Result result = new Result();
        result.setFlag(false);
        result.setCode(CommonConstant.OPERATE_FAILED_CODE);
        result.setMsg(CommonConstant.OPERATE_FAILED_MSG);

        if (StringUtils.isNotEmpty(sysRole.getRole_id())) {//更新
            if (sysRoleService.updateSysRole(sysRole)) {
                result.setFlag(true);
            }
        } else { //新增
            if (sysRoleService.addSysRole(sysRole)) {
                result.setFlag(true);
            }
        }

        if (result.getFlag()) {
            result.setMsg(CommonConstant.OPERATE_SUCCESS_MSG);
            result.setCode(CommonConstant.OPERATE_SUCCESS_CODE);
        }
        return result;
    }

    /**
     * 获取权限配置数据
     * @param model
     * @return
     */
    @RequestMapping(value = "/sysrole/getpermsconfig", method = RequestMethod.POST)
    @ResponseBody
    public Model getPermsConfig(@RequestParam(value = "role_id", required = true) String role_id, Model model) {

        Map<String, Object> params = new HashMap<>();
        params.put("role_id", role_id);
        //获取菜单列表
        List<SysMenu> menuList2nd = sysMenuService.getMenuList2nd(null);
        //获取角色权限配置
        List<Map<String, Object>> rolePermsConfig = sysRoleService.getRolePermsConfig(params);
        for (SysMenu sysMenu : menuList2nd) {
            for (Map<String, Object> map : rolePermsConfig) {
                if (sysMenu.getMenu_id().equals(map.get("menu_id".toUpperCase()).toString())) {
                    sysMenu.setCheckArr("1");//设置选中状态
                }
            }

        }
        model.addAttribute("data", menuList2nd);
        model.addAttribute("code", CommonConstant.LAYUI_TABLE_STATUS_CODE);
        model.addAttribute("msg", CommonConstant.OPERATE_SUCCESS_MSG);
        return model;
    }

    /**
     * 提交权限配置
     * @param role_id 角色id
     * @param menu_ids 菜单id 字符串集合，逗号分隔
     * @return
     */
    @RequiresRoles("admin")
    @RequestMapping(value = "/sysrole/submitPermsConfig", method = RequestMethod.POST)
    @ResponseBody
    public Result submitPermsConfig(@RequestParam(value = "role_id", required = true) String role_id,
                                    @RequestParam(value = "menu_ids", required = true) String menu_ids) {
        Result result = new Result();
        result.setFlag(false);
        result.setCode(CommonConstant.OPERATE_FAILED_CODE);
        result.setMsg(CommonConstant.OPERATE_FAILED_MSG);

        if (sysRoleService.submitPermsConfig(role_id, menu_ids)) {
            result.setMsg(CommonConstant.OPERATE_SUCCESS_MSG);
            result.setCode(CommonConstant.OPERATE_SUCCESS_CODE);
            result.setFlag(true);
        }
        return result;
    }

    //endregion

}
