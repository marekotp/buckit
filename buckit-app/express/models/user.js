const { DataTypes, Model, Sequelize } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

User.init({
    user_id: {
        type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING, allowNull: false
    },
    last_name: {
        type: DataTypes.STRING, allowNull: false
    },
    email: {
        type: DataTypes.STRING, allowNull: false, unique: true
    },
    phone_number: {
        type: DataTypes.STRING, allowNull: false, unique: true
    },
    password: {
        type: DataTypes.STRING, allowNull: false
    }},

    { sequelize: sequelizeInstance, modelName: 'users', timestamps: false, freezeTableName: true
})

module.exports = User