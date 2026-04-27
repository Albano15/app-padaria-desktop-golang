// frontend\next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export', // Diz ao Next para gerar HTML estático (sem Node.js server)
  distDir: 'dist',  // O Wails procura a pasta dist por padrão
  images: {
    unoptimized: true, // Obrigatório para o modo estático do Next.js
  },
};

export default nextConfig;
