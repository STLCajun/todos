const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((todo) => {
// 	console.log(todo);
// });

Todo.findByIdAndRemove('58c4e61c2f0d680883ebe824').then((todo) => {
    console.log(todo);
});

// Todo.findOneAndRemove({_id: '58c4e61c2f0d680883ebe824'}).then((result) => {
//
// });

