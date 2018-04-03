(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
         var messages = $firebaseArray(ref);

         return {
           getByRoomId: function(roomId) {
                 return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
               }
       };
   }
   angular
       .module('chatProject')
       .factory('Message', ['$firebaseArray', Message]);
})();
