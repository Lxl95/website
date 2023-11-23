package com.xintian.common.utils;

import com.xintian.common.domain.ColumnCategory;
import java.util.ArrayList;
import java.util.List;

/**
 * @author: yanyongpan
 * @description：
 */

//用List构建带有层次结构的json数据
//List父子节点构造树形Json
public class OrgnTreeUtil {
    //将list集合转成树形结构的list集合
    public static List<ColumnCategory> listToTree(List<ColumnCategory> list) {
        //用递归找子。
        List<ColumnCategory> treeList = new ArrayList<ColumnCategory>();
        for (ColumnCategory tree : list) {
            if (tree.getPid().equals("0")) {
                //如果传递过来的集合中的对象OrganizationStructure的父id为0，就在传递过来的集合中寻找它的子节点，添加到定义的树形结构的list集合中去。
                treeList.add(findChildren(tree, list));
            }
        }
        return treeList;
    }

    //寻找子节点
    public static ColumnCategory findChildren(ColumnCategory tree, List<ColumnCategory> list) {
        for (ColumnCategory node : list) {
            if (node.getPid().equals(tree.getId())) {
                //如果传递过来的树对象的id，等于节点的父id。
                if (tree.getChild() == null) {
                    tree.setChild(new ArrayList<ColumnCategory>());//提前判断，如果child为空
                }
                  tree.getChild().add(findChildren(node, list));  //如果child不为空
            }
        }
        return tree;
    }

}