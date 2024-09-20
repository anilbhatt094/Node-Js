
const express = require('express');
require('./config');
const Product = require ('./product')
const app = express();
app.use(express.json());
app.post ("/create", async (req, resp)=>{
    let data = Product (req.body);
    let result = await data.save();
    console.log(result)
    resp.send(result);

})
app.listen(7000);















// const mongoose = require('mongoose');
// const main = async()=>{
//     await mongoose.connect("mongodb+srv://anilbhatt094:Bhattanil%401995@cluster0.1odpqds.mongodb.net/e-com?retryWrites=true&w=majority");
//     const ProductScema = new mongoose.Schema({
//     name:String,
//     price : Number
// })
// const porductModel = mongoose.model('ecoms', ProductScema)
// let data = new porductModel({name:'m8', price:1000});
// let result = await data.save();
// console.log(result)
// }
// main();


//Crud


//Save

// const mongoose = require('mongoose');
// const ProductScema = new mongoose.Schema({
//     name:String,
//     price : Number,
//     brand : String,
//     category:String
// });
// const savInDB = async()=>{
//     await mongoose.connect("mongodb+srv://anilbhatt094:Bhattanil%401995@cluster0.1odpqds.mongodb.net/e-com?retryWrites=true&w=majority");
    
// const porductModel = mongoose.model('ecoms', ProductScema)
// let data = new porductModel({name:'Note Pro', price:1000 , brand: "Max" , category:'Mobile'});
// let result = await data.save();
// console.log(result)
// }




// //Update
// const updateInDb=async()=>{
//     await mongoose.connect("mongodb+srv://anilbhatt094:Bhattanil%401995@cluster0.1odpqds.mongodb.net/e-com?retryWrites=true&w=majority");
//     const porductModel = mongoose.model('ecoms' , ProductScema);
//     let data = await porductModel.updateOne(
//         {name:"Note Pro"},
//         {
//             $set:{price: 500}
//         }
        
//     )
//     console.log(data)
// }

// updateInDb();

// //delete
// const deleteInDB = async()=>{
//     await mongoose.connect("mongodb+srv://anilbhatt094:Bhattanil%401995@cluster0.1odpqds.mongodb.net/e-com?retryWrites=true&w=majority");
//     const porductModel = mongoose.model('ecoms' , ProductScema);
//     let data = await porductModel.deleteOne({name:"Note Pro"});
//     console.log(data);
// }
// deleteInDB();


// //Find
// const findInDB = async()=>{
//     await mongoose.connect("mongodb+srv://anilbhatt094:Bhattanil%401995@cluster0.1odpqds.mongodb.net/e-com?retryWrites=true&w=majority");
//     const porductModel = mongoose.model('ecoms' , ProductScema);
//     let data = await porductModel.find();
//     console.log(data);
// }
// findInDB();




