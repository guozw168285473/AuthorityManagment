package com.lnlic.technic.controller;

import com.lnlic.technic.bo.Result;
import com.lnlic.technic.constant.CommonConstant;
import com.lnlic.technic.domain.SysOrg;
import com.lnlic.technic.service.SysOrgService;
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
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 2018-12-8 20:39
 * <br>@version: 1.0
 */
@Controller
public class SysOrgController {
    //region 类对象
    @Resource
    private SysOrgService sysOrgService;
    //endregion

    //region 页面跳转相关

    /**
     * 跳转到部门列表页面
     *
     * @return
     */
    @RequiresRoles("admin")
    @RequestMapping(value = "/sysorg/sysorglist", method = RequestMethod.GET)
    public String sysorgList() {
        return "/sysorg/sysorglist";
    }

    /**
     * 跳转到新增、编辑部门页面
     * @param sysOrg
     * @return
     */
    @RequiresRoles("admin")
    @RequestMapping(value = "/sysorg/edit", method = RequestMethod.GET)
    public ModelAndView edit(SysOrg sysOrg) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/sysorg/edit");
        if (sysOrg != null && StringUtils.isNotEmpty(sysOrg.getOrg_id())) {
            sysOrg = sysOrgService.getSysOrgObj2nd(sysOrg);
            mv.addObject("sysorg", sysOrg);
        }

        return mv;
    }

    /**
     * 跳转到部门树页面
     *
     * @return
     */
    @RequiresRoles("admin")
    @RequestMapping(value = "/sysorg/sysorgdtree", method = RequestMethod.GET)
    public String sysorgDtree() {
        return "/sysorg/sysorgdtree";
    }

    //endregion

    //region 获取页面数据相关

    @RequestMapping(value = "/sysorg/getsysorglist", method = RequestMethod.GET)
    @ResponseBody
    public Model getSysorgList(Model model) {
        List<SysOrg> sysOrgList = sysOrgService.getOrgList(null);
        model.addAttribute("data", sysOrgList);
        model.addAttribute("code", CommonConstant.LAYUI_TABLE_STATUS_CODE);
        model.addAttribute("msg", CommonConstant.OPERATE_SUCCESS_MSG);
        return model;
    }

    @RequestMapping(value = "/sysorg/updatesysorg", method = RequestMethod.POST)
    @ResponseBody
    public Result updateSysRole(SysOrg sysOrg) {
        Result result = new Result();
        result.setFlag(false);
        result.setCode(CommonConstant.OPERATE_FAILED_CODE);
        result.setMsg(CommonConstant.OPERATE_FAILED_MSG);

        if (StringUtils.isNotEmpty(sysOrg.getOrg_id())) {//更新
            if (sysOrgService.updateSysOrg(sysOrg)) {
                result.setFlag(true);
            }
        } else { //新增
            if (sysOrgService.addSysOrg(sysOrg)) {
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
