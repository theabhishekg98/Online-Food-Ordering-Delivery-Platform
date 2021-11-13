const router = require("express").Router();
var kafka = require('../kafka/client');


router.get("/restaurants",async (req,res) => {
  
  const request = {
    query: req.query, params: req.params, body: req.body,
  }
  
  kafka.make_request('ubereats.get.allrestaurants',request, function(error,results){
    if (error){
        res.status(400).send(error)
    }else{
        res.status(200).send(results);
    }
  });
});

//retrieve a restaurants
router.get("/restaurants/:id",async (req,res) => {

  const request = {
    query: req.query, params: req.params, body: req.body,
  }
 
  kafka.make_request('ubereats.get.restaurant',request, function(error,results){
    if (error){
        res.status(400).send(error)
    }else{
        res.status(200).send(results);
    }
  });
});

module.exports = router;
