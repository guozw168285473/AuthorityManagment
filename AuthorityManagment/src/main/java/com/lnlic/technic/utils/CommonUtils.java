package com.lnlic.technic.utils;

import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.util.ByteSource;

/**
 * [通用工具类]
 * <br>@author: guozw
 * <br>@date: 2018-12-9 10:40
 * <br>@version: 1.0
 */
public class CommonUtils {

    /**
     * MD5盐加密
     * @param password 需要加密的密码
     * @param saltStr 盐值串
     * @return
     */
    public static String MD5(String password, String saltStr) {
        String hashAlgorithmName = "MD5";//加密方式
        ByteSource salt = ByteSource.Util.bytes(saltStr);//以账号作为盐值
        int hashIterations = 1024;//加密1024次
        Object result = new SimpleHash(hashAlgorithmName,password,salt,hashIterations).toHex();//此处要用toHex()将加密后的密码转化为String

        return result.toString();
    }
}
