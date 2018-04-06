<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="manage"><i class="el-icon-menu"></i></el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>系统管理</template>
						<el-menu-item index="stockList">角色管理</el-menu-item>
						<el-menu-item index="foodList">组织管理</el-menu-item>
						<el-menu-item index="orderList">用户管理</el-menu-item>
						
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-plus"></i>账户管理</template>
						<el-menu-item index="addShop">供应商管理</el-menu-item>
						<el-menu-item index="addGoods">采购商管理</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-star-on"></i>库房管理</template>
						<el-menu-item index="userList">入库管理</el-menu-item>
						<el-menu-item index="userList">出库管理</el-menu-item>
						<el-menu-item index="userList">仓库管理</el-menu-item>
						<el-menu-item index="userList">移库管理</el-menu-item>
						<!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-edit"></i>财务管理</template>
						<el-menu-item index="userList">入库结算</el-menu-item>
						<el-menu-item index="userList">出库结算</el-menu-item>
						<el-menu-item index="userList">财务审批</el-menu-item>
						<el-menu-item index="userList">支付单列表</el-menu-item>
					</el-submenu>
					
					
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	
</style>
