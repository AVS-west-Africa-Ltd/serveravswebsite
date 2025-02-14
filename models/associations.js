// const LandingSchema = require("./LandingPage");
// const StepSchema = require("./Steps");
// const ServicesSchema = require("./Services");

// // Define Associations
// LandingSchema.hasMany(StepSchema, { foreignKey: "landingId", as: "steps" });
// StepSchema.belongsTo(LandingSchema, { foreignKey: "landingId" });

// LandingSchema.hasMany(ServicesSchema, { foreignKey: "landingId", as: "services" });
// ServicesSchema.belongsTo(LandingSchema, { foreignKey: "landingId" });

// module.exports = { LandingSchema, StepSchema, ServicesSchema };

const LandingSchema = require("./LandingPage");
const StepSchema = require("./Steps");
const ServicesSchema = require("./Services");

// Define Associations
LandingSchema.hasMany(ServicesSchema, { foreignKey: "landingId", as: "services" });
ServicesSchema.belongsTo(LandingSchema, { foreignKey: "landingId" });

ServicesSchema.hasMany(StepSchema, { foreignKey: "serviceId", as: "steps" });
StepSchema.belongsTo(ServicesSchema, { foreignKey: "serviceId" });

module.exports = { LandingSchema, StepSchema, ServicesSchema };

