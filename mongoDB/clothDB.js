const mongodbPrivateKey = require('../mongodbPrivateKey');
const mongoDb_Shop_Connection = async() => {
   // const connect = await mongodbPrivateKey.client.connect();
   const clientFunc = await mongodbPrivateKey.clientFunc();
   const databaseConnect = clientFunc.db(mongodbPrivateKey.shop_database);
   const collectionConnect = databaseConnect.collection(mongodbPrivateKey.shop_collection);
   return collectionConnect;
}

module.exports = mongoDb_Shop_Connection;
