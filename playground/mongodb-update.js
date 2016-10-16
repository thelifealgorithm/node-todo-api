const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("TodoApp");

  db
    .collection("Users")
    .findOneAndUpdate(
      {
        _id: new ObjectID("5a92963044138e24f54dbfbb")
      },
      {
        $set: {
          name: "Vitor Carvalho",
          location: "Unknown"
        },
        $inc: {
          age: 1
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });

  /* 
  db
    .collection("Todos")
    .findOneAndUpdate(
      {
        _id: new ObjectID("5a92963044138e24f54dbfba")
      },
      {
        $set: { completed: true }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });
 */
  client.close();
});
