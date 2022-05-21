const router = require('express').Router();
const {
  findStructuresByResolution,
  findResolutions,
  findStructuresMethods,
} = require('../controllers/strucutreController');

router.get('/', findResolutions);
router.get('/:resolutionId', findStructuresByResolution);
router.get('/methods/all', findStructuresMethods);

module.exports = router;
