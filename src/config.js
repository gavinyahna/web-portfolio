export const runtimeConfig =
  typeof window !== 'undefined'
    ? {
        // client
        port: window.env.PORT,
      }
    : {
        // server
        port: process.env.PORT,
      };