package com.lnlic.technic.common;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.jdom2.Element;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-8-9
 * Time: 上午9:02
 * To change this template use File | Settings | File Templates.
 */
public class GetSetDomain {

    //region model与excel的相互转化
    /**
     * 通过model设置excle值
     * @param model
     * @param exceptMap
     * @param row
     * @throws NoSuchMethodException
     * @throws IllegalAccessException
     * @throws IllegalArgumentException
     * @throws java.text.ParseException
     * @throws java.lang.reflect.InvocationTargetException
     */
    @SuppressWarnings("deprecation")
    public void setExcelValueByField(Object model, HashMap<String,String> exceptMap, Row row) throws NoSuchMethodException,
            IllegalAccessException, IllegalArgumentException, ParseException,
            InvocationTargetException {
        // 获取实体类的所有属性，返回Field数组
        Field[] field = model.getClass().getDeclaredFields();
        int i = 0;//row中的索引
        // 遍历所有属性
        for (int j = 0; j < field.length; j++) {
            // 获取属性的名字
            String name = field[j].getName();
            if(!exceptMap.containsKey(name)){
                // 将属性的首字符大写，方便构造get，set方法
                name = name.substring(0, 1).toUpperCase() + name.substring(1);
//                // 获取属性的类型
                String type = field[j].getGenericType().toString();
                Method m;
                String value = "";
                //model中只有int 以及string 两种类型
                if(type.equals("int")){
                    m = model.getClass().getMethod("get" + name);
                    value = ((Integer) m.invoke(model)).toString();//传过来的是double形式的
                } else{
                    m = model.getClass().getMethod("get" + name);
                    value = (String) m.invoke(model);
                }
                Cell cell = row.createCell(i);
                cell.setCellValue(value);
                i++;
            }
        }
    }


    /**
     * 通过excel设置model值
     * @param model
     * @param exceptMap
     * @param row
     * @throws NoSuchMethodException
     * @throws IllegalAccessException
     * @throws IllegalArgumentException
     * @throws java.text.ParseException
     * @throws java.lang.reflect.InvocationTargetException
     */
    @SuppressWarnings("deprecation")
    public void setFieldValueByExcel(Object model, HashMap<String,String> exceptMap, Row row) throws NoSuchMethodException,
            IllegalAccessException, IllegalArgumentException, ParseException,
            InvocationTargetException {
        // 获取实体类的所有属性，返回Field数组
        Field[] field = model.getClass().getDeclaredFields();
        int i = 0;//row中的索引
        // 遍历所有属性
        for (int j = 0; j < field.length; j++) {
            // 获取属性的名字
            String name = field[j].getName();
            if(!exceptMap.containsKey(name)){
                // 将属性的首字符大写，方便构造get，set方法
                name = name.substring(0, 1).toUpperCase() + name.substring(1);
//                // 获取属性的类型
                String type = field[j].getGenericType().toString();
                Cell cell = row.getCell(i);
                Method m;
                //model中只有int 以及string 两种类型
                String cellValue = getCellValue(cell);
                if(type.equals("int")){
                    m = model.getClass().getMethod("set" + name, int.class);
                    m.invoke(model, (int)(Double.parseDouble(cellValue)));//传过来的是double形式的
                } else{
                    m = model.getClass().getMethod("set" + name, String.class);
                    m.invoke(model, cellValue);
                }
                i++;
            }
        }
    }
    /**
     *设置domain值
     * @param model
     * @param exceptFieldOne
     * @param exceptFieldTwo
     * @param row
     * @throws NoSuchMethodException
     * @throws IllegalAccessException
     * @throws IllegalArgumentException
     * @throws java.text.ParseException
     * @throws java.lang.reflect.InvocationTargetException
     */
    @SuppressWarnings("deprecation")
    public void setFieldValueByExcel(Object model, String exceptFieldOne, String exceptFieldTwo, Row row) throws NoSuchMethodException,
            IllegalAccessException, IllegalArgumentException, ParseException,
            InvocationTargetException {
        // 获取实体类的所有属性，返回Field数组
        Field[] field = model.getClass().getDeclaredFields();
        int i = 0;//row中的索引
        // 遍历所有属性
        for (int j = 0; j < field.length; j++) {
            // 获取属性的名字
            String name = field[j].getName();
            if(!name.equals(exceptFieldOne) && !name.equals(exceptFieldTwo)){
                // 将属性的首字符大写，方便构造get，set方法
                name = name.substring(0, 1).toUpperCase() + name.substring(1);
//                // 获取属性的类型
                String type = field[j].getGenericType().toString();
                Cell cell = row.getCell(i);
                Method m;
                //model中只有int 以及string 两种类型
                String cellValue = getCellValue(cell);
                if(type.equals("int")){
                    m = model.getClass().getMethod("set" + name, int.class);
                    m.invoke(model, (int)(Double.parseDouble(cellValue)));//传过来的是double形式的
                } else{
                    m = model.getClass().getMethod("set" + name, String.class);
                    m.invoke(model, cellValue);
                }
                i++;
            }
        }
    }

