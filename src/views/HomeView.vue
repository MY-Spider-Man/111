<template>
  <div class="box">
    <div class="mytop">
      <div>UNI-ADMIN</div>
      <div style="width: 35%;">
        <el-menu :default-active="1" router class="el-menu-demo" mode="horizontal">
          <el-menu-item index="home">首页</el-menu-item>
          <el-menu-item index="commodity">商品</el-menu-item>
          <el-menu-item index="order">订单</el-menu-item>
          <el-menu-item index="member">会员</el-menu-item>
          <el-menu-item index="set">设置</el-menu-item>
          <el-sub-menu index="2">
            <template #title>{{ route.query.name }}</template>
            <el-menu-item index="2-1">修改</el-menu-item>
            <el-menu-item index="2-1" @click="tui">退出</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </div>
    <div class="mylist">

      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const tui = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #e4e4e4;

  .mytop {
    width: 100%;
    height: 50px;
    background-color: #525b62;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
    color: white;

    .el-menu-demo {
      background-color: #525b62;
      height: 100%;
    }
  }

  .mylist {
    width: 100%;
    height: 92vh;
  }
}
</style>