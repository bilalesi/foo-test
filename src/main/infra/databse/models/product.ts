import { Timestamp } from 'mongodb';
import  mongoose  from 'mongoose';
import { v4 as uuidV4 } from 'uuid';


const productProperties ={

}
const productSchema = new mongoose.Schema({
    prductId: {
        type: uuidV4
    },
    price: {
        type: Number
    },
    hasNewPrice: { type: Boolean, default: false},
    discount: {
        // (percentage: 0.25 or fixed: 100 da)
        discountType: { type: String, default: 'fixed'},
        discountAmount: { type: Number},
        discountNewPrice: {type: Number}
    },

    quantity: { type: Number},
    ...productProperties
}, { 
    timestamps: true
})

// TODO relatice virtuals and plugins

const productModel = mongoose.model('product', productSchema, 'ProductCollection');