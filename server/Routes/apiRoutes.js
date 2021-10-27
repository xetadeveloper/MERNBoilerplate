import express from 'express';

const router = express.Router();

// ============ Normal routes =============
router.get('/test', (req, res) => {
  console.log('Test route called');
  res.status(200).send('Working');
});

export default router;
