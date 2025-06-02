/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TMDB_TOKEN: string;
    // Можна оголосити й інші змінні, наприклад:
    // readonly VITE_API_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }