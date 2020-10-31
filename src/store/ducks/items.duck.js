import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  SetItems: "[SetItems] Action",
};

let json_data = {
  "success": true,
  "content": {
    "errors": null,
    "records": [
      {
        "cart_type_desc": "Computer Peripherals",
        "cart_items": [
          {
            "id": "5f991241f6f00d0e0ee47bf6",
            "cart_user_code": "17-0571",
            "cart_collection_id": "231069778099",
            "cart_item_unit_price": 50,
            "cart_quantity": [
              {
                "variant_id": "37084885385395",
                "product_id": "5957272207539",
                "variant_info": {
                  "id": 37084885385395,
                  "product_id": 5957272207539,
                  "title": "Liquid Based",
                  "price": "50.00",
                  "sku": "",
                  "position": 1,
                  "inventory_policy": "deny",
                  "compare_at_price": "99.00",
                  "fulfillment_service": "manual",
                  "inventory_management": null,
                  "option1": "Liquid Based",
                  "option2": null,
                  "option3": null,
                  "created_at": "2020-10-16T09:59:36+08:00",
                  "updated_at": "2020-10-16T09:59:36+08:00",
                  "taxable": true,
                  "barcode": "",
                  "grams": 0,
                  "image_id": null,
                  "weight": 0,
                  "weight_unit": "kg",
                  "inventory_item_id": 39177674784947,
                  "inventory_quantity": 0,
                  "old_inventory_quantity": 0,
                  "requires_shipping": true,
                  "admin_graphql_api_id": "gid://shopify/ProductVariant/37084885385395"
                },
                "product_info": {
                  "id": 5957272207539,
                  "handle": "razor-keyboard",
                  "images": [],
                  "options": [
                    {
                      "id": 7644442067123,
                      "product_id": 5957272207539,
                      "name": "Material",
                      "position": 1,
                      "values": [
                        "Liquid Based",
                        "Gold Based",
                        "No Based"
                      ]
                    }
                  ],
                  "tags": "it_item_office",
                  "title": "Razor Keyboard",
                  "variants": [
                    {
                      "id": 37084885385395,
                      "product_id": 5957272207539,
                      "title": "Liquid Based",
                      "price": "50.00",
                      "sku": "",
                      "position": 1,
                      "inventory_policy": "deny",
                      "compare_at_price": "99.00",
                      "fulfillment_service": "manual",
                      "inventory_management": null,
                      "option1": "Liquid Based",
                      "option2": null,
                      "option3": null,
                      "created_at": "2020-10-16T09:59:36+08:00",
                      "updated_at": "2020-10-16T09:59:36+08:00",
                      "taxable": true,
                      "barcode": "",
                      "grams": 0,
                      "image_id": null,
                      "weight": 0,
                      "weight_unit": "kg",
                      "inventory_item_id": 39177674784947,
                      "inventory_quantity": 0,
                      "old_inventory_quantity": 0,
                      "requires_shipping": true,
                      "admin_graphql_api_id": "gid://shopify/ProductVariant/37084885385395"
                    },
                    {
                      "id": 37084885418163,
                      "product_id": 5957272207539,
                      "title": "Gold Based",
                      "price": "50.00",
                      "sku": "",
                      "position": 2,
                      "inventory_policy": "deny",
                      "compare_at_price": "99.00",
                      "fulfillment_service": "manual",
                      "inventory_management": null,
                      "option1": "Gold Based",
                      "option2": null,
                      "option3": null,
                      "created_at": "2020-10-16T09:59:36+08:00",
                      "updated_at": "2020-10-16T09:59:36+08:00",
                      "taxable": true,
                      "barcode": "",
                      "grams": 0,
                      "image_id": null,
                      "weight": 0,
                      "weight_unit": "kg",
                      "inventory_item_id": 39177674817715,
                      "inventory_quantity": 0,
                      "old_inventory_quantity": 0,
                      "requires_shipping": true,
                      "admin_graphql_api_id": "gid://shopify/ProductVariant/37084885418163"
                    },
                    {
                      "id": 37084885450931,
                      "product_id": 5957272207539,
                      "title": "No Based",
                      "price": "50.00",
                      "sku": "",
                      "position": 3,
                      "inventory_policy": "deny",
                      "compare_at_price": "99.00",
                      "fulfillment_service": "manual",
                      "inventory_management": null,
                      "option1": "No Based",
                      "option2": null,
                      "option3": null,
                      "created_at": "2020-10-16T09:59:36+08:00",
                      "updated_at": "2020-10-16T09:59:36+08:00",
                      "taxable": true,
                      "barcode": "",
                      "grams": 0,
                      "image_id": null,
                      "weight": 0,
                      "weight_unit": "kg",
                      "inventory_item_id": 39177674850483,
                      "inventory_quantity": 0,
                      "old_inventory_quantity": 0,
                      "requires_shipping": true,
                      "admin_graphql_api_id": "gid://shopify/ProductVariant/37084885450931"
                    }
                  ],
                  "vendor": "Front_End_Exam",
                  "body_html": "Razor Keyboard",
                  "product_id": "5957272207539",
                  "product_status": "ACTIVE",
                  "created_at": "2020-10-16T09:59:36+08:00",
                  "images_post_pull": {
                    "images": [
                      {
                        "id": 21502449189043,
                        "product_id": 5957272207539,
                        "position": 1,
                        "created_at": "2020-10-16T09:59:37+08:00",
                        "updated_at": "2020-10-16T09:59:37+08:00",
                        "alt": null,
                        "width": 466,
                        "height": 318,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboardrazor.jpg?v=1602813577",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21502449189043"
                      }
                    ]
                  },
                  "product_type": "it_item",
                  "published_at": null,
                  "price": "50.00",
                  "compare_price": "99.00",
                  "published_scope": "web",
                  "template_suffix": "",
                  "updated_at": "2020-10-16T09:59:36+08:00"
                },
                "recipients_info": [
                  {
                    "employee_personal_info_employee_code": "20-0001",
                    "employee_personal_info_first_name": "Kendrick",
                    "employee_personal_info_last_name": "Humphreys",
                    "employee_personal_info_middle_name": "Rocha"
                  }
                ],
                "recipients_quantity": [
                  {
                    "quantity": "2",
                    "recipients": [
                      "20-0001"
                    ]
                  }
                ],
                "total_recipient": "1",
                "total_cost": "100",
                "total_quantity": "2"
              }
            ],
            "cart_currency": "USD",
            "cart_cart_status": "ACTIVE",
            "cart_created_by": "17-0571",
            "cart_created_at": "2020-10-28T06:40:01Z",
            "cart_updated_at": "2020-10-28T08:50:45Z",
            "updated_by": null,
            "deleted_by": null,
            "deleted_at": null,
            "collection_data": {
              "id": 231069778099,
              "handle": "private-office-options",
              "image": {
                "created_at": "2020-10-13T10:09:44+08:00",
                "alt": null,
                "width": 350,
                "height": 350,
                "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/collections/luffy_1_3.jpg?v=1602554984"
              },
              "title": "Private Office Options",
              "productData": null,
              "collectionTag": null,
              "collectionType": null,
              "collection_id": "231069778099",
              "body_html": "Private Office Options",
              "published_at": "2020-10-13T10:09:43+08:00",
              "published_scope": "web",
              "template_suffix": "",
              "collection_tag_code": "it_item_office",
              "collection_tag_type_code": "it_item",
              "rules": [
                {
                  "column": "tag",
                  "relation": "equals",
                  "condition": "it_item_office"
                },
                {
                  "column": "type",
                  "relation": "equals",
                  "condition": "it_item"
                }
              ],
              "updated_at": "2020-10-13T10:09:44+08:00",
              "product_count": null
            }
          },
          {
            "id": "5f991fe527a6624caff95471",
            "cart_user_code": "17-0571",
            "cart_collection_id": "231015055539",
            "cart_item_unit_price": 50,
            "cart_quantity": [],
            "cart_on_behalf": [
              "10-1922"
            ],
            "cart_currency": "USD",
            "cart_cart_status": "ACTIVE",
            "cart_created_by": "17-0571",
            "cart_created_at": "2020-10-28T15:38:12Z",
            "cart_updated_at": "2020-10-28T09:07:28Z",
            "updated_by": null,
            "deleted_by": null,
            "deleted_at": null,
            "collection_data": {
              "id": 231015055539,
              "handle": "it-software",
              "image": {
                "created_at": "2020-10-12T13:45:51+08:00",
                "alt": null,
                "width": 1280,
                "height": 1120,
                "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/collections/fanky.png?v=1602481551"
              },
              "title": "IT Software",
              "productData": null,
              "collectionTag": null,
              "collectionType": null,
              "collection_id": "231015055539",
              "body_html": "<meta content=\"text/html; charset=utf-8\" http-equiv=\"content-type\">IT Software",
              "published_at": "2020-10-12T13:45:51+08:00",
              "published_scope": "web",
              "template_suffix": "",
              "collection_tag_code": "it_item_software",
              "collection_tag_type_code": "it_item",
              "rules": [
                {
                  "column": "type",
                  "relation": "equals",
                  "condition": "it_item"
                },
                {
                  "column": "tag",
                  "relation": "equals",
                  "condition": "it_item_software"
                }
              ],
              "updated_at": "2020-10-12T13:45:51+08:00",
              "product_count": null
            }
          },
          {
            "id": "5f99229b03f5dc41af081f5e",
            "cart_user_code": "17-0571",
            "cart_collection_id": "231015055539",
            "cart_item_unit_price": 50,
            "cart_quantity": [],
            "cart_on_behalf": [
              "10-1922"
            ],
            "cart_currency": "USD",
            "cart_cart_status": "ACTIVE",
            "cart_created_by": "17-0571",
            "cart_created_at": "2020-10-28T15:49:46Z",
            "cart_updated_at": "2020-10-28T09:04:40Z",
            "updated_by": null,
            "deleted_by": null,
            "deleted_at": null,
            "collection_data": {
              "id": 231015055539,
              "handle": "it-software",
              "image": {
                "created_at": "2020-10-12T13:45:51+08:00",
                "alt": null,
                "width": 1280,
                "height": 1120,
                "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/collections/fanky.png?v=1602481551"
              },
              "title": "IT Software",
              "productData": null,
              "collectionTag": null,
              "collectionType": null,
              "collection_id": "231015055539",
              "body_html": "<meta content=\"text/html; charset=utf-8\" http-equiv=\"content-type\">IT Software",
              "published_at": "2020-10-12T13:45:51+08:00",
              "published_scope": "web",
              "template_suffix": "",
              "collection_tag_code": "it_item_software",
              "collection_tag_type_code": "it_item",
              "rules": [
                {
                  "column": "type",
                  "relation": "equals",
                  "condition": "it_item"
                },
                {
                  "column": "tag",
                  "relation": "equals",
                  "condition": "it_item_software"
                }
              ],
              "updated_at": "2020-10-12T13:45:51+08:00",
              "product_count": null
            }
          },
          {
            "id": "5f9922d703f5dc41af081f5f",
            "cart_user_code": "17-0571",
            "cart_collection_id": "231015055539",
            "cart_item_unit_price": 50,
            "cart_quantity": [],
            "cart_on_behalf": [
              "10-1922"
            ],
            "cart_currency": "USD",
            "cart_cart_status": "ACTIVE",
            "cart_created_by": "17-0571",
            "cart_created_at": "2020-10-28T15:50:47Z",
            "cart_updated_at": "2020-10-28T09:04:15Z",
            "updated_by": null,
            "deleted_by": null,
            "deleted_at": null,
            "collection_data": {
              "id": 231015055539,
              "handle": "it-software",
              "image": {
                "created_at": "2020-10-12T13:45:51+08:00",
                "alt": null,
                "width": 1280,
                "height": 1120,
                "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/collections/fanky.png?v=1602481551"
              },
              "title": "IT Software",
              "productData": null,
              "collectionTag": null,
              "collectionType": null,
              "collection_id": "231015055539",
              "body_html": "<meta content=\"text/html; charset=utf-8\" http-equiv=\"content-type\">IT Software",
              "published_at": "2020-10-12T13:45:51+08:00",
              "published_scope": "web",
              "template_suffix": "",
              "collection_tag_code": "it_item_software",
              "collection_tag_type_code": "it_item",
              "rules": [
                {
                  "column": "type",
                  "relation": "equals",
                  "condition": "it_item"
                },
                {
                  "column": "tag",
                  "relation": "equals",
                  "condition": "it_item_software"
                }
              ],
              "updated_at": "2020-10-12T13:45:51+08:00",
              "product_count": null
            }
          },
          {
            "id": "5f995081f6f00d0e0ee47bf8",
            "cart_user_code": "17-0571",
            "cart_collection_id": "231015055539",
            "cart_item_unit_price": 100,
            "cart_quantity": [
              {
                "variant_id": " 36976644325555",
                "product_id": "5906748473523",
                "variant_info": null,
                "product_info": {
                  "id": 5906748473523,
                  "handle": "keyboard",
                  "images": [
                    {
                      "id": 21022041473203,
                      "product_id": 5906748473523,
                      "position": 1,
                      "created_at": "2020-10-12T10:26:53+08:00",
                      "updated_at": "2020-10-12T10:26:53+08:00",
                      "alt": null,
                      "width": 350,
                      "height": 350,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/luffy_1_1.jpg?v=1602469613",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21022041473203"
                    },
                    {
                      "id": 21533256024243,
                      "product_id": 5906748473523,
                      "position": 2,
                      "created_at": "2020-10-20T11:22:57+08:00",
                      "updated_at": "2020-10-20T11:22:57+08:00",
                      "alt": null,
                      "width": 425,
                      "height": 480,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/chopper.jpg?v=1603164177",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21533256024243"
                    },
                    {
                      "id": 21533256351923,
                      "product_id": 5906748473523,
                      "position": 3,
                      "created_at": "2020-10-20T11:23:25+08:00",
                      "updated_at": "2020-10-20T11:23:25+08:00",
                      "alt": null,
                      "width": 289,
                      "height": 175,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard2.jpg?v=1603164205",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21533256351923"
                    },
                    {
                      "id": 21533256548531,
                      "product_id": 5906748473523,
                      "position": 4,
                      "created_at": "2020-10-20T11:23:30+08:00",
                      "updated_at": "2020-10-20T11:23:30+08:00",
                      "alt": null,
                      "width": 275,
                      "height": 183,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard6.jpg?v=1603164210",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21533256548531"
                    },
                    {
                      "id": 21533256679603,
                      "product_id": 5906748473523,
                      "position": 5,
                      "created_at": "2020-10-20T11:23:35+08:00",
                      "updated_at": "2020-10-20T11:23:35+08:00",
                      "alt": null,
                      "width": 225,
                      "height": 225,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard3.jpg?v=1603164215",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21533256679603"
                    },
                    {
                      "id": 21533256810675,
                      "product_id": 5906748473523,
                      "position": 6,
                      "created_at": "2020-10-20T11:23:41+08:00",
                      "updated_at": "2020-10-20T11:23:41+08:00",
                      "alt": null,
                      "width": 285,
                      "height": 177,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyborad1.jpg?v=1603164221",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21533256810675"
                    }
                  ],
                  "options": [
                    {
                      "id": 7509922939059,
                      "product_id": 5906748473523,
                      "name": "Title",
                      "position": 1,
                      "values": [
                        "Default Title"
                      ]
                    }
                  ],
                  "tags": "it_item_hardware",
                  "title": "Keyboard",
                  "variants": [
                    {
                      "id": 36976644325555,
                      "product_id": 5906748473523,
                      "title": "Default Title",
                      "price": "100.00",
                      "sku": "",
                      "position": 1,
                      "inventory_policy": "deny",
                      "compare_at_price": "100.00",
                      "fulfillment_service": "manual",
                      "inventory_management": "shopify",
                      "option1": "Default Title",
                      "option2": null,
                      "option3": null,
                      "created_at": "2020-10-12T10:26:51+08:00",
                      "updated_at": "2020-10-20T11:31:09+08:00",
                      "taxable": true,
                      "barcode": "",
                      "grams": 0,
                      "image_id": null,
                      "weight": 0,
                      "weight_unit": "kg",
                      "inventory_item_id": 39069433659571,
                      "inventory_quantity": 0,
                      "old_inventory_quantity": 0,
                      "requires_shipping": true,
                      "admin_graphql_api_id": "gid://shopify/ProductVariant/36976644325555"
                    }
                  ],
                  "vendor": "Front_End_Exam",
                  "body_html": "<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">Keyboards",
                  "product_id": "5906748473523",
                  "product_status": "ACTIVE",
                  "created_at": "2020-10-12T10:26:51+08:00",
                  "images_post_pull": {
                    "images": [
                      {
                        "id": 21022041473203,
                        "product_id": 5906748473523,
                        "position": 1,
                        "created_at": "2020-10-12T10:26:53+08:00",
                        "updated_at": "2020-10-12T10:26:53+08:00",
                        "alt": null,
                        "width": 350,
                        "height": 350,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/luffy_1_1.jpg?v=1602469613",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21022041473203"
                      },
                      {
                        "id": 21533256024243,
                        "product_id": 5906748473523,
                        "position": 2,
                        "created_at": "2020-10-20T11:22:57+08:00",
                        "updated_at": "2020-10-20T11:22:57+08:00",
                        "alt": null,
                        "width": 425,
                        "height": 480,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/chopper.jpg?v=1603164177",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256024243"
                      },
                      {
                        "id": 21533256351923,
                        "product_id": 5906748473523,
                        "position": 3,
                        "created_at": "2020-10-20T11:23:25+08:00",
                        "updated_at": "2020-10-20T11:23:25+08:00",
                        "alt": null,
                        "width": 289,
                        "height": 175,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard2.jpg?v=1603164205",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256351923"
                      },
                      {
                        "id": 21533256548531,
                        "product_id": 5906748473523,
                        "position": 4,
                        "created_at": "2020-10-20T11:23:30+08:00",
                        "updated_at": "2020-10-20T11:23:30+08:00",
                        "alt": null,
                        "width": 275,
                        "height": 183,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard6.jpg?v=1603164210",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256548531"
                      },
                      {
                        "id": 21533256679603,
                        "product_id": 5906748473523,
                        "position": 5,
                        "created_at": "2020-10-20T11:23:35+08:00",
                        "updated_at": "2020-10-20T11:23:35+08:00",
                        "alt": null,
                        "width": 225,
                        "height": 225,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard3.jpg?v=1603164215",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256679603"
                      },
                      {
                        "id": 21533256810675,
                        "product_id": 5906748473523,
                        "position": 6,
                        "created_at": "2020-10-20T11:23:41+08:00",
                        "updated_at": "2020-10-20T11:23:41+08:00",
                        "alt": null,
                        "width": 285,
                        "height": 177,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyborad1.jpg?v=1603164221",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256810675"
                      }
                    ]
                  },
                  "product_type": "it_item",
                  "published_at": "2020-10-12T10:26:52+08:00",
                  "price": "100.00",
                  "compare_price": "100.00",
                  "published_scope": "web",
                  "template_suffix": "",
                  "updated_at": "2020-10-20T11:31:09+08:00"
                },
                "recipients_info": [
                  {
                    "employee_personal_info_employee_code": "20-02826",
                    "employee_personal_info_first_name": "Homer",
                    "employee_personal_info_last_name": "Landas",
                    "employee_personal_info_middle_name": "Avalos"
                  },
                  {
                    "employee_personal_info_employee_code": "20-75392",
                    "employee_personal_info_first_name": "Malaika",
                    "employee_personal_info_last_name": "Roth",
                    "employee_personal_info_middle_name": "Grant"
                  },
                  {
                    "employee_personal_info_employee_code": "20-95833",
                    "employee_personal_info_first_name": "Zakir ",
                    "employee_personal_info_last_name": "Macdonald",
                    "employee_personal_info_middle_name": null
                  },
                  {
                    "employee_personal_info_employee_code": "20-39385",
                    "employee_personal_info_first_name": "Brianna",
                    "employee_personal_info_last_name": "Leach",
                    "employee_personal_info_middle_name": "Baxter"
                  },
                  {
                    "employee_personal_info_employee_code": "20-30992",
                    "employee_personal_info_first_name": "Maxim ",
                    "employee_personal_info_last_name": "Price",
                    "employee_personal_info_middle_name": ""
                  },
                  {
                    "employee_personal_info_employee_code": "20-08864",
                    "employee_personal_info_first_name": "Virgil",
                    "employee_personal_info_last_name": "Hall",
                    "employee_personal_info_middle_name": "Brown"
                  }
                ],
                "recipients_quantity": [
                  {
                    "quantity": "1",
                    "recipients": [
                      "20-02826",
                      "20-75392"
                    ]
                  },
                  {
                    "quantity": "2",
                    "recipients": [
                      "20-95833",
                      "20-39385",
                      "20-08864",
                      "20-30992"
                    ]
                  }
                ],
                "total_recipient": "4",
                "total_cost": "600",
                "total_quantity": "6"
              }
            ],
            "cart_currency": "USD",
            "cart_cart_status": "ACTIVE",
            "cart_created_by": "17-0571",
            "cart_created_at": "2020-10-28T11:05:37Z",
            "cart_updated_at": null,
            "updated_by": null,
            "deleted_by": null,
            "deleted_at": null,
            "collection_data": {
              "id": 231015055539,
              "handle": "it-software",
              "image": {
                "created_at": "2020-10-12T13:45:51+08:00",
                "alt": null,
                "width": 1280,
                "height": 1120,
                "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/collections/fanky.png?v=1602481551"
              },
              "title": "IT Software",
              "productData": null,
              "collectionTag": null,
              "collectionType": null,
              "collection_id": "231015055539",
              "body_html": "<meta content=\"text/html; charset=utf-8\" http-equiv=\"content-type\">IT Software",
              "published_at": "2020-10-12T13:45:51+08:00",
              "published_scope": "web",
              "template_suffix": "",
              "collection_tag_code": "it_item_software",
              "collection_tag_type_code": "it_item",
              "rules": [
                {
                  "column": "type",
                  "relation": "equals",
                  "condition": "it_item"
                },
                {
                  "column": "tag",
                  "relation": "equals",
                  "condition": "it_item_software"
                }
              ],
              "updated_at": "2020-10-12T13:45:51+08:00",
              "product_count": null
            }
          },
          {
            "id": "5f9951a3c2489600ad7f1f3f",
            "cart_user_code": "17-0571",
            "cart_collection_id": "231015055539",
            "cart_item_unit_price": 100,
            "cart_quantity": [
              {
                "variant_id": " 36976644325555",
                "product_id": "5906748473523",
                "variant_info": null,
                "product_info": {
                  "id": 5906748473523,
                  "handle": "keyboard",
                  "images": [
                    {
                      "id": 21022041473203,
                      "product_id": 5906748473523,
                      "position": 1,
                      "created_at": "2020-10-12T10:26:53+08:00",
                      "updated_at": "2020-10-12T10:26:53+08:00",
                      "alt": null,
                      "width": 350,
                      "height": 350,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/luffy_1_1.jpg?v=1602469613",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21022041473203"
                    },
                    {
                      "id": 21533256024243,
                      "product_id": 5906748473523,
                      "position": 2,
                      "created_at": "2020-10-20T11:22:57+08:00",
                      "updated_at": "2020-10-20T11:22:57+08:00",
                      "alt": null,
                      "width": 425,
                      "height": 480,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/chopper.jpg?v=1603164177",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21533256024243"
                    },
                    {
                      "id": 21533256351923,
                      "product_id": 5906748473523,
                      "position": 3,
                      "created_at": "2020-10-20T11:23:25+08:00",
                      "updated_at": "2020-10-20T11:23:25+08:00",
                      "alt": null,
                      "width": 289,
                      "height": 175,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard2.jpg?v=1603164205",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21533256351923"
                    },
                    {
                      "id": 21533256548531,
                      "product_id": 5906748473523,
                      "position": 4,
                      "created_at": "2020-10-20T11:23:30+08:00",
                      "updated_at": "2020-10-20T11:23:30+08:00",
                      "alt": null,
                      "width": 275,
                      "height": 183,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard6.jpg?v=1603164210",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21533256548531"
                    },
                    {
                      "id": 21533256679603,
                      "product_id": 5906748473523,
                      "position": 5,
                      "created_at": "2020-10-20T11:23:35+08:00",
                      "updated_at": "2020-10-20T11:23:35+08:00",
                      "alt": null,
                      "width": 225,
                      "height": 225,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard3.jpg?v=1603164215",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21533256679603"
                    },
                    {
                      "id": 21533256810675,
                      "product_id": 5906748473523,
                      "position": 6,
                      "created_at": "2020-10-20T11:23:41+08:00",
                      "updated_at": "2020-10-20T11:23:41+08:00",
                      "alt": null,
                      "width": 285,
                      "height": 177,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyborad1.jpg?v=1603164221",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21533256810675"
                    }
                  ],
                  "options": [
                    {
                      "id": 7509922939059,
                      "product_id": 5906748473523,
                      "name": "Title",
                      "position": 1,
                      "values": [
                        "Default Title"
                      ]
                    }
                  ],
                  "tags": "it_item_hardware",
                  "title": "Keyboard",
                  "variants": [
                    {
                      "id": 36976644325555,
                      "product_id": 5906748473523,
                      "title": "Default Title",
                      "price": "100.00",
                      "sku": "",
                      "position": 1,
                      "inventory_policy": "deny",
                      "compare_at_price": "100.00",
                      "fulfillment_service": "manual",
                      "inventory_management": "shopify",
                      "option1": "Default Title",
                      "option2": null,
                      "option3": null,
                      "created_at": "2020-10-12T10:26:51+08:00",
                      "updated_at": "2020-10-20T11:31:09+08:00",
                      "taxable": true,
                      "barcode": "",
                      "grams": 0,
                      "image_id": null,
                      "weight": 0,
                      "weight_unit": "kg",
                      "inventory_item_id": 39069433659571,
                      "inventory_quantity": 0,
                      "old_inventory_quantity": 0,
                      "requires_shipping": true,
                      "admin_graphql_api_id": "gid://shopify/ProductVariant/36976644325555"
                    }
                  ],
                  "vendor": "Front_End_Exam",
                  "body_html": "<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">Keyboards",
                  "product_id": "5906748473523",
                  "product_status": "ACTIVE",
                  "created_at": "2020-10-12T10:26:51+08:00",
                  "images_post_pull": {
                    "images": [
                      {
                        "id": 21022041473203,
                        "product_id": 5906748473523,
                        "position": 1,
                        "created_at": "2020-10-12T10:26:53+08:00",
                        "updated_at": "2020-10-12T10:26:53+08:00",
                        "alt": null,
                        "width": 350,
                        "height": 350,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/luffy_1_1.jpg?v=1602469613",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21022041473203"
                      },
                      {
                        "id": 21533256024243,
                        "product_id": 5906748473523,
                        "position": 2,
                        "created_at": "2020-10-20T11:22:57+08:00",
                        "updated_at": "2020-10-20T11:22:57+08:00",
                        "alt": null,
                        "width": 425,
                        "height": 480,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/chopper.jpg?v=1603164177",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256024243"
                      },
                      {
                        "id": 21533256351923,
                        "product_id": 5906748473523,
                        "position": 3,
                        "created_at": "2020-10-20T11:23:25+08:00",
                        "updated_at": "2020-10-20T11:23:25+08:00",
                        "alt": null,
                        "width": 289,
                        "height": 175,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard2.jpg?v=1603164205",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256351923"
                      },
                      {
                        "id": 21533256548531,
                        "product_id": 5906748473523,
                        "position": 4,
                        "created_at": "2020-10-20T11:23:30+08:00",
                        "updated_at": "2020-10-20T11:23:30+08:00",
                        "alt": null,
                        "width": 275,
                        "height": 183,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard6.jpg?v=1603164210",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256548531"
                      },
                      {
                        "id": 21533256679603,
                        "product_id": 5906748473523,
                        "position": 5,
                        "created_at": "2020-10-20T11:23:35+08:00",
                        "updated_at": "2020-10-20T11:23:35+08:00",
                        "alt": null,
                        "width": 225,
                        "height": 225,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard3.jpg?v=1603164215",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256679603"
                      },
                      {
                        "id": 21533256810675,
                        "product_id": 5906748473523,
                        "position": 6,
                        "created_at": "2020-10-20T11:23:41+08:00",
                        "updated_at": "2020-10-20T11:23:41+08:00",
                        "alt": null,
                        "width": 285,
                        "height": 177,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyborad1.jpg?v=1603164221",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256810675"
                      }
                    ]
                  },
                  "product_type": "it_item",
                  "published_at": "2020-10-12T10:26:52+08:00",
                  "price": "100.00",
                  "compare_price": "100.00",
                  "published_scope": "web",
                  "template_suffix": "",
                  "updated_at": "2020-10-20T11:31:09+08:00"
                },
                "recipients_info": [
                  {
                    "employee_personal_info_bucket_code": null,
                    "employee_personal_info_employee_code": "19-19345",
                    "employee_personal_info_first_name": "Anastasia",
                    "employee_personal_info_last_name": "Baxter",
                    "employee_personal_info_middle_name": "Sanderson"
                  },
                  {
                    "employee_personal_info_bucket_code": null,
                    "employee_personal_info_employee_code": "10-00175",
                    "employee_personal_info_first_name": "Morris",
                    "employee_personal_info_last_name": "Hernandez",
                    "employee_personal_info_middle_name": "Villanueva"
                  }
                ],
                "recipients_quantity": [
                  {
                    "quantity": "4",
                    "recipients": null
                  }
                ],
                "total_recipient": "4",
                "total_cost": "600",
                "total_quantity": "6"
              }
            ],
            "cart_currency": "USD",
            "cart_cart_status": "ACTIVE",
            "cart_created_by": "17-0571",
            "cart_created_at": "2020-10-28T19:10:27Z",
            "cart_updated_at": null,
            "updated_by": null,
            "deleted_by": null,
            "deleted_at": null,
            "collection_data": {
              "id": 231015055539,
              "handle": "it-software",
              "image": {
                "created_at": "2020-10-12T13:45:51+08:00",
                "alt": null,
                "width": 1280,
                "height": 1120,
                "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/collections/fanky.png?v=1602481551"
              },
              "title": "IT Software",
              "productData": null,
              "collectionTag": null,
              "collectionType": null,
              "collection_id": "231015055539",
              "body_html": "<meta content=\"text/html; charset=utf-8\" http-equiv=\"content-type\">IT Software",
              "published_at": "2020-10-12T13:45:51+08:00",
              "published_scope": "web",
              "template_suffix": "",
              "collection_tag_code": "it_item_software",
              "collection_tag_type_code": "it_item",
              "rules": [
                {
                  "column": "type",
                  "relation": "equals",
                  "condition": "it_item"
                },
                {
                  "column": "tag",
                  "relation": "equals",
                  "condition": "it_item_software"
                }
              ],
              "updated_at": "2020-10-12T13:45:51+08:00",
              "product_count": null
            }
          },
          {
            "id": "5f9955a2e16500593458a1d0",
            "cart_user_code": "17-0571",
            "cart_collection_id": "231015055539",
            "cart_item_unit_price": 100,
            "cart_quantity": [
              {
                "variant_id": " 369766443255551",
                "product_id": "59067484735231",
                "variant_info": null,
                "product_info": null,
                "recipients_info": [
                  {
                    "employee_personal_info_bucket_code": null,
                    "employee_personal_info_employee_code": "20-12311",
                    "employee_personal_info_first_name": "Marie Annjanette",
                    "employee_personal_info_last_name": "Landas",
                    "employee_personal_info_middle_name": "Bautista"
                  },
                  {
                    "employee_personal_info_bucket_code": null,
                    "employee_personal_info_employee_code": "20-95864",
                    "employee_personal_info_first_name": "Koby",
                    "employee_personal_info_last_name": "Mcdougall",
                    "employee_personal_info_middle_name": "Leach"
                  }
                ],
                "recipients_quantity": [
                  {
                    "quantity": "1",
                    "recipients": [
                      "20-0534",
                      "10-0017"
                    ]
                  },
                  {
                    "quantity": "2",
                    "recipients": [
                      "20-0534",
                      "10-0017"
                    ]
                  }
                ],
                "total_recipient": "4",
                "total_cost": "600",
                "total_quantity": "6"
              }
            ],
            "cart_on_behalf": [],
            "cart_currency": "USD",
            "cart_cart_status": "ACTIVE",
            "cart_created_by": "17-0571",
            "cart_created_at": "2020-10-28T19:27:28Z",
            "cart_updated_at": null,
            "updated_by": null,
            "deleted_by": null,
            "deleted_at": null,
            "collection_data": {
              "id": 231015055539,
              "handle": "it-software",
              "image": {
                "created_at": "2020-10-12T13:45:51+08:00",
                "alt": null,
                "width": 1280,
                "height": 1120,
                "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/collections/fanky.png?v=1602481551"
              },
              "title": "IT Software",
              "productData": null,
              "collectionTag": null,
              "collectionType": null,
              "collection_id": "231015055539",
              "body_html": "<meta content=\"text/html; charset=utf-8\" http-equiv=\"content-type\">IT Software",
              "published_at": "2020-10-12T13:45:51+08:00",
              "published_scope": "web",
              "template_suffix": "",
              "collection_tag_code": "it_item_software",
              "collection_tag_type_code": "it_item",
              "rules": [
                {
                  "column": "type",
                  "relation": "equals",
                  "condition": "it_item"
                },
                {
                  "column": "tag",
                  "relation": "equals",
                  "condition": "it_item_software"
                }
              ],
              "updated_at": "2020-10-12T13:45:51+08:00",
              "product_count": null
            }
          }
        ],
        "cart_type_code": "it_item"
      },
      {
        "cart_type_desc": "Miscellanous",
        "cart_items": [
          {
            "id": "5f991241f6f00d0e0ee47bf6",
            "cart_user_code": "17-0571",
            "cart_collection_id": "231069778099",
            "cart_item_unit_price": 50,
            "cart_quantity": [
              {
                "variant_id": "37082885285395",
                "product_id": "5957272207539",
                "variant_info": {
                  "id": 37082885285395,
                  "product_id": 5957272207539,
                  "title": "Liquid Based",
                  "price": "50.00",
                  "sku": "",
                  "position": 1,
                  "inventory_policy": "deny",
                  "compare_at_price": "99.00",
                  "fulfillment_service": "manual",
                  "inventory_management": null,
                  "option1": "Old Rose",
                  "option2": null,
                  "option3": null,
                  "created_at": "2020-10-16T09:59:36+08:00",
                  "updated_at": "2020-10-16T09:59:36+08:00",
                  "taxable": true,
                  "barcode": "",
                  "grams": 0,
                  "image_id": null,
                  "weight": 0,
                  "weight_unit": "kg",
                  "inventory_item_id": 39177674784947,
                  "inventory_quantity": 0,
                  "old_inventory_quantity": 0,
                  "requires_shipping": true,
                  "admin_graphql_api_id": "gid://shopify/ProductVariant/37084885385395"
                },
                "product_info": {
                  "id": 5957272207539,
                  "handle": "razor-keyboard",
                  "images": [],
                  "options": [
                    {
                      "id": 7644442067123,
                      "product_id": 5957272207539,
                      "name": "Material",
                      "position": 1,
                      "values": [
                        "Old Rose",
                        "Maroon",
                        "Peach"
                      ]
                    }
                  ],
                  "tags": "misc",
                  "title": "Faux Fur Carpet",
                  "variants": null,
                  "vendor": "Front_End_Exam",
                  "body_html": "Razor Keyboard",
                  "product_id": "5957272207539",
                  "product_status": "ACTIVE",
                  "created_at": "2020-10-16T09:59:36+08:00",
                  "images_post_pull": {
                    "images": [
                      {
                        "id": 215932769189043,
                        "product_id": 5957272207539,
                        "position": 1,
                        "created_at": "2020-10-16T09:59:37+08:00",
                        "updated_at": "2020-10-16T09:59:37+08:00",
                        "alt": null,
                        "width": 466,
                        "height": 318,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboardrazor.jpg?v=1602813577",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21502449189043"
                      }
                    ]
                  },
                  "product_type": "misc",
                  "published_at": null,
                  "price": "50.00",
                  "compare_price": "99.00",
                  "published_scope": "web",
                  "template_suffix": "",
                  "updated_at": "2020-10-16T09:59:36+08:00"
                },
                "recipients_info": [
                  {
                    "employee_personal_info_employee_code": "20-234768",
                    "employee_personal_info_first_name": "Nikita",
                    "employee_personal_info_last_name": "Mayer",
                    "employee_personal_info_middle_name": "Pearson"
                  }
                ],
                "recipients_quantity": [
                  {
                    "quantity": "6",
                    "recipients": [
                      "20-234768"
                    ]
                  }
                ],
                "total_recipient": "1",
                "total_cost": "600",
                "total_quantity": "6"
              }
            ],
            "cart_currency": "USD",
            "cart_cart_status": "ACTIVE",
            "cart_created_by": "17-0571",
            "cart_created_at": "2020-10-28T06:40:01Z",
            "cart_updated_at": "2020-10-28T08:50:45Z",
            "updated_by": null,
            "deleted_by": null,
            "deleted_at": null,
            "collection_data": {
              "id": 231069778099,
              "handle": "private-office-options",
              "image": {
                "created_at": "2020-10-13T10:09:44+08:00",
                "alt": null,
                "width": 350,
                "height": 350,
                "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/collections/luffy_1_3.jpg?v=1602554984"
              },
              "title": "Private Office Options",
              "productData": null,
              "collectionTag": null,
              "collectionType": null,
              "collection_id": "231069778099",
              "body_html": "Private Office Options",
              "published_at": "2020-10-13T10:09:43+08:00",
              "published_scope": "web",
              "template_suffix": "",
              "collection_tag_code": "misc",
              "collection_tag_type_code": "misc",
              "rules": [
                {
                  "column": "tag",
                  "relation": "equals",
                  "condition": "misc"
                },
                {
                  "column": "type",
                  "relation": "equals",
                  "condition": "misc"
                }
              ],
              "updated_at": "2020-10-13T10:09:44+08:00",
              "product_count": null
            }
          },
          {
            "id": "5f9922d703f5dc41af081f5f",
            "cart_user_code": "17-0571",
            "cart_collection_id": "231015055539",
            "cart_item_unit_price": 50,
            "cart_quantity": [],
            "cart_on_behalf": [
              "10-1922"
            ],
            "cart_currency": "USD",
            "cart_cart_status": "ACTIVE",
            "cart_created_by": "17-0571",
            "cart_created_at": "2020-10-28T15:50:47Z",
            "cart_updated_at": "2020-10-28T09:04:15Z",
            "updated_by": null,
            "deleted_by": null,
            "deleted_at": null,
            "collection_data": {
              "id": 231015055539,
              "handle": "it-software",
              "image": {
                "created_at": "2020-10-12T13:45:51+08:00",
                "alt": null,
                "width": 1280,
                "height": 1120,
                "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/collections/fanky.png?v=1602481551"
              },
              "title": "IT Software",
              "productData": null,
              "collectionTag": null,
              "collectionType": null,
              "collection_id": "231015055539",
              "body_html": "<meta content=\"text/html; charset=utf-8\" http-equiv=\"content-type\">IT Software",
              "published_at": "2020-10-12T13:45:51+08:00",
              "published_scope": "web",
              "template_suffix": "",
              "collection_tag_code": "misc",
              "collection_tag_type_code": "misc",
              
              "updated_at": "2020-10-12T13:45:51+08:00",
              "product_count": null
            }
          },
          {
            "id": "5f995081f6f00d0e0ee47bf8",
            "cart_user_code": "17-0571",
            "cart_collection_id": "231015055539",
            "cart_item_unit_price": 100,
            "cart_quantity": [
              {
                "variant_id": " 36976644325555",
                "product_id": "5906748473523",
                "variant_info": null,
                "product_info": {
                  "id": 5906748473523,
                  "handle": "keyboard",
                  "images": [
                  ],
                  "options": [
                    {
                      "id": 7509922939059,
                      "product_id": 5906748473523,
                      "name": "Title",
                      "position": 1,
                      "values": [
                        "Default Title"
                      ]
                    }
                  ],
                  "tags": "keyboard",
                  "title": "Keyboard",
                  "variants": null,
                  "vendor": "Front_End_Exam",
                  "body_html": "<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">Keyboards",
                  "product_id": "5906748473523",
                  "product_status": "ACTIVE",
                  "created_at": "2020-10-12T10:26:51+08:00",
                  "images_post_pull": {
                    "images": [
                      {
                        "id": 21022041473203,
                        "product_id": 5906748473523,
                        "position": 1,
                        "created_at": "2020-10-12T10:26:53+08:00",
                        "updated_at": "2020-10-12T10:26:53+08:00",
                        "alt": null,
                        "width": 350,
                        "height": 350,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/luffy_1_1.jpg?v=1602469613",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21022041473203"
                      },
                      {
                        "id": 21533256024243,
                        "product_id": 5906748473523,
                        "position": 2,
                        "created_at": "2020-10-20T11:22:57+08:00",
                        "updated_at": "2020-10-20T11:22:57+08:00",
                        "alt": null,
                        "width": 425,
                        "height": 480,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/chopper.jpg?v=1603164177",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256024243"
                      },
                      {
                        "id": 21533256351923,
                        "product_id": 5906748473523,
                        "position": 3,
                        "created_at": "2020-10-20T11:23:25+08:00",
                        "updated_at": "2020-10-20T11:23:25+08:00",
                        "alt": null,
                        "width": 289,
                        "height": 175,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard2.jpg?v=1603164205",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256351923"
                      },
                      {
                        "id": 21533256548531,
                        "product_id": 5906748473523,
                        "position": 4,
                        "created_at": "2020-10-20T11:23:30+08:00",
                        "updated_at": "2020-10-20T11:23:30+08:00",
                        "alt": null,
                        "width": 275,
                        "height": 183,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard6.jpg?v=1603164210",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256548531"
                      },
                      {
                        "id": 21533256679603,
                        "product_id": 5906748473523,
                        "position": 5,
                        "created_at": "2020-10-20T11:23:35+08:00",
                        "updated_at": "2020-10-20T11:23:35+08:00",
                        "alt": null,
                        "width": 225,
                        "height": 225,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard3.jpg?v=1603164215",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256679603"
                      },
                      {
                        "id": 21533256810675,
                        "product_id": 5906748473523,
                        "position": 6,
                        "created_at": "2020-10-20T11:23:41+08:00",
                        "updated_at": "2020-10-20T11:23:41+08:00",
                        "alt": null,
                        "width": 285,
                        "height": 177,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyborad1.jpg?v=1603164221",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256810675"
                      }
                    ]
                  },
                  "product_type": "misc",
                  "published_at": "2020-10-12T10:26:52+08:00",
                  "price": "100.00",
                  "compare_price": "100.00",
                  "published_scope": "web",
                  "template_suffix": "",
                  "updated_at": "2020-10-20T11:31:09+08:00"
                },
                "recipients_info": [
                  {
                    "employee_personal_info_employee_code": "20-75392",
                    "employee_personal_info_first_name": "Malaika",
                    "employee_personal_info_last_name": "Roth",
                    "employee_personal_info_middle_name": "Grant"
                  },
                  {
                    "employee_personal_info_employee_code": "20-95833",
                    "employee_personal_info_first_name": "Zakir ",
                    "employee_personal_info_last_name": "Macdonald",
                    "employee_personal_info_middle_name": null
                  },
                  {
                    "employee_personal_info_employee_code": "20-30992",
                    "employee_personal_info_first_name": "Maxim ",
                    "employee_personal_info_last_name": "Price",
                    "employee_personal_info_middle_name": ""
                  },
                  {
                    "employee_personal_info_employee_code": "20-08864",
                    "employee_personal_info_first_name": "Virgil",
                    "employee_personal_info_last_name": "Hall",
                    "employee_personal_info_middle_name": "Brown"
                  }
                ],
                "recipients_quantity": [
                  {
                    "quantity": "1",
                    "recipients": [
                      "20-02826",
                      "20-75392"
                    ]
                  },
                  {
                    "quantity": "2",
                    "recipients": [
                       "20-02826",
                      "20-75392",
                      "20-95833",
                      "20-39385",
                      "20-08864",
                      "20-30992"
                    ]
                  }
                ],
                "total_recipient": "4",
                "total_cost": "600",
                "total_quantity": "6"
              }
            ],
            "cart_currency": "USD",
            "cart_cart_status": "ACTIVE",
            "cart_created_by": "17-0571",
            "cart_created_at": "2020-10-28T11:05:37Z",
            "cart_updated_at": null,
            "updated_by": null,
            "deleted_by": null,
            "deleted_at": null,
            "collection_data": {
              "id": 231015055539,
              "handle": "it-software",
              "image": {
                "created_at": "2020-10-12T13:45:51+08:00",
                "alt": null,
                "width": 1280,
                "height": 1120,
                "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/collections/fanky.png?v=1602481551"
              },
              "title": "IT Software",
              "productData": null,
              "collectionTag": null,
              "collectionType": null,
              "collection_id": "231015055539",
              "body_html": "<meta content=\"text/html; charset=utf-8\" http-equiv=\"content-type\">IT Software",
              "published_at": "2020-10-12T13:45:51+08:00",
              "published_scope": "web",
              "template_suffix": "",
              "collection_tag_code": "misc_software",
              "collection_tag_type_code": "misc",
              "rules": [
                {
                  "column": "type",
                  "relation": "equals",
                  "condition": "misc"
                },
                {
                  "column": "tag",
                  "relation": "equals",
                  "condition": "misc_software"
                }
              ],
              "updated_at": "2020-10-12T13:45:51+08:00",
              "product_count": null
            }
          },
          {
            "id": "5f9951a3c2489600ad7f1f3f",
            "cart_user_code": "17-0571",
            "cart_collection_id": "231015055539",
            "cart_item_unit_price": 100,
            "cart_quantity": [
              {
                "variant_id": " 36976644325555",
                "product_id": "5906748473523",
                "variant_info": null,
                "product_info": {
                  "id": 5906748473523,
                  "handle": "keyboard",
                  "images": [
                    {
                      "id": 21022041473203,
                      "product_id": 5906748473523,
                      "position": 1,
                      "created_at": "2020-10-12T10:26:53+08:00",
                      "updated_at": "2020-10-12T10:26:53+08:00",
                      "alt": null,
                      "width": 350,
                      "height": 350,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/luffy_1_1.jpg?v=1602469613",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21022041473203"
                    },
                    {
                      "id": 21533256024243,
                      "product_id": 5906748473523,
                      "position": 2,
                      "created_at": "2020-10-20T11:22:57+08:00",
                      "updated_at": "2020-10-20T11:22:57+08:00",
                      "alt": null,
                      "width": 425,
                      "height": 480,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/chopper.jpg?v=1603164177",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21533256024243"
                    },
                    {
                      "id": 21533256351923,
                      "product_id": 5906748473523,
                      "position": 3,
                      "created_at": "2020-10-20T11:23:25+08:00",
                      "updated_at": "2020-10-20T11:23:25+08:00",
                      "alt": null,
                      "width": 289,
                      "height": 175,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard2.jpg?v=1603164205",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21533256351923"
                    },
                    {
                      "id": 21533256548531,
                      "product_id": 5906748473523,
                      "position": 4,
                      "created_at": "2020-10-20T11:23:30+08:00",
                      "updated_at": "2020-10-20T11:23:30+08:00",
                      "alt": null,
                      "width": 275,
                      "height": 183,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard6.jpg?v=1603164210",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21533256548531"
                    },
                    {
                      "id": 21533256679603,
                      "product_id": 5906748473523,
                      "position": 5,
                      "created_at": "2020-10-20T11:23:35+08:00",
                      "updated_at": "2020-10-20T11:23:35+08:00",
                      "alt": null,
                      "width": 225,
                      "height": 225,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard3.jpg?v=1603164215",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21533256679603"
                    },
                    {
                      "id": 21533256810675,
                      "product_id": 5906748473523,
                      "position": 6,
                      "created_at": "2020-10-20T11:23:41+08:00",
                      "updated_at": "2020-10-20T11:23:41+08:00",
                      "alt": null,
                      "width": 285,
                      "height": 177,
                      "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyborad1.jpg?v=1603164221",
                      "variant_ids": [],
                      "admin_graphql_api_id": "gid://shopify/ProductImage/21533256810675"
                    }
                  ],
                  "options": [
                    {
                      "id": 7509922939059,
                      "product_id": 5906748473523,
                      "name": "Title",
                      "position": 1,
                      "values": [
                        "Default Title"
                      ]
                    }
                  ],
                  "tags": "misc_hardware",
                  "title": "Keyboard",
                  "variants": [
                    {
                      "id": 36976644325555,
                      "product_id": 5906748473523,
                      "title": "Default Title",
                      "price": "100.00",
                      "sku": "",
                      "position": 1,
                      "inventory_policy": "deny",
                      "compare_at_price": "100.00",
                      "fulfillment_service": "manual",
                      "inventory_management": "shopify",
                      "option1": "Default Title",
                      "option2": null,
                      "option3": null,
                      "created_at": "2020-10-12T10:26:51+08:00",
                      "updated_at": "2020-10-20T11:31:09+08:00",
                      "taxable": true,
                      "barcode": "",
                      "grams": 0,
                      "image_id": null,
                      "weight": 0,
                      "weight_unit": "kg",
                      "inventory_item_id": 39069433659571,
                      "inventory_quantity": 0,
                      "old_inventory_quantity": 0,
                      "requires_shipping": true,
                      "admin_graphql_api_id": "gid://shopify/ProductVariant/36976644325555"
                    }
                  ],
                  "vendor": "Front_End_Exam",
                  "body_html": "<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">Keyboards",
                  "product_id": "5906748473523",
                  "product_status": "ACTIVE",
                  "created_at": "2020-10-12T10:26:51+08:00",
                  "images_post_pull": {
                    "images": [
                      {
                        "id": 21022041473203,
                        "product_id": 5906748473523,
                        "position": 1,
                        "created_at": "2020-10-12T10:26:53+08:00",
                        "updated_at": "2020-10-12T10:26:53+08:00",
                        "alt": null,
                        "width": 350,
                        "height": 350,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/luffy_1_1.jpg?v=1602469613",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21022041473203"
                      },
                      {
                        "id": 21533256024243,
                        "product_id": 5906748473523,
                        "position": 2,
                        "created_at": "2020-10-20T11:22:57+08:00",
                        "updated_at": "2020-10-20T11:22:57+08:00",
                        "alt": null,
                        "width": 425,
                        "height": 480,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/chopper.jpg?v=1603164177",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256024243"
                      },
                      {
                        "id": 21533256351923,
                        "product_id": 5906748473523,
                        "position": 3,
                        "created_at": "2020-10-20T11:23:25+08:00",
                        "updated_at": "2020-10-20T11:23:25+08:00",
                        "alt": null,
                        "width": 289,
                        "height": 175,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard2.jpg?v=1603164205",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256351923"
                      },
                      {
                        "id": 21533256548531,
                        "product_id": 5906748473523,
                        "position": 4,
                        "created_at": "2020-10-20T11:23:30+08:00",
                        "updated_at": "2020-10-20T11:23:30+08:00",
                        "alt": null,
                        "width": 275,
                        "height": 183,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard6.jpg?v=1603164210",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256548531"
                      },
                      {
                        "id": 21533256679603,
                        "product_id": 5906748473523,
                        "position": 5,
                        "created_at": "2020-10-20T11:23:35+08:00",
                        "updated_at": "2020-10-20T11:23:35+08:00",
                        "alt": null,
                        "width": 225,
                        "height": 225,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyboard3.jpg?v=1603164215",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256679603"
                      },
                      {
                        "id": 21533256810675,
                        "product_id": 5906748473523,
                        "position": 6,
                        "created_at": "2020-10-20T11:23:41+08:00",
                        "updated_at": "2020-10-20T11:23:41+08:00",
                        "alt": null,
                        "width": 285,
                        "height": 177,
                        "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/products/keyborad1.jpg?v=1603164221",
                        "variant_ids": [],
                        "admin_graphql_api_id": "gid://shopify/ProductImage/21533256810675"
                      }
                    ]
                  },
                  "product_type": "misc",
                  "published_at": "2020-10-12T10:26:52+08:00",
                  "price": "100.00",
                  "compare_price": "100.00",
                  "published_scope": "web",
                  "template_suffix": "",
                  "updated_at": "2020-10-20T11:31:09+08:00"
                },
                "recipients_info": [
                  {
                    "employee_personal_info_bucket_code": null,
                    "employee_personal_info_employee_code": "19-19345",
                    "employee_personal_info_first_name": "Anastasia",
                    "employee_personal_info_last_name": "Baxter",
                    "employee_personal_info_middle_name": "Sanderson"
                  },
                  {
                    "employee_personal_info_bucket_code": null,
                    "employee_personal_info_employee_code": "10-00175",
                    "employee_personal_info_first_name": "Morris",
                    "employee_personal_info_last_name": "Hernandez",
                    "employee_personal_info_middle_name": "Villanueva"
                  }
                ],
                "recipients_quantity": [
                  {
                    "quantity": "4",
                    "recipients": null
                  }
                ],
                "total_recipient": "4",
                "total_cost": "600",
                "total_quantity": "6"
              }
            ],
            "cart_currency": "USD",
            "cart_cart_status": "ACTIVE",
            "cart_created_by": "17-0571",
            "cart_created_at": "2020-10-28T19:10:27Z",
            "cart_updated_at": null,
            "updated_by": null,
            "deleted_by": null,
            "deleted_at": null,
            "collection_data": {
              "id": 231015055539,
              "handle": "it-software",
              "image": {
                "created_at": "2020-10-12T13:45:51+08:00",
                "alt": null,
                "width": 1280,
                "height": 1120,
                "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/collections/fanky.png?v=1602481551"
              },
              "title": "IT Software",
              "productData": null,
              "collectionTag": null,
              "collectionType": null,
              "collection_id": "231015055539",
              "body_html": "<meta content=\"text/html; charset=utf-8\" http-equiv=\"content-type\">IT Software",
              "published_at": "2020-10-12T13:45:51+08:00",
              "published_scope": "web",
              "template_suffix": "",
              "collection_tag_code": "misc_software",
              "collection_tag_type_code": "misc",
              "rules": [
                {
                  "column": "type",
                  "relation": "equals",
                  "condition": "misc"
                },
                {
                  "column": "tag",
                  "relation": "equals",
                  "condition": "misc_software"
                }
              ],
              "updated_at": "2020-10-12T13:45:51+08:00",
              "product_count": null
            }
          },
          {
            "id": "5f9955a2e16500593458a1d0",
            "cart_user_code": "17-0571",
            "cart_collection_id": "231015055539",
            "cart_item_unit_price": 100,
            "cart_quantity": [
              {
                "variant_id": " 369766443255551",
                "product_id": "59067484735231",
                "variant_info": null,
                "product_info": null,
                "recipients_info": [
                  {
                    "employee_personal_info_bucket_code": null,
                    "employee_personal_info_employee_code": "20-12311",
                    "employee_personal_info_first_name": "Marie Annjanette",
                    "employee_personal_info_last_name": "Landas",
                    "employee_personal_info_middle_name": "Bautista"
                  },
                  {
                    "employee_personal_info_bucket_code": null,
                    "employee_personal_info_employee_code": "20-95864",
                    "employee_personal_info_first_name": "Koby",
                    "employee_personal_info_last_name": "Mcdougall",
                    "employee_personal_info_middle_name": "Leach"
                  }
                ],
                "recipients_quantity": [
                  {
                    "quantity": "1",
                    "recipients": [
                      "20-0534",
                      "10-0017"
                    ]
                  },
                  {
                    "quantity": "2",
                    "recipients": [
                      "20-0534",
                      "10-0017"
                    ]
                  }
                ],
                "total_recipient": "4",
                "total_cost": "600",
                "total_quantity": "6"
              }
            ],
            "cart_on_behalf": [],
            "cart_currency": "USD",
            "cart_cart_status": "ACTIVE",
            "cart_created_by": "17-0571",
            "cart_created_at": "2020-10-28T19:27:28Z",
            "cart_updated_at": null,
            "updated_by": null,
            "deleted_by": null,
            "deleted_at": null,
            "collection_data": {
              "id": 231015055539,
              "handle": "it-software",
              "image": {
                "created_at": "2020-10-12T13:45:51+08:00",
                "alt": null,
                "width": 1280,
                "height": 1120,
                "src": "https://cdn.shopify.com/s/files/1/0268/2755/4995/collections/fanky.png?v=1602481551"
              },
              "title": "IT Software",
              "productData": null,
              "collectionTag": null,
              "collectionType": null,
              "collection_id": "231015055539",
              "body_html": "<meta content=\"text/html; charset=utf-8\" http-equiv=\"content-type\">IT Software",
              "published_at": "2020-10-12T13:45:51+08:00",
              "published_scope": "web",
              "template_suffix": "",
              "collection_tag_code": "misc_software",
              "collection_tag_type_code": "misc",
              "rules": [
                {
                  "column": "type",
                  "relation": "equals",
                  "condition": "misc"
                },
                {
                  "column": "tag",
                  "relation": "equals",
                  "condition": "misc_software"
                }
              ],
              "updated_at": "2020-10-12T13:45:51+08:00",
              "product_count": null
            }
          }
        ],
        "cart_type_code": "misc"
      }
    ]
  }
}

let initial_items = JSON.stringify(json_data["content"]["records"])

const initialItemsState = {
  items: initial_items,
};

export const reducer = persistReducer(
  { storage, key: "items", whitelist: ["items"] },
  (state = initialItemsState, action) => {
    switch (action.type) {
      case actionTypes.SetItems: {
        const { data } = action.payload;

        return { ...state, data };
      }

      default:
        return state;
    }
  }
);

export const actions = {
  setItems: data => ({ type: actionTypes.SetItems, payload: { data } }),
};
