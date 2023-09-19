<template>
  <div class="box">

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
  height: 93vh;
}
</style>