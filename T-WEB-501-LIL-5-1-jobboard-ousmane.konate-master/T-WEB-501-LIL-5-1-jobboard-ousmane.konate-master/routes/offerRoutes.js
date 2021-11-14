const express = require('express');
const offerController = require('../controllers/offerController');
const router = express.Router();

router.get('/', offerController.offer_index);
router.post('/', offerController.offer_create_post);
router.get('/create', offerController.offer_create_get);
router.get('/:id', offerController.offer_details);
router.delete('/:id', offerController.offer_delete);
router.put('/:id', offerController.offer_update);


module.exports = router; 