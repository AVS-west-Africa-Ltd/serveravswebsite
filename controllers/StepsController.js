const StepSchema = require("../models/Steps");

// Create Step
const createStep = async (req, res) => {
  try {
    const data = req.body;
    const newStep = await StepSchema.create(data);
    res.status(201).json(newStep);
  } catch (error) {
    console.error("Error creating step:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update Step
const updateStep = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const step = await StepSchema.findByPk(id);

    if (!step) {
      return res.status(404).json({ message: "Step not found" });
    }

    const updatedStep = await step.update(data);
    res.status(200).json(updatedStep);
  } catch (error) {
    console.error("Error updating step:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete Step
const deleteStep = async (req, res) => {
  try {
    const { id } = req.params;
    const step = await StepSchema.findByPk(id);

    if (!step) {
      return res.status(404).json({ message: "Step not found" });
    }

    await step.destroy();
    res.status(200).json({ message: "Step deleted successfully" });
  } catch (error) {
    console.error("Error deleting step:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createStep, updateStep, deleteStep };
