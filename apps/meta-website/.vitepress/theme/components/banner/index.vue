<script lang="ts" setup>
import { ref } from 'vue'
import data from '../constants'
const config = ref(data)
</script>

<template>
  <!--顶部导航 -->
  <div class="banner" id="banner">
    <div class="box">
      <div class="left">
        <div class="item-1">Monibuca</div>
        <div class="item-2">开源Go语言流媒体服务器开发框架</div>
        <div class="item-3">
          <span>m7s v4</span>
          即将发布，敬请期待
        </div>
        <a href="https://docs.m7s.live" target="_blank"
          ><div class="item-4">快速开始</div></a
        >
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>
<style lang="less" scoped src="./index.less"></style>
