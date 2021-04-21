const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ShoppingList extends Model { }

ShoppingList.init(
    {
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
                unique: false
            }
        },
        item_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "inventory",
                key: "id",
                unique: false
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "shopping_list"
    }
);

module.exports = ShoppingList;