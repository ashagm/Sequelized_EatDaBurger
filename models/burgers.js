module.exports = function(sequelize, DataTypes)
{
    return sequelize.define("burgers", {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    }, {
      timestamps: false,
      freezeTableName: true,

        // define the table's name
      tableName: 'burgers',
    });

};