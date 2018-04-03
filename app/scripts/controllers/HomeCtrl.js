(function() {
    function HomeCtrl(Room, $uibModal, $scope) {
        this.rooms = Room.all;
        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
        this.setCurrentRoom= function(room) {
          $scope.activeRoom= room;
          console.log($scope.activeRoom);
        }
    }


    angular
        .module('chatProject')
        .controller('HomeCtrl', ['Room', '$uibModal', '$scope', HomeCtrl]);
})();
