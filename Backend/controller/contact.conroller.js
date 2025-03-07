import Contact from '../model/contact.model.js';

const contactForm = async (req, res) => {
    try {
      const response = req.body;
      await Contact.create(response);
      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };

export default contactForm;