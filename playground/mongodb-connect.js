//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('DB Connect error:', err);
    }

    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert todo'.err);
    //     }
    //
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    //
    // });

    // db.collection('Users').insertOne({
    //     name: 'Luther Lowry',
    //     age: 40,
    //     location: 'St. Louis, MO'
    // }, (err,res) => {
    //     if (err) {
    //         return console.log('Unable to insert record', err);
    //     }
    //
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    //     console.log(res.ops[0]._id.getTimestamp());
    // });

    db.close();

});