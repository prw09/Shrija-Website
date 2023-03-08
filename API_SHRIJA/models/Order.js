const mongoose=require('mongoose')

const  OrderSchema= new mongoose.Schema({
   
    userID :{
        type: String, required:true, 
    },

    Products:[
        {
            productId:{
                type: String
            },

            Quantity:{
                type: Number,
                default:1,
            }
        }
    ],

    Amount:{
        type: Number, required: true
    },

    adress:{
        type: Object, required:true 
    },

    status:{
        type: String, default: "pending"
    },
   
},
{timestamps:true})

module.exports= mongoose.model("Order", OrderSchema);