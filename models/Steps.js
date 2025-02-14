const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const StepSchema = sequelize.define("Steps", {
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  btnText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



sequelize
  .sync()
  .then(() => {
    console.log("StepSchema table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = StepSchema;
