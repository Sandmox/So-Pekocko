const Sauce = require('../models/sauces');

/*exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;
    const sauce = new Sauce({
      ...sauceObject,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    thing.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };*/

exports.createSauce = (req, res, next) => {
    //const newSauce = new Sauces (JSON.parse(req.body));
    const sauce = new Sauce (req.body);
    console.log(sauce);
    sauce.save();
    res.status(201).json({ message: "Objet enregistré !!" })


    //.catch((error) => res.status(400).json({ error }));
    /*const newSauce = JSON.parse(req.body.Sauce);
    console.log(newSauce);
    newSauce.save();
    then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch(error => res.status(500).json({error}));*/
};


/*exports.getAllSauces =(req, res, next) => {
    res.status(200).json({Message: "Tout est ok"});
};*/


 