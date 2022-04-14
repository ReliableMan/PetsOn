'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Speciality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Service}) {
      this.hasMany(Service, { foreignKey: "speciality_id" })
    }
  }
  Speciality.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Speciality',
  });
  return Speciality;
};
