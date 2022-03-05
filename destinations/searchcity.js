let mongodb = require("mongodb");

let searchcity = require("express").Router().post("/",(req,res)=>{

    mongodb.MongoClient.connect("mongodb+srv://Admin:Admin@cluster0.2siob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useUnifiedTopology: true },(err,client)=>{

        if(err) throw err;
        
        else{
            let db=client.db("travello");
            db.collection("City").find( { name: req.body.cityname }).toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length==0)
                    {
                        res.send({result:"not found"})
                    }
                    else{
                        
                    res.send({result : array});
                    }
                }
            });
        }
    });
});

module.exports = searchcity;