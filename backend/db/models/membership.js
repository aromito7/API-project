'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      //Membership.belongsTo(models.Group, {foreignKey: "groupId"});
      //Membership.belongsToMany(models.User, {foreignKey: "userId"});
      //Membership.belongsToMany(models.Group, {foreignKey: "groupId"});
    }
  }
  Membership.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        is: /^(pending|member|co-host)$/i
      }
    },
  }, {
    sequelize,
    modelName: 'Membership',
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    },
  });
  return Membership;
};
