const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const LandingSchema = sequelize.define("LandingPages", {
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bgImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  textColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  about: {
    type: DataTypes.TEXT,
  },
  about2: {
    type: DataTypes.TEXT,
  },
});


sequelize
  .sync()
  .then(() => {
    console.log("Landing table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = LandingSchema;
