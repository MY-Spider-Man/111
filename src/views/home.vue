<template>
    <div class="box">
        <div style="width: 13%; height: 93vh; background-color: white;">
            <el-menu active-text-color="#ffd04b" class="el-menu-vertical-demo" router default-active="2" text-color="#000">
                <el-menu-item index="homepage">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>后台首页</span>
                </el-menu-item>
                <el-menu-item index="Album">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>相册管理</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 93  vh;
    display: flex;
}
</style>