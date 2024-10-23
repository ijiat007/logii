<template>
  <header>header</header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 20px;
  border-bottom: 1px solid rgba($white, 0.4);

  @include breakpoint(lg) {
    height: 80px;
    padding: 40px;
  }
}
</style>
