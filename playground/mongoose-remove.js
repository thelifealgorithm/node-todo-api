const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

/* 
Todo.remove({}).then(result => {
   console.log(result);
});
 */
/* 
Todo.findOneAndRemove({ _id: '5a9bf53b6bb672629ec4b030' }).then(todo => {
   console.log(todo);
});
 */
Todo.findByIdAndRemove('5a9bf53b6bb672629ec4b030').then(todo => {
   console.log(todo);
});
