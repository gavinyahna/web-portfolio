export const runtimeConfig =
  typeof window !== 'undefined'
    ? {
        // client
      }
    : {
        // server
        port: process.env.PORT,
      };