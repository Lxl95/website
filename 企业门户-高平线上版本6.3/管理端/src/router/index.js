import Vue from "vue";
import Router from "vue-router";
import Cookies from "js-cookie";
import { setToken } from "@/utils/auth.js";
import { IsLAN } from "@/utils/index";
import store from "@/store";
import syncConfig from "../utils/syncConfig";
Vue.use(Router);

/* Layout */
import Layout from "@/layout";

export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path*",
        component: () => import("@/views/redirect/index")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404"),
    hidden: true
  },
  {
    path: "/401",
    component: () => import("@/views/error-page/401"),
    hidden: true
  },
  {
    path: "/profile",
    component: Layout,
    redirect: "/profile/index",
    hidden: true,
    children: [
      {
        path: "index",
        component: () => import("@/views/profile/index"),
        name: "Profile",
        meta: { title: "profile", icon: "user", noCache: true }
      }
    ]
  },
  {
    path: "",
    component: Layout,
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index"),
        name: "Dashboard",
        meta: { title: "dashboard", icon: "dashboard", affix: true }
      }
    ]
  }
];

/**
 * 异步路由
 */
export const asyncRoutes = [
  {
    id: 1,
    path: "/configuration",
    component: Layout,
    redirect: "/configuration/list",
    name: "网站信息配置",
    meta: {
      title: "网站信息配置",
      icon: "international"
    },
    children: [
      {
        id: 101,
        path: "swiper",
        component: () => import("@/views/configuration/swiper"),
        name: "轮播图",
        meta: { title: "轮播图", noCache: true }
      },

      {
        id: 104,
        path: "activityModule",
        component: () => import("@/views/configuration/activityModule"),
        name: "活动管理",
        meta: { title: "活动管理", noCache: true }
      },
      {
        id: 105,
        path: "sysinfo",
        component: () => import("@/views/configuration/sysinfo"),
        name: "企业信息",
        meta: { title: "企业信息", noCache: true }
      }
    ]
  },
  {
    id: 2,
    path: "/newsManagement",
    component: Layout,
    redirect: "/newsManagement/newsList",
    name: "新闻管理",
    meta: {
      title: "新闻管理",
      icon: "international"
    },
    children: [
      {
        id: 201,
        path: "itemCategory",
        component: () => import("@/views/configuration/itemCategory"),
        name: "网站目录",
        meta: { title: "网站目录", noCache: true }
      },
      {
        id: 202,
        path: "contentColumn",
        component: () => import("@/views/configuration/contentColumn"),
        name: "新闻管理",
        meta: { title: "新闻管理", noCache: true }
      },
      {
        id: 203,
        path: "newsList",
        component: () => import("@/views/newsManagement/newsList"),
        name: "热点新闻管理",
        meta: { title: "热点新闻管理", noCache: true }
      }
    ]
  },
  {
    id: 3,
    path: "/businessManagement",
    component: Layout,
    redirect: "/businessManagement/businessHandling",
    name: "业务管理",
    meta: {
      title: "业务管理",
      icon: "international"
    },
    children: [
      {
        id: 301,
        path: "businessHandling",
        component: () => import("@/views/businessManagement/businessHandling"),
        name: "业务办理",
        meta: { title: "业务办理", noCache: true }
      }
    ]
  },
  {
    id: 4,
    path: "/announcements",
    component: Layout,
    redirect: "/announcements/announcementType",
    name: "公告管理",
    meta: {
      title: "公告管理",
      icon: "international"
    },
    children: [
      {
        id: 401,
        path: "announcementType",
        component: () => import("@/views/announcements/announcementType"),
        name: "公告类型",
        meta: { title: "公告类型", noCache: true }
      },
      {
        id: 402,
        path: "announcementQuery",
        component: () => import("@/views/announcements/announcementQuery"),
        name: "公告查询",
        meta: { title: "公告查询", noCache: true }
      }
    ]
  },
  {
    id: 5,
    path: "/policiesRegulations",
    component: Layout,
    redirect: "/policiesRegulations/policiesRegulationsType",
    name: "政策法规管理",
    meta: {
      title: "政策法规管理",
      icon: "international"
    },
    children: [
      {
        id: 501,
        path: "policiesRegulationsType",
        component: () =>
          import("@/views/policiesRegulations/policiesRegulationsType"),
        name: "政策法规类型",
        meta: { title: "政策法规类型", noCache: true }
      },
      {
        id: 502,
        path: "policiesRegulationsQuery",
        component: () =>
          import("@/views/policiesRegulations/policiesRegulationsQuery"),
        name: "政策法规查询",
        meta: { title: "政策法规查询", noCache: true }
      }
    ]
  },
  {
    id: 7,
    path: "/contactUs",
    component: Layout,
    redirect: "/contactUs/index",
    name: "联系我们",
    meta: {
      title: "联系我们",
      icon: "international"
    },
    children: [
      {
        id: 701,
        path: "contactUs",
        component: () => import("@/views/contactUs/index"),
        name: "联系我们",
        meta: { title: "联系我们", noCache: true }
      }
    ]
  },
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes.concat(asyncRoutes)
  });
const router = createRouter();

function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.href.split("?")[1]
    ? window.location.href.split("?")[1].match(reg)
    : null;
  if (r != null) return unescape(r[2]);
  return null;
}
router.beforeEach(async (to, from, next) => {
  // 判断内外网 内网1 外网0
  if (!Cookies.get("lan")) {
    const lan = IsLAN(window.location.hostname) ? 1 : 0;
    Cookies.set("lan", lan);
  }
  if (!store.getters.jsonInfo) {
    store.dispatch("user/setJsonInfo", syncConfig);
  }
  const acctoken = GetQueryString("accessToken");
  if (acctoken) {
    store.dispatch("setToken", acctoken);
    setToken(acctoken);
  }
  if (!store.getters.userInfo) {
    await store.dispatch("user/getInfo");
  }
  next();
});

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
