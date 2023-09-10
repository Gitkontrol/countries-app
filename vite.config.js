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

      base: "/",

  };




  if (command !== "serve") {

      config.base = "/countries_api_app/";

  }




  return config;

});
