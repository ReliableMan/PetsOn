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
    static associate({ Service, User }) {
      this.hasMany(Service, { foreignKey: "speciality_id" })
      this.belongsTo(User, { foreignKey: "user_id" })
    }
  }
  Speciality.init({
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Speciality',
  });
  return Speciality;
};
