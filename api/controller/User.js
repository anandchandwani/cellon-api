
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var User = require('../model/UserModel');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/books or /api/');
});


app.post("/user/api/signup", (req, res, next) => {


  let email = req.body.email;
  let password = req.body.password;

  if (!email) {
       res.json({
          code:202,
          message:"email is required"
       });
  }

  if (!password) {
       res.json({
          code:202,
          message:"password is required"
       });
  }

  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          code:409,
          message: "Mail  already exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              name:req.body.name,
              email: req.body.email,
              type:req.body.type,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  code:201,
                  message: "User created succesfully"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
});

app.post("/user/api/login", (req, res, next) => {
 
  let email = req.body.email;
  let password = req.body.password;

  if (!email) {
       res.json({
          code:202,
          message:"email is required"
       });
  }

  if (!password) {
       res.json({
          code:202,
          message:"password is required"
       });
  }
  User.findOne({email:email},(err,users)=>{
    if (err) {
        res.json({
         code:500,
         message:"Error server error"
        });
    }
    if (users == null) {
        res.json({
         code:500,
         message:"Error:Email does not exist"
        });
         
    }
     else {
       bcrypt.compare(password, users.password, function(err, result) {
           if (err) {
             res.json({
             code:500,
             message:"Error:server error"
        });
            }
           if(result ==  true) {
             res.json({
                 code:200,
                 message:"succesfully logged in",
                 id:users.id
              });       
          }
           else  {
                res.json({
                code:500,
                message:"Error:password is wrong"
               });
           }
      });
     }
  });
});


app.get("/api/user/allUsers", (req, res, next) => {
console.log(db.User.find());
});


// for user profile data
app.post("/api/user/getProfile", (req, res, next) => {

 User.findOne({_id:req.body.id}, function (err, user) {
   if(err) {
     res.json({
                 code:500,
                 message:"Server Error",             
              });   
   }
     else{
      res.json({
                 code:200,
                 name:user.name,
                 email:user.email,
                 type:user.type,
                 phone:444444
            });   
       }
   });
});
app.post("/api/user/updateProfile", (req, res, next) => {


  let email = req.body.email;
  let name = req.body.name;
  let id = req.body.id;

  if (!email) {
       res.json({
          code:202,
          message:"email is required"
       });
  }

  if (!name) {
       res.json({
          code:202,
          message:"name is required"
       });
  }

 User.findOne({_id:id}, function (err, user) {
   if(err) {
          res.json({
          code:202,
          message:"profile can not be updated"
       });
      }
      else{
     if(!user){
          res.json({
          code:404,
          message:"user not found"
       });
     }
     else{
      if(name){
        user.name = name
       }
      if(user.name = name){
       user.email = email;
     }
     }
  }
        user.save(function (err) {
        if(err) {
          res.json({
          code:202,
          message:"profile can not be updated"
       });
      }
        else{
          res.json({
          code:200,
          message:"profile updated succesfully"
       });
      }
    });
   });
});
module.exports = app;