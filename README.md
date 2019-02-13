
## User Sign up

This endpoint user signup.

### HTTP Request

`POST http://example.com/api/signup`


### Query Parameters

Parameter | Default | Description | Type |Required
--------- | ------- | -----------
name | false | Full Name of user |String |Yes
email | false | Email of user |String | Yes
phone | false | Phone number of user |int |Yes
password | false | Password of user (cannot use blackspace) |String (min 6 charc) | Yes
type   | false | Type of user (client or stylist ) | String |Yes



> on sucess:

```json
  {
    code: 200,
    "message": "User successfully created"
  }
```

if required field are not provided:

```json

  {
    code: 404,
    "message": "Required field(s) is missing"
  }
```


## User Login

This endpoint is For user login.


### HTTP Request

`POST http://example.com/api/login`

### URL Parameters

Parameter | Description |Required
--------- | -----------
email | Email of user | Yes
password|password of user|Yes


> On success:

```json
{
   code:200,
  "id": 2,
 "type":"client or stylist"
}
```

> If user does not exists


```json
{
  code:404,
  "message":"Email does not exist"
}
```


>If password is wrong

```json
{
  code:404,
  "message":"password is wrong for user"
}
```


## User Profile


### HTTP Request

`GET http://example.com/api/user/:id`

### URL Parameters

This endpoint is for profile information of user in app.


Parameter | Description |Type|Required
--------- | -----------
id|user id from session |Int|Yes



> on success

```json
{
   code:200,
  "name": "test",
  "email":"test@gmail.com",
  "phone" :98765322
}
```


## Get Edit Profile

This endpoint for get user profile.

### HTTP Request

`PUT http://example.com/api/user/getProfile`

### URL Parameters

Parameter | Description |Type|Required
--------- | -----------
id|user id from session |Int|Yes

> on success

```json
{
    "code": 200,
    "name": "hash1",
    "email": "tes44@gmail.com",
    "type": "client",
    "phone": 444444
}
```


## User Edit Profile

This endpoint is for edit user profile on app where user can edit their profile.

### HTTP Request

`PUT http://example.com/api/user/editProfile`

### URL Parameters

Parameter | Description |Type|Required
--------- | -----------
id|user id from session |Int|Yes


> on success

```json
{
  code:200,
 "message":"Profile successfully updated"
}
```


## our services 

This endpoint is for services .

### HTTP Request

`GET http://example.com/api/getServices`

### URL Parameters

Parameter | Description |Type|Required
--------- | -----------|-----|-------|

> on success

```json
   
[   
  service_type:{
    "id":1,
    "name": "Nails",
    "image": "nails.jpeg",
    services: [
    {
     "service_id":1,
     "title": "nails title",
     "sub-category":"sub_cat_name",
     "description":"service description"
     "images": ["image_1.jpg","image_2jpg","image_3.jpg"],
    },
  {
     "service_id":2,
     "title": "nails title",
      "sub-category":"sub_cat_name",
     "description":"service description",
     "images": ["image_1.jpg","image_2.jpg","image_3.jpg"],
    
    },
  ]
 },
 service_type:{
    "id":2,
    "name": "Make-up",
    "image": "make-up.jpeg",
    services: [
    {
     "service_id":3,
      "title": "make up title",
      "sub-category":"sub_cat_name",
      "description":"service description",
      "images": ["image_1.jpg","image_2.jpg","image_3.jpg"],
    },
  {
      "service_id":4,
      "title": "make up title",
      "sub-category":"sub_cat_name",
      "description":"service description",
      "images": ["image_1.jpg","image_2.jpg","image_3.jpg"],
    }
  ]
 },
service_type:{
    "id":3,
    "name": "Hair Style",
    "image": "hair-style.jpeg",
    services: [
    {
     "service_id":5,
     "title": "hair style title",
     "sub-category":"sub_cat_name",
     "description":"service description",
     "images": ["image_1.jpg","image_2.jpg","image_3.jpg"   ]
    },
  {
     "service_id":6,
     "name": "hair style title",
     "sub-category":"sub_cat_name",
     "description":"service description",
     "images": ["image_1"."jpg,image_2.jpg","image_3.jpg"]
    }
  ]
 },

 service_type:{
    "id":3,
    "name": "massages",
    "image": "massages.jpeg",
    services: [
    {
     "service_id":7,
     "title": "massage title",
     "sub-category":"sub_cat_name",
     "description":"service description",
     "images":["image_1.jpg","image_2.jpg","image_3.jpg"]
    },
  {
     "service_id":8,
     "name": "massage title",
     "sub-category":"sub_cat_name",,
     "description":"service description",
     "image": ["image_1.jpg","image_2.jpg","image_3.jpg"]
    }
  ]
 }
]
```


