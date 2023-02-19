const mongodbPrivateKey = require('../mongodbPrivateKey');


const admin_Func =async () => {
    const clientFunc = await mongodbPrivateKey.clientFunc();
    const databaseConnect = clientFunc.db(mongodbPrivateKey.edu_database);
    const collectionConnect = databaseConnect.collection(mongodbPrivateKey.edu_collection);
    return collectionConnect;
}
module.exports = admin_Func;

