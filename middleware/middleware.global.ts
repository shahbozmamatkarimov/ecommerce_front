import { defineNuxtRouteMiddleware } from "#app";

export default defineNuxtRouteMiddleware(async (to, from) => {
//   try {
//     if (process.client) {
//       const token = localStorage.getItem("token");
//       const isRoute = ["login", "forgot_password", "verify_otp", "new_password"].includes(to.name);
//       if (token) {
//         const parts = token.split(".");
//         const exp = parts[1];
//         const decodedPayload = JSON.parse(atob(exp));
//         const experition = decodedPayload.exp;
//         const now = +Date.now().toString().slice(0, 10);
//         console.log(now, experition);
//         console.log(now >= experition);
//         // if (now >= experition) {
//         //   console.log(now >= experition);
//         //   localStorage.removeItem("token");
//         //   return navigateTo("/login");
//         // }
//       } else if (!isRoute) {
//         console.log('object');
//         return navigateTo("/login");
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     if (to.path !== "/login") {
//       return navigateTo("/login");
//     }
//   }
});
