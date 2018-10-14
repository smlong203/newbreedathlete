module.exports = function (sequelize, DataTypes) {
    var Client = sequelize.define("Client", {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING
    });

    Client.associate = function (models) {
        Client.belongsTo(models.Program, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Client;
};