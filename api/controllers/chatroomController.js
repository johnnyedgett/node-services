'use strict'
var mongoose = require('mongoose'),
    Chatroom = mongoose.model('Chatroom');

exports.get_a_chatroom = function(req, res){
    // Find the chatroom and return the information about the chatrooom
    Chatroom.find({}, function(err, chatroom){
        if(err)
            res.send(err);
        res.json(chatroom);
    })
}

exports.create_a_chatroom = function(req, res){
    // Create a chatroom using the request body if it doesn't already exist
    Chatroom.find({name:req.param('name')}, function(err, chatroom){
        if(err)
            res.send(err);
        if(chatroom != undefined){
            res.json({
                      message: "Chatroom already exists!",
                      chatroom_name:req.param('name'),
                      chatrooms_found:chatroom
                    });
        }
        else {
            var new_chatroom = new Chatroom(req.body);
            new_chatroom.save(function(err, chatroom){
                if(err)
                    res.send(err);
                res.json(chatroom);
            })
        }
    })
}

// Delete a chatroom by the ID specified in the request
// @TODO
// 1. Need to add in some way to authenticate the user has access to do this
// 2. Need to make sure the user is certain they want to do this? 
//         (Perhaps should be done before the call is made)
exports.delete_a_chatroom = function(req, res){
    Chatroom.remove({
        _id: req.params.chatroomId
    }, function(err, task){
        if(err)
            res.send(err)
        res.json({message: 'Chatroom successfully deleted'})
    })   
}