package com.lnlic.technic.controller;

import com.lnlic.technic.bo.Result;
import com.lnlic.technic.domain.SysUser;
import com.lnlic.technic.service.SysUserService;
import com.lnlic.technic.utils.ShiroUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

/**
 * [登录]
 * <br>@author: guozw
 * <br>@date: 2018-11-16 21:56
 * <br>@version: 1.0
 */
@Controller
public class LoginController {

    @Resource
    private SysUserService sysUserService;

    @RequestMapping(value = "/loginPage", method = RequestMethod.GET)
    public String loginPage() {
        return "/login";
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public Result login(@RequestParam(value = "username", required = false) String username,
                        @RequestParam(value = "password", required = false) String password,
                        @RequestParam(value = "rememberMe", required = false) boolean rememberMe
                        ) {
        Result result = new Result();

        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken usernamePasswordToken = new UsernamePasswordToken(username, password);
        usernamePasswordToken.setRememberMe(rememberMe);
            try {
                if (!subject.isAuthenticated()) { //判断是否通过身份验证，没有的话就进行身份验证
                    subject.login(usernamePasswordToken);
                    //登录后保存session
                    SysUser sysUser = new SysUser();
                    sysUser.setUsername(username);
                    sysUser = sysUserService.getSysUserObj(sysUser);
                    ShiroUtils.setSession(sysUser);
                    ShiroUtils.getSession().setTimeout(1800000L);//设置会话超时时间，单位ms, 配置文件中的超时时间好像不生效，
                }


            } catch (LockedAccountException ex) {
                result.setMsg("用户未启用");
                result.setFlag(true);
            } catch (AuthenticationException ex) {
                result.setMsg("用户名或密码错误");
                result.setFlag(true);
            }



        return result;
    }



    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public String logout() {
        return "/login";
    }


}
