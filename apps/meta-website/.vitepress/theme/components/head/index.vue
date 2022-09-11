<script lang="ts" setup>
import { ref } from 'vue'
import { Logo } from '@meta/ui/vue'
import data from '../constants'
const config = ref(data)
</script>

<template>
  <!--顶部导航 -->
  <div class="main">
    <div class="box">
      <div class="left">
        <!-- <img src="/images/logo.png" alt="" srcset="" /> -->
        <div class="logo">Meta</div>
      </div>
      <div class="right">
        <a :href="item.url" v-for="(item, index) in config" :key="index" class="item">
          {{ item.name }}
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped src="./index.less"></style>
