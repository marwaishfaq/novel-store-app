import { MongoClient } from 'mongodb';
import fs from 'fs';

const url = 'mongodb+srv://session_user:session_user12345@cluster1.sfua5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1'; // Replace with your MongoDB URL
const dbName = 'test'; // Replace with your database name

// Define the collections and their corresponding JSON files
const collections = [
  {
    collectionName: 'books',
    jsonFile: 'data/list.json',
    jsonFile: 'data/Book.json'
  } 
];

async function seedDatabase() {
  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);

    // Loop through each collection and seed the data
    for (const collection of collections) {
      const jsonData = fs.readFileSync(collection.jsonFile, 'utf8');
      const data = JSON.parse(jsonData);

      const result = await db.collection(collection.collectionName).insertMany(data);
      console.log(`${collection.collectionName} inserted into MongoDB`);
    }

    client.close();
  } catch (err) {
    console.error(err);
  }
}

seedDatabase();