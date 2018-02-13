(function() {
    function Home(Room) {
      this.rooms = Room.all;
    }

    angular
        .module('chatProject')
        .controller('HomeCtrl', ['Room', Home]);
})();
