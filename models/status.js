var mode
module.exports = function (sequelize, DataTypes) {
  var Status = sequelize.define("Status", {
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // intended_destination: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    }

  });


  Status.associate = function (models) {
    Status.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      }
    });
  };

  return Status;
};