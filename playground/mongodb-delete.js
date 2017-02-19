const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('DB Connect error:', err);
    }

    console.log('Connected to MongoDB Server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((res) => {
    //     console.log(res);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Something to do'}).then((res) => {
    //     console.log(res);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res);
    // });

    //db.close();
});