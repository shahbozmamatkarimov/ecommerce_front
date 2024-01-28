// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "IlmNur",
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
      //   },
      //   {
      //     rel: "icon",
      //     href: "/main_logo.svg",
      //   },
      // ],
      // script: [
      //   {
      //     src: "https://widget.cloudpayments.ru/bundles/cloudpayments",
      //     defer: true,
      //   },
      // ],
      meta: [
        {
          name: "theme-color",
          content: "#FF852E",
        },
      ],
    },
  },
  css: ["~/assets/scss/main.scss"],
  modules: ["@ant-design-vue/nuxt", "@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
});
