export default {
    'port':  (process.env.API_PORT !== undefined) ? Number(process.env.API_PORT) : 8080
};