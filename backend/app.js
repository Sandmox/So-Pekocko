const express = require('express');

const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Alex18:Mongalex18!@cluster0.m4ibg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res) =>{
res.json({Message: "Votre requête a bien été reçue !"});
});

module.exports = app;