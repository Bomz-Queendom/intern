const Villager = require("../models/villager");
const logger = require("../lib/logger");
const { validationResult } = require("express-validator");
//const { addLoggerAction } = require("./logAgentActionFunc");

exports.create = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      logger.error(error.array());
      return res.status(400).json({ error: error.array() });
    }
    let dataInput = req.body;
    if (req.files) {
      let imagesInput = req.files.images;
      let filesNames = [];
      let imageName = `${Date.now()}-${imagesInput.name}`;
      filesNames.push(imageName);
      imagesInput.mv(`./public/images/petitionImage/${imageName}`);
      dataInput = Object.assign(dataInput, { images: filesNames });
    }
    const id = req.params.id;
    const options = { new: true };
    let newData = await Villager.findByIdAndUpdate(
      id,
      { $push: { petitions: dataInput } },
      options
    );
    return res.status(200).json("Create petition successfuly.");
  } catch (error) {
    logger.error(error.massage);
    return res.status(400).json({ message: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    let data = await Villager.find();
    if (data.length === 0) {
      logger.error("Villagers collection is empty.");
      return res
        .status(404)
        .json({ massage: "Villagers collection is empty." });
    }
    let result = [];
    data.forEach((index) => {
      if (index.petitions.length === 0) {
        logger.error("Petitions is empty.");
        return res
          .status(404)
          .json({ massage: "Petitions collection is empty." });
      }
      index.petitions.forEach((element) => {
        result.push(element);
      });
    });
    return res.status(200).json(result);
  } catch (error) {
    logger.error(error.massage);
    return res.status(400).json({ message: error.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      logger.error(error.array());
      return res.status(400).json({ error: error.array() });
    }
    let id = req.params.id;
    let data = await Villager.find();

    if (!data) {
      logger.error(`${id} not found.`);
      return res.status(404).json(`${id} not found.`);
    }
    let result = null;

    data.forEach((element) => {
      element.petitions.forEach((index) => {
        if (index.id === id) {
          result = index;
        }
      });
    });
    if (result != null) {
      return res.status(200).json(result);
    }
    return res.status(404).json(`petition id ${id} not found.`);
  } catch (error) {
    logger.error(error.massage);
    return res.status(400).json({ message: error.message });
  }
};

exports.filterByStatus = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      logger.error(error.array());
      return res.status(400).json({ error: error.array() });
    }
    let textFilter = req.query.status;
    let data = await Villager.findOne({ "petitions.status": textFilter });
    if (!data) {
      logger.error(`${textFilter} not found.`);
      return res.status(404).json(`${textFilter} not found.`);
    }
    let result = [];
    data.petitions.forEach((element) => {
      result.push(element);
    });
    return res.status(200).json(result);
  } catch (error) {
    logger.error(error.massage);
    return res.status(400).json({ message: error.message });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      logger.error(error.array());
      return res.status(400).json({ error: error.array() });
    }
    let petitionId = req.params.id;
    let findData = await Villager.findOne({ "petitions.id": petitionId });
    let obj = null;
    findData.petitions.forEach((index) => {
      if (index.id === petitionId) {
        obj = index;
      }
    });
    
    let data = await Villager.findOneAndUpdate(
      { "petitions.id": petitionId },
      {
        $pull: {
          petitions: obj,
        },
      }
    );
    return res.status(200).json(`delete petition id ${petitionId} success.`);
  } catch (error) {
    logger.error(error.massage);
    return res.status(400).json({ message: error.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      logger.error(error.array());
      return res.status(400).json({ error: error.array() });
    }
    let text = req.body.status;
    let petitionId = req.params.id;
    let data = await Villager.findOne({ "petitions.id": petitionId }).then(
      (doc) => {
        item = doc.petitions.id(petitionId);
        item[`${Object.keys(req.body)}`] = text;
        doc.save();
      }
    );
    return res
      .status(200)
      .json(`updata petition status ${petitionId} success.`);
  } catch (error) {
    logger.error(error.massage);
    return res.status(400).json({ message: error.message });
  }
};
