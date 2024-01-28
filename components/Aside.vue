<template>
  <div>
    <aside
      class="flex flex-col relative items-center text-center bg-[#0D0F23] border-r border-[#111536] w-[360px] text-white max-h-screen h-screen overflow-y-auto"
    >
      <nav
        v-if="$router.currentRoute.value.query.category"
        class="flex items-center justify-center bg-[#0D0F23] border-b border-[#111536] z-50 sticky top-0 hover:bg-[#111536] cursor-pointer px-4 gap-4 w-full min-h-[60px]"
      >
        <img
          class="h-[40px] w-[40px] rounded-full object-cover"
          src="@/assets/images/home.png"
          alt=""
        />
        <div class="flex flex-col justify-between w-full text-start">
          <div class="flex items-center justify-between">
            <h1 class="font-medium">Muddatli to’lov asosida</h1>
          </div>
          <p class="text-sm">last seen 5 mins ago</p>
        </div>
      </nav>
      <nav v-else
        class="flex justify-center items-center w-full bg-[#0D0F23] z-50 sticky top-0 min-h-[60px]"
      >
        <img
          class="absolute left-7 z-10"
          src="@/assets/svg/navbar/search.svg"
          alt=""
        />
        <input
          type="text"
          class="text-black placeholder-[#707991] rounded-full w-full mx-4 h-10 pl-10 pr-4"
          placeholder="Search"
        />
      </nav>
      <ul class="w-full">
        <li @click="addQuery('muddatli' + i)"
          class="flex items-center hover:bg-[#111536] cursor-pointer px-4 gap-4 w-full relative h-[72px]"
          v-for="i in 10"
          :key="i"
        >
          <img
            class="h-[50px] w-[50px] rounded-full object-cover"
            src="@/assets/images/home.png"
            alt=""
          />
          <div class="flex flex-col justify-between w-full text-start">
            <div class="flex items-center justify-between">
              <h1 class="text-lg font-medium">Muddatli to’lov asosida</h1>
              <p class="text-sm">18:16</p>
            </div>
            <p>
              You:
              <span class="text-white/70">i don't remember anything 😄</span>
            </p>
          </div>
        </li>
      </ul>
    </aside>
    <div
      class="flex items-center justify-center rounded-full mr-5 bottom-16 ml-auto sticky cursor-pointer min-h-[40px] w-10 bg-white"
    >
      <img src="@/assets/svg/home/message_plus.svg" alt="" />
    </div>
  </div>
</template>

<script setup>

const router = useRouter();

function addQuery(query) {
   router.push({ query: { category: query } });
}

</script>

<style lang="scss" scoped></style>
