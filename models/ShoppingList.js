const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ShoppingList extends Model { }

ShoppingList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        item_name: {
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