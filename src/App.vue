<template>
  <div id="app">
    <header align="left"><i class="el-icon-thirdrotate-orbit"></i>Orbit Wizard</header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div class="footer">© NUDT All Rights Reserved 2021.</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303133;
  margin-left: 50px;
  margin-right: 50px;
}
  header{
    font-size: 150%;
    margin-bottom: 20px;
  }
  footer{
    margin-top: 30px;
  }

</style>
