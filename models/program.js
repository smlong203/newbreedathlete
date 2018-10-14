module.exports = function (sequelize, DataTypes) {
    var Program = sequelize.define("Program", {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    });

    Program.associate = function (models) {
        Program.hasMany(models.Client);
        Program.hasMany(models.Workout);
    };

    return Program;
};