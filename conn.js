const MongoClient = require('mongodb').MongoClient;

var db;

const connectDb = (callback) => {
  if (db) return callback();
  MongoClient.connect(
    'mongodb+srv://generalUser:g5jE6R8JfkcAs4er5TC@cluster0.yxdzl.mongodb.net/contentBasedFiltering?retryWrites=true&w=majority',
    { ops },
    (err, database) => {
      if (err) return console.log(err);
      db = database.db('dbName');
      console.log('Database Connected');
      callback();
    }
  );
};

const getDb = (collectionToGet) => {
  return db.collection(collectionToGet);
};

module.exports = {
  connectDb,
  getDb,
};
