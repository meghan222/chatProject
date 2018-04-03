(function() {
     function MainCtrl($scope, Room, Message){
         this.room = Room;
         this.messages = [];
         this.selectRoom = function(room){
             Room.setActiveRoom(room);
             this.messages = Message.getByRoomId(room.$id);
         }
         angular
                 .module('chatProject')
                 .controller('MainCtrl', ['$scope', 'Room', 'Message', MainCtrl]);

         })();
