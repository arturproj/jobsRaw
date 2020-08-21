const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobsRaw = new Schema({
    _id: mongoose.isValidObjectId,
    title: String,
    tags: Array,
    contract: String,
    duration: String,
    description: String,
    publishedDate: Object,
    salary: String,
    city: String,
    company: String,
    country: String,
    source: String,
    link: String,
    extras: Object,
});

router.use('/', (req, res) => {
    console.log(':GET:',req.url)
    res.json([{"title":"Stage community manager h/f paris","tags":["Reseaux sociaux","web","photoshop","wordpress"],"contract":"internship","duration":null,"description":"STAGE WEB COMMUNITY MANAGEMENT\nStage en télétravail essentiellement, durée 1-2 mois\nEn lien avec une équipe jeune, sympa et bilingue Anglais-Francais\n\nPROFIL\nÉtudiant(e) en communication ou de formation digitale\nPassionné de véhicules luxueux et rares \nBonne connaissance des médias et des réseaux sociaux\nCréatif, plein d'idées, et autonome\nConnaissance de wordpress et photoshop serait un plus\n\nMISSION:\nDévelopper notre présence sur le web\nAnimer nos pages sur les différentes plateformes\nGestion des campagnes de communication commerciales\nCréation de contenus\n\nAVANTAGES\nParticipation possible aux shootings photos\nTickets restaurants\nPrimes\nTravail à distance\nHoraires flexibles\nPerspective d'évolution vers CDD ou CDI\n\nVous êtes intéressé(e) par cette opportunité de stage, merci de postuler rapidement depuis cette annonce","publishedDate":{"$$date":1591826400000},"salary":null,"city":"Paris","company":"LSPA","country":"france","source":"https://www.aidostage.com","link":"/stage/offre-stage-community-manager-92411.html","extras":{"industry":"Communication - Publicité - Journalisme","isRemoteAvailable":true},"_id":"00M4SQO1HHfTGRwa"},JobsRaw])
    
});

module.exports = router;
