package com.lnlic.technic.bo;

/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 2018-1-7 22:32
 * <br>@version: 1.0
 */
public class QuestionItemBO {

    //    主键
    private String id;
    //    问卷题目名称
    private String questionItemName;
    //    问卷题目排序
    private String questionItemOrder;
    //    问卷题目类型 1-单选 2-多选 3-简答
    private String questionItemType;
    //    问卷类型
    private String questionItemTypeText;
    //    创建时间
    private String createTime;
    //    更新时间
    private String updateTime;
    //    简答题答案
    private String questionContent;

    public String getQuestionContent() {
        return questionContent;
    }

    public void setQuestionContent(String questionContent) {
        this.questionContent = questionContent;
    }

    public String getCreateTime() {
        return createTime;
    }

    public String getQuestionItemTypeText() {
        return questionItemTypeText;
    }

    public void setQuestionItemTypeText(String questionItemTypeText) {
        this.questionItemTypeText = questionItemTypeText;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getQuestionItemName() {
        return questionItemName;
    }

    public void setQuestionItemName(String questionItemName) {
        this.questionItemName = questionItemName;
    }

    public String getQuestionItemOrder() {
        return questionItemOrder;
    }

    public void setQuestionItemOrder(String questionItemOrder) {
        this.questionItemOrder = questionItemOrder;
    }

    public String getQuestionItemType() {
        return questionItemType;
    }

    public void setQuestionItemType(String questionItemType) {
        this.questionItemType = questionItemType;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }
}
