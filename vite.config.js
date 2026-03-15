// vite.config.js
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { resolve } from 'path'

// Obtener __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

// Detectar si estamos en producción
const isProduction = process.env.NODE_ENV === 'production'

// Exportar configuración
export default defineConfig({
  base: '/proyecto-final-css/', 
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        cursos: resolve(__dirname, 'cursos.html'),
        login: resolve(__dirname, 'login.html'),
        registro: resolve(__dirname, 'registro.html'),
        quienes_somos: resolve(__dirname, 'quienes_somos.html'),
        aviso_legal: resolve(__dirname, 'aviso_legal.html'),
        privacidad: resolve(__dirname, 'privacidad.html'),
        full_stack: resolve(__dirname, 'cursos/full_stack.html'),      
        blockchain: resolve(__dirname, 'cursos/blockchain.html'),
        blog1: resolve(__dirname, 'blog/Desarrollo_Full_Stack_para_perfiles_Junior.html'),
        blog2: resolve(__dirname, 'blog/El_futuro_brillante_del_desarrollo_Full_Stack_en_España.html')
      },
    },
  },
});