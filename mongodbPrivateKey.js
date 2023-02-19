const {MongoClient} = require('mongodb');
const url = "mongodb://0.0.0.0:27017";
// const client = new MongoClient(url);

async function clientFunc(){
    const client = new MongoClient(url);
    return client;
}

const shop_database = "shop";
const shop_collection = "shop-collection";
const edu_database = "edu";
const edu_collection ="CSE";
const electric_database = " ";
const electric_collection = " ";
const library_database = " ";
const library_collection = " ";
module.exports = {client, shop_database, shop_collection, edu_database, edu_collection, clientFunc,
}






