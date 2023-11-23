package com.xintian.common.utils;

import com.xintian.common.domain.ColumnCategory;
import java.util.ArrayList;
import java.util.List;

/**
 * @author: yanyongpan
 * @description：
 *
 * 查找父节点工具类
 */

public class FindPOrgnTreeUtil {


    public static List<ColumnCategory> queryParentIds(ColumnCategory pid, List<ColumnCategory> menuList) {
        //递归获取父级ids,不包含自己
        List<ColumnCategory> parentMenu = new ArrayList<>();
        parentMenu.add(pid);
        getParentTaxCompanyIds(menuList, pid, parentMenu);
        return parentMenu;
    }

    /**
     * 递归获取父级ids
     * @param
     * @param
     * @param
     */
    private static void getParentTaxCompanyIds(List<ColumnCategory> menuList, ColumnCategory pid, List<ColumnCategory> parentMenu) {
        for (ColumnCategory menu : menuList) {
//            if (menu.getPid().equals("0")) {
//                continue;
//            }
            //判断是否有父节点
            if (pid.getPid().equals(menu.getId())) {
                parentMenu.add(menu);
                getParentTaxCompanyIds(menuList, menu, parentMenu);
            }
        }
    }

}
