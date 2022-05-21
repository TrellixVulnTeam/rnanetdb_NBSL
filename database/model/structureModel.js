const db = require('../connection');
const { promisify } = require('util');
db.run = promisify(db.run);
db.get = promisify(db.get);
db.all = promisify(db.all);

/**
 * @description Get all structures
 * @returns {Promise<Array<Object>>}
 */
const getStructures = async () => {
  try {
    const structures = await db.all('SELECT * FROM structure');
    return structures;
  } catch (error) {
    console.log(error);
    return error;
  }
};

/**
 * @description Get all structures by resolution
 * @param {*} resolution
 * @returns {Promise<Array<Object>>}
 */
const getStructuresByResolution = async (resolution) => {
  try {
    const structures = await db.all(
      'SELECT * FROM structure WHERE resolution=?',
      [resolution]
    );
    return structures;
  } catch (error) {
    console.log(error);
    return error;
  }
};

/**
 * @description Get all structures those resolution is equal to
 * @param {*} resolution
 * @returns
 */
const getStructuresWithResolutionEqualTo = async (resolution) => {
  try {
    const structures = await db.all(
      'SELECT * FROM structure WHERE resolution=?',
      [resolution]
    );
    return structures;
  } catch (error) {
    console.log(error);
    return error;
  }
};

/**
 * @description Get all structures those resolution is greater than
 * @param {*} resolution
 * @returns {Promise<Array<Object>>}
 */
const getStructuresWithResolutionGreaterThan = async (min) => {
  try {
    const structures = await db.run(
      'SELECT * FROM structure WHERE resolution>=?',
      [min]
    );
    return structures;
  } catch (error) {
    console.log(error);
    return error;
  }
};

/**
 * @description Get all structures those resolution is less than
 * @param {*} resolution
 * @returns {Promise<Array<Object>>}
 */
const getStructuresWithResolutionLessThan = async (max) => {
  try {
    const structures = await db.all(
      'SELECT * FROM structure WHERE resolution<=?',
      [max]
    );
    return structures;
  } catch (error) {
    console.log(error);
    return error;
  }
}

/**
 * @description Get all structures those resolution is greater than or equal to
 * @param {*} resolution_greater_than
 * @param {*} resolution_less_than
 * @returns {Promise<Array<Object>>}
 */
const getStructuresWithResolutionGreaterThanAndLessThan = async (min, max) => {
  try {
    const structures = await db.all('SELECT * FROM structure WHERE resolution>= ? AND resolution<=?',[min, max]);
    return structures;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const getStructuresMethods = async () => {
  try {
    const structures = await db.all('SELECT exp_method FROM structure');
    return structures;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const getStructuresWithReleaseDateLessThan = async (max) => {
  try {
    const structures = await db.all('SELECT * FROM structure WHERE date<=?',[max] );
    return structures;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const getStructuresWithReleaseDateGreaterThan = async (min) => {
  try {
    const structures = await db.all('SELECT * FROM structure WHERE date>=?',[min]);
    return structures;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const getStructuresWithReleaseDateGreaterThanAndLessThan = async (min, max) => {
  try {
    const structures = await db.all('SELECT * FROM structure WHERE date>= ? AND date<=?',[min, max]);
    return structures;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const getStructuresByMethod = async (method) => {
  try {
    const structures = await db.all('SELECT * FROM structure WHERE exp_method=?',[method]);
    return structures;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = {
  getStructures,
  getStructuresByResolution,
  getStructuresWithResolutionGreaterThan,
  getStructuresWithResolutionLessThan,
  getStructuresWithResolutionEqualTo,
  getStructuresWithResolutionGreaterThanAndLessThan,
  getStructuresMethods,
  getStructuresWithReleaseDateLessThan,
  getStructuresWithReleaseDateGreaterThan,
  getStructuresWithReleaseDateGreaterThanAndLessThan,
  getStructuresByMethod
};
