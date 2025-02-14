const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ServicesSchema = sequelize.define("Services", {
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
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
  subTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subHeroTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subHeroButtonText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  whoTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  whoDescription: {
    type: DataTypes.JSON, // Use JSON type
    allowNull: false,
    defaultValue: [],
  },
  whoButton: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactSubTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  textColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  promoteTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  promoteDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  promoteImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stepHeroTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stepHeroDescription: {
    type: DataTypes.STRING,
    allowNull: false,
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

module.exports = ServicesSchema;
