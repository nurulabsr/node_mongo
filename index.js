const express = require('express');
const app = express();
app.use(express.json());
const mongodb = require('mongodb');
const eduDB = require('./mongoDB/eduDB');
const shopDB = require('./mongoDB/clothDB');
const libraryDB = require('./mongoDB/libraryDB');
const eclectricDB = require('./mongoDB/electricDB');
const vagitableFunc = require('./mongoDB/vagitableDB');
const fishFunc = require('./mongoDB/fishDB');
const meatFunc = require('./mongoDB/meatDB');
const animal_func = require('./mongoDB/animalDB');
const admin_Func = require('./mongoDB/adminDB');

// ################################ Get Data ####################################

app.get("/edu_api", async(req, res)=> {
    const eduDbConnection = await eduDB();
    const data = await eduDbConnection.find({}).toArray();
     console.log(data);
     res.send(data)
})


app.get("/cloth_api", async(req, res)=> {
    const shopDBConnection  = await shopDB();
    const data = await shopDBConnection.find({}).toArray();
    res.send(data);

})


app.get("/library_api", async(req, res)=> {
    const libraryDBConnection = await libraryDB();
    const data = await libraryDBConnection.find({}).toArray();
    res.send(data);
})



app.get("/electric_item_api", async(req, res)=> {
   const electricDBConnection = await eclectricDB();
   const data = await electricDBConnection.find({}).toArray();
   res.send(data);
   

})


app.get("/vagitable_api", async(req, res)=> {
    const vagitableDBConnection = await vagitableFunc();
    const data = await vagitableDBConnection.find({}).toArray();
    res.send(data)
})

app.get("/fish_api", async(req, res)=> {
    const fishDBConnection = await fishFunc();
    const data = fishDBConnection.find({}).toArray();
    res.send(data);
})


app.get("/meat_api", async(req, res)=> {
   const meatDBConnection = await meatFunc();
   const data = meatDBConnection.find({}).toArray();
   res.send(data); 
})

app.get("/animal_api", async(req, res)=> {
const animalDBConnection = await animal_func();
const data = animalDBConnection.find({}).toArray();
res.send(data);

})


app.get("/admins__api", async(req, res)=> {
 const adminDB_Connection = await admin_Func();
 const data_admin = await adminDB_Connection.find({}).toArray();
 res.send(data_admin); 

})

// ############################# post data ###############################

app.post("/edu_data ", async(req, res)=> {
  const eduDbConnection = await eduDB();
  const data = await eduDbConnection.insert(req.body);
  res.send(data);

})


app.post("/admin__data", async(req, res)=> {
    const adminDB_Connection = await admin_Func();
    const _data_admin = await adminDB_Connection.insertOne(req.body);
    res.send(_data_admin);
})



// put data 

app.put("/", async(req, res)=> {
    const eduDbConnection = await eduDB();
    const dataUpdate = eduDbConnection.updateOne(
      {name: req.body.name},
      {$set:req.body }
    )

    res.send(dataUpdate);
})


app.put(" ", (req, res) => {

})


app.delete("/:id", async(req, res)=> {
const eduDbConnection = await eduDB();
const data = eduDbConnection.deleteOne({id: new mongodb(req.params.body)})
res.send(data);
})




app.listen(5000, () => {
    console.log(`http://localhost:${5000}`)
})
