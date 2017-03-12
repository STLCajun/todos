const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
	const {Todo} = require('./../server/models/todo');

var id = '58bb4c92f9ae8e49470 4ad30';

if (!ObjectId.isValid(id)) {

	console.log('ID not valid');

}
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });


// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
	if (!todo) {
		return console.log('Id Not found');
	}
	console.log('Todo', todo);
}).catch((e) => console.log(e));

