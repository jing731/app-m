<template>
  <div class="layout-container">
    <!-- 注意：应该放子路由出口 -->
    <router-view />
    <!-- 底部路由出口 -->
    <van-tabbar v-model="active" vue-router>
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/qa">问答</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/video">视频</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
</van-tabbar>
    </div>
</template>
<script>
export default {
  name: 'LayoutIndex',
  components: {},
  props: {},
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
