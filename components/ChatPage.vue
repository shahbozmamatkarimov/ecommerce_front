<template>
  <main
    class="flex flex-col items-center text-center bg-[#707991] w-full text-white max-h-screen h-screen overflow-y-auto"
  >
    <nav
      class="flex items-center bg-[#0D0F23] w-full z-50 sticky top-0 px-4 min-h-[60px]"
    >
      <div class="flex items-center gap-4 w-full">
        <img class="h-[50px] w-[50px]" src="@/assets/images/home.png" alt="" />

        <div>
          <div class="flex items-center justify-between">
            <h1 class="text-lg font-medium">Muddatli to’lov asosida</h1>
            <p class="text-sm">18:16</p>
          </div>
          <p>
            You:
            <span class="text-white/70">i don't remember anything 😄</span>
          </p>
        </div>
      </div>
      <div class="flex items-center gap-6 mr-2">
        <img src="@/assets/svg/navbar/search.svg" alt="" />
        <img src="@/assets/svg/navbar/phone.svg" alt="" />
        <img src="@/assets/svg/navbar/threedot.svg" alt="" />
      </div>
    </nav>
    <section class="w-full p-5 relative">
      <div class="bg-[#111536] w-[80%] rounded-xl">
        <div class="flex items-center gap-4 w-full p-4">
          <img
            class="h-[32px] w-[32px]"
            src="@/assets/images/home.png"
            alt=""
          />

          <div class="text-start">
            <h1 class="text-sm font-medium">
              14 Advanced Tips to Design FASTER in Figma
            </h1>
            <p class="text-white/70 text-xs">Coke Studio Bangla</p>
          </div>
        </div>
        <img
          class="h-[400px] object-contain w-full"
          src="https://www.investopedia.com/thmb/OQxvtmsJwBCy6kVw86E-ooDRVqs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rent_house_73089751-5bfc333346e0fb002602ddbe.jpg"
          alt=""
        />
        <ul class="flex items-center h-1 bg-white">
          <li class="bg-[#FA1F60] w-[20%] h-1 rounded-full"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="p-4">
          <ul class="flex items-center gap-8 mb-[10px]">
            <li class="flex items-center gap-1">
              <img src="@/assets/svg/home/heart.svg" alt="" />
              <p class="text-sm">16</p>
            </li>
            <li class="flex items-center gap-1">
              <img src="@/assets/svg/home/watched.svg" alt="" />
              <p class="text-sm">16</p>
            </li>
            <li class="flex items-center gap-1">
              <img src="@/assets/svg/home/messages.svg" alt="" />
              <p class="text-sm">16</p>
            </li>
            <li class="flex items-center gap-1">
              <img src="@/assets/svg/home/block.svg" alt="" />
              <p class="text-sm">16</p>
            </li>
          </ul>
          <pre class="text-start text-wrap text-sm">
• 10 000 000 so'm va undan ortiq daromad olish imkoniyati
• Karyera o'sishi va ochiq mukofot tizimi
• Yosh, ambitsiyali, do'stona va rivojlanayotgan jamoa
• Xodimlar uchun zamonaviy jihozlar va oshxona bilan jihozlangan qulay ofis Toshkent shahrining markazida – Hamid Olimjon metro bekatidan 5 daqiqa piyoda masofada joylashgan.
• Faol dam olish uchun tez-tez korporativ tadbirlar va sayohatlar, shuningdek, ish vaqtidan tashqari o'yin-kulgi uchun ofisda ko'plab stol va kompyuter o'yinlari
        </pre
          >
        </div>
      </div>
      <div class="flex items-center justify-center rounded-full right-5 bottom-20 cursor-pointer fixed h-10 w-10 bg-white">
        <img src="@/assets/svg/home/message_plus.svg" alt="">
      </div>
      <div class="flex items-center justify-center rounded-full right-5 bottom-5 cursor-pointer fixed h-10 w-10 bg-[#111536]">
        <img src="@/assets/svg/home/message_arrow.svg" alt="">
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
