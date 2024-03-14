const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MONGO_URL = "mongodb://127.0.0.1:27017/test"

main().then(() =>{
    console.log("Connected to MongoDB")
}).catch((err) =>{
    console.log(err)
});
async function main(){
    await mongoose.connect(MONGO_URL)
}
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000 , ()=>{
    console.log('Server is running on port 3000');
})

// hello ashu 