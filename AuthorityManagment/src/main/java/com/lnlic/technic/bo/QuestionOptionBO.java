package com.lnlic.technic.bo;

/**
 * [添加说明]
 * <br>@author: guozw
 * <br>@date: 2018-1-7 19:26
 * <br>@version: 1.0
 */
public class QuestionOptionBO {

    //    主键
    private String id;
    //    问卷题目主键
    private String questionItemCode;
    //  问卷选项名称
    private String questionOptionName;
    //    排序
    private String questionOptionOrder;
    //数量
    private int count;
    // 选项分值
    private int score;

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String getQuestionOptionOrder() {
        return questionOptionOrder;
    }

    public void setQuestionOptionOrder(String questionOptionOrder) {
        this.questionOptionOrder = questionOptionOrder;
    }

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

    public String getQuestionOptionName() {
        return questionOptionName;
    }

    public void setQuestionOptionName(String questionOptionName) {
        this.questionOptionName = questionOptionName;
    }
}
