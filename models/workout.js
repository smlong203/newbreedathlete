module.exports = function (sequelize, DataTypes) {
    var Workout = sequelize.define("Workout", {
        name: DataTypes.STRING

    });



    Workout.associate = function (models) {
        Workout.belongsTo(models.Program, {
            foreignKey: {
                allowNull: false
            }
        })
        Workout.hasMany(models.Exercise);
    };

    return Workout;
};