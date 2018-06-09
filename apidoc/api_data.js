define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/products/create",
    "title": "Create product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "decription",
            "description": "<p>description of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coupon",
            "description": "<p>coupon of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "freeDelivery",
            "description": "<p>freeDelivery of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inStock",
            "description": "<p>inStock of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Product Created successfully\",\n    \"status\": 200,\n    \"data\": [\n                {\n                      productId:\"string\",\n                      title: \"string\",\n                      name: \"string\",\n                      price: \"Number\",\n                      description:\"string\",\n                      coupon: \"string\",\n                      freeDelivery:\"string\",\n                      inStock: \"string\",\n                      category:\"string\",\n                      imageLink:\"string\",\n                      sizes: object(type = array),\n                      reviews: object(type = array),\n                      created: today,\n                      lastModified: today\n                                  \n   \n                }\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured.,\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "create",
    "name": "PostApiV1ProductsCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/products/:productId/delete",
    "title": "Delete product by productId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Product Deleted Successfully\",\n    \"status\": 200,\n    \"data\": []\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured.,\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductsProductidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/:productId/edit",
    "title": "Edit product by productId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Product Edited Successfully.\",\n    \"status\": 200,\n    \"data\": [\n                {\n                     productId:\"string\",\n                     title: \"string\",\n                     name: \"strinf\",\n                     price: \"Number\",\n                     description:\"string\",\n                     coupon: \"string\",\n                     freeDelivery:\"string\",\n                     inStock: \"string\",\n                     category:\"string\",\n                     imageLink:\"string\",\n                     sizes: object(type = array),\n                     reviews: object(type = array),\n                     created: today,\n                     lastModified: today\n                     \n                 }\n            ]\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured.,\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "edit",
    "name": "PutApiV1ProductidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/cart/all",
    "title": "Get all products in cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"error\": false,\n        \"message\": \"Products in the cart\",\n        \"status\": 200,\n        \"data\": {\n            \"__v\": number,\n            \"productsIds\": \"string\",\n            \"_id\": \"string\"\n            }\n        }\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Cart Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "read",
    "name": "GetApiV1CartAll"
  },
  {
    "type": "get",
    "url": "/api/v1/cart/:produtId/add",
    "title": "Add a product in cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"error\": false,\n        \"message\": \"Added in the cart\",\n        \"status\": 200,\n        \"data\": {\n            \"__v\": number,\n            \"productsIds\": \"String\",\n            \"_id\": \"string\"\n            }\n        }\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Cart Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "read",
    "name": "GetApiV1CartProdutidAdd"
  },
  {
    "type": "get",
    "url": "/api/v1/cart/:produtId/remove",
    "title": "Remove product from the cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \"error\": false,\n            \"message\": \"Product Removed Successfully\",\n            \"status\": 200,\n            \"data\": {\n                 \"n\": 1,\n                 \"ok\": 1\n                }\n            }\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Cart Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "read",
    "name": "GetApiV1CartProdutidRemove"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All Products Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n              \t\n                   productId:\"string\",\n                   title: \"string\",\n                   name: \"strinf\",\n                   price: number,\n                   description:\"string\",\n                   coupon: \"string\",\n                   freeDelivery:\"string\",\n                   inStock: \"string\",\n                   category:\"string\",\n                   imageLink:\"string\",\n                   sizes: object(type = array),\n                   reviews: object(type = array),\n                   created: today,\n                   lastModified: today\n                }\n            ]\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To Find product Details\",\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/by/category/:category",
    "title": "Gets Product by category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Products Found Successfully.\",\n    \"status\": 200,\n    \"data\": {\n        \t\n                 productId:\"string\",\n                 title: \"string\",\n                 name: \"strinf\",\n                 price: number,\n                 description:\"string\",\n                 coupon: \"string\",\n                 freeDelivery:\"string\",\n                 inStock: \"string\",\n                 category:\"string\",\n                 imageLink:\"string\",\n                 sizes: object(type = array),\n                 reviews: object(type = array),\n                 created: today,\n                 lastModified: today\n      }\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured.\",\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewByCategoryCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/:productId",
    "title": "Get a single Product",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Products Found Successfully.\",\n    \"status\": 200,\n    \"data\": {\n        \t\n              productId:\"string\",\n              title: \"string\",\n              name: \"strinf\",\n              price: number,\n              description:\"string\",\n              coupon: \"string\",\n              freeDelivery:\"string\",\n              inStock: \"string\",\n              category:\"string\",\n              imageLink:\"string\",\n              sizes: object(type = array),\n              reviews: object(type = array),\n              created: today,\n              lastModified: today\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured.\",\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/products/:productId/count/view",
    "title": "Increase Products Count",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the Product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \" Product Updated Successfully.\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    productId: \"string\",\n                    title: \"string\",\n                    name: \"string\",\n                    price: \"Number\",\n                    views: number,\n                    coupon: boolean,\n                    inStock: \"string\",\n                    category: \"string\",\n                    size:object(type = array)\n                    tags: object(type = array),\n                    created: \"date\",\n                    lastModified: \"date\"\n                }\n             ]\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured.,\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "update",
    "name": "GetApiV1ProductsProductidCountView"
  }
] });
