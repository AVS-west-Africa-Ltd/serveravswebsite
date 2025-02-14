const express = require("express");
const {
  createLandingPage,
  updateLandingPage,
  deleteLandingPage,
  getLandingPageWithDetails,
  getAllLandingPageWithDetails
} = require("../controllers/LandingPageController");
const {
  createStep,
  updateStep,
  deleteStep,
} = require("../controllers/StepsController");
const {
  createService,
  updateService,
  deleteService,
} = require("../controllers/ServicesController");

const { createPartner, updatePartner, deletePartner, getPartners } = require("../controllers/PartnerController");

const router = express.Router();

// Landing Pages Routes
router.get("/landing", getAllLandingPageWithDetails);
router.get("/landing/:id", getLandingPageWithDetails);
router.post("/landing", createLandingPage);
router.put("/landing/:id", updateLandingPage);
router.delete("/landing/:id", deleteLandingPage);

// Steps Routes
router.post("/steps", createStep);
router.put("/steps/:id", updateStep);
router.delete("/steps/:id", deleteStep);

// Services Routes
router.post("/services", createService);
router.put("/services/:id", updateService);
router.delete("/services/:id", deleteService);

// Partners Routes
router.post("/partners", createPartner);
router.put("/partners/:id", updatePartner);
router.delete("/partners/:id", deletePartner);
router.get("/partners", getPartners);

module.exports = router;
