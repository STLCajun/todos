const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('DB Connect error:', err);
    }

    console.log('Connected to MongoDB Server');

    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    db.collection('Users').find({name: 'Luther Lowry'}).toArray().then((users) => {
        console.log('Users');
        console.log(JSON.stringify(users, undefined, 2));
    }, (err) => {
        console.log('No users found', err);
    });

    db.close();

});