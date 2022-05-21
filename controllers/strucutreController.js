const {
  getStructuresByResolution,
  getStructuresWithResolutionLessThan,
  getStructuresWithResolutionGreaterThan,
  getStructuresWithResolutionGreaterThanAndLessThan,
  getStructuresMethods,
} = require('../database/model/structureModel');

const findResolutions = async (req, res, next) => {
  let structuresByResolution = [];
  let allStructures = [];

  try {
    const {
      min_resolution, max_resolution,
      min_release_date, max_release_date,
      // min_length,max_length,
      // organism,
      method
    } = req.query;

    if (min_resolution && !max_resolution) {
      structuresByResolution = await getStructuresWithResolutionGreaterThan(min_resolution);
    } else if (!min_resolution && max_resolution) {
      structuresByResolution = await getStructuresWithResolutionLessThan(max_resolution);
    } else if (min_resolution && max_resolution) {
      structuresByResolution = await getStructuresWithResolutionGreaterThanAndLessThan(min_resolution, max_resolution);
    }

    if (method) {
      allStructures = structuresByResolution.filter(structure => {
        return structure.exp_method.includes(method);
      });
    }

    if(min_release_date && !max_release_date){
      allStructures = allStructures.filter(structure => {
        const date = new Date(structure.date);
        const min_date = new Date(min_release_date);
        return date >= min_date;
      });
    } else if(!min_release_date && max_release_date){
      allStructures = allStructures.filter(structure => {
        const date = new Date(structure.date);
        const max_date = new Date(max_release_date);
        return date <= max_date;
      });
    } else if(min_release_date && max_release_date){
      allStructures = allStructures.filter(structure => {
        const date = new Date(structure.date);
        const min_date = new Date(min_release_date);
        const max_date = new Date(max_release_date);
        return date >= min_date && date <= max_date;
      });
    }

    if(allStructures.length === 0){
      allStructures = structuresByResolution;
    }

    return res.status(200).json(allStructures);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  next();
}

/**
 * @description Get all structures by resolution
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const findStructuresByResolution = async (req, res, next) => {
  try {
    const { resolutionId } = req.params;
    const structures = await getStructuresByResolution(resolutionId);
    return res.status(200).json(structures);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  next();
};

const findStructuresMethods = async (_req, res, next) => {
  try {
    const structures = await getStructuresMethods();
    return res.status(200).json(structures);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  next();
}

module.exports = {
  findStructuresByResolution,
  findResolutions,
  findStructuresMethods,
};
