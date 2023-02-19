const mongodbPrivateKey = require('../mongodbPrivateKey');

const mongoDb_Edu_Connection = async() => {
    const clientFunc = await mongodbPrivateKey.clientFunc();
    const databaseConnect = clientFunc.db(mongodbPrivateKey.edu_database);
    const collectionConnect = databaseConnect.collection(mongodbPrivateKey.edu_collection);
    // const data = await collectionConnect.find({}).toArray();
    // console.log(data);
    return collectionConnect;
 }

//  mongoDb_Edu_Connection()
 module.exports = mongoDb_Edu_Connection;