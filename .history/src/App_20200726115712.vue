<template>
  <div id="app">
    <keep-alive exclude="Details,Settlement">
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
