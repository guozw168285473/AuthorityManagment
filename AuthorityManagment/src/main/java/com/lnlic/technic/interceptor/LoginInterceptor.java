package com.lnlic.technic.interceptor;

import org.apache.commons.lang.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * [登录认证的拦截器]
 * <br>@author: guozw
 * <br>@date: 17-1-28 下午2:23
 * <br>@version: 1.0
 */
public class LoginInterceptor implements HandlerInterceptor {

    /**
     * Handler执行之前调用该方法
     *
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //获取请求的url
        String url = request.getRequestURI();
        //获取Session
        HttpSession session = request.getSession();
        String userName = (String)session.getAttribute("userName");
        if (StringUtils.isNotEmpty(url) && (url.equals("/ssm/login/login") || url.equals("/ssm/login/submit") || userName != null)) {
            return true;
        }
        //不符合条件的，重定向到登录界面
//        response.sendRedirect("/login/login");
        //转发
        request.getRequestDispatcher("/login/login").forward(request, response);
        return false;
    }

    /**
     *Handler执行之后，ModelAndView返回之前调用该方法
     * @param request
     * @param response
     * @param handler
     * @param modelAndView
     * @throws Exception
     */
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    /**
     * Handler执行之后执行该方法
     * @param request
     * @param response
     * @param handler
     * @param ex
     * @throws Exception
     */
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        //To change body of implemented methods use File | Settings | File Templates.
    }
}
