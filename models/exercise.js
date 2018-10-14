module.exports = function (sequelize, DataTypes) {
    var Exercise = sequelize.define("Exercise", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,

    });

    Exercise.associate = function (models) {
        Exercise.belongsTo(models.Workout, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Exercise;
};