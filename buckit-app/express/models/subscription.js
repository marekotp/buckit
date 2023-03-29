const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Subscription extends Model {}

Subscription.init({
    subscription_id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    },
    name: {
        type: DataTypes.STRING, allowNull: false
    },
    price: {
        type:DataTypes.INTEGER, allowNull: false
    },
    renewal_date: {
        type: DataTypes.DATEONLY, allowNull: true
    },
    billing_cycle: {
        type: DataTypes.STRING, allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER, allowNull: true
    },
    category: {
        type: DataTypes.STRING, allowNull: false
    }},

{
    sequelize: sequelizeInstance, modelName:'subscriptions', timestamps: false, freezeTableName: true, tableName: "subscriptions"
})

module.exports = Subscription;