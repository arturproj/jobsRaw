const express = require('express');
const router = express.Router();
const DataQRaw = require('./../models/jobRaw.json')

const jobSearch = (jobs,keyword) => {

    // Création de mots-clés
    keyword = keyword.toLowerCase().split(" ").join("|");
    console.log(':keyword:',keyword)
    // Initialiser la variable de liste finale
    const res = Array();

    jobs.map((job,i)=>{      
        // Lancement de mots clés  
        reg = new RegExp(keyword,"gi")

        // Résultat de la recherche
        var value = ( job["description"].match(reg) === null ? 
            ( job["tags"].join(" ").match(reg)  === null ? 
                job["title"].match(reg)
                : job["tags"].join(" ").match(reg) )            
            : job["description"].match(reg) 
        );
        if( value !== null && value.length > 0  ){
            //console.log("arr rex", value)
            job['keywords'] = value;
            res.push(
                //{ [i] : value }
                job
            )
        }               
        
    })
    return res;
}

router.use('/:keys', (req, res) => {
    console.log(':GET:',req.url, req.params.keys)
    const results = jobSearch(DataQRaw, req.params.keys);
    res.json({
        found : results.length,
        results
    })
    //res.json("OK")
    
});

module.exports = router;
