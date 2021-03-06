'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Speciality}) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasOne(Speciality, { foreignKey: "id" })
    }
  }
  Service.init({
    title: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    speciality_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};
