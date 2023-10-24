import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig(({ command }) => {

  const config = {

      plugins: [react(), tailwindcss("./tailwind.config.js")],

      base: "/countries-app/",

  };




  // if (command !== "serve") {

  //     config.base = "/countries-app/";

  // }




  return config;

});
