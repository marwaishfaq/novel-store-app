import express from 'express';
import contactForm from '../controller/contact.conroller.js';

const router = express.Router();

router.route('/contact').post(contactForm);

export default router;