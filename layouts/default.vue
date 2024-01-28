<template>
  <Header>
    <!-- https://v2.color-mode.nuxtjs.org/ // light and dark mode -->
    <!-- https://nuxt.com/modules/device // device detector -->
    <!-- <AppHeader /> -->
    <div class="flex">
      <AsideLeft />
      <Aside />
      <slot />
    </div>

    <!-- <AppFooter /> -->
  </Header>
</template>

<script></script>

<style lang="scss" scoped></style>
