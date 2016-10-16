const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("TodoApp");

  db
    .collection("Users")
    .find({ name: "Vitor Carvalho" })
    .toArray()
    .then(
      docs => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log("Unable to fetch todos ", err);
      }
    );

  /* 
  db
    .collection("Todos")
    .find()
    .count()
    .then(
      count => {
        console.log("Todos count: " + count);
      },
      err => {
        console.log("Unable to count todos ", err);
      }
    );
 */
  /* 
  db
    .collection("Todos")
    .find({ _id: new ObjectID("5a9197d22f7e1412d6177a39") })
    .toArray()
    .then(
      docs => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log("Unable to fetch todos ", err);
      }
    );
 */
  client.close();
});
