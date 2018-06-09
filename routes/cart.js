const express = require('express');
const router = express.Router();
const cartController = require("./../controllers/cartController");
const appConfig = require("./../config/appConfig")
const auth = require("./../middlewares/auth")

module.exports.setRouter = function(app){

    let baseUrl = appConfig.apiVersion+'/cart';

    app.get(baseUrl+'/view',auth.isAuthenticated,cartController.viewCart);
    
    /**
	 * @api {get} /api/v1/cart/all Get all products in cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
        "error": false,
        "message": "Products in the cart",
        "status": 200,
        "data": {
            "__v": number,
            "productsIds": "string",
            "_id": "string"
            }
        }
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Cart Details",
	    "status": 500,
	    "data": null
	   }
	 */

   
    app.get(baseUrl+'/:productId/add',auth.isAuthenticated,cartController.addToCart);

     /**
	 * @api {get} /api/v1/cart/:produtId/add Add a product in cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
        "error": false,
        "message": "Added in the cart",
        "status": 200,
        "data": {
            "__v": number,
            "productsIds": "String",
            "_id": "string"
            }
        }
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Cart Details",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl+'/:productId/remove',auth.isAuthenticated,cartController.removeFromCart);

    
      /**
	 * @api {get} /api/v1/cart/:produtId/remove Remove product from the cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Removed Successfully",
            "status": 200,
            "data": {
                 "n": 1,
                 "ok": 1
                }
            }
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Cart Details",
	    "status": 500,
	    "data": null
	   }
	 */

}