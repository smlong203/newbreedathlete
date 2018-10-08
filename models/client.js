module.exports = function (sequelize, DataTypes) {
    var Client = sequelize.define("Client", {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        type: DataTypes.STRING,
        signupdate: DataTypes.Date,


    });

    Client.associate = function (models) {

        Client.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };

    return Client;
};