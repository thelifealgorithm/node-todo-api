const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("TodoApp");

  // Delete Many
  db.collection("Users").deleteMany({ name: "Vitor Carvalho" });
  db.collection("Users").deleteOne({ _id: 123 });

  /* 
  db
    .collection("Todos")
    .findOneAndDelete({ text: "Eat lunch" })
    .then(result => {
      console.log(result);
    });
 */
  /* 
  // Delete One
  db
    .collection("Todos")
    .deleteOne({ text: "Eat lunch" })
    .then(result => {
      console.log(result);
    });
 */
  /*   
  // Delete Many
  db
    .collection("Todos")
    .deleteMany({ text: "Eat lunch" })
    .then(result => {
      console.log(result);
    });
 */
 
  client.close();
});
