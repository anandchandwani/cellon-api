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
