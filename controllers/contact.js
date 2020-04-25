const ContactMessage = require('../models/contactMessage');

exports.contactController = (req, res) => {
  console.log('Called!')

  const { firstName, lastName, email, message } = req.body;


  const contactMessage = new ContactMessage({
    firstName,
    lastName,
    email,
    message
  })

  contactMessage.save()
  .then(result => {
    res.status(200).json({
      message : "Message  sent!",
    })
  })
  .catch(err => {
    res.status(400).json({
      error : "Error in sending message!"
    })
  }) 
}