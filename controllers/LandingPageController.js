// const { LandingSchema, StepSchema, ServicesSchema } = require("../models");
const LandingSchema = require("../models/LandingPage");
const StepSchema = require("../models/Steps");
const ServicesSchema = require("../models/Services");
const multer = require("multer");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage: storage });

const getLandingPageWithDetails = async (req, res) => {
  try {
    const { id } = req.params; // Landing page ID
     const landingPage = await LandingSchema.findOne({
      where: { id },
      include: [
        {
          model: ServicesSchema,
          as: "services", // Fetch services related to this landing page
          include: [
            {
              model: StepSchema,
              as: "steps", // Include steps related to each service
            },
          ],
        },
      ],
    });

    if (!landingPage) {
      return res.status(404).json({ message: "Landing Page not found" });
    }

    return res.status(200).json(landingPage);
  } catch (error) {
    console.error("Error fetching landing page:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllLandingPageWithDetails = async (req, res) => {
    try {
        const landingPages = await LandingSchema.findAll({
            include: [
              {
                model: ServicesSchema,
                as: "services", // Include services related to the landing page
                include: [
                  {
                    model: StepSchema,
                    as: "steps", // Include steps related to each service
                  },
                ],
              },
            ],
          });
      
  
      if (landingPages.length === 0) {
        return res.status(404).json({ message: "No landing pages found" });
      }
  
      return res.status(200).json({
        status: "success",
        data: landingPages,
      });
    } catch (error) {
      console.error("Error fetching landing pages:", error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };
  

// Create Landing Page
const createLandingPage = async (req, res) => {
    try {
      const data = req.body;
      const newLandingPage = await LandingSchema.create(data);
      res.status(201).json(newLandingPage);
    } catch (error) {
      console.error("Error creating landing page:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
  // Update Landing Page
  const updateLandingPage = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const landingPage = await LandingSchema.findByPk(id);
  
      if (!landingPage) {
        return res.status(404).json({ message: "Landing Page not found" });
      }
  
      const updatedLandingPage = await landingPage.update(data);
      res.status(200).json(updatedLandingPage);
    } catch (error) {
      console.error("Error updating landing page:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
  // Delete Landing Page
  const deleteLandingPage = async (req, res) => {
    try {
      const { id } = req.params;
      const landingPage = await LandingSchema.findByPk(id);
  
      if (!landingPage) {
        return res.status(404).json({ message: "Landing Page not found" });
      }
  
      await landingPage.destroy();
      res.status(200).json({ message: "Landing Page deleted successfully" });
    } catch (error) {
      console.error("Error deleting landing page:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

module.exports = { getLandingPageWithDetails, createLandingPage, updateLandingPage, deleteLandingPage, getAllLandingPageWithDetails };
