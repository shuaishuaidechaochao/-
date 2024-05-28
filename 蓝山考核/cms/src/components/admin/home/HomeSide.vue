<script setup>
import { reactive, onMounted } from 'vue';
import NavAPI from '@/api/NavAPI';

const data = reactive({
  /*
	        list: [           
	            { name: '类别管理', icon: 'Files', path: '/admin/category/list?parent_id=0', children: null },
	            { name: '文章管理', icon: 'Document', path: 'article', children:[
	                    { name: '添加文章', icon: '', path: '/admin/article/add', children: null},
	                    { name: '文章列表', icon: '', path: '/admin/article/list', children: null }
	                ]
	            },
	            { name: '管理员', icon: 'UserFilled', path: 'admin', children:[
	                    { name: '添加管理员', icon: '', path: '/admin/administrator/add', children: null},
	                    { name: '管理员列表', icon: '', path: '/admin/administrator/list', children: null }
	                ]
	            },
	            { name: '导航管理', icon: 'Guide', path: '/admin/nav/list?parent_id=0', children: null },
	        ]
	        */
  list: [],
});

//在组件成功挂载到DOM并完成首次渲染后调用
onMounted(() => {
  NavAPI.getAll()
    .then((result) => {
      //console.log(result)
      if (!result.status) {
        ElMessage.error(result.msg);
        return;
      }

      data.list = result.data;
    })
    .catch((err) => {
      console.log('err:', err);
    });
});
</script>

<template>
  <div class="side">
    <!--
	        <el-menu router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
	            <el-sub-menu index="admin">
	                <template #title>
	                    <el-icon><UserFilled /></el-icon> 管理员
	                </template>
	                <el-menu-item-group>
	                    <el-menu-item index="/admin/administrator/add">添加管理员</el-menu-item>
	                    <el-menu-item index="/admin/administrator/list">管理员列表</el-menu-item>
	                </el-menu-item-group>
	            </el-sub-menu>

	            <el-menu-item index="/admin/category/list?parent_id=0">
	                <el-icon><Files /></el-icon> 类别管理
	            </el-menu-item>

	            <el-sub-menu index="article">
	                <template #title>
	                    <el-icon><Document /></el-icon> 文章管理
	                </template>
	                <el-menu-item-group>
	                    <el-menu-item index="/admin/article/add">添加文章</el-menu-item>
	                    <el-menu-item index="/admin/article/list">文章列表</el-menu-item>
	                </el-menu-item-group>
	            </el-sub-menu>
	            
	            <el-menu-item index="/admin/nav/list?parent_id=0">
	                <el-icon><Guide /></el-icon> 导航管理
	            </el-menu-item>
	        </el-menu>
	        -->

    <el-menu router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <template v-for="item in data.list">
        <!-- 不包含子菜单, 则为一级菜单 -->
        <el-menu-item v-if="item.children === null" :index="item.path">
          <el-icon><component :is="item.icon" /></el-icon> {{ item.name }}
        </el-menu-item>

        <!-- 包含子菜单, 则为二级菜单 -->
        <el-sub-menu v-else :index="item.path">
          <template #title>
            <el-icon><component :is="item.icon" /></el-icon> {{ item.name }}
          </template>

          <el-menu-item-group>
            <template v-for="childrenItem in item.children">
              <el-menu-item :index="childrenItem.path">{{ childrenItem.name }}</el-menu-item>
            </template>
          </el-menu-item-group>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<style scoped></style>
