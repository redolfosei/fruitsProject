//require mongoose 
const mongoose = require('mongoose'); 

//connection 
mongoose.connect("mongodb://localhost:27017/fruitsDB");

//structure or Schema of data that will be saved to DB
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

//use schema to create a mongoose model;
const Fruit = mongoose.model("Fruit", fruitSchema); 
const Person = mongoose.model("Person", personSchema); 

//create a new dec
const fruit = new Fruit({
    name: "Bananas",
    rating: 8,
    review: "Taste good, healthy"
});  

const person = new Person({
    name: "Oppong",
    age: 37
});

//insert single doc of data in db; 
fruit.save();
person.save()

const oranges = new Fruit({
    name: "Orange",
    rating: 7,
    review: "It's okay"
});
const mango = new Fruit({
    name: "mango",
    rating: 7,
    review: "It's okay"
});
const carrots = new Fruit({
    name: "Orange",
    rating: 7,
    review: "It's okay"
});

//inserting many in the db; 
Fruit.insertMany([oranges,mango,carrots], (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("sucess!!!");
    }
});



