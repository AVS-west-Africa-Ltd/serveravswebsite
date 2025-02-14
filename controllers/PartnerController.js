const PartnerSchema = require("../models/Partner");

// Create Step
const createPartner = async (req, res) => {
  try {
    const data = req.body;
    const newStep = await PartnerSchema.create(data);
    res.status(201).json(newStep);
  } catch (error) {
    console.error("Error creating step:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getPartners = async (req, res) => {
  try {
    const Partners = await PartnerSchema.findAll({});

    if (Partners.length === 0) {
      return res.status(404).json({ message: "No landing pages found" });
    }

    return res.status(200).json(Partners);
  } catch (error) {
    console.error("Error creating step:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update Step
const updatePartner = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const step = await PartnerSchema.findByPk(id);

    if (!step) {
      return res.status(404).json({ message: "partner not found" });
    }

    const updatedStep = await step.update(data);
    res.status(200).json(updatedStep);
  } catch (error) {
    console.error("Error updating step:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete Step
const deletePartner = async (req, res) => {
  try {
    const { id } = req.params;
    const step = await PartnerSchema.findByPk(id);

    if (!step) {
      return res.status(404).json({ message: "partner not found" });
    }

    await step.destroy();
    res.status(200).json({ message: "partner deleted successfully" });
  } catch (error) {
    console.error("Error deleting step:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createPartner, updatePartner, deletePartner, getPartners };
