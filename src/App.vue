<template>
  <div class="app">
  <router-view/>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
* {
  font-family: "poppins", sans-serif;
  color: #fff;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.app {
  height: 100vh;
  background-color: #141625;
}

.container{
  width: 100%;
  max-width: 850px;
  padding: 40px 10px;
  margin: 0 auto;
}
</style>
