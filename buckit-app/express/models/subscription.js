const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const User = require('./user');

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
        type:DataTypes.DECIMAL(10,2), allowNull: false
    },
    renewal_date: {
        type: DataTypes.DATEONLY, allowNull: false
    },
    billing_cycle: {
        type: DataTypes.STRING, allowNull: false
    },
    user_id: {
        type: DataTypes.UUID, allowNull: false, 
        references: {
            model: 'users',
            key: 'user_id'
        }
    },
    category: {
        type: DataTypes.STRING, allowNull: false
    },
    cancellation_reminder: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
    }
},

{
    sequelize: sequelizeInstance, modelName:'subscriptions', timestamps: false, freezeTableName: true,
})

Subscription.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Subscription;