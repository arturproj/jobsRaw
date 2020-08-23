const express = require('express');
const router = express.Router();
const DataQRaw = require('./../models/jobRaw.json')
const DataKeys = [
    "developpeur",
    "developpeuse",
    "full",
    "stack",
    "mean",
    "mern",
    "lamp",
    "php",
    "typescript",
    "html", 
    "css", 
    "javascript", 
    "nodejs", 
    "expressjs", 
    "mongodb", 
    "sql",
    "reactjs",
    "angularjs",
    "js", 
    "native",
    "react-native",
    "python",
    "flask",
    "handlebars",
    "twig",
    "ejs",
    "nosql",
    "bootstrap",
    "jquery",
    "electonjs",
];

const jobSearch = (jobs) => {

    // Création de mots-clés
    keyword = DataKeys.join("|");
    console.log(':keyword:',keyword)
    // Initialiser la variable de liste finale
    const res = Array();

    jobs.map((job,key_job)=>{      
        // Lancement de mots clés  
        reg = new RegExp(keyword,"gi")

        // Résultat de la recherche
        var value = ( job["description"].match(reg) === null ? 
            job["tags"].join(" ").match(reg)          
            :job["description"].match(reg)
        );

        
        if( value !== null && value.length > 0  ){
            tun = Array();
            value = value.map(function(ele,i) {
                reg = new RegExp(ele,"gi")
                let red = value.join(" ").match(reg).length;
                tun.push({tech : ele.toLowerCase(), found : red})
                return ( ele.toLowerCase() );
            })
            console.log(
                value
            )
            
            job['keywords'] = Array.from(new Set(value));
            
            tun.map((ele,i) =>{
                if ( 
                        job['keywords'].includes( ele.tech ) === true
                    ){
                        job['keywords'][job['keywords'].indexOf( ele.tech )] = ele
                    }
            })
            

            res.push(
                job
            )
        }               
        
    })
    
    return res;
}

router.use('/', (req, res) => {
    console.log(':GET:',req.url)
    const results = jobSearch(DataQRaw);
    // res.json({        
    //     results
    // })
    res.render('home', {
       title : "JobRow",
       jobs : results
    })
    
});

module.exports = router;
