'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      Event.hasMany(models.Attendance, {foreignKey: "eventId"})
      //Event.belongsToMany(models.User, { through: models.Attendance, uniqueKey: 'eventId' })
      Event.belongsTo(models.Group, {foreignKey: "groupId"});
      Event.belongsTo(models.Venue, {foreignKey: "venueId"});
      Event.hasMany(models.EventImage, {foreignKey: 'eventId'})
    }
  }
  Event.init({
    venueId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /.{5,}/
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /(Online|In person)/i
      }
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        inFuture(date){
          if(new Date(date) - new Date() < -86400000){
            throw new Error("The start date has already passed.")
          }
        }
      }
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        inFuture(date){
          if(new Date(date) - new Date(this.startDate) < 0){
            throw new Error("The end date must be after the start date.")
          }
        }
      }
    },
  },{
    sequelize,
    modelName: 'Event',
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    },
  });
  return Event;
};
