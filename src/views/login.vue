<template>
    <div class="box">
        <div class="mylogin">
            <div style="font-size: 24px; margin-bottom: 20px;">UNI-ADMIN</div>

            <el-form :model="form">
                <el-form-item>
                    <el-input v-model="form.name" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.pad" placeholder="请输入密码" type="password" />
                </el-form-item>
            </el-form>
            <div style="width: 100%; text-align: center;">
                <button
                    style="width: 100%; height: 35px; background-color: #007e7e; color: white; border: none; border-radius: 5px;"
                    @click="login">立即登录</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { loginAPI } from "@/api/api";
const form = reactive({
    name: "admin",
    pad: "admin"
})
const route = useRoute();
const router = useRouter();
const login = () => {
    loginAPI({ password: form.pad, username: form.pad }).then((res: any) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        router.push({
            path: '/',
            query: {
                name: res.data.username
            }
        })
    })
}
</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100vh;
    background-color: rgb(214, 214, 214);
    padding-top: 200px;
    box-sizing: border-box;

    .mylogin {
        width: 450px;
        height: 300px;
        background-color: white;
        margin: 0 auto;
        padding: 30px;
        box-sizing: border-box;
        text-align: center;
        color: #999;
    }
}
</style>