'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ChatroomSchema = new Schema({
    name:{
        type: String,
        required: 'Please enter the name of the chatroom'
    },
    Created_date:{
        type: Date,
        default: Date.now
    },
    status:{
        type: [{
            type: String,
            enum: ['active', 'inactive', 'muted']
        }],
        default: ['active']
    }
})

module.exports = mongoose.model('Chatroom', ChatroomSchema);