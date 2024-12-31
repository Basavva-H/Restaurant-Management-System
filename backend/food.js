const mongoose=require('mongoose')

const food=new mongoose.Schema({
    Name:String,
    price:String,
    category:String, //Veg,NonVeg,Bevarages,Snacks,Desserts,Soups
})

module.exports = mongoose.model('Food', food);