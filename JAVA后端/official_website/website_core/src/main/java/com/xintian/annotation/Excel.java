package com.xintian.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD})
public @interface Excel {

    /**
     * 导出excel中的名字
     */
    String name();
    /**
     * 日期格式，如 yyyy-MM-dd
     */
    String dateFormat() default "";
    /**
     * 读取内容表达式，如 0=男，1=女，2=未知
     */
    String readConverterExp() default "";
    /**
     * 导出时excel在每个列的高度，单位为字符
     */
    double height() default 14.0D;
    /**
     * 导出时excel在每个列的宽度，单位为字符
     */
    double width() default 16.0D;
    /**
     * 文字后缀，如90 变成90%
     */
    String suffix() default "";
    /**
     * 当值为空时，字段的默认值
     */
    String defaultValue() default "";
    /**
     * 提示信息
     */
    String prompt() default "";
    /**
     * 设置只能选择不能输入的列内容
     */
    String[] combo() default {};
    /**
     * 是否导出数据
     */
    boolean isExport() default true;
    /**
     * 另一个类中的属性名称，支持多级获取，以小数点隔开
     */
    String targetAttr() default "";

    /**
     * 字段类型（0：导出导入，1-导出，2-导入）
     * @return
     */
    Type type() default Type.ALL;

    public enum Type {
        ALL(0),
        EXPORT(1),
        IMPORT(2);

        private final int value;

        private Type(int value) {
            this.value = value;
        }

        public int value() {
            return this.value;
        }
    }
}
