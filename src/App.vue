<template>
  <div id="app">
    <el-container>
      <el-header>
        <div id=logo>
          <el-image class="logo" src="./static/logo.png"></el-image>
        </div>
        <div>
          <Nav></Nav>
        </div>
      </el-header>
    </el-container>
    <router-view></router-view>
  </div>
</template>

<script>
  import Nav from './components/nav.vue'
  export default {
    components: { Nav },
    name: 'App',
    created() {
      let loading = document.getElementById('loader-wrapper')
      if (loading != null) {
        document.body.removeChild(loading);
      }
    }
  }
</script>

<style>
  #app {
    background-color: #57d3de;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2357d3de'/%3E%3Cstop offset='1' stop-color='%23e5d6ff'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.47'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }

  .el-header {
    color: #333;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  #logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 30px;
    height: 30px;
  }
</style>