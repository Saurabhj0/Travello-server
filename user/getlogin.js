let mongodb = require("mongodb");

let search = require("express").Router().post("/",(req,res)=>{

    mongodb.MongoClient.connect("mongodb+srv://Admin:Admin@cluster0.2siob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useUnifiedTopology: true },(err,client)=>{

        if(err) throw err;
        
        else{
            let db=client.db("travello");
            db.collection("userdetail").find( { Email: req.body.Email, Password : req.body.Password}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length==0)
                    {
                        res.send({result:"User not found"})
                    }
                    else{
                    res.send({result : array});
                    }
                }
            });
        }
    });
});

module.exports = search;