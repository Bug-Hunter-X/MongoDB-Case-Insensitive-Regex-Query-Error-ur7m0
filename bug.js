```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('myDatabase');
    const collection = database.collection('myCollection');

    // Incorrect query causing the error
    const query = { field: { $regex: /pattern/i } }; // Case-insensitive regex
    const result = await collection.findOne(query);
    console.log(result);
  }
  finally {
    await client.close();
  }
}
run().catch(console.dir);
```