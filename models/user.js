module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
              len: [1]
            }
          },
          phone_number: {
            type: DataTypes.BIGINT,
            allowNull: true,
            validate: {
              len: [1, 10]
            }
          }
    });

    User.associate = function(models){
        User.hasMany(models.Status, {
            onDelete: "cascade"
        });
    };

    return User;
}