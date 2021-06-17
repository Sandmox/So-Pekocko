const Sauces = require('../models/sauces');
const bodyParser = require('body-parser');

exports.createSauce = (req, res, next) => {
    const newSauce = JSON.parse(req.body.sauce);
    newSauce.save();
};


/*exports.getAllSauces =(req, res, next) => {
    res.status(200).json({Message: "Tout est ok"});
};*/


 