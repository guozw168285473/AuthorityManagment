package com.lnlic.technic;

import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.util.ByteSource;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 17-1-24 上午11:08
 * <br>@version: 1.0
 */
public class Test {


    @org.junit.Test
    public void test() {
        List<Map<String, Object>> list = new ArrayList<>();
        Map<String, Object> map1 = new HashMap<>();
        map1.put("username", "admin");
        map1.put("password", "123456");
        Map<String, Object> map2 = new HashMap<>();
        map2.put("username", "zhangsan");
        map2.put("password", "123456");
        list.add(map1);
        list.add(map2);
        for (Map<String, Object> userMap : list) {
            String username = userMap.get("username").toString();
            String password = userMap.get("password").toString();//原始密码
            String hashAlgorithmName = "MD5";//加密方式
            ByteSource salt = ByteSource.Util.bytes(username);//以账号作为盐值
            int hashIterations = 1024;//加密1024次
            Object result = new SimpleHash(hashAlgorithmName,password,salt,hashIterations).toHex();//此处要用toHex()将加密后的密码转化为String
            System.out.println(result);
        }
    }



    @org.junit.Test
    public void Test3() {

        List l = new ArrayList();
        l.add(1);
        l.add(2);
        l.add(3);
        for (Object o : l) {
            o = o.toString() + "111";
        }
        for (Object q : l) {
            System.out.println(q.toString());
        }
    }

    @org.junit.Test
    public void getConnection(){
//        String url="jdbc:oracle:thin:@//10.2.10.173:1521/xyjx";
//        String url2="jdbc:oracle:thin:@//10.0.0.127:1521/pdbcreditplatform";
//        //用户名
//        String user = "creditplatform";
//        //密码
//        String password = "123456";
//        Connection connection = null;
//        try {
//            //1.加载驱动
//            Class.forName("oracle.jdbc.driver.OracleDriver");
//            //2.得到连接
//            connection = DriverManager.getConnection(url2,user,password);
//            System.out.println(connection.toString());
//        } catch (Exception e) {
//            //记录日志
//            e.printStackTrace();
//            //默认业务处理
//            //向上抛出异常
//            throw new RuntimeException("找不到驱动类",e);
//        }
    }


    @org.junit.Test
    public void testA() {

        System.out.println(155/2.0);
    }
}