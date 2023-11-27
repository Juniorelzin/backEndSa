import Sequelize from "sequelize";

const Connection = new Sequelize(
    'backend_jogosa',
    'jogoSa',
    '12345678',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

export default Connection;