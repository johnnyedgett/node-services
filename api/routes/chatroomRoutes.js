'use strict';
module.exports = function(app){
    var chatroom = require('../controllers/chatroomController');

    app.route('/chatroom')
        .post(chatroom.create_a_chatroom)

    app.route('/chatroom/:chatroom')
        .get(charoom.get_a_chatroom)
        .delete(chatroom.delete_a_chatroom);        
};