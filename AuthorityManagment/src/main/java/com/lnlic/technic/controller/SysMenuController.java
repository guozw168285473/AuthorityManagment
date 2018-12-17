package com.lnlic.technic.controller;

import com.lnlic.technic.bo.Result;
import com.lnlic.technic.constant.CommonConstant;
import com.lnlic.technic.domain.SysMenu;
import com.lnlic.technic.service.SysMenuService;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.List;

/**
 * 菜单相关
 * Created by lnlic_guozw on 2018/11/23.
 */
@Controller
public class SysMenuController {

    //region 类相关
    @Resource
    private SysMenuService sysMenuService;

    //endregion

    //region 页面跳转相关

    /**
     * 跳转到菜单列表页
     * 需要admin角色
     * @return
     */
    @RequiresRoles("admin")
    @RequestMapping(value = "/sysmenu/sysmenulist", method = RequestMethod.GET)
    public String sysmenuList() {
        return "/sysmenu/sysmenulist";
    }

    /**
     * 菜单新增、编辑页面
     * @param sysMenu
     * @return
     */
    @RequiresRoles("admin")
    @RequestMapping(value = "/sysmenu/edit", method = RequestMethod.GET)
    public ModelAndView edit(SysMenu sysMenu) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/sysmenu/edit");

        if (sysMenu != null && StringUtils.isNotEmpty(sysMenu.getMenu_id())) {
            sysMenu = sysMenuService.getSysMenuObj(sysMenu);
            mv.addObject("sysmenu", sysMenu);
        }

        return mv;
    }

    /**
     * 菜单树页面
     * @return
     */
    @RequiresRoles("admin")
    @RequestMapping(value = "/sysmenu/sysmenudtree", method = RequestMethod.GET)
    public ModelAndView sysmenuztree() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/sysmenu/sysmenudtree");
        return mv;
    }

    //endregion

    //region 数据获取相关

    /**
     * @param model
     * @return
     */
    @RequestMapping(value = "/sysmenu/getsysmenulist", method = RequestMethod.GET)
    @ResponseBody
    public Model getSysmenuList(Model model) {

        List<SysMenu> menuList = sysMenuService.getMenuList2nd(null);
        model.addAttribute("data", menuList);
        model.addAttribute("code", CommonConstant.LAYUI_TABLE_STATUS_CODE);
        model.addAttribute("msg", CommonConstant.OPERATE_SUCCESS_MSG);
        return model;
    }

    /**
     * 新增、编辑菜单页的提交按钮
     * @param sysMenu
     * @return
     */
    @RequiresRoles("admin")
    @RequestMapping(value = "/sysmenu/updatesysmenu", method = RequestMethod.POST)
    @ResponseBody
    public Result updataSysmenu(SysMenu sysMenu) {
        Result result = new Result();
        result.setFlag(false);
        result.setCode(CommonConstant.OPERATE_FAILED_CODE);
        result.setMsg(CommonConstant.OPERATE_FAILED_MSG);
        if (StringUtils.isNotEmpty(sysMenu.getMenu_id())) {
            if (sysMenuService.updateSysMenu(sysMenu)) {
                result.setFlag(true);
            }
        } else {//如果是添加菜单，菜单添加成功后，将该菜单权限给管理员角色
            if (sysMenuService.addSysMenu(sysMenu)) {
                result.setFlag(true);
            }
        }

        if (result.getFlag()) {
            result.setMsg(CommonConstant.OPERATE_SUCCESS_MSG);
            result.setCode(CommonConstant.OPERATE_SUCCESS_CODE);
        }
        return result;
    }

    //endregion

}
