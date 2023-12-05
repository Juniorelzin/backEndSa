import Sequelize from "sequelize";
import Connection from "../database.js";

const User = Connection.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cash: {
            type: Sequelize.STRING,
            allowNull: true
        },
        userDeck: {
            type: Sequelize.STRING,
            allowNull: true
        },
        inventory: {
            type: Sequelize.STRING,
            allowNull: true
        },
        battle: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        }
    }
);

export default User;