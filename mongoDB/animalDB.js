const mongodbPrivateKey = require('../mongodbPrivateKey');


const animal_func = async() => {
    const clientFunc = await mongodbPrivateKey.clientFunc();
    const databaseConnect = clientFunc.db(mongodbPrivateKey.edu_database);
    const collectionConnect = databaseConnect.collection(mongodbPrivateKey.edu_collection);
    return collectionConnect;
}
module.exports = animal_func;