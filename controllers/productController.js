const express = require('express')
const mongoose = require('mongoose');
const time = require('./../libs/timeLib');
const check = require('./../libs/checkLib')
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const shortid = require('shortid');

//Importing Product model here

const productModel=mongoose.model('Product')

let getAllProduct=(req,res)=>{
 productModel.find()
 .select('-__v -_id')
 .lean()
 .exec((err,result)=>{

    if(err){
        console.log(err)
        logger.error(err.message,'ProductController:getAllProduct',10)
        let apiResponse=response.generate(true,'Failed to find product details',500,null) 
        res.send(apiResponse)

    }else if(check.isEmpty(result) ){
        console.log('No product found')

        logger.captureInfo('No Product Found','productController:getAllProduct')
        let apiResponse=response.generate(true,'No Blog Found',404,null)
        res.send(apiResponse)
    }else{

        let apiResponse=response.generate(false,'ALL Product Details Found',200,result)
       res.send(apiResponse)

    }


 })
}//end get all products.

//get particular product by productId

let viewByProductId=(req,res)=>{

    if(check.isEmpty(req.params.productId)){
    let apiResponse = response.generate(true, 'productId is missing', 403, null)
    res.send(apiResponse)
    }

    else{

    productModel.findOne({'productId':req.params.productId},(err,result)=>{


     if(err){
        console.log(err)
        logger.captureError(`Error Occured:${err}`,'Database',10)
        let apiResponse = response.generate(true, 'Error occured', 500, null)
        res.send(apiResponse)
         
     }
     else if(check.isEmpty(result) ){
        console.log('No product found')
        let apiResponse = response.generate(true, 'Product not found', 404, null)

        res.send(apiResponse)
    }else{

        logger.captureInfo("Product found successfully","productController:ViewByProductId",5)
        let apiResponse=response.generate(false,'Product Found Successfully',200,result)
       res.send(apiResponse)

    }

    })

}//end of function to get single product.
}


/**
 * function to read product by category.
 */
let viewByCategory = (req, res) => {

    if(check.isEmpty(req.params.category)){

        console.log('Category should be passed')

        let apiResponse=response.generate(true,'Category is missing',403,null)
    }
   else{
    productModel.find({ 'category': req.params.category }, (err, result) => {

        if (err) {
            console.log(err)
            logger.captureError(`ErrorOccured:${err}`,'Database',10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)

            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            console.log('No product Found')
        let apiResponse = response.generate(true, 'Product not found', 404, null)
         
            res.send(apiResponse)
        } else {
        logger.captureInfo("product found successfully","productController:ViewByCategory",5)
             
            let apiResponse = response.generate(false, 'Products Found Successfully.', 200, result)

            res.send(apiResponse)

        }
    })
}
}



let editProduct = (req, res) => {
   if (check.isEmpty(req.params.productId)){

    console.log('productId is missing')

    let apiResponse=response.generate(true,'productId is missing',403,null)

    res.send(apiResponse)
   }
   else{
    let options = req.body;
    console.log(options);
    productModel.update({ 'productId': req.params.productId }, options, { multi: true }).exec((err, result) => {

        if (err) {
            console.log(err)
            logger.captureError(`Error Occured:${err}`,'Database',10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            console.log('No product Found')
            let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
        } else {

            logger.captureInfo('product Edited successfully','productController:editProduct',5)
            let apiResponse=response.generate(false,'Product Edited Successfully',200,result)
            res.send(result)

        }
    })
}
}


/**
 * function to delete the assignment collection.
 */
let deleteProduct = (req, res) => {

    if (check.isEmpty(req.params.productId)) {
        console.log('productId is missing')
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    }
    else{

    
    
    productModel.remove({ 'productId': req.params.productId }, (err, result) => {
        if (err) {
            console.log(err)
            logger.captureError(`Error Occurred:${err}`,'Database',10)
            let apiResponse = response.generate(true, 'Error Occured', 403, null)
            res.send(apiResponse)
    
        } else if (check.isEmpty(result)) {
            console.log('No product Found')
            let apiResponse=response.generate(false,'Product Not Found',404,null)
            res.send(apiResponse)
        } else {
            logger.captureInfo('Product Deleted successfully','productController:deleteProduct',5)
            let apiResponse=response.generate(true,'Product Deleted Successfully',200,result)
            res.send(apiResponse)

        }
    })
}
}


/**
 * function to create the blog.
 */
let createProduct = (req, res) => {

    let productCreationFunction=()=>{
        return new Promise((resolve,reject)=>{
            console.log(req.body)
            if (check.isEmpty(req.body.title) || check.isEmpty(req.body.name) || check.isEmpty(req.body.price) || check.isEmpty(req.body.description)||check.isEmpty(req.body.coupon)) {

                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)

        }
        else{
    var today = Date.now()
    let productId = shortid.generate()

    let newProduct = new productModel({

        productId: productId,
        title: req.body.title,
        name: req.body.name,
        price: req.body.price,
        description:req.body.description,
        coupon: req.body.coupon,
        freeDelivery:req.body.freeDelivery,
        inStock: req.body.inStock,
        category:req.body.category,
        imageLink:req.body.imageLink,
        created: today,
        lastModified: today
    }) // end new blog model

    let sizes = (req.body.sizes != undefined && req.body.sizes != null && req.body.sizes != '') ? req.body.sizes.split(',') : []
    newProduct.sizes = sizes

    let reviews = (req.body.reviews!= undefined && req.body.reviews != null && req.body.reviews != '') ? req.body.reviews.split(',') : []
    newProduct.reviews=reviews

    



    newProduct.save((err, result) => {
        if (err) {
            console.log(err)
            console.log('Error Occured.')
            logger.captureError(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
            reject(apiResponse)
        
        } else {
            console.log('Success in product creation')
            resolve(result)

        }
       
    }) // end new blog save
}
        })
    }//end create product function
     // making promise call.
     productCreationFunction()
     .then((result) => {
         let apiResponse = response.generate(false, 'prodcut Created successfully', 200, result)
         res.send(apiResponse)
     })
     .catch((error) => {
         console.log(error)
         res.send(error)
     })
}

let increaseProductView = (req, res) => {
    
    if (check.isEmpty(req.params.productId)) {

        console.log('productId should be passed')
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    } else {

        productModel.findOne({ 'productId': req.params.productId }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.captureError(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                result.views += 1;
                result.save(function(err,result){
                    if(err){
                        console.log('Error Occured.')
                        logger.captureError(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured While saving product', 500, null)
                        res.send(apiResponse)
                    }
                    else{
                        console.log('Product Updated Successfully')
                        let apiResponse = response.generate(false, 'Product Updated Successfully.', 200, result)
                        res.send(apiResponse)
                    }
                });// end result
                
            }
        })
    }
}





module.exports={
getAllProduct:getAllProduct,
viewByProductId:viewByProductId,
viewByCategory:viewByCategory,
editProduct:editProduct,
deleteProduct:deleteProduct,
createProduct:createProduct,
increaseProductView:increaseProductView


}


