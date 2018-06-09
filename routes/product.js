const express = require('express')
const router = express.Router();

const productController = require('./../controllers/productController')
const appConfig = require('./../config/appConfig')
const auth = require("./../middlewares/auth")



let setRouter = (app) => {

  let baseUrl = appConfig.apiVersion + '/products';

  app.get(baseUrl + '/all', auth.isAuthenticated, productController.getAllProduct);

  /**
 * @api {get} /api/v1/products/all Get all products
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "message": "All Products Details Found",
    "status": 200,
    "data": [
                {
              	
                   productId:"string",
                   title: "string",
                   name: "strinf",
                   price: number,
                   description:"string",
                   coupon: "string",
                   freeDelivery:"string",
                   inStock: "string",
                   category:"string",
                   imageLink:"string",
                   sizes: object(type = array),
                   reviews: object(type = array),
                   created: today,
                   lastModified: today
                }
            ]
      }
  }
}
  @apiErrorExample {json} Error-Response:
 *
 * {
    "error": true,
    "message": "Failed To Find product Details",
    "status": 500,
    "data": null
   }
 */


  app.get(baseUrl + '/view/:productId', auth.isAuthenticated, productController.viewByProductId);
  /**
 * @api {get} /api/v1/products/view/:productId Get a single Product
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} productId The productId should be passed as the URL parameter
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "message": "Products Found Successfully.",
    "status": 200,
    "data": {
        	
              productId:"string",
              title: "string",
              name: "strinf",
              price: number,
              description:"string",
              coupon: "string",
              freeDelivery:"string",
              inStock: "string",
              category:"string",
              imageLink:"string",
              sizes: object(type = array),
              reviews: object(type = array),
              created: today,
              lastModified: today
            }
        }
    }
}
  @apiErrorExample {json} Error-Response:
 *
 * {
    "error": true,
    "message": "Error Occured.",
    "status": 500,
    "data": null
   }
 */




  app.get(baseUrl + '/view/by/category/:category', auth.isAuthenticated, productController.viewByCategory);

  /**
 * @api {get} /api/v1/products/view/by/category/:category Gets Product by category
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} category The category should be passed as the URL parameter
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "message": "Products Found Successfully.",
    "status": 200,
    "data": {
        	
                 productId:"string",
                 title: "string",
                 name: "strinf",
                 price: number,
                 description:"string",
                 coupon: "string",
                 freeDelivery:"string",
                 inStock: "string",
                 category:"string",
                 imageLink:"string",
                 sizes: object(type = array),
                 reviews: object(type = array),
                 created: today,
                 lastModified: today
      }
      }
  }
}
  @apiErrorExample {json} Error-Response:
 *
 * {
    "error": true,
    "message": "Error Occured.",
    "status": 500,
    "data": null
   }
 */


  app.post(baseUrl + '/:productId/delete', auth.isAuthenticated, productController.deleteProduct);

  /**
 * @api {post} /api/v1/products/:productId/delete Delete product by productId
 * @apiVersion 0.0.1
 * @apiGroup delete
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} productId productId of the product passed as the URL parameter
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "message": "Product Deleted Successfully",
    "status": 200,
    "data": []
      }
  }
}
  @apiErrorExample {json} Error-Response:
 *
 * {
    "error": true,
    "message": "Error Occured.,
    "status": 500,
    "data": null
   }
 */
  app.put(baseUrl + '/:productId/edit', auth.isAuthenticated, productController.editProduct);

  /**
 * @api {put} /api/v1/:productId/edit Edit product by productId
 * @apiVersion 0.0.1
 * @apiGroup edit
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} productId productId of the product passed as the URL parameter
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "message": "Product Edited Successfully.",
    "status": 200,
    "data": [
                {
                     productId:"string",
                     title: "string",
                     name: "strinf",
                     price: "Number",
                     description:"string",
                     coupon: "string",
                     freeDelivery:"string",
                     inStock: "string",
                     category:"string",
                     imageLink:"string",
                     sizes: object(type = array),
                     reviews: object(type = array),
                     created: today,
                     lastModified: today
                     
                 }
            ]
      }
  }
}
  @apiErrorExample {json} Error-Response:
 *
 * {
    "error": true,
    "message": "Error Occured.,
    "status": 500,
    "data": null
   }
 */
  app.post(baseUrl + '/create', auth.isAuthenticated, productController.createProduct);
  /**
 * @api {post} /api/v1/products/create Create product
 * @apiVersion 0.0.1
 * @apiGroup create
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} title title of the product passed as a body parameter
 * @apiParam {String} name  name of the product passed as a body parameter
 * @apiParam {String} price price of the product passed as a body parameter
 * @apiParam {String} decription description of the product passed as a body parameter
 * @apiParam {String} coupon coupon of the product passed as a body parameter
 * @apiParam {String} freeDelivery freeDelivery of the product passed as a body parameter
 * @apiParam {String} inStock inStock of the product passed as a body parameter
 * @apiParam {String} category category of the product passed as a body parameter
   
 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "message": "Product Created successfully",
    "status": 200,
    "data": [
                {
                      productId:"string",
                      title: "string",
                      name: "string",
                      price: "Number",
                      description:"string",
                      coupon: "string",
                      freeDelivery:"string",
                      inStock: "string",
                      category:"string",
                      imageLink:"string",
                      sizes: object(type = array),
                      reviews: object(type = array),
                      created: today,
                      lastModified: today
                                  
   
                }
            ]
        }
    }
}
  @apiErrorExample {json} Error-Response:
 *
 * {
    "error": true,
    "message": "Error Occured.,
    "status": 500,
    "data": null
   }
 */
  app.get(baseUrl + '/:productId/count/view', auth.isAuthenticated, productController.increaseProductView);


  /**
 * @api {get} /api/v1/products/:productId/count/view Increase Products Count
 * @apiVersion 0.0.1
 * @apiGroup update
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} productId productId of the Product passed as the URL parameter
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "message": " Product Updated Successfully.",
    "status": 200,
    "data": [
                {
                    productId: "string",
                    title: "string",
                    name: "string",
                    price: "Number",
                    views: number,
                    coupon: boolean,
                    inStock: "string",
                    category: "string",
                    size:object(type = array)
                    tags: object(type = array),
                    created: "date",
                    lastModified: "date"
                }
             ]
      }
  }
}
  @apiErrorExample {json} Error-Response:
 *
 * {
    "error": true,
    "message": "Error Occured.,
    "status": 500,
    "data": null
   }
 */




}//end setRouter function.



module.exports = {

  setRouter: setRouter

}
