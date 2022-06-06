import Vue from "vue";
import VueRouter from "vue-router";

/* Layout */
import Layout from "../components/Layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    meta: {
      requiredAuth: true,
    },
    children: [
      {
        path: "/",
        component: () => import("../views/Dashboard"),
        name: "dashboard",
        meta: {
          requiredAuth: true,
        },
      },
      {
        path: "/user",
        name: "user",
        component: () => import("../views/User"),
        meta: {
          requiredAuth: true,
        },
      },
      {
        path: "/changepassword",
        component: () => import("../views/ChangePassword"),
        name: "changepassword",
        meta: {
          requiredAuth: true,
        },
      },
      {
        path: "/userInfo",
        name: "userInfo",
        component: () => import("../components/Infomation"),
        meta: {
          requiredAuth: true,
        },
      },
      {
        path: "/video",
        name: "video",
        component: () => import("../views/Video"),
        meta: {
          requiredAuth: true,
        },
      },
      {
        path: "/hashtag",
        name: "hashtag",
        component: () => import("./../views/Hashtag"),
        meta: {
          requiredAuth: true,
        },
      },

      {
        path: "/report",
        name: "report",
        component: () => import("./../views/Report"),
        meta: {
          requiredAuth: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./../views/Login"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("./../views/404"),
  },
  {
    path: "/pageupdate",
    name: "nopage",
    component: () => import("./../views/NoPage"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.requiredAuth) {
    const auth = localStorage.getItem("token");
    if (auth && auth !== "") {
      next();
    } else {
      next({ path: "/login" });
    }
  }
  return next();
});

export default router;
