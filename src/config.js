export const runtimeConfig =
  typeof window !== 'undefined'
    ? {
        // client
        $PORT: window.env.PORT,
      }
    : {
        // server
        $PORT: process.env.PORT,
      };