<template>
  <div id="app">
    <keep-alive exclude="login,mall,Details">
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
