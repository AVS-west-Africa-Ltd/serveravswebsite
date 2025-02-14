const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PartnerSchema = sequelize.define("Steps", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



sequelize
  .sync()
  .then(() => {
    console.log("PartnerSchema table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = PartnerSchema;
