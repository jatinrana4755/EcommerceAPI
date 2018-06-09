//importing mongoose module.
const mongoose = require('mongoose')


//import schema.

const Schema = mongoose.Schema;

let productSchema = new Schema(

    {

        productId: {
            type: String,
            unique: true
        },
        title:{
            type:String,
            default:''

        },

         name: {
            type: String,
            default: ''
        },

        price: {
            type: Number,
            default: 0
        },

        description: {
            type: String,
            default: ''
        },

        coupon: {
            type: String,
            default: ''
        },

        freeDelivery: {
            type: String,
            default: ''
        },

        reviews: {
            type: [],
            default: []
        },

        category: {
            type: String,
            default: ''
        },
        
        imageLink:{


            type: String,
            default: ''

        },
        views: {
            type: Number,
            default: 0
        },

        sizes:[],

        tags:[],
        
        inStock: {
            type: String,
            default: ''

        },
    

         created: {
            type: Date,
            default: Date.now
        }, 

        lastModified: {
            type: Date,
            default: Date.now
        }

    


    }
)

mongoose.model('Product', productSchema);

