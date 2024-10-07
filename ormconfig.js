module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'my_database',
  entities: [
    process.env.NODE_ENV === 'PRODUCTION'
      ? 'dist/database/entities/*.js'
      : 'src/database/entities/*.ts',
  ],
  migrations: [
    process.env.NODE_ENV === 'PRODUCTION'
      ? 'dist/database/migrations/*.js'
      : 'src/database/migrations/*.ts',
  ],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
}
