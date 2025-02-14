

module.exports = {
        development: {
            username: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || '',
            database: 'avsweb' || 'default_dev_db',
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || 3306,
            dialect: 'mysql',
        },
        test: {
            username: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_DATABASE_TEST || 'default_dev_db',
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || 3306,
            dialect: 'mysql',
        },
        production: {
            username: "onthelbo_avs",
            password: "Justkeepitsimple",
            database:"onthelbo_avswebsite",
            host:"localhost",
            port: 3306,
            dialect: 'mysql',
        },
    APIKEY: '26a3281bfc65b39527447691941d6a707357a1278b1b2ec91742faec9de53ac8'
};

