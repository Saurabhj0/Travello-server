let mongodb = require("mongodb");

let getregister = require("express").Router().post("/",(req,res)=>{

    mongodb.MongoClient.connect("mongodb+srv://Admin:Admin@cluster0.2siob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useUnifiedTopology: true },(err,client)=>{

        if(err) throw err;
        
        else{
            let db=client.db("travello");
            db.collection("userdetail").insertOne({"Email":req.body.Email,
                                                "Name":req.body.Name,
                                                "Password":req.body.Password
                                                },(err,result)=>{
                if(err) throw err;
                else{
                    console.log(" responce send")
                    res.send({result:"success"});
                }
            });
        }
    });
});

module.exports = getregister;