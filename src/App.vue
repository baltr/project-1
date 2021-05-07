<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <div class="col-9">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  @import "./assets/styles/main.scss"
</style>