import { createRouter, createWebHistory } from "vue-router"
import { useAdminStore } from '备份/src/stores/admin/admin.js'

const routes = [
	{
		path: "/", // http://localhost:5173/
		redirect: "/admin" // 重定向
	},
	{
		path: "/login", // http://localhost:5173/login
		// component: () => import("../views/admin/login.vue")
		component: () => import("备份/src/views/admin/login.vue")
	},
	{
		path: "/admin", // http://localhost:5173/admin
		component: () => import("备份/src/views/admin/home.vue"),
		meta: { requiresAuth: true }, //身份验证
		children: [
			//管理员
			{
				path: "administrator/add", // http://localhost:5173/admin/administrator/add
				component: () => import("备份/src/views/admin/administrator/add.vue")
			},
			{
				path: "administrator/list", // http://localhost:5173/admin/administrator/list
				component: () => import("备份/src/views/admin/administrator/list.vue")
			},
			//类别管理
			{
				path: "category/list", // http://localhost:5173/admin/category/list
				component: () => import("备份/src/views/admin/category/list.vue")
			},
		]
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

//全局前置守卫
router.beforeEach((to, from, next) => {
	//console.log("to:",to) //即将进入的路由的信息 (到哪里去)
	//console.log("from:",from) //当前即将离开的路由信息 (从哪里来)

	if (to.meta.requiresAuth) { //判断是否需要身份验证
		console.log("需要身份验证")

		const adminStore = useAdminStore()
		//console.log(adminStore.data)
		if (adminStore.data.token === "") {
			console.log("未登录")

			router.push("/login") //跳转至登录页
		}

		next()
	} else {
		console.log("无需要身份验证")
		next()
	}
})


export default router