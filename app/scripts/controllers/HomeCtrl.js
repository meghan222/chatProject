(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;
    }

    angular
        .module('chatProject')
        .controller('HomeCtrl', [HomeCtrl]);
})();
