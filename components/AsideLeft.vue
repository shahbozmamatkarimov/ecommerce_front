<template>
  <div>
    <aside
      class="flex flex-col items-center text-center bg-[#111536] w-[70px] text-white max-h-screen h-screen overflow-y-auto"
    >
      <nav
        v-if="!$router.currentRoute.value.query.category"
        class="flex justify-center items-center cursor-pointer bg-[#111536] w-[70px] z-50 sticky top-0 min-h-[60px]"
      >
        <img
          class="w-[25px] h-[13px]"
          src="@/assets/svg/navbar/menu.svg"
          alt=""
        />
      </nav>
      <nav
        v-else
        @click="$router.back()"
        class="flex justify-center items-center cursor-pointer bg-[#111536] w-[70px] z-50 sticky top-0 min-h-[60px]"
      >
        <img
          class="w-[26px] h-[29px]"
          src="@/assets/svg/navbar/back_arrow.svg"
          alt=""
        />
      </nav>
      <ul class="text-[12px] w-full font-medium">
        <li
          @click="$router.push('home' + i)"
          class="flex items-center justify-center cursor-pointer hover:bg-[#0D0F23] relative h-[72px]"
          v-for="i in 10"
          :key="i"
        >
          <img
            class="h-[40px] w-[40px]"
            src="@/assets/images/home.png"
            alt=""
          />
          <p class="absolute bottom-1 h-[10px] line-camp-2 leading-[12px]">
            Uylar
          </p>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
