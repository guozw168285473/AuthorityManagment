package com.lnlic.technic.constant;

import org.junit.Test;
/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 17-1-23 下午10:48
 * <br>@version: 1.0
 */
public class EnumConstant {

    /**
     * 信号灯
     */
    public enum SignLight {

        //每定义一个枚举实例的相当于调用了一遍构造函数, 因此在定义的时候就将值塞进了成员变量中
        RED(1, "红灯"), GREEN(2, "绿灯"), YELLOW(3, "黄灯");

        private int value;
        private String text;

        private SignLight(int value, String text) {
            this.text = text;
            this.value = value;
        }

        public String getText() {
            return text;
        }

        public int getValue() {
            return value;
        }

        public static String valueOf(int value) {
           for(SignLight signLight : SignLight.values()) {
               if (signLight.value == value) {
                  return signLight.text;
               }
           }
            return null;
        }
    }


    /**
     * 菜单类型
     */
    public enum MenuType {

        DIRECTORY(0, "目录"), MENU(1, "菜单"), BUTTON(2, "按钮");

        private int value;
        private String text;

        private MenuType(int value, String text) {
            this.text = text;
            this.value = value;
        }

        public String getText() {
            return text;
        }

        public int getValue() {
            return value;
        }

        public static String valueOf(int value) {
            for(MenuType menuType : MenuType.values()) {
                if (menuType.value == value) {
                    return menuType.text;
                }
            }
            return null;
        }
    }

    @Test
    public void testEnum() {
        String s = EnumConstant.SignLight.valueOf(1);
        System.out.println(s);
    }
}
