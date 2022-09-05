const { DB } = require('../../../.env')

module.exports = {
    dialect: 'mysql',
    host: DB.HOST,
    port: DB.PORT,
    username: DB.USER,
    password: DB.PASSWORD,
    database: DB.DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    dialectOptions: {
        timezone: 'local'
    },
    timezone: 'America/Sao_Paulo'
}