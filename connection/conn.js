const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rohit2821kr:Rohit28kr@cluster0.jutqfdq.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("connected");
})