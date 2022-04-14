'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Pet }) {
      // define association here
      this.belongsTo(User, {foreignKey: 'user_id'});
      this.belongsTo(Pet, {foreignKey: 'pet_id'});
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
