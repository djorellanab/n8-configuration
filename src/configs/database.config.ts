export default {
   'type':  process.env.DB_TYPE || 'postgres',
   'host': process.env.DB_HOST || 'localhost',
   'port':  (process.env.DB_PORT !== undefined) ? Number(process.env.DB_PORT) :  3306,
   'username': process.env.DB_USERNAME || 'test',
   'password': process.env.DB_PASSWORD || 'test',
   'database': process.env.DB_DATABASE || 'test',
   'synchronize': process.env.DB_SYNCHRONIZE == 'true' || true,
   'logging': process.env.DB_LOGGING == 'true' || true,
   "entities": [
       "src/entity/**/*.ts"
    ],
    "migrations": [
       "src/migration/**/*.ts"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts"
    ],
    "cli": {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/migration",
       "subscribersDir": "src/subscriber"
    }
};