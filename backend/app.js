const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const Sauce = require('./models/sauces');
const User = require('./models/user');

mongoose.connect('mongodb+srv://Alex18:Mongalex18!@cluster0.m4ibg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.post('/api/auth/signup', (req, res, next) =>{
    const user = new User({
        ...req.body
    });
    user.save()
    .then(() => res.status(201).json({ message: 'Utilisateur enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

app.post('/api/auth/login', (req, res, next) =>{
    res.status(201).json({Message : "Tout est ok!"});
});

app.use('/api/sauces', (req, res, next) =>{
    res.status(200).json([]);
});

app.use((req, res) =>{
res.json({Message: "Votre requête a bien été reçue !"});
});

module.exports = app;