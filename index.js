// Let's connect to mongoDb and do some cool stuffs

// Import our library (just the tools we need)
import { MongoClient } from "mongodb";

// Import our credentials to connect
import { uri } from "./secrets.js";

// Connect to our mongo server
const client = new MongoClient(uri)

// Create a reference to our database
const db = client.db("mongo0");

// Let's add a document to our collection...

// Let's create a piece of furniture

const stool = {
    name: "Ergo Stool",
    brand: "Autonmous",
    color: "Evergreen",
    price: 169.00,
    warranty: "2 years"
}

const chair = {
    name: "Ergo chair",
    brand: "Autonmous",
    color: "grey",
    price: 369.00,
    warranty: "3 years"
}

async function addOneItem(item) {
   await db.collection("items").insertOne(item)
   console.log("item was added")
}

addOneItem(stool)
addOneItem(chair)
