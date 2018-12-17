package com.lnlic.technic.bo;

/**
 * [问卷调查BO]
 * <br>@author: guozw
 * <br>@date: 2018-1-6 14:41
 * <br>@version: 1.0
 */
public class QuestionBO {

    //主键
    private String id;
    //    问卷题目编码
    private String questionItemCode;
    //    问卷题目名称
    private String questionItemName;
    //    问卷题目类型 1-单选 2-多选 3-简答
    private String questionItemType;
    //    问卷题目选项编码
    private String questionOptionCode;
    //    问卷题目选项名称
    private String questionOptionName;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getQuestionItemCode() {
        return questionItemCode;
    }

    public void setQuestionItemCode(String questionItemCode) {
        this.questionItemCode = questionItemCode;
    }

    public String getQuestionItemName() {
        return questionItemName;
    }

    public void setQuestionItemName(String questionItemName) {
        this.questionItemName = questionItemName;
    }

    public String getQuestionItemType() {
        return questionItemType;
    }

    public void setQuestionItemType(String questionItemType) {
        this.questionItemType = questionItemType;
    }

    public String getQuestionOptionCode() {
        return questionOptionCode;
    }

    public void setQuestionOptionCode(String questionOptionCode) {
        this.questionOptionCode = questionOptionCode;
    }

    public String getQuestionOptionName() {
        return questionOptionName;
    }

    public void setQuestionOptionName(String questionOptionName) {
        this.questionOptionName = questionOptionName;
    }
}
