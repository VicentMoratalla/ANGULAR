const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/', auth, (req, res)=>{
  res.send(req.query);
});

router.post('/', auth, (req, res)=>{
  const pagehistory = {
    checkpoint: req.body.checkpoint
  };

  res.send(pagehistory);
});

module.exports = router;