const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// meheraz
// wGanYkl7J6379u6P

app.use(cors());
app.use(express.json())


const uri = "mongodb+srv://meheraz:wGanYkl7J6379u6P@cluster0.bgw1n6h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection

    const usersCollection = client.db("usersDB").collection("users");
    // const usersCollection = database.collection("users");


    app.get('/users', async(req, res) => {
      const cursor = usersCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    } )

    app.post('/users', async(req, res) => {
      const user = req.body;
      console.log('new user', user);
      const result = await usersCollection.insertOne(user)
      res.send(result)
    })

    app.delete('/users/:id', async(req, res) => {
      const id = req.params.id
      console.log('please delete from database', id)
      const query = { _id: new ObjectId(id) }
      const result = await usersCollection.deleteOne(query)
      res.send(result)
    })

    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Simple crud is running')
})

app.listen(port, (req, res) => {
    console.log(`Simple crud is running on ${port}`)
})



// try{

// }
// catch{

// }
// finally{

// }