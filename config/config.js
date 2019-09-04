const env = process.env;

module.exports = {
  port: env.PORT || 10000,
  host: env.HOST || '0.0.0.0',
  database: {
    db_host: env.DB_HOST || 'localhost',
    db_port: env.DB_PORT || '5432',
    db_user: env.DB_USER || 'root',
    db_password: env.DB_PASSWORD || 'root',
    db: env.DB || 'postgres'
  }
};