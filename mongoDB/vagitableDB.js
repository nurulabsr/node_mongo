const mongodbPrivateKey = require('../mongodbPrivateKey');

const vagitableFunc = async() => {
    const clientFunc = await mongodbPrivateKey.clientFunc();
    const databaseConnect = clientFunc.db(mongodbPrivateKey.edu_database);
    const collectionConnect = databaseConnect.collection(mongodbPrivateKey.edu_collection);
    return collectionConnect;
}

module.exports = vagitableFunc;

// 