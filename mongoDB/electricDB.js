const mongodbPrivateKey = require('../mongodbPrivateKey');

const mongoDb_Edu_Connection = async() => {
    // const connect = await mongodbPrivateKey.client.connect();
    // const databaseConnect = connect.db(mongodbPrivateKey.edu_database);
    const clientFunc = await mongodbPrivateKey.clientFunc(); 
    const databaseConnect = clientFunc.db(mongodbPrivateKey.edu_database);
    const collectionConnect = databaseConnect.collection(mongodbPrivateKey.edu_collection);
    return collectionConnect;
 }

//  mongoDb_Edu_Connection()
 module.exports = mongoDb_Edu_Connection;