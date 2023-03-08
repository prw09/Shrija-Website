const mongoose=require('mongoose')

const  CartSchema= new mongoose.Schema({
   
    userID :{
        type: String, required:true, 
    },

    Products:[
        {
            productId:{
                type:String
            },

            Quantity:{
                type: Number,
                default:1,
            }
        }
    ],

    
},
{timestamps:true})

module.exports= mongoose.model("Cart", CartSchema);