## Stylist Edit Service Point 

This endpoint is for stylist can edit price of services .

### HTTP Request

`POST http://example.com/api/stylist/editServicePrice`

### URL Parameters

Parameter | Description |Type|Required
--------- | -----------|-----|-------|
service_id | Service id which they want to edit price |int | Yes
price      | New price stylist wants to add |int|Yes
stylist_id | Stylist id  |int|Yes

> on success

```json
{
 code:200,
 "message":"Price successfully Edited"
}
```


##  offer 

This endpoint is for insert offers made by clients which will be add on database.

### HTTP Request

`POST http://example.com/api/stylist/Insertoffer`

### URL Parameters

Parameter | Description |Type|Required
--------- | -----------|-----|-------|
Date & time | Date and time of received |string|yes   
offer_id | offer id will be generated |int | Yes
client_id | client who sends offer|int|Yes
service_id |Service id that offer has sent |int|yes|
progress" and once job is done it will marked as job completed |string|yes


```json
{
 code:200,
 "offer_id":1,
"message":"offer successfully added",

}
```

## Stylist Receives offer 

This endpoint is to show offers on stylist offers section .

### HTTP Request

`POST http://example.com/api/stylist/getOffer`

### URL Parameters

Parameter | Description |Type|Required
--------- | -----------|-----|-------|


```json
[
  {
   "date & time":time,
   "offer_id":1,
   "service_type":"nails",
   "service":"manicure",
    price:R 340
  },
  {
   "date & time":time,
   "offer_id":2,
   "service_type":"nails",
   "service":"manicure",
    price:R 340
  },
  {
   "date & time":time,
   "offer_id":3,
   "service_type":"nails",
   "service":"manicure",
    price:R 340
  }
]
```


## Stylist Receives offer 

This endpoint when any stylist accepts offer.

### HTTP Request

`POST http://example.com/api/stylist/acceptOffer`

### URL Parameters

Parameter | Description |Type|Required
--------- | -----------|-----|-------|
offer_id | offer id |int|Yes 
stylist_id|stylist id |int|Yes


```json
  {
   code :200,
   "message" :"order accepted successfully"
  }
```

## update  offer 

This endpoint is when stylist accepts offer.

### HTTP Request

`POST http://example.com/api/stylist/updateOffer`

### URL Parameters

Parameter | Description |Type|Required
--------- | -----------|-----|-------
offer_id | offer id will be generated by offer |int | Yes
stylist_id| stylist id whom offer is sent|int|Yes
status_stylist|see below|string|Yes
status_client|see below|string|Yes


## Description

stylist
 
if stylist accepts offer set "accepted" and when work starts it will set as "job in progress" or if offer cancel by client or stylist it will be marked as  "cancelled" or if offer expires then offer will be set as "expired" and when job is completed it will be set as "completed" 

Client 

status_client will set as "job in progress"  when client confirms start of job and it will be set "completed" when client confirms job completion and if cancels job it will be marked as cancelled . 

Note  - By default offer will be set as "pending"

```json
{
  code:200,
  "message":"offer successfully updated"
}
```

## payment 

This endpoint is for to payment.

### HTTP Request

`POST http://example.com/api/stylist/payment`

### URL Parameters

Parameter | Description |Type|Required
--------- | -----------|-----|-------|
transaction id|provided by payment gateway |int|Yes
date & time|when stylist  get payment|timestamp|Yes
offer_id | offer id will be generated by offer |int | Yes
stylist_id| stylist id whom offer is sent|int|Yes
client_id| client id who pay amount|int|Yes
Amount |Amount received |int|yes


```json
{
  code:200,
  "message":"payment successfully inserted"
}
```

Note - stylist will receive when payment when work is marked as completed by client and stylist


## Rating and Feedback 

This endpoint is for is rating and feedback to stylist by client.

### HTTP Request

`POST http://example.com/api/stylist/feedback`

### URL Parameters

Parameter | Description |Type|Required
--------- | -----------|-----|-------|
date & time|date and time when stylist get rating and feedback|timestamp|Yes
stylist_id| stylist id whom feedback needs to be given|int|Yes
client_id| client id who provided rating|int|Yes
rating |1-5 stars |int|No
feedback |client text feedback to stylist|No|


```json
{
  code:200,
  "message":"feedback successfully added" 
}
```

Note - stylist will payment received when payment when work is marked as "completed" by client and stylist

