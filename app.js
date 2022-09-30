//require mongoose 
const express = require('express');
const { FindCursor } = require('mongodb');
const mongoose = require('mongoose'); 
const { stringify } = require('querystring');

//open connection 
mongoose.connect("mongodb://localhost:27017/fruitsDB");

//structure or fruit Schema of data that will be saved to DB
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Masa enter a name."], 
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

//structure or person Schema of data that will be saved to DB
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFuite: fruitSchema
});

//use schema to create a mongoose model;
const Fruit = mongoose.model("Fruit", fruitSchema); 
const Person = mongoose.model("Person", personSchema); 

//create a new doc
const mango = new Fruit({
    name: "mango",
    rating: 7,
    review: "It's okay"
});
mango.save();


const person = new Person({
    name: "Nkrumah",
    age: 37,
    favouriteFuite: mango
});
person.save();



//insert single doc of data in db; 
//fruit.save();



Fruit.find((err,fruits) => {
    
        if(err){
            console.log(err);
        } else{
            //close the connection
            mongoose.connection.close();
            fruits.forEach((fruit) => {
            console.log(fruit.name);
            //when I kept the close connection down here, it worked but I got warnings; 
            });
        }
});



/*
//Deleting many records; 
Person.deleteMany({name:"Oppong"},(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("Sucessfully Deleted!");
    }
});
*/

/*
//Deleting a record;
Fruit.deleteOne({name:"Carrots"},(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("Successfully deleted!");
    }
});
*/

/*
//Updating a record; 
Fruit.updateOne({_id: "63371686f1f49bcbeba7458b"}, {name: "Carrots"},(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("This has been successfully update");
    }
});
*/









/*
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
*/

//inserting many in the db; 
/*
Fruit.insertMany([oranges,mango,carrots], (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("sucess!!!");
    }
});
*/