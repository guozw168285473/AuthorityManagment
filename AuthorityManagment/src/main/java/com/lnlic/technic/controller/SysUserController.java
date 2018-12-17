package com.lnlic.technic.controller;

import com.lnlic.common.util.context.PageBean;
import com.lnlic.common.web.context.ReadAblePropertyPlaceholderConfigurer;
import com.lnlic.technic.bo.Result;
import com.lnlic.technic.constant.CommonConstant;
import com.lnlic.technic.domain.SysUser;
import com.lnlic.technic.service.SysUserService;
import com.lnlic.technic.utils.CommonUtils;
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
import java.util.Map;

/**
 * [用户相关]
 * <br>@author: guozw
 * <br>@date: 2018-11-18 11:28
 * <br>@version: 1.0
 */
@Controller
public class SysUserController {

    //region 类相关
    @Resource
    private SysUserService sysUserService;

    //endregion

    //region 页面跳转相关

    /**
     * 跳转到用户列表页
     * 需要admin角色
     * @return
     */
    @RequiresRoles("admin")
    @RequestMapping(value = "/sysuser/sysuserlist", method = RequestMethod.GET)
    public String sysUserList() {
        return "/sysuser/sysuserlist";
    }

    /**
     * 跳转到新增、编辑用户页面
     * @param sysUser
     * @return
     */
    @RequiresRoles("admin")
    @RequestMapping(value = "/sysuser/edit", method = RequestMethod.GET)
    public ModelAndView edit(SysUser sysUser) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/sysuser/edit");
        if (sysUser != null && StringUtils.isNotEmpty(sysUser.getUser_id())) {
            sysUser = sysUserService.getSysUserObj(sysUser);
            mv.addObject("sysuser", sysUser);
        }

        return mv;
    }

    //endregion

    //regino 数据获取相关

    /**
     * 获取用户列表  使用layui table
     * @param pageNo 当前页
     * @param pageSize 每页大小
     * @param sidx 排序字段
     * @param sord 排序类型
     * @param model
     * @return
     */

    @RequestMapping(value = "/sysuser/getsysuserlist", method = RequestMethod.POST)
    @ResponseBody
    public Model getSysUserList(@RequestParam(value = "pageNo", required = false) int pageNo,
                             @RequestParam(value = "pageSize", required = false) int pageSize,
                             @RequestParam(value = "sidx", required = false) String sidx,
                             @RequestParam(value = "sord", required = false) String sord,
                             @RequestParam(value = "org_id", required = false) String org_id,
                             Model model) {

        Map<String, Object> params = new HashMap<>();
        params.put("sidx", sidx);
        params.put("sord", sord);
        params.put("org_id", org_id);
        PageBean<SysUser> pageRequest = new PageBean<>(pageNo, pageSize);

        PageBean<SysUser> pageResponse = sysUserService.getSysUserListPage(pageRequest, params);
        model.addAttribute("rows", pageResponse.getUnderly());
        model.addAttribute("totalCount", pageResponse.getItemCount());
        model.addAttribute("code", CommonConstant.LAYUI_TABLE_STATUS_CODE);
        return model;
    }

    /**
     * 新增、编辑用户页的提交按钮
     * @param sysUser
     * @return
     */
    @RequiresRoles("admin")
    @RequestMapping(value = "/sysuser/updatesysuser", method = RequestMethod.POST)
    @ResponseBody
    public Result updataSysmenu(SysUser sysUser) {
        Result result = new Result();
        result.setFlag(false);
        result.setCode(CommonConstant.OPERATE_FAILED_CODE);
        result.setMsg(CommonConstant.OPERATE_FAILED_MSG);
        if (StringUtils.isNotEmpty(sysUser.getUser_id())) {
            if (sysUserService.updateSysUser(sysUser)) {
                result.setFlag(true);
            }
        } else {
            //查询该用户名是否已经存在
            SysUser sysUserTmp = sysUserService.getSysUserObj(sysUser);
            if (sysUserTmp == null) {
                if (sysUserService.addSysUser(sysUser)) {
                    result.setFlag(true);
                }
            } else {
                result.setMsg("用户名已存在");
                return result;
            }

        }

        if (result.getFlag()) {
            result.setMsg(CommonConstant.OPERATE_SUCCESS_MSG);
            result.setCode(CommonConstant.OPERATE_SUCCESS_CODE);
        }
        return result;
    }

    /**
     * 批量删除用户
     * @param sysUser
     * @return
     */
    @RequestMapping(value = "/sysuser/del", method = RequestMethod.POST)
    @ResponseBody
    public Result del(SysUser sysUser) {
        Result result = new Result();
        result.setFlag(false);
        result.setMsg(CommonConstant.OPERATE_FAILED_MSG);
        result.setCode(CommonConstant.OPERATE_FAILED_CODE);
        if (sysUserService.updateSysUser(sysUser)) {
            result.setFlag(true);
            result.setMsg(CommonConstant.OPERATE_SUCCESS_MSG);
            result.setCode(CommonConstant.OPERATE_SUCCESS_CODE);
        }
        return result;
    }


    /**
     * 重置密码
     * @param sysUser
     * @return
     */
    @RequiresRoles("admin")
    @RequestMapping(value = "/sysuser/resetPwd", method = RequestMethod.POST)
    @ResponseBody
    public Result resetPwd(SysUser sysUser) {
        Result result = new Result();
        result.setFlag(false);
        result.setMsg(CommonConstant.OPERATE_FAILED_MSG);
        result.setCode(CommonConstant.OPERATE_FAILED_CODE);

        String defaultPassword = (String) ReadAblePropertyPlaceholderConfigurer.getContextProperty("sys.default.pwd");
        sysUser.setPassword(CommonUtils.MD5(defaultPassword, sysUser.getUsername()));//MD5盐加密，以用户名作为盐值

        if (sysUserService.updateSysUser(sysUser)) {
            result.setFlag(true);
            result.setMsg(CommonConstant.OPERATE_SUCCESS_MSG);
            result.setCode(CommonConstant.OPERATE_SUCCESS_CODE);
        }
        return result;
    }



    //endregion
}