    /**
     * 获取cell的值
     * @param cell
     * @return
     */
    public String getCellValue(Cell cell){
        if(cell == null)
            return null;
        String cellValue = "";
        switch (cell.getCellType()) {
            case Cell.CELL_TYPE_STRING:
                cellValue = cell.getStringCellValue().trim();
                break;
            case Cell.CELL_TYPE_NUMERIC:
                if (DateUtil.isCellDateFormatted(cell)) {
                    SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
                    try {
                        cellValue = format.format(cell.getDateCellValue()).trim();
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                } else {
                    cellValue = String.valueOf(cell.getNumericCellValue()).trim();
                }
                break;
            case Cell.CELL_TYPE_BLANK:
                cellValue = cell.getStringCellValue().trim();
                break;
        }
        return cellValue;
    }
    //endregion

    //region 通过xml为model赋值
    /**
     * 设置model属性值
     * @param model
     * @param exceptFieldOne
     * @param exceptFieldTwo
     * @param rowElement
     * @throws NoSuchMethodException
     * @throws java.lang.reflect.InvocationTargetException
     * @throws IllegalAccessException
     */
    public void setFieldValueByXml(Object model, String exceptFieldOne, String exceptFieldTwo, List rowElement) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        // 获取实体类的所有属性，返回Field数组
        Field[] field = model.getClass().getDeclaredFields();
        int i = 0;//row中的索引
        // 遍历所有属性
        for (int j = 0; j < field.length; j++) {
            // 获取属性的名字
            String name = field[j].getName();
            if(!name.equals(exceptFieldOne) && !name.equals(exceptFieldTwo)){
                // 将属性的首字符大写，方便构造get，set方法
                name = name.substring(0, 1).toUpperCase() + name.substring(1);
                // 获取属性的类型
                String type = field[j].getGenericType().toString();
                Method m;
                //model中只有int 以及string 两种类型
                m = type.equals("int") ? model.getClass().getMethod("set" + name, int.class) : model.getClass().getMethod("set" + name, String.class);
                Element et = null;
                et = (Element) rowElement.get(i);//循环依次得到子元素
                if(et.getName().equals(name.toUpperCase())){
                    m.invoke(model, et.getValue().trim());
                }
                i++;
            }
        }
    }

    /**
     * 根据xml返回model值  model中的顺序要与xml中字段的顺序一致
     * @param model
     * @param exceptMap
     * @param rowElement
     * @throws NoSuchMethodException
     * @throws IllegalAccessException
     * @throws IllegalArgumentException
     * @throws java.text.ParseException
     * @throws java.lang.reflect.InvocationTargetException
     */
    @SuppressWarnings("deprecation")
    public void setFieldValueByXml(Object model, HashMap<String,String> exceptMap, List rowElement) throws NoSuchMethodException,
            IllegalAccessException, IllegalArgumentException, ParseException,
            InvocationTargetException {
        // 获取实体类的所有属性，返回Field数组
        Field[] field = model.getClass().getDeclaredFields();
        int i = 0;//row中的索引
        // 遍历所有属性
        for (int j = 0; j < field.length; j++) {
            // 获取属性的名字
            String name = field[j].getName();
            if(!exceptMap.containsKey(name)){
                // 将属性的首字符大写，方便构造get，set方法
                name = name.substring(0, 1).toUpperCase() + name.substring(1);
//                // 获取属性的类型
                String type = field[j].getGenericType().toString();
                Method m;
                //model中只有int 以及string 两种类型
                m = type.equals("int") ? model.getClass().getMethod("set" + name, int.class) : model.getClass().getMethod("set" + name, String.class);
                Element et = null;
                et = (Element) rowElement.get(i);//循环依次得到子元素
                m.invoke(model, et.getValue().trim());
                i++;
            }
        }
    }
    //endregion

}
