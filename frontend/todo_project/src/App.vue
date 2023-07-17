<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>




export default {
  name: 'App',
  data(){
    return{}
  }
}
</script>

<style>

body {
  background-color: #5897fb;
  font-family: 'Poppins', sans-serif;
  height: 100%;
  flex: 1 1 auto;
  color: #1b1b1b;


}
.main-block{
  width: 70%;
  height: 80%;
  margin: 0 auto;
}
.x-header-block{
  width: 100%;
}
.x-block{
  width: 1000px;
  margin: 0 auto;
}
.x-content{
  color: #0f0f0f;
}

</style>