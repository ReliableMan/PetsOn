'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post, Speciality}) {
      // define association here
      this.hasMany(Post, { foreignKey: "user_id" });
      this.hasMany(Speciality, {foreignKey: "user_id"})
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Email address is invalid",
        },
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [8],
          msg: "Minimum password length is 8 characters",
        },
        notEmpty: {
          args: [true],
          msg: "Please enter a password",
        },
        notNull: {
          args: [true],
          msg: "Please enter a password",
        },
      },
    },
    first_name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    date_birth: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    photo: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
