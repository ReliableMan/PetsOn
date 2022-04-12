'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Email address is invalid",
          },
        },
      },
      password: {
        type: Sequelize.TEXT,
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
        type: Sequelize.STRING,
        // allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      date_birth: {
        type: Sequelize.DATE,
        // allowNull: false,
      },
      role: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      speciality: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
