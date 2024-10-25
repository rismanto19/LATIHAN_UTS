let mongoose = require("mongoose");
let dbURI = "mongodb://localhost:27017/latihan_uts";
appName=paw
mongoose.connect(dbURI,{
    //useNewUrparser: true
});
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (error)=>{
    console.log("Connection Error : " + error);
});
mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
});
require("./produk");