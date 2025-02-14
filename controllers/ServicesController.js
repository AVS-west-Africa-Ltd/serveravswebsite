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


// Create Service
const createService = async (req, res) => {
  try {
    const data = req.body;
    const newService = await ServicesSchema.create(data);
    res.status(201).json(newService);
  } catch (error) {
    console.error("Error creating service:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update Service
const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const service = await ServicesSchema.findByPk(id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    const updatedService = await service.update(data);
    res.status(200).json(updatedService);
  } catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete Service
const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await ServicesSchema.findByPk(id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    await service.destroy();
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createService, updateService, deleteService };
