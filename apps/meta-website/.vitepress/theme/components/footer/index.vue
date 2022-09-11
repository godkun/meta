<script setup>
import { ref } from 'vue'
import data from '../constants'
const config = ref(data)
const showWx = ref(false)
const showZf = ref(false)
</script>
<template>
  <div class="footer" id="footer">
    <div class="box">
      <div class="p2">
        <div class="rights">Copyright © godkun</div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped src="./index.less"></style>